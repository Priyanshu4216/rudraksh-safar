import { useState, useCallback, useRef, useEffect } from 'react';

interface BotProtectionResult {
  honeypotProps: {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    tabIndex: number;
    autoComplete: string;
    style: React.CSSProperties;
    'aria-hidden': boolean;
  };
  isBot: boolean;
  isRateLimited: boolean;
  validateSubmission: () => boolean;
  recordSubmission: () => void;
  interactionScore: number;
}

const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_SUBMISSIONS_PER_WINDOW = 3;
const MIN_FORM_FILL_TIME = 2000; // 2 seconds minimum to fill form
const STORAGE_KEY = 'rs_form_submissions';

export const useBotProtection = (): BotProtectionResult => {
  const [honeypotValue, setHoneypotValue] = useState('');
  const [interactionScore, setInteractionScore] = useState(0);
  const formStartTime = useRef<number>(Date.now());
  const hasMouseMoved = useRef(false);
  const hasKeyPressed = useRef(false);
  const hasScrolled = useRef(false);

  // Track user interactions to build a "human" score
  useEffect(() => {
    const handleMouseMove = () => {
      if (!hasMouseMoved.current) {
        hasMouseMoved.current = true;
        setInteractionScore(prev => prev + 1);
      }
    };

    const handleKeyPress = () => {
      if (!hasKeyPressed.current) {
        hasKeyPressed.current = true;
        setInteractionScore(prev => prev + 1);
      }
    };

    const handleScroll = () => {
      if (!hasScrolled.current) {
        hasScrolled.current = true;
        setInteractionScore(prev => prev + 1);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('keypress', handleKeyPress, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keypress', handleKeyPress);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Get submission history from localStorage
  const getSubmissionHistory = useCallback((): number[] => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return [];
      return JSON.parse(stored);
    } catch {
      return [];
    }
  }, []);

  // Save submission timestamp
  const recordSubmission = useCallback(() => {
    try {
      const history = getSubmissionHistory();
      const now = Date.now();
      const recentSubmissions = history.filter(
        (timestamp) => now - timestamp < RATE_LIMIT_WINDOW
      );
      recentSubmissions.push(now);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(recentSubmissions));
    } catch {
      // Ignore storage errors
    }
  }, [getSubmissionHistory]);

  // Check if rate limited
  const isRateLimited = useCallback((): boolean => {
    const history = getSubmissionHistory();
    const now = Date.now();
    const recentSubmissions = history.filter(
      (timestamp) => now - timestamp < RATE_LIMIT_WINDOW
    );
    return recentSubmissions.length >= MAX_SUBMISSIONS_PER_WINDOW;
  }, [getSubmissionHistory]);

  // Check if likely a bot
  const isBot = useCallback((): boolean => {
    // Bot indicators:
    // 1. Honeypot field is filled
    if (honeypotValue.length > 0) return true;

    // 2. Form filled too quickly (bots are fast)
    const timeSpent = Date.now() - formStartTime.current;
    if (timeSpent < MIN_FORM_FILL_TIME) return true;

    // 3. No human interactions detected
    if (interactionScore === 0) return true;

    return false;
  }, [honeypotValue, interactionScore]);

  // Validate submission
  const validateSubmission = useCallback((): boolean => {
    if (isBot()) {
      console.warn('Bot detected - submission blocked');
      return false;
    }

    if (isRateLimited()) {
      console.warn('Rate limit exceeded - submission blocked');
      return false;
    }

    return true;
  }, [isBot, isRateLimited]);

  // Honeypot field props (hidden from humans, visible to bots)
  const honeypotProps = {
    name: 'website_url', // Attractive field name for bots
    value: honeypotValue,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setHoneypotValue(e.target.value),
    tabIndex: -1,
    autoComplete: 'off',
    style: {
      position: 'absolute' as const,
      left: '-9999px',
      opacity: 0,
      height: 0,
      width: 0,
      overflow: 'hidden',
    },
    'aria-hidden': true as const,
  };

  return {
    honeypotProps,
    isBot: isBot(),
    isRateLimited: isRateLimited(),
    validateSubmission,
    recordSubmission,
    interactionScore,
  };
};

import { z } from 'zod';

// Sanitize string input - remove potential XSS vectors
export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove angle brackets
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .slice(0, 1000); // Limit length
};

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s\-'\.]+$/, 'Name contains invalid characters')
    .transform(sanitizeInput),
  
  email: z
    .string()
    .trim()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters')
    .transform((val) => val.toLowerCase()),
  
  phone: z
    .string()
    .trim()
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number must be less than 15 digits')
    .regex(/^[\d\s\+\-\(\)]+$/, 'Phone number contains invalid characters')
    .transform((val) => val.replace(/\s/g, '')),
  
  destination: z
    .string()
    .trim()
    .max(100, 'Destination must be less than 100 characters')
    .transform(sanitizeInput)
    .optional()
    .default(''),
  
  message: z
    .string()
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
    .transform(sanitizeInput),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Validate and sanitize URL parameters
export const sanitizeUrlParam = (param: string): string => {
  return encodeURIComponent(sanitizeInput(param));
};

// Check for common SQL injection patterns
export const containsSqlInjection = (input: string): boolean => {
  const sqlPatterns = [
    /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|ALTER|CREATE|TRUNCATE)\b)/i,
    /(--|;|'|"|\b(OR|AND)\b\s+\d+\s*=\s*\d+)/i,
    /(\b(EXEC|EXECUTE|xp_)\b)/i,
  ];
  
  return sqlPatterns.some((pattern) => pattern.test(input));
};

// Check for common XSS patterns
export const containsXss = (input: string): boolean => {
  const xssPatterns = [
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /<iframe/gi,
    /<object/gi,
    /<embed/gi,
  ];
  
  return xssPatterns.some((pattern) => pattern.test(input));
};

// Comprehensive input validation
export const validateInput = (input: string): { isValid: boolean; error?: string } => {
  if (containsSqlInjection(input)) {
    return { isValid: false, error: 'Invalid input detected' };
  }
  
  if (containsXss(input)) {
    return { isValid: false, error: 'Invalid input detected' };
  }
  
  return { isValid: true };
};

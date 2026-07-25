export const monitorHydrationErrors = () => {
    if (typeof window === 'undefined') return;

    const originalConsoleError = console.error;

    console.error = (...args: any[]) => {
        const errorString = args.join(' ');
        
        // Hydration errors typically contain these keywords in React 18+
        if (
            errorString.includes('Hydration failed') || 
            errorString.includes('Expected server HTML') ||
            errorString.includes('did not match') ||
            errorString.includes('Text content does not match server-rendered HTML')
        ) {
            // Track hydration error
            const errorDetails = {
                type: 'HydrationError',
                url: window.location.href,
                userAgent: navigator.userAgent,
                message: errorString,
                timestamp: new Date().toISOString()
            };
            
            // In a production environment, send to your error tracking service (Sentry, LogRocket, custom API, etc.)
            // fetch('/api/log-error', { method: 'POST', body: JSON.stringify(errorDetails) });
            
            // For now, we'll prefix it clearly for easy LogRocket/Sentry catching
            originalConsoleError('[HYDRATION_ERROR_MONITOR]', errorDetails);
        } else {
            originalConsoleError(...args);
        }
    };
};

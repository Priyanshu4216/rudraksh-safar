import { useEffect, useCallback } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { toast } from 'sonner';

const AutoUpdateController = () => {
    // 1. Vite PWA Hook for Service Worker Management
    const {
        needRefresh: [needRefresh],
        updateServiceWorker,
    } = useRegisterSW({
        onRegisteredSW(swUrl, r) {
            console.log(`SW Registered: ${swUrl}`);
            if (r) {
                // Check for updates every hour
                setInterval(() => {
                    r.update();
                    checkVersionMismatch(); // Also check version.json
                }, 60 * 60 * 1000);
            }
        },
        onRegisterError(error) {
            console.error('SW registration error', error);
        },
    });

    // 2. Custom Version Checking Logic (The "Source of Truth")
    const checkVersionMismatch = useCallback(async () => {
        // Network Safety Check
        if (!navigator.onLine) {
            console.log('Offline: Skipping version check.');
            return;
        }

        try {
            const response = await fetch('/version.json', { cache: 'no-store' });
            if (!response.ok) return;

            const data = await response.json();
            const remoteVersion = data.version;
            const localVersion = __APP_VERSION__;

            console.log(`[Version Check] Local: ${localVersion} | Remote: ${remoteVersion}`);

            if (remoteVersion && localVersion && remoteVersion !== localVersion) {
                // Loop Protection
                if (sessionStorage.getItem('updateTriggered') === 'true') {
                    console.warn('Update loop detected. Pausing forced reload.');
                    return;
                }

                console.warn('Version mismatch detected! Initiating update sequence...');

                // UX: Notify User
                toast.info("New Update Available", {
                    description: "Updating Rudraksh Safar for you...",
                    duration: 5000,
                });

                // Clear caches before reloading to prevent serving old assets
                if ('caches' in window) {
                    const cacheNames = await caches.keys();
                    await Promise.all(
                        cacheNames.map(name => caches.delete(name))
                    );
                }

                // Unregister Service Workers
                if ('serviceWorker' in navigator) {
                    const registrations = await navigator.serviceWorker.getRegistrations();
                    await Promise.all(registrations.map(r => r.unregister()));
                }

                // Set Safety Flag
                sessionStorage.setItem('updateTriggered', 'true');

                // Grace Period (Soft Reload)
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
                // Version matches, clear safety flag
                sessionStorage.removeItem('updateTriggered');
            }
        } catch (error) {
            console.error('Failed to check version:', error);
        }
    }, [updateServiceWorker]);

    // 3. React on "needRefresh" from VitePWA (The Standard Way)
    useEffect(() => {
        if (needRefresh) {
            console.log('VitePWA reports new content. Updating...');
            toast.success("New content found, refreshing...");
            updateServiceWorker(true);
        }
    }, [needRefresh, updateServiceWorker]);

    // 4. Poll on Visibility Change (User comes back to tab)
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible') {
                checkVersionMismatch();
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('focus', checkVersionMismatch);

        // Initial check
        checkVersionMismatch();

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            window.removeEventListener('focus', checkVersionMismatch);
        };
    }, [checkVersionMismatch]);

    return null; // Headless component
};

export default AutoUpdateController;

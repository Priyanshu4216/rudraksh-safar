import { useState, useEffect } from 'react';
import { getToken, onMessage } from 'firebase/messaging';
import { messaging, VAPID_KEY, db } from '@/lib/firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { toast } from 'sonner';

export const useFcmToken = () => {
    const [token, setToken] = useState<string | null>(null);
    const [notificationPermissionStatus, setNotificationPermissionStatus] = useState<NotificationPermission>(
        Notification.permission
    );

    useEffect(() => {
        const retrieveToken = async () => {
            try {
                if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
                    if (notificationPermissionStatus === 'granted') {
                        // Retrieve the active service worker registration to prevent conflict
                        const registration = await navigator.serviceWorker.getRegistration();
                        if (!registration) {
                            console.warn('No active Service Worker found. Firebase might fail to get token.');
                            toast.error('Service Worker not active. Notifications might not work.');
                        }

                        // If no registration, let Firebase register its own (or wait for PWA)
                        // Ideally PWA plugin has already registered 'sw.js'

                        const currentToken = await getToken(messaging, {
                            vapidKey: VAPID_KEY,
                            serviceWorkerRegistration: registration || undefined,
                        });

                        if (currentToken) {
                            setToken(currentToken);

                            // Save token to Firestore
                            try {
                                const tokenRef = doc(db, 'fcm_tokens', currentToken);
                                await setDoc(tokenRef, {
                                    token: currentToken,
                                    createdAt: serverTimestamp(),
                                    userAgent: navigator.userAgent,
                                    platform: navigator.platform,
                                    lastSeen: serverTimestamp()
                                }, { merge: true });
                                console.log('FCM Token saved to Firestore');
                            } catch (err) {
                                console.error('Error saving FCM token:', err);
                            }

                            console.log('FCM Token:', currentToken);
                        } else {
                            console.log('No registration token available. Request permission to generate one.');
                            toast.info('Please enable notifications properly to receive updates.');
                        }
                    }
                }
            } catch (error) {
                console.error('An error occurred while retrieving token:', error);
                toast.error('Failed to get notification token. Check console.');
            }
        };

        retrieveToken();
    }, [notificationPermissionStatus]);

    // Foreground message handling
    useEffect(() => {
        if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
            onMessage(messaging, (payload) => {
                console.log('Foreground Message received. ', payload);
                toast(payload.notification?.title || 'New Notification', {
                    description: payload.notification?.body,
                    action: payload.data?.url ? {
                        label: 'View',
                        onClick: () => window.location.href = payload.data?.url || '/'
                    } : undefined,
                });
            });
        }
    }, []);

    const requestPermission = async () => {
        try {
            const permission = await Notification.requestPermission();
            setNotificationPermissionStatus(permission);
            if (permission === 'granted') {
                toast.success('You will now receive travel updates!');
                // Token retrieval will trigger via useEffect
            } else if (permission === 'denied') {
                toast.error('Notifications blocked. You can enable them in browser settings.');
            }
        } catch (error) {
            console.error('Error requesting permission', error);
            toast.error('Failed to request permission');
        }
    };

    return { token, notificationPermissionStatus, requestPermission };
};

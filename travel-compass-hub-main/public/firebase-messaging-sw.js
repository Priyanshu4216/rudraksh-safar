// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyA5uXmLIfttFFzCex89MYOfjiLNhITCEgM",
    authDomain: "rudraksh-safar-notifications.firebaseapp.com",
    projectId: "rudraksh-safar-notifications",
    storageBucket: "rudraksh-safar-notifications.firebasestorage.app",
    messagingSenderId: "381479794792",
    appId: "1:381479794792:web:63f4b264560ed048efa3dd",
    measurementId: "G-BE6Z9T6PC6"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here if needed
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon || '/favicon.png',
        image: payload.notification.image,
        data: payload.data
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification click
self.addEventListener('notificationclick', function (event) {
    console.log('[firebase-messaging-sw.js] Notification click Received.', event);

    event.notification.close();

    // Define click action
    const clickActionUrl = event.notification.data?.click_action || '/';

    // This looks to see if the current is already open and focuses if it is
    event.waitUntil(
        clients.matchAll({
            type: "window"
        }).then(function (clientList) {
            for (var i = 0; i < clientList.length; i++) {
                var client = clientList[i];
                if (client.url.includes(clickActionUrl) && 'focus' in client)
                    return client.focus();
            }
            if (clients.openWindow)
                return clients.openWindow(clickActionUrl);
        })
    );
});

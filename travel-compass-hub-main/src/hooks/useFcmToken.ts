export const useFcmToken = () => {
    // Disabled safely to prevent Notification API crash on iOS Safari
    return { token: null, notificationPermissionStatus: 'default', requestPermission: async () => { } };
};

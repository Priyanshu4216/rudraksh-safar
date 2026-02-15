import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Bell, BellOff, Plane } from 'lucide-react';
import { useFcmToken } from '@/hooks/useFcmToken';

const NotificationPermission = () => {
    const { notificationPermissionStatus, requestPermission } = useFcmToken();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        // Logic to show soft prompt
        // 1. Only if permission is 'default' (not granted or denied)
        // 2. Delay for 10 seconds or check interaction

        if (notificationPermissionStatus === 'default') {
            const timer = setTimeout(() => {
                const hasSeenPrompt = localStorage.getItem('hasSeenNotificationPrompt');
                // Simple expiry logic: show again after 7 days? Or just once per session?
                // For now, let's show if not seen in session, or check timestamp

                if (!hasSeenPrompt) {
                    setOpen(true);
                }
            }, 10000); // 10 seconds delay

            return () => clearTimeout(timer);
        }
    }, [notificationPermissionStatus]);

    const handleAllow = async () => {
        await requestPermission();
        setOpen(false);
        localStorage.setItem('hasSeenNotificationPrompt', 'true');
    };

    const handleDeny = () => {
        setOpen(false);
        localStorage.setItem('hasSeenNotificationPrompt', 'true');
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <div className="mx-auto bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <Bell className="w-6 h-6 text-primary" />
                    </div>
                    <DialogTitle className="text-center text-xl">Get Travel Updates?</DialogTitle>
                    <DialogDescription className="text-center pt-2">
                        Don't miss out on exclusive <strong>flight deals</strong>, <strong>yatra opening dates</strong>, and <strong>visa alerts</strong> for Bhilai travelers.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-2 py-4">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
                        <Plane className="w-4 h-4 text-secondary" />
                        <span>Price drop alerts for Dubai & Thailand</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
                        <Bell className="w-4 h-4 text-secondary" />
                        <span>Chardham Yatra registration news</span>
                    </div>
                </div>
                <DialogFooter className="flex-col sm:flex-row gap-2">
                    <Button variant="outline" onClick={handleDeny} className="w-full sm:w-auto">
                        Later
                    </Button>
                    <Button onClick={handleAllow} className="w-full sm:w-auto btn-gold">
                        Yes, Notify Me
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default NotificationPermission;

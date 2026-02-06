import { useEffect } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

const PWAReloadPrompt = () => {
    const {
        needRefresh: [needRefresh, setNeedRefresh],
        updateServiceWorker,
    } = useRegisterSW({
        onRegisterError(error) {
            console.error('SW registration error', error);
        },
    });

    useEffect(() => {
        if (needRefresh) {
            toast("New version available!", {
                description: "Refresh to load the latest features and fixes.",
                duration: Infinity, // Keep open until user interacts
                action: (
                    <Button
                        variant="default"
                        size="sm"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2"
                        onClick={() => updateServiceWorker(true)}
                    >
                        <RefreshCw className="w-4 h-4" />
                        Refresh
                    </Button>
                ),
                cancel: {
                    label: "Later",
                    onClick: () => setNeedRefresh(false),
                },
            });
        }
    }, [needRefresh, updateServiceWorker, setNeedRefresh]);

    return null; // This component handles its UI via Sonner toast
};

export default PWAReloadPrompt;

import { Component, ReactNode } from "react";
import { Button } from "./ui/button";
import { RefreshCw } from "lucide-react";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    isChunkError: boolean;
}

class GlobalError extends Component<Props, State> {
    public override state: State = {
        hasError: false,
        isChunkError: false,
    };

    public static getDerivedStateFromError(error: Error): State {
        // Check if the error is due to a missing file (ChunkLoadError)
        const isChunkError = error.message.includes("Loading chunk") ||
            error.message.includes("Importing a module script failed") ||
            error.name === 'ChunkLoadError';
        return { hasError: true, isChunkError };
    }

    public override componentDidCatch(error: Error) {
        console.error("Uncaught error:", error);

        // Automatically reload if it's a chunk error (stale cache)
        if (this.state.isChunkError) {
            console.log("Chunk error detected, reloading...");
            // Using window.location.reload() without arguments which is standard. 
            // Many browsers treat this as a solid reload now, but we can't force 'true' in strict TypeScript sometimes without casting, 
            // but simply reloading usually refetches the document.
            window.location.reload();
        }
    }

    public override render() {
        if (this.state.hasError) {
            if (this.state.isChunkError) {
                return (
                    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background text-foreground">
                        <div className="flex flex-col items-center gap-4">
                            <RefreshCw className="w-10 h-10 animate-spin text-primary" />
                            <h2 className="text-xl font-semibold">Updating Rudraksh Safar...</h2>
                            <p className="text-muted-foreground">We are getting the latest version for you.</p>
                        </div>
                    </div>
                );
            }

            return (
                <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background text-foreground text-center">
                    <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
                    <p className="text-muted-foreground mb-6 max-w-md">
                        We encountered an unexpected error. Please try refreshing the page.
                    </p>
                    <Button onClick={() => window.location.reload()} variant="default">
                        Refresh Page
                    </Button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default GlobalError;

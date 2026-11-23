import { Component, ReactNode } from "react";
import { Button } from "./ui/button";
import { RefreshCw } from "lucide-react";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    isChunkError: boolean;
    error?: Error;
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
            error.message.includes("Failed to fetch dynamically imported module") ||
            error.name === 'ChunkLoadError';
        return { hasError: true, isChunkError, error };
    }

    public override componentDidCatch(error: Error) {
        console.error("Uncaught error:", error);

        // Automatically reload if it's a chunk error (stale cache)
        if (this.state.isChunkError) {
            console.log("Chunk error detected, reloading...");
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
                    <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
                    <p className="text-muted-foreground mb-4 max-w-md">
                        We encountered an unexpected error. Please try refreshing the page.
                    </p>
                    {this.state.error && (
                        <div className="mb-6 p-4 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 rounded-xl max-w-2xl text-left overflow-auto text-xs text-red-600 dark:text-red-400 font-mono">
                            <div className="font-bold">{this.state.error.message}</div>
                            {this.state.error.stack && (
                                <pre className="mt-2 text-[10px] whitespace-pre-wrap opacity-75">{this.state.error.stack}</pre>
                            )}
                        </div>
                    )}
                    <div className="flex gap-3">
                        <Button onClick={() => window.location.href = '/'} variant="outline">
                            Back to Home
                        </Button>
                        <Button onClick={() => window.location.reload()} variant="default">
                            Refresh Page
                        </Button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default GlobalError;

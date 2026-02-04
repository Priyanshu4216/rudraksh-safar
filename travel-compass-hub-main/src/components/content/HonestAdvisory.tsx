import { ShieldAlert, ThumbsDown } from 'lucide-react';

interface AdvisoryProps {
    title: string;
    advisory: string;
    alternative: string;
}

const HonestAdvisory = ({ title, advisory, alternative }: AdvisoryProps) => {
    return (
        <div className="my-8 rounded-xl border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/10 overflow-hidden">
            <div className="p-6">
                <div className="flex items-start gap-4">
                    <div className="p-2 bg-amber-100 dark:bg-amber-900/40 rounded-lg shrink-0 text-amber-600 dark:text-amber-500">
                        <ThumbsDown className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-amber-900 dark:text-amber-100 mb-2 flex items-center gap-2">
                            What We DO NOT Recommend
                            <span className="text-xs font-normal px-2 py-0.5 bg-amber-200/50 text-amber-800 rounded-full border border-amber-200">Honest Opinion</span>
                        </h3>
                        <p className="text-amber-800/90 dark:text-amber-200/90 leading-relaxed mb-4">
                            {advisory}
                        </p>

                        <div className="flex items-start gap-2 text-sm text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20 p-3 rounded-lg border border-emerald-100/50">
                            <span className="font-bold shrink-0">Better Alternative:</span>
                            {alternative}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HonestAdvisory;

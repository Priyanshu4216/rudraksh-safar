import { useEffect } from 'react';

const CopyWatermark = () => {
    useEffect(() => {
        const handleCopy = (e: ClipboardEvent) => {
            const selection = window.getSelection();
            if (!selection || selection.toString().length === 0) return;

            const originalText = selection.toString();
            const watermark = `\n\nContent copied from:\nwww.rudrakshsafar.com`;
            const watermarkedText = originalText + watermark;

            e.clipboardData?.setData('text/plain', watermarkedText);
            e.preventDefault();
        };

        document.addEventListener('copy', handleCopy);

        return () => {
            document.removeEventListener('copy', handleCopy);
        };
    }, []);

    return null;
};

export default CopyWatermark;

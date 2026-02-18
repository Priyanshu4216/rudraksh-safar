import React from 'react';
import { Camera } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface KedarnathGalleryProps {
    images: string[];
    title?: string;
}

const KedarnathGallery: React.FC<KedarnathGalleryProps> = ({
    images,
    title = "Yatra Glimpses"
}) => {
    if (!images || images.length === 0) return null;

    return (
        <section id="gallery" className="scroll-mt-24 mb-16">
            <h2 className="text-3xl font-serif font-bold mb-8 flex items-center gap-3">
                <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 p-2 rounded-lg">
                    <Camera className="h-6 w-6" />
                </span>
                {title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((img, idx) => (
                    <Card key={idx} className="overflow-hidden group cursor-pointer border-none shadow-md hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-0 relative aspect-[4/3]">
                            <img
                                src={img}
                                alt={`Kedarnath Yatra Moment ${idx + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default KedarnathGallery;

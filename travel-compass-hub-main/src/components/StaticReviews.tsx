import { Star, MessageCircle, MapPin } from 'lucide-react';
import reviewsData from '@/data/reviews.json';

const StaticReviews = () => {
    // Generate valid SEO-friendly JSON-LD Review Schema
    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "@id": "https://rudrakshsafar.com/#travelagency",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": reviewsData.rating.toString(),
            "reviewCount": reviewsData.totalReviews.toString()
        },
        "review": reviewsData.reviews.map(r => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": r.authorName
            },
            "datePublished": r.time.includes("ago") ? new Date().toISOString().split('T')[0] : r.time, // Fallback heuristic
            "reviewBody": r.text,
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": r.rating.toString(),
                "bestRating": "5"
            }
        }))
    };

    return (
        <section className="py-20 bg-white relative overflow-hidden" id="verified-reviews">
            {/* Inject Schema into DOM dynamically */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

            <div className="container px-4 max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block py-1 px-4 rounded-full bg-navy-light/5 text-navy-deep text-xs font-bold tracking-widest uppercase mb-4 shadow-sm border border-navy-deep/10">
                        Zero Fake Reviews
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-deep mb-6">
                        Verified Google <span className="text-gold italic">Reviews</span>
                    </h2>
                    <p className="text-lg text-muted-foreground font-light mb-8">
                        We don't buy reviews. Our {reviewsData.rating} ⭐ rating from {reviewsData.totalReviews}+ travelers is pure, earned trust.
                    </p>
                </div>

                {/* Grid Layout for Reviews */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviewsData.reviews.slice(0, 6).map((review, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative">
                            {/* Google Maps Icon Badge */}
                            <div className="absolute top-4 right-4 opacity-10">
                                <MessageCircle className="w-12 h-12 text-blue-500" />
                            </div>

                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 border-2 border-gold/20 flex-shrink-0">
                                    <img src={review.profilePhotoUrl} alt={review.authorName} className="w-full h-full object-cover" loading="lazy" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-navy-deep">{review.authorName}</h3>
                                    <div className="flex text-gold">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-600 font-light text-sm leading-relaxed relative z-10 line-clamp-4 hover:line-clamp-none transition-all">
                                "{review.text}"
                            </p>

                            <div className="mt-6 pt-6 border-t border-gray-50 flex justify-between items-center text-xs text-gray-400 font-medium uppercase tracking-wider">
                                <span>Google Maps Review</span>
                                <span>{review.time}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="https://www.google.com/search?q=rudraksh+safar+bhilai#lrd=0x3a28dc76b52d82e08:0x1,1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-blue-50 text-blue-600 font-bold rounded-full hover:bg-blue-600 hover:text-white transition-colors border border-blue-100 shadow-sm"
                    >
                        <MapPin className="w-5 h-5" />
                        Verify on Google Maps
                    </a>
                </div>
            </div>
        </section>
    );
};

export default StaticReviews;

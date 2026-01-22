import { Compass, Headphones, CreditCard, Shield, Sparkles, Users } from 'lucide-react';

const reasons = [
  {
    icon: Compass,
    title: 'Expert Curated Trips',
    description: 'Every itinerary is handcrafted by travel experts who have explored these destinations firsthand.',
  },
  {
    icon: CreditCard,
    title: 'Best Price Guarantee',
    description: 'We ensure competitive pricing without compromising on quality or experience.',
  },
  {
    icon: Headphones,
    title: '24/7 Travel Support',
    description: 'Round-the-clock assistance from booking to your safe return home.',
  },
  {
    icon: Shield,
    title: 'Safe & Secure Travel',
    description: 'Your safety is paramount. We partner only with verified and trusted service providers.',
  },
  {
    icon: Sparkles,
    title: 'Premium Planning',
    description: 'Thoughtful trip planning with handpicked stays and experiences that match your budget and style.',
  },
  {
    icon: Users,
    title: 'Personalized Service',
    description: 'Tailored travel plans that match your preferences, pace, and travel style.',
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="section-padding relative overflow-hidden" aria-labelledby="why-us-heading">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-secondary font-medium tracking-widest uppercase text-sm mb-4">
            Why Choose Us
          </span>
          <h2 id="why-us-heading" className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Travel with Confidence & Comfort
          </h2>
          <p className="text-muted-foreground text-lg">
            We go beyond booking flights and hotels. We create seamless travel experiences 
            that let you focus on what matters — making memories.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group glass-card p-8 hover:shadow-elevated transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                <reason.icon className="w-8 h-8 text-secondary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-20 glass-card p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '1000+', label: 'Happy Travelers' },
              { value: '50+', label: 'Destinations' },
              { value: '10+', label: 'Years Experience' },
              { value: '24/7', label: 'Travel Support' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

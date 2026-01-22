import React, { useState, useEffect } from 'react';
import { Heart, Syringe, Shield, Phone, Pill, AlertTriangle, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import AnimatedSection from '@/components/AnimatedSection';
import SEOHead from '@/components/SEOHead';
import PageLoader from '@/components/PageLoader';

const vaccinations = [
  { vaccine: 'COVID-19', required: 'Most countries', notes: 'Check latest entry requirements' },
  { vaccine: 'Yellow Fever', required: 'Africa, South America', notes: 'Certificate valid for life, some countries mandatory' },
  { vaccine: 'Typhoid', required: 'Recommended for Asia, Africa', notes: 'Valid 2-3 years, essential for street food lovers' },
  { vaccine: 'Hepatitis A & B', required: 'Recommended globally', notes: 'Long-term protection, series of shots needed' },
  { vaccine: 'Meningitis', required: 'Saudi Arabia (Hajj/Umrah)', notes: 'ACWY vaccine required for Hajj pilgrims' },
  { vaccine: 'Japanese Encephalitis', required: 'Southeast Asia, East Asia', notes: 'For rural/extended stay' },
];

const emergencyNumbers = [
  { country: 'UAE', police: '999', ambulance: '998', indianEmbassy: '+971-4-3971222' },
  { country: 'Thailand', police: '191', ambulance: '1669', indianEmbassy: '+66-2-2580300' },
  { country: 'Singapore', police: '999', ambulance: '995', indianEmbassy: '+65-67376777' },
  { country: 'Maldives', police: '119', ambulance: '102', indianEmbassy: '+960-3323015' },
  { country: 'Nepal', police: '100', ambulance: '102', indianEmbassy: '+977-1-4410900' },
  { country: 'Sri Lanka', police: '119', ambulance: '110', indianEmbassy: '+94-11-2421605' },
];

const TravelHealth = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 450);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PageLoader type="health" />;
  }

  return (
    <>
      <SEOHead
        title="Travel Health Guide - Vaccinations & Medical Tips for Indian Travellers | Rudraksh Safar"
        description="Complete travel health guide for Indians. Vaccination requirements, travel insurance importance, emergency contacts, and health tips for international travel."
        keywords="travel vaccinations India, travel health tips, travel insurance India, emergency contacts abroad, travel medicine"
        canonicalUrl="https://rudrakshsafar.com/travel-health"
      />

      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container max-w-5xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                <Heart className="w-4 h-4" />
                Health & Safety
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Travel Health Guide
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Stay healthy and safe during your travels with proper vaccinations, insurance, and emergency preparedness.
              </p>
            </div>
          </AnimatedSection>

          {/* Vaccinations */}
          <AnimatedSection delay={100}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Syringe className="w-8 h-8 text-secondary" />
                <h2 className="text-2xl font-serif font-bold">Vaccinations & Immunizations</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-3 font-semibold">Vaccine</th>
                      <th className="text-left p-3 font-semibold">Required For</th>
                      <th className="text-left p-3 font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vaccinations.map((v, index) => (
                      <tr key={v.vaccine} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                        <td className="p-3 font-medium">{v.vaccine}</td>
                        <td className="p-3">{v.required}</td>
                        <td className="p-3 text-sm text-muted-foreground">{v.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                * Get vaccinations 4-6 weeks before travel. Visit a travel clinic for personalized advice.
              </p>
            </div>
          </AnimatedSection>

          {/* Travel Insurance */}
          <AnimatedSection delay={150}>
            <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
                <h2 className="text-2xl font-serif font-bold text-green-800 dark:text-green-200">Travel Insurance (Essential!)</h2>
              </div>
              <p className="text-green-700 dark:text-green-300 mb-4">
                Travel insurance is not optional - it's essential. Medical treatment abroad can cost lakhs without insurance.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Must-Have Coverage</h4>
                  <ul className="space-y-1 text-sm text-green-700 dark:text-green-300">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Medical expenses (min $50,000)</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Emergency evacuation</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Trip cancellation</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Baggage loss/delay</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> 24/7 assistance helpline</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Recommended Providers</h4>
                  <ul className="space-y-1 text-sm text-green-700 dark:text-green-300">
                    <li>• ICICI Lombard Travel Insurance</li>
                    <li>• TATA AIG Travel Guard</li>
                    <li>• Bajaj Allianz Travel Insurance</li>
                    <li>• HDFC ERGO</li>
                    <li>• Reliance Travel Insurance</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Emergency Numbers */}
          <AnimatedSection delay={200}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Phone className="w-8 h-8 text-secondary" />
                <h2 className="text-2xl font-serif font-bold">Emergency Numbers</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {emergencyNumbers.map((e) => (
                  <div key={e.country} className="bg-muted/50 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">{e.country}</h4>
                    <ul className="space-y-1 text-sm">
                      <li><span className="text-muted-foreground">Police:</span> {e.police}</li>
                      <li><span className="text-muted-foreground">Ambulance:</span> {e.ambulance}</li>
                      <li><span className="text-muted-foreground">Embassy:</span> {e.indianEmbassy}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Medicine Kit */}
          <AnimatedSection delay={250}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Pill className="w-8 h-8 text-secondary" />
                <h2 className="text-2xl font-serif font-bold">Travel Medicine Kit</h2>
              </div>

              <div className="mb-6 rounded-xl border border-border bg-muted/30 p-4 text-sm text-muted-foreground">
                <p className="font-semibold text-foreground">Medical Disclaimer:</p>
                <p className="mt-1">
                  The list is provided for general travel preparedness information only. Medicines should be used strictly as advised by a qualified medical professional. Dosage, suitability, and safety vary for each individual. Rudraksh Safar does not provide medical advice or assume responsibility for the use of any medication.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Essentials</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Personal prescription medicines (with prescription copy)</li>
                    <li>• Pain relief tablets (e.g., Paracetamol – doctor advised)</li>
                    <li>• Anti-allergy tablets (e.g., Cetirizine – doctor advised)</li>
                    <li>• Antacids</li>
                    <li>• ORS packets</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Digestive</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Anti-diarrheal tablets (as prescribed)</li>
                    <li>• Digestive enzymes</li>
                    <li>• Probiotics</li>
                    <li>• Motion sickness tablets</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">First Aid</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Bandages, band-aids</li>
                    <li>• Antiseptic cream</li>
                    <li>• Thermometer</li>
                    <li>• Mosquito repellent</li>
                    <li>• Sunscreen SPF 50+</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Health Tips */}
          <AnimatedSection delay={300}>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
                <h2 className="text-xl font-semibold text-amber-800 dark:text-amber-200">Important Health Tips</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-amber-700 dark:text-amber-300">
                <ul className="space-y-2">
                  <li>• Drink only bottled or boiled water</li>
                  <li>• Avoid ice in drinks in developing countries</li>
                  <li>• Wash hands frequently</li>
                  <li>• Be cautious with street food</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Stay hydrated, especially in hot climates</li>
                  <li>• Allow time to acclimatize to altitude</li>
                  <li>• Protect against mosquitoes in tropical areas</li>
                  <li>• Keep prescription medicines in original packaging</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default TravelHealth;

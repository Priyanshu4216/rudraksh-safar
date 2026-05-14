import DestinationTemplate from './DestinationTemplate';
import LongFormSection from '@/components/destinations/LongFormSection';
import WeatherGuide from '@/components/destinations/WeatherGuide';
import { Mountain, Navigation, ShieldAlert, Clock } from 'lucide-react';

export default function GurezValley() {
    const navItems = [
        { id: 'overview', label: 'Overview' },
        { id: 'history', label: 'History & Culture' },
        { id: 'weather', label: 'Weather Guide' },
        { id: 'how-to-reach', label: 'How to Reach' },
        { id: 'things-to-do', label: 'Things to Do' },
        { id: 'permits', label: 'Permits & Safety' }
    ];

    const quickFacts = [
        { label: 'Altitude', value: '8,000 ft', icon: <Mountain className="w-6 h-6" /> },
        { label: 'Location', value: 'Bandipora, Kashmir', icon: <Navigation className="w-6 h-6" /> },
        { label: 'Vibe', value: 'Remote & Pristine', icon: <ShieldAlert className="w-6 h-6" /> },
        { label: 'Best Time', value: 'May - Sep', icon: <Clock className="w-6 h-6" /> }
    ];

    const weatherData = [
        { month: 'May - June', temp: '10°C to 22°C', condition: 'Sunny' as const, description: 'The valley awakens. Lush green meadows, blooming wild flora, and pleasant daytime temperatures.', isBest: true },
        { month: 'July - Aug', temp: '15°C to 25°C', condition: 'Rain' as const, description: 'Occasional rainfall. The Kishanganga river is in full flow, and the landscapes are vibrantly green.' },
        { month: 'Sep - Oct', temp: '5°C to 18°C', condition: 'Pleasant' as const, description: 'Autumn hues take over. Crisp air, golden foliage, and incredibly clear views of Habba Khatoon.', isBest: true },
        { month: 'Nov - April', temp: '-10°C to 5°C', condition: 'Snow' as const, description: 'Razdan Pass closes due to heavy snow. The valley is cut off from the rest of the world for nearly 6 months.' }
    ];

    return (
        <DestinationTemplate
            seoTitle="Gurez Valley Travel Guide 2026: Kashmir's Best Kept Secret"
            seoDescription="Plan the ultimate trip to Gurez Valley. Discover how to reach, best time to visit, permit requirements, and the legendary Habba Khatoon peak."
            canonicalUrl="https://rudrakshsafar.com/destinations/gurez-valley"
            heroTitle="Gurez Valley"
            heroSubtitle="Kashmir's pristine frontier. Where the turquoise Kishanganga river flows past ancient timber houses and the imposing Habba Khatoon peak."
            heroImageUrl="/images/ladakh/ladakh-img-7.webp"
            quickFacts={quickFacts}
            navItems={navItems}
        >
            <LongFormSection id="overview" title="The Crown Jewel of Offbeat Kashmir">
                <p>
                    Nestled at an altitude of 8,000 feet, roughly 86 kilometers from Bandipora and 123 kilometers from Srinagar, lies the spectacular <strong>Gurez Valley</strong>. Cut off from the rest of the world for six months a year due to heavy snowfall at the Razdan Pass, Gurez has managed to retain a raw, untouched purity that is increasingly rare in the Himalayas.
                </p>
                <p>
                    Unlike the commercialized hubs of Pahalgam or Gulmarg, Gurez offers an authentic, unedited Kashmiri experience. The valley is defined by the roaring turquoise waters of the Kishanganga River, the towering pyramid of the Habba Khatoon peak, and the traditional log-and-mud houses of the Dard-Shina tribes.
                </p>
            </LongFormSection>

            <LongFormSection id="history" title="Echoes of the Ancient Silk Route">
                <p>
                    Gurez is not just geographically stunning; it is historically profound. It once served as the gateway to the famous Silk Route, connecting the Kashmir Valley with Gilgit and Kashgar. 
                </p>
                <p>
                    The inhabitants of Gurez, the Dardic people, have their own distinct culture, traditions, and language (Shina), completely separate from the mainstream Kashmiri culture. Their traditional log-houses, built without nails and designed to withstand the crushing weight of winter snows, are an architectural marvel. The legend of <em>Habba Khatoon</em>, the 16th-century mystic poetess and peasant queen of Kashmir, echoes deeply in these mountains, with the valley's most prominent peak named in her honor.
                </p>
            </LongFormSection>

            <WeatherGuide data={weatherData} />

            <LongFormSection id="how-to-reach" title="The Journey Across Razdan Pass">
                <p>
                    The journey to Gurez is an adventure in itself. The only way in is via a highly scenic, albeit challenging, mountain road from Srinagar.
                </p>
                <ul>
                    <li><strong>The Route:</strong> Srinagar → Bandipora (50km) → Tragbal → Razdan Pass (11,672 ft) → Kanzalwan → Dawar (Gurez).</li>
                    <li><strong>Drive Time:</strong> The 123 km journey usually takes about 6 to 7 hours due to the steep ascent to Razdan Pass and rough patches along the descent into the valley.</li>
                    <li><strong>The Checkpoints:</strong> Expect multiple army checkpoints. You must carry valid, original identification (Aadhar/Passport) at all times.</li>
                </ul>
                <p>
                    <em>Note: The road is only open from late May to early November.</em>
                </p>
            </LongFormSection>

            <LongFormSection id="things-to-do" title="What to Experience in Gurez">
                <p>
                    Gurez is about slow travel. It's a place to disconnect, breathe, and observe. However, for the active explorer, it offers several pristine experiences:
                </p>
                <ul>
                    <li><strong>Habba Khatoon Spring:</strong> Visit the sweet-water spring located right at the base of the majestic Habba Khatoon peak.</li>
                    <li><strong>Kishanganga River Walk:</strong> Spend an evening walking alongside the turquoise waters of the river that forms the Line of Control (LoC) in several stretches.</li>
                    <li><strong>Tulail Valley:</strong> A further 40km drive from Dawar (the main town of Gurez) takes you to Tulail. The landscapes here become even more dramatic and the villages more traditional.</li>
                    <li><strong>Interact with the Dards:</strong> Engage with the warm, hospitable locals. Their lifestyle, largely cut off from modernity, offers a humbling perspective.</li>
                </ul>
            </LongFormSection>

            <LongFormSection id="permits" title="Permits & Safety Regulations">
                <p>
                    Because Gurez sits directly on the Line of Control (LoC) with Pakistan-occupied Kashmir (PoK), the military presence is heavy, but extremely friendly and helpful.
                </p>
                <p>
                    <strong>For Indian Nationals:</strong> You do not need a prior permit to enter Gurez. However, you must register your details (with a physical copy of your Aadhar card) at the army checkpoint at Bandipora and at the Razdan Pass.
                </p>
                <p>
                    <strong>For Foreign Nationals:</strong> Unfortunately, foreign tourists are currently not permitted to visit Gurez Valley due to its sensitive border proximity.
                </p>
            </LongFormSection>
        </DestinationTemplate>
    );
}

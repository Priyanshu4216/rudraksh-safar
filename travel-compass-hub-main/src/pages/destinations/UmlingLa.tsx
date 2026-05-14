import DestinationTemplate from './DestinationTemplate';
import LongFormSection from '@/components/destinations/LongFormSection';
import WeatherGuide from '@/components/destinations/WeatherGuide';
import { Mountain, Navigation, ShieldAlert, Clock } from 'lucide-react';

export default function UmlingLa() {
    const navItems = [
        { id: 'overview', label: 'Overview' },
        { id: 'why-visit', label: 'Why Visit' },
        { id: 'weather', label: 'Weather Guide' },
        { id: 'how-to-reach', label: 'How to Reach' },
        { id: 'road-conditions', label: 'Road Conditions' },
        { id: 'ams-guide', label: 'AMS & Safety Guide' }
    ];

    const quickFacts = [
        { label: 'Altitude', value: '19,024 ft', icon: <Mountain className="w-6 h-6" /> },
        { label: 'Location', value: 'Eastern Ladakh', icon: <Navigation className="w-6 h-6" /> },
        { label: 'Difficulty', value: 'Extreme', icon: <ShieldAlert className="w-6 h-6" /> },
        { label: 'Best Time', value: 'Sep - Oct', icon: <Clock className="w-6 h-6" /> }
    ];

    const weatherData = [
        { month: 'May - June', temp: '-5°C to 10°C', condition: 'Sunny' as const, description: 'Roads begin to open. High chance of encountering black ice and sudden snow flurries.' },
        { month: 'July - Aug', temp: '0°C to 15°C', condition: 'Rain' as const, description: 'Monsoon in lower regions can cause landslides, but Umling La remains mostly dry and cold.' },
        { month: 'Sep - Oct', temp: '-10°C to 5°C', condition: 'Pleasant' as const, description: 'The absolute best time. Clear skies, stable roads, and spectacular visibility.', isBest: true },
        { month: 'Nov - April', temp: '-30°C to -10°C', condition: 'Snow' as const, description: 'Completely inaccessible due to heavy snowfall and extreme sub-zero temperatures.' }
    ];

    return (
        <DestinationTemplate
            seoTitle="Umling La Travel Guide 2026: The World's Highest Motorable Road"
            seoDescription="Complete expedition guide to Umling La Pass (19,024 ft). Discover road conditions, best time to visit, AMS safety protocols, and itineraries."
            canonicalUrl="https://rudrakshsafar.com/destinations/umling-la"
            heroTitle="Umling La Pass"
            heroSubtitle="The absolute apex of human road engineering. 19,024 feet above sea level. Where oxygen halves and legends are born."
            heroImageUrl="/images/ladakh/ladakh-img-5.webp"
            quickFacts={quickFacts}
            navItems={navItems}
        >
            <LongFormSection id="overview" title="The Summit of the World">
                <p>
                    Overtaking Khardung La and Bolivia’s Uturuncu volcano, the <strong>Umling La Pass</strong> stands officially as the highest motorable road in the world at a staggering 19,024 feet (5,798 meters). Located in the remote southeastern region of Ladakh, near the Line of Actual Control (LAC) with Tibet, reaching this pass is considered the holy grail for extreme overland travelers and motorcyclists worldwide.
                </p>
                <p>
                    Built by the Border Roads Organisation (BRO) under Project Himank, the 52-kilometer tarmac road connecting the villages of Chisumle and Demchok is a testament to human engineering in one of the most unforgiving environments on Earth. Here, the oxygen level drops to roughly 50% of what it is at sea level, making the journey an intense test of physical endurance, vehicle capability, and mental fortitude.
                </p>
            </LongFormSection>

            <LongFormSection id="why-visit" title="Why Attempt the Journey?">
                <p>
                    Umling La is not a destination for a casual holiday. It is an <em>expedition</em>. The primary draw is the unparalleled sense of achievement that comes from navigating a machine to the literal roof of the world. Beyond the bragging rights, the route from Hanle to Umling La offers some of the most surreal, barren, and majestic landscapes in the entire Himalayan range.
                </p>
                <ul>
                    <li><strong>The Ultimate Milestone:</strong> Holding the Guinness World Record for the highest motorable road.</li>
                    <li><strong>Hanle Dark Sky Reserve:</strong> The route passes through Hanle, India's first Dark Sky Reserve, offering unparalleled stargazing.</li>
                    <li><strong>Pristine Isolation:</strong> Unlike Khardung La, Umling La sees far less traffic, offering a profound sense of isolation and raw adventure.</li>
                </ul>
            </LongFormSection>

            <WeatherGuide data={weatherData} />

            <LongFormSection id="how-to-reach" title="Navigating to the Top">
                <p>
                    The journey to Umling La invariably begins in Leh. From Leh, you must travel southeast towards the Hanle region. You will need special Inner Line Permits (ILP) or Protected Area Permits (PAP) from the District Magistrate in Leh, as the pass is extremely close to the international border.
                </p>
                <p>
                    <strong>The Standard Route:</strong> Leh → Karu → Upshi → Chumathang → Nyoma → Loma Bridge → Hanle → Photi La → Umling La.
                </p>
            </LongFormSection>

            <LongFormSection id="road-conditions" title="Road Conditions & Vehicle Prep">
                <p>
                    While the final 52km stretch built by the BRO is fully tarmacked (blacktop), getting to the start of this stretch requires navigating hundreds of kilometers of broken roads, water crossings, and dirt tracks. High ground clearance is absolutely mandatory. 4x4 vehicles are highly recommended, though skilled drivers manage in robust 2WD SUVs. For motorcyclists, an adventure tourer (like a Himalayan or GS) is the vehicle of choice.
                </p>
            </LongFormSection>

            <LongFormSection id="ams-guide" title="Acute Mountain Sickness (AMS) Protocol">
                <p>
                    At 19,024 feet, AMS is not a possibility; it is a certainty if you do not acclimatize. The oxygen density is critically low. You <strong>must not</strong> spend more than 15-20 minutes at the top of the pass. If you feel lightheaded, nauseous, or experience a severe headache, descend immediately. No photograph is worth your life.
                </p>
                <p>
                    We recommend spending at least two nights in Leh (11,500 ft) and one night in Hanle (14,000 ft) before attempting the final push to Umling La.
                </p>
            </LongFormSection>
        </DestinationTemplate>
    );
}

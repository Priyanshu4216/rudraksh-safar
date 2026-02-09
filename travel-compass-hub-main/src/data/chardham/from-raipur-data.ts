import { Plane, Train, Clock, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export const raipurData = {
    meta: {
        title: 'Char Dham Yatra from Raipur 2026: Flight Packages & Luxury Itinerary',
        description: 'Exclusive Char Dham Yatra packages from Raipur, Chhattisgarh. Direct flights to Dehradun, VIP Darshan, and premium hotels for a comfortable pilgrimage.',
        keywords: ['Char Dham Yatra from Raipur', 'Raipur to Kedarnath flight', 'Luxury Char Dham Package Raipur', 'Travel Agent in Raipur for Char Dham']
    },
    hero: {
        title: 'Char Dham Yatra from Raipur',
        subtitle: 'The Quickest Route to Salvation. Flight-Inclusive Packages for Chhattisgarh\'s Capital.',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109a33e?q=80&w=2674&auto=format&fit=crop' // Airport/Travel theme
    },
    transport: {
        title: 'Raipur to Himalayas: Connectivity Guide',
        options: [
            {
                mode: 'Flight',
                title: 'Swami Vivekananda Airport (RPR) ✈️',
                route: 'Raipur (RPR) -> Delhi (DEL) -> Dehradun (DED)',
                duration: 'Approx 6-8 Hours',
                pros: ['Fastest Option', 'Ideal for Seniors', 'Same Day Arrival in Haridwar'],
                recommended: true
            },
            {
                mode: 'Train',
                title: 'Raipur Junction (R) 🚆',
                route: 'Raipur -> Nizamuddin -> Haridwar',
                duration: '24-30 Hours',
                pros: ['Budget Friendly', 'Good for Large Groups', 'Scenic Route'],
                recommended: false
            }
        ]
    },
    itinerary: {
        title: '10 Days Luxury Itinerary (Flight Mode)',
        days: [
            { day: 1, title: 'Raipur to Haridwar', desc: 'Morning flight from Raipur. Land in Dehradun by afternoon. VIP Transfer to Haridwar hotel. Ganga Aarti in evening.' },
            { day: 2, title: 'Haridwar to Barkot', desc: 'Drive to Barkot via Mussoorie. Luxury stay with Himalayas view.' },
            { day: 3, title: 'Yamunotri Excursion', desc: 'Drive to Jankichatti. Palki/Pony arranged for temple trek. Darshan & return to Barkot.' },
            { day: 4, title: 'Barkot to Uttarkashi', desc: 'Short drive to Uttarkashi. Visit Kashi Vishwanath Temple. Stay in premium resort.' },
            { day: 5, title: 'Gangotri Excursion', desc: 'Day trip to Gangotri Dham. VIP Darshan assistance. Return to Uttarkashi.' },
            { day: 6, title: 'Uttarkashi to Guptkashi', desc: 'Scenic drive to Guptkashi/Sitapur. Helipad briefing for next day.' },
            { day: 7, title: 'Kedarnath (By Heli)', desc: 'Helicopter from Phata/Sersi. VIP Darshan at Kedarnath. Return flight or stay (as per package).' },
            { day: 8, title: 'Guptkashi to Badrinath', desc: 'Drive to Badrinath. Mana Village tour. Evening Aarti at Temple.' },
            { day: 9, title: 'Badrinath to Rishikesh', desc: 'Morning Darshan. Drive down to Rishikesh. Rafting (Optional) or relax at Ganga Kinare.' },
            { day: 10, title: 'Departure', desc: 'Transfer to Dehradun Airport. Flight back to Raipur.' }
        ]
    },
    faqs: [
        {
            question: 'Are there direct flights from Raipur to Dehradun?',
            answer: 'Currently, there are no non-stop flights. The best route is Raipur -> Delhi -> Dehradun (One stop). Total travel time is approx 6 hours.'
        },
        {
            question: 'Can I get a VIP Darshan pass from Raipur?',
            answer: 'Yes, our premium packages include assistance for VIP Darshan slips where applicable to save time.'
        },
        {
            question: 'Do you have an office in Raipur?',
            answer: 'We serve all of Chhattisgarh. Our main operations are in Bhilai (just 30km away), and we facilitate home visits in Raipur for booking.'
        },
        {
            question: 'Is Helicopter booking included?',
            answer: 'Yes, for our Raipur luxury batch, we pre-book Helicopter slots (subject to availability) for Kedarnath to ensure a hassle-free yatra.'
        }
    ]
};

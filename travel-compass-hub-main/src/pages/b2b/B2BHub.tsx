import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
    ShieldCheck, TrendingUp, Handshake, Globe, MapPin, Building2, CheckCircle2, 
    ChevronRight, Phone, Users, Clock, Briefcase, Map, FileText, RotateCw, 
    Scale, LifeBuoy, Star, Shield, Lock, CheckSquare, Percent, UserCheck, 
    Compass, Plane, Car, Hotel, Utensils, Anchor, Sun, Mountain, Award, 
    Sparkles, Download, Check, HelpCircle, Layers, ArrowRight, MessageSquare
} from 'lucide-react';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import AgentProtection from '@/components/b2b/AgentProtection';
import FAQsSection from '@/components/FAQsSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const AnimatedCounter = ({ from = 0, to, duration = 2 }: { from?: number, to: number, duration?: number }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true, margin: "-50px" });

    useEffect(() => {
        if (inView && nodeRef.current) {
            const controls = animate(from, to, {
                duration,
                ease: "easeOut",
                onUpdate(value) {
                    if (nodeRef.current) {
                        nodeRef.current.textContent = Math.round(value).toString() + "+";
                    }
                }
            });
            return () => controls.stop();
        }
    }, [from, to, duration, inView]);

    return <span ref={nodeRef} className="font-bold tabular-nums text-inherit">{from}+</span>;
};

// 12 Comprehensive B2B Destination Master Hubs
interface DestinationDMC {
    id: string;
    name: string;
    region: string;
    category: 'himalayan' | 'spiritual' | 'island' | 'international' | 'heritage';
    badge: string;
    image: string;
    tagline: string;
    b2bNetIndicator: string;
    sla: string;
    groundAssets: string[];
    hotelInventory: string[];
    b2bExclusives: string[];
    foodSupport: string;
    canonicalRoute: string;
}

const b2bDestinations: DestinationDMC[] = [
    {
        id: 'chardham',
        name: 'Chardham Yatra (Uttarakhand)',
        region: 'Yamunotri • Gangotri • Kedarnath • Badrinath',
        category: 'spiritual',
        badge: 'Direct Fleet & Helipad Allotments',
        image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&q=80&w=800',
        tagline: 'India\'s leading white-label Chardham DMC with emergency oxygen backup and pre-contracted mountain camps.',
        b2bNetIndicator: 'Wholesale Net from ₹14,500/pax (Ex-Haridwar/Rishikesh)',
        sla: '2 Hours (Instant Season Availability)',
        groundAssets: [
            '27-Seater 2x2 luxury pushback Tempo Travellers stationed at Haridwar & Rishikesh',
            '4x4 commercial Bolero, Scorpio, and Innova Crysta fleets for high-altitude mountain sectors',
            'Experienced mountain drivers with mandatory 7+ years Himalayan yatra certification'
        ],
        hotelInventory: [
            'Pre-contracted hotel and Swiss luxury cottage room blocks in Barkot, Guptkashi, Phata, Joshimath, and Badrinath',
            'Camp inventory on the Kedarnath base route (Gaurikund, Sonprayag, Phata, Sitapur)'
        ],
        b2bExclusives: [
            'Helicopter ticket liaison assistance (Phata / Sirsi / Guptkashi helipads)',
            'Priority Biometric & Uttarakhand Tourism online portal registration facilitation',
            'Pony, Palki, and Kandi pre-booking coordination at Gaurikund',
            'Complimentary medical-grade portable oxygen canisters in every vehicle'
        ],
        foodSupport: 'Pure Vegetarian & Sattvic Jain cuisine guaranteed throughout Uttarakhand properties.',
        canonicalRoute: '/chardham-yatra-package'
    },
    {
        id: 'kashmir',
        name: 'Kashmir Valley (J&K)',
        region: 'Srinagar • Gulmarg • Pahalgam • Sonmarg • Doodhpathri',
        category: 'himalayan',
        badge: 'Private Srinagar Cab Fleet & Houseboats',
        image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80&w=800',
        tagline: 'Reliable Srinagar ground operations with pre-purchased Gulmarg Gondola slot assistance and Dal Lake houseboats.',
        b2bNetIndicator: 'Wholesale Net from ₹12,999/pax (Ex-Srinagar Airport SXR)',
        sla: '2 to 3 Hours',
        groundAssets: [
            '80+ white-label commercial cabs (Innova Crysta, Etios, Tempo Travellers) operating out of Srinagar Airport',
            'Local union liaison handling Sonmarg Zero Point and Pahalgam Aru/Betaab Valley local taxi transfers',
            'Winter tire-chain equipped vehicles for Gulmarg Tangmarg mountain climbs during snowfall'
        ],
        hotelInventory: [
            'Exclusive allotments in Super Deluxe & Premium Dal Lake & Nigeen Lake heritage houseboats',
            'Direct contracted 3-star, 4-star, and boutique alpine cottages in Srinagar, Gulmarg, and Pahalgam'
        ],
        b2bExclusives: [
            'Gulmarg Phase 1 & Phase 2 Gondola ticket booking assistance to prevent customer disappointment',
            'Complimentary Shikara ride voucher included in all standard B2B ground itineraries',
            'Airport placard pickup with your agency logo and direct non-branded welcome kits'
        ],
        foodSupport: 'Traditional Kashmiri Wazwan, pure North Indian vegetarian, and dedicated Jain meal arrangements.',
        canonicalRoute: '/tours/kashmir'
    },
    {
        id: 'ladakh',
        name: 'Leh Ladakh',
        region: 'Leh • Nubra Valley • Pangong Lake • Hanle • Tso Moriri • Khardung La',
        category: 'himalayan',
        badge: 'High-Altitude 4x4 Fleet & Oxygen Fitted',
        image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&q=80&w=800',
        tagline: 'Premier high-altitude ground DMC with acclimatization protocols, 4WD vehicles, and instant Inner Line Permits.',
        b2bNetIndicator: 'Wholesale Net from ₹15,500/pax (Ex-Leh Airport IXL)',
        sla: '3 Hours',
        groundAssets: [
            '100% Ladakh-union compliant Innova Crysta, Scorpio, and 12-seater 4WD Tempo Travellers',
            'Drivers trained in high-altitude emergency navigation and Acute Mountain Sickness (AMS) protocols',
            'Dedicated Leh garage with standby relief vehicles to prevent mid-circuit breakdowns'
        ],
        hotelInventory: [
            'Central Leh 3-star & 4-star properties equipped with central heating and backup power generators',
            'Luxury Swiss glamping camps with private attached washrooms at Pangong Lake (Spangmik/Lukung) and Nubra (Hunder)'
        ],
        b2bExclusives: [
            'Inner Line Permit (ILP) and Wildlife Fee processing within 24 hours of passport/Aadhaar submission',
            'Hanle Dark Sky Reserve and Umling La Pass (19,024 ft) military clearance coordination',
            'Portable medical-grade oxygen cylinder and fingertip pulse oximeter provided in every vehicle'
        ],
        foodSupport: 'Fresh, warm buffet meals suited for high altitude with special Gujarati & Jain dining options at remote camps.',
        canonicalRoute: '/domestic-tours/ladakh'
    },
    {
        id: 'manali',
        name: 'Manali & Kasol (Himachal Pradesh)',
        region: 'Manali • Solang Valley • Atal Tunnel • Sissu (Lahaul) • Kasol • Manikaran',
        category: 'himalayan',
        badge: 'Daily Volvo Series & Group Series',
        image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800',
        tagline: 'High-volume Himachal ground operator offering daily AC Volvo seats, riverside Swiss camps, and Atal Tunnel permits.',
        b2bNetIndicator: 'Wholesale Net from ₹5,499/pax (Ex-Delhi/Chandigarh)',
        sla: '2 Hours (Instant Volvo PNR Confirmation)',
        groundAssets: [
            'Guaranteed daily block-seats on luxury multi-axle AC Volvo coaches from Delhi (Majnu Ka Tilla) and Chandigarh',
            'Fleet of 4x4 Gypsy and Innova vehicles for Rohtang Pass, Solang Valley, and Lahaul Valley excursions',
            'Private Tempo Travellers for college groups, youth batches, and corporate offsites'
        ],
        hotelInventory: [
            'Riverside resorts in Prini, Aleo, and Old Manali with open lawn areas and valley views',
            'Riverside glamping camps in Kasol (Parvati Valley) with private bonfire and acoustic music setups'
        ],
        b2bExclusives: [
            'DJ Night, bonfire, and evening snack setups included for youth and college group series',
            'Rohtang Pass NGT permits and Atal Tunnel snow-activity coordination',
            'Customizable unbranded day-wise PDF itinerary branded with your agency logo in 1 hour'
        ],
        foodSupport: 'Extensive multi-cuisine buffets catering to student groups, North Indian families, and corporate gatherings.',
        canonicalRoute: '/packages/manali-kasol-strangers-trip'
    },
    {
        id: 'nainital',
        name: 'Nainital & Jim Corbett (Uttarakhand)',
        region: 'Nainital • Bhimtal • Mukteshwar • Ramnagar (Corbett) • Ranikhet',
        category: 'heritage',
        badge: 'Corbett Safari Permits & Kathgodam Transfers',
        image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&q=80&w=800',
        tagline: 'Seamless Kumaon ground handler managing Jim Corbett Gypsy safari permits, lake-facing hotels, and corporate offsites.',
        b2bNetIndicator: 'Wholesale Net from ₹8,200/pax (Ex-Kathgodam / Delhi)',
        sla: '2 Hours',
        groundAssets: [
            'Private commercial fleet operating transfers from Kathgodam Railway Station, Pantnagar Airport, and Delhi NCR',
            'Registered open 4x4 Jim Corbett National Park safari Gypsies with licensed forest department naturalists',
            'Comfortable pushback Tempo Travellers for large family reunions and corporate conferences'
        ],
        hotelInventory: [
            'Prime Mall Road lake-facing hotels in Nainital offering walking access to Naini Lake and Tibetan Market',
            'Sprawling jungle luxury resorts with swimming pools and conference halls in Ramnagar (Corbett)'
        ],
        b2bExclusives: [
            'Advance Corbett Tiger Reserve safari slot booking (Bijrani, Jhirna, Dhela, Garjiya, and Phato zones)',
            'Boating coupons and ropeway ticket coordination in Nainital',
            'Team-building rope activities and cocktail dinner setups for corporate offsite clients'
        ],
        foodSupport: 'Kumaoni regional specialties alongside lavish North/South Indian buffets and live barbecue counters.',
        canonicalRoute: '/domestic-packages'
    },
    {
        id: 'mussoorie',
        name: 'Mussoorie & Dhanaulti',
        region: 'Mussoorie • Dhanaulti • Kanatal • Dehradun • Kempty Falls',
        category: 'heritage',
        badge: 'Jolly Grant Airport Desk & Heritage Resorts',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800',
        tagline: 'Quick-turnaround hill station DMC for weekend getaways, school excursions, and executive mountain retreats.',
        b2bNetIndicator: 'Wholesale Net from ₹7,499/pax (Ex-Dehradun / Delhi)',
        sla: '2 Hours',
        groundAssets: [
            'Direct vehicle dispatch from Dehradun Railway Station and Jolly Grant Airport (DED)',
            'Sedans (Dzire/Etios), SUVs (Innova Crysta/Ertiga), and 17-26 seater Force Urbanias/Tempo Travellers',
            'Strict adherence to green-cess and Mall Road entry permits with zero hassles for your guests'
        ],
        hotelInventory: [
            'Mall Road heritage colonial resorts with panoramic Doon Valley night views',
            'Secluded pine-forest Swiss camps in Dhanaulti and Kanatal for adventure-seeking groups'
        ],
        b2bExclusives: [
            'Exclusive Kempty Falls, Company Garden, Cloud\'s End, and Lal Tibba sightseeing circuits',
            'Dhanaulti Eco Park adventure activity passes (Zip-lining, Sky Walk, Valley Crossing)',
            'Corporate banquet hall bookings with full audio-visual conference equipment'
        ],
        foodSupport: 'Full American Plan (AP / all meals) and Modified American Plan (MAP) with pure vegetarian and Jain kitchens.',
        canonicalRoute: '/domestic-packages'
    },
    {
        id: 'puri',
        name: 'Puri Jagannath Dham & Odisha',
        region: 'Puri • Konark Sun Temple • Chilika Lake • Bhubaneswar • Dhauli',
        category: 'spiritual',
        badge: 'VIP Temple Panda & Sea-Facing Inventory',
        image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=800',
        tagline: 'East India\'s premier pilgrimage & leisure DMC with direct rail-head reception from SECR/ECoR networks.',
        b2bNetIndicator: 'Wholesale Net from ₹6,999/pax (Ex-Puri / Bhubaneswar BBI)',
        sla: '2 Hours',
        groundAssets: [
            'Private AC cab fleet stationed directly at Puri Railway Station and Bhubaneswar Biju Patnaik Airport (BBI)',
            'Dedicated transport corridor connecting Raipur, Bhilai, Bilaspur, and Kolkata arrivals via direct SECR trains',
            'AC luxury coaches for large pilgrim sanghas, senior citizen groups, and educational tours'
        ],
        hotelInventory: [
            'Guaranteed sea-facing rooms on Golden Beach and Marine Drive Road Puri with swimming pools',
            'Luxury tented cottages at Konark Eco Retreat (seasonal winter glamping)'
        ],
        b2bExclusives: [
            'Authorized VIP Panda temple assistance for smooth Lord Jagannath darshan and Mahaprasad arrangements',
            'Konark Sun Temple guided heritage walk and Light & Sound show tickets',
            'Private motorized catamaran boat charters at Chilika Lake (Satapada) for Irrawaddy Dolphin spotting'
        ],
        foodSupport: 'Pure vegetarian Odia Mahaprasad feasts, South Indian tiffin, and authentic North Indian vegetarian dining.',
        canonicalRoute: '/domestic-tours/puri-jagannath-dham'
    },
    {
        id: 'andaman',
        name: 'Andaman & Nicobar Islands',
        region: 'Port Blair • Havelock (Swaraj Dweep) • Neil (Shaheed Dweep) • Baratang',
        category: 'island',
        badge: 'Private Catamaran Allotments (Makruzz/Nautika)',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
        tagline: 'Island DMC controlling inter-island luxury catamarans, private beachfront resorts, and underwater sports.',
        b2bNetIndicator: 'Wholesale Net from ₹14,800/pax (Ex-Port Blair IXZ)',
        sla: '2 to 4 Hours',
        groundAssets: [
            'Private commercial AC cabs stationed at Port Blair Airport and all ferry arrival jetties',
            'Dedicated island fleet on Havelock and Neil islands ensuring zero waiting time upon disembarkation',
            'Private speedboats for Elephant Beach and Light House coral reef excursions'
        ],
        hotelInventory: [
            'Direct contracts with private beachfront properties on Radhanagar Beach and Vijaynagar Beach (Havelock)',
            'Luxury sea-view resorts in Port Blair and Neil Island with private beach access'
        ],
        b2bExclusives: [
            'Confirmed seat allotments on high-speed catamarans: Makruzz, Nautika, and Green Ocean',
            'Cellular Jail Light & Sound Show guaranteed evening ticket slots',
            'B2B wholesale tariffs for PADI / SSI certified Scuba Diving, Sea Walk, and Parasailing',
            'Romantic beachside candlelight dinner and flower-bed honeymoon decorations on request'
        ],
        foodSupport: 'Fresh coastal dining with dedicated pure vegetarian and Jain kitchens available across all partner resorts.',
        canonicalRoute: '/domestic-tours/andaman'
    },
    {
        id: 'dubai',
        name: 'Dubai & UAE',
        region: 'Dubai • Abu Dhabi • Sharjah • Desert Safari Camps • Marina',
        category: 'international',
        badge: 'Wholesale Hotel Tariffs & Private Desert Camps',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800',
        tagline: 'Direct UAE wholesale operator providing express visas, private desert safari buyouts, and Burj Khalifa bulk slots.',
        b2bNetIndicator: 'Wholesale Net from AED 850 / ₹18,999/pax (Ex-Dubai DXB/DWC)',
        sla: '2 Hours (Instant Express Visa Processing)',
        groundAssets: [
            'Dedicated DXB Terminal 1, 2, and 3 airport meet-and-greet reception team',
            'Luxury coach and Mercedes Sprinter fleet for corporate groups, delegations, and FITs',
            'Custom 4x4 Land Cruiser fleet for red-dune desert safari dune bashing'
        ],
        hotelInventory: [
            'Wholesale direct allotments across 3-star, 4-star, and 5-star properties in Deira, Bur Dubai, Sheikh Zayed Road, and Marina',
            'Special trade deals during major exhibitions (Arab Health, Gulfood, Gitex, Big 5)'
        ],
        b2bExclusives: [
            'Instant 30-day and 60-day UAE tourist visa processing with 99.8% approval rate and zero agent cash deposit',
            'Burj Khalifa 124th & 125th floor At The Top prime slot allocations',
            'Marina luxury Dhow Cruise and private 50ft yacht charters at wholesale net pricing',
            'Abu Dhabi day tour including Sheikh Zayed Grand Mosque, BAPS Hindu Mandir, and Ferrari World passes'
        ],
        foodSupport: 'Extensive partnerships with authentic Indian restaurants across Dubai providing Jain, Gujarati, and South Indian catering.',
        canonicalRoute: '/international-tours/dubai'
    },
    {
        id: 'vietnam',
        name: 'Vietnam',
        region: 'Hanoi • Halong Bay • Da Nang • Ba Na Hills • Hoi An • Saigon • Phu Quoc',
        category: 'international',
        badge: '5-Star Halong Cruise Blocks & Indian Chefs',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800',
        tagline: 'Asia\'s fastest-growing destination handled with licensed English/Hindi guides, luxury cruises, and Indian dining.',
        b2bNetIndicator: 'Wholesale Net from $290 / ₹24,500/pax (Ex-Hanoi/Da Nang)',
        sla: '3 Hours',
        groundAssets: [
            'Licensed Hindi and English-speaking Vietnamese tour guides dedicated exclusively to Indian guest groups',
            'Modern luxury AC coaches (16-seater, 29-seater, and 45-seater) across Hanoi, Da Nang, and Ho Chi Minh City',
            'VIP airport express immigration fast-track service in HAN and SGN airports'
        ],
        hotelInventory: [
            'Pre-bought cabin inventory on 5-star Halong Bay and Lan Ha Bay overnight cruises (Ambassador, Paradise, Mon Cheri)',
            'Beachfront 4-star and 5-star resorts in Da Nang, Hoi An, and Phu Quoc Island'
        ],
        b2bExclusives: [
            'Ba Na Hills Golden Hand Bridge cable car and buffet tickets with zero on-site queues',
            'Instant Vietnam Tourist E-Visa issuance assistance (standard 3 days, express 4-8 hours)',
            'Bespoke MICE gala dinners with customized branding, stage setup, and Indian tandoor live counters'
        ],
        foodSupport: 'Dedicated Indian meals at certified Indian restaurants across Hanoi, Halong, Da Nang, and Saigon with Jain food guarantee.',
        canonicalRoute: '/international-tours/vietnam'
    },
    {
        id: 'thailand',
        name: 'Thailand',
        region: 'Bangkok • Pattaya • Phuket • Krabi • Koh Samui',
        category: 'international',
        badge: 'Direct Bangkok & Phuket Operations Office',
        image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800',
        tagline: 'Our flagship international DMC operating our own physical ground infrastructure, speedboats, and 24/7 helpline.',
        b2bNetIndicator: 'Wholesale Net from $110 / ₹9,200/pax (Ex-Bangkok BKK/DMK)',
        sla: 'Instant to 2 Hours',
        groundAssets: [
            'Direct on-ground fleet in Bangkok and Phuket: Toyota Commuter VIP 10-seater vans and luxury coaches',
            'Private chartered speedboats for Coral Island (Pattaya) and Phi Phi Island (Phuket)',
            'Permanent airport counter presence at Suvarnabhumi (BKK) and Don Mueang (DMK)'
        ],
        hotelInventory: [
            'Contracted inventory across 400+ Thai hotels in Sukhumvit, Pratunam, Beach Road Pattaya, Patong, and Ao Nang',
            'Direct API rate parity beating all leading global B2B bedbanks'
        ],
        b2bExclusives: [
            '100% white-label airport welcome with personalized placard bearing your agency\'s name and logo',
            'Safari World, Marine Park, Alcazar Show, Chaophraya Dinner Cruise, and Tiger Park wholesale net tickets',
            '24/7 dedicated Hindi, English, and Thai emergency assistance operations center'
        ],
        foodSupport: 'Over 60 partnered Indian buffet venues serving authentic Punjabi, Gujarati, and South Indian fare.',
        canonicalRoute: '/b2b/thailand'
    },
    {
        id: 'canton',
        name: 'Canton Fair & China B2B Trade',
        region: 'Guangzhou • Foshan • Shenzhen • Dongguan • Hong Kong',
        category: 'international',
        badge: 'Trade Delegation Specialist & Pazhou Shuttles',
        image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&q=80&w=800',
        tagline: 'Specialized corporate B2B DMC managing Phase 1, Phase 2, and Phase 3 buyer delegations with bilingual translators.',
        b2bNetIndicator: 'Wholesale Net from ₹32,000/pax (Ex-Guangzhou CAN)',
        sla: '4 Hours',
        groundAssets: [
            'Guangzhou Baiyun Airport (CAN) and Hong Kong to Guangzhou cross-border private transfers',
            'Daily private shuttle coaches running between partner hotels and Pazhou International Exhibition Complex',
            'Professional bilingual Mandarin-English-Hindi trade interpreters and sourcing escorts'
        ],
        hotelInventory: [
            'Confirmed hotel blocks at 4-star and 5-star properties situated within 15 to 25 minutes of Pazhou Complex',
            'Hotel inventory available even during peak demand windows without extortionate walk-in surges'
        ],
        b2bExclusives: [
            'Official Canton Fair Buyer Badge pre-registration clearance and invitation letter processing',
            'China Business (M) Visa documentation kit and fast-track submission advisory',
            'Post-fair industrial factory visit transfers to Foshan (ceramics/furniture) and Shenzhen (electronics)'
        ],
        foodSupport: 'Daily hot Indian breakfast and delivered Indian dinner boxes prepared by certified Indian chefs in Guangzhou.',
        canonicalRoute: '/international-tours/canton-fair-china'
    }
];

const finalFaqs = [
    { 
        question: "How does the B2B agent onboarding process work with Rudraksh Safar?", 
        answer: "The onboarding process is rapid and 100% digital. Submit your agency credentials using our online form below or directly message our B2B desk on WhatsApp (+91 9203650311). Our verification team reviews your trade credentials (GSTIN, MSME Udyam, or agency letterhead) within 2 hours. Once verified, you receive your dedicated Account Manager, direct wholesale tariff sheets, and unbranded promotional collateral." 
    },
    { 
        question: "How does the wholesale net-rate pricing model work?", 
        answer: "We operate on a pure wholesale B2B net-rate model. We deliver bottom-line net pricing for hotels, transport, activities, and permits. We do not dictate your retail selling price or cap your commission. You have total autonomy to add your desired markup (e.g., 10%, 20%, or 30%) before sharing the final quotation with your retail client, ensuring your agency maximizes its profit margin." 
    },
    { 
        question: "Are your ground operations truly 100% white-labeled?", 
        answer: "Yes. Our Agent Protection Policy is legally binding and uncompromising. All airport placards, vehicle signage, transfer vouchers, and driver interactions are executed entirely under your agency's name. We never display 'Rudraksh Safar' branding to your guests, and our ground representatives will never contact, solicit, or share marketing material with your retail clients under any circumstances." 
    },
    { 
        question: "Which destinations do you support as a direct B2B ground DMC?", 
        answer: "We provide comprehensive ground handling across 12 high-demand sectors: Chardham Yatra, Kashmir Valley, Leh Ladakh, Manali & Kasol, Nainital & Jim Corbett, Mussoorie & Dhanaulti, Puri Jagannath Dham, Andaman & Nicobar Islands, Dubai & UAE, Vietnam, Thailand, and Canton Fair China trade delegations." 
    },
    { 
        question: "Can our agency claim GST Input Tax Credit (ITC) on B2B invoices?", 
        answer: "Yes. Rudraksh Safar is an active, fully tax-compliant corporate entity registered in India with legal GSTIN 22AGBPC7350G1ZZ. We generate legitimate B2B GST tax invoices featuring your agency's registered GSTIN for all domestic and overseas bookings, allowing you to legally claim full Input Tax Credit (ITC) and optimize your company's fiscal balance sheet." 
    },
    { 
        question: "What is your turnaround SLA for B2B quotation requests?", 
        answer: "For standard FIT and series departures (such as Thailand, Dubai, Manali, Kashmir, Chardham, or Andaman), our dedicated B2B desk delivers complete unbranded PDF itineraries with net rates within 2 to 4 hours. For customized multi-city itineraries, luxury destination weddings, or large corporate MICE movements, we guarantee a comprehensive proposal within 24 hours." 
    },
    { 
        question: "What level of on-ground crisis management and 24/7 support is provided?", 
        answer: "Every partner agency is assigned a dedicated India-based B2B Account Manager for daily coordination. Additionally, our localized destination teams operate 24/7 on-ground emergency desks in regions like Srinagar, Leh, Haridwar, Bangkok, and Dubai. If flight cancellations, extreme weather, road blockages, or passenger medical emergencies occur, our ground teams step in immediately to reroute transport and adjust hotel bookings, shielding you from distress." 
    },
    { 
        question: "Do you cater to specialized Indian dietary requirements (Jain, Gujarati, South Indian)?", 
        answer: "Yes. In remote Himalayan sectors (Kedarnath, Pangong Lake, Badrinath) and international hubs (Vietnam, Dubai, Thailand, Guangzhou), we provide pre-vetted pure vegetarian, Jain (no onion, no garlic), Gujarati, and South Indian catering solutions. For corporate MICE and wedding buyouts, we coordinate specialized Indian chef teams and live tandoor counters." 
    },
    { 
        question: "Do you provide credit facilities or flexible payment milestones for travel agents?", 
        answer: "We support flexible milestone payments structured to match your client's booking cycle: an initial token advance to lock hotel allotments and vehicle fleets, followed by scheduled milestone clearances prior to voucher generation. Established partner agencies with proven transaction volumes qualify for our revolving B2B credit window upon formal review." 
    },
    { 
        question: "How do you handle group series and corporate MICE movements?", 
        answer: "We specialize in corporate conferences, dealer incentive meets, and college group tours ranging from 20 to 500+ passengers. We provide complete backend logistics including banquet venue contracting, audio-visual stage setups, team-building excursions, chartered flights/Volvo series, and custom merchandise bearing your client's corporate logo." 
    }
];

const B2BHub = () => {
    const breadcrumbItems = [
        { label: 'B2B Partners', path: '/b2b-travel-partners' }
    ];

    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedDest, setSelectedDest] = useState<DestinationDMC | null>(b2bDestinations[0]);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const [formData, setFormData] = useState({
        agencyName: '',
        contactPerson: '',
        phone: '',
        email: '',
        city: '',
        gstin: '',
        targetDestinations: 'All Destinations'
    });

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        const textMsg = `*New B2B Partnership Registration Request*%0A%0A*Agency:* ${encodeURIComponent(formData.agencyName)}%0A*Contact:* ${encodeURIComponent(formData.contactPerson)}%0A*WhatsApp:* ${encodeURIComponent(formData.phone)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*City:* ${encodeURIComponent(formData.city)}%0A*GSTIN/MSME:* ${encodeURIComponent(formData.gstin || 'Pending')}%0A*Destinations:* ${encodeURIComponent(formData.targetDestinations)}`;
        window.open(`https://wa.me/919203650311?text=${textMsg}`, '_blank');
    };

    const filteredDestinations = b2bDestinations.filter(d => {
        const matchesCategory = selectedCategory === 'all' || d.category === selectedCategory;
        const matchesSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              d.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              d.tagline.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <main className="min-h-screen bg-slate-50 pt-20 pb-16 selection:bg-primary/20 selection:text-primary">
            <Helmet>
                <title>B2B Travel Partner Hub & DMC Net Rates | Chardham, Kashmir, Ladakh, Dubai, Vietnam, Manali, Andaman, Puri | Rudraksh Safar</title>
                <meta name="description" content="India's leading B2B DMC and wholesale travel partner network. Access transparent net tariffs, direct fleet logistics, white-label vouchers, and 100% agent protection across Chardham, Kashmir, Ladakh, Manali, Nainital, Mussoorie, Puri, Andaman, Dubai, Vietnam, and Thailand." />
                <link rel="canonical" href="https://rudrakshsafar.com/b2b-travel-partners" />
                <meta name="keywords" content="B2B travel agent portal India, DMC Chardham Yatra, Kashmir B2B tour operator, Ladakh ground handling DMC, Dubai wholesale travel partner, Vietnam DMC for Indian travel agents, Andaman B2B net rates, Manali Volvo group series, Puri Jagannath DMC, white label DMC India" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "TravelAgency",
                                "@id": "https://rudrakshsafar.com/#organization",
                                "name": "Rudraksh Safar - B2B DMC Division",
                                "url": "https://rudrakshsafar.com/b2b-travel-partners",
                                "logo": "https://rudrakshsafar.com/favicon.png",
                                "taxID": "22AGBPC7350G1ZZ",
                                "description": "National B2B Destination Management Company providing wholesale net rates, direct transport fleets, hotel blocks, and 100% white-label ground operations to 300+ Indian travel agencies.",
                                "telephone": "+919203650311",
                                "email": "rudrakshsafar@gmail.com",
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "Sanjeev Enterprises, GE Road, In Front of Petrol Pump, Bhilai-3",
                                    "addressLocality": "Bhilai",
                                    "addressRegion": "Chhattisgarh",
                                    "postalCode": "490021",
                                    "addressCountry": "IN"
                                },
                                "areaServed": ["IN", "TH", "AE", "VN", "CN"],
                                "priceRange": "$$"
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": finalFaqs.map(faq => ({
                                    "@type": "Question",
                                    "name": faq.question,
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": faq.answer
                                    }
                                }))
                            },
                            {
                                "@type": "ItemList",
                                "name": "Rudraksh Safar B2B DMC Destination Hubs",
                                "description": "Master list of domestic and international destinations serviced with direct wholesale ground handling.",
                                "itemListElement": b2bDestinations.map((dest, index) => ({
                                    "@type": "ListItem",
                                    "position": index + 1,
                                    "name": dest.name,
                                    "description": dest.tagline,
                                    "url": `https://rudrakshsafar.com${dest.canonicalRoute}`
                                }))
                            }
                        ]
                    })}
                </script>
            </Helmet>

            <Navbar />

            <div className="container mx-auto px-4 mt-2 mb-4">
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white min-h-[75vh] flex items-center pt-16 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-20">
                    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto text-center">
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-emerald-400 border border-emerald-400/30 mb-6 backdrop-blur-md font-semibold text-xs md:text-sm tracking-wide uppercase">
                            <ShieldCheck className="w-4 h-4 text-emerald-400" />
                            GST Registered MSME • GSTIN: 22AGBPC7350G1ZZ • 100% Agent Safe
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight text-white drop-shadow-md">
                            India's Premier <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-amber-300 to-primary">B2B DMC Network</span> & Wholesale Net Rates
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-lg md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
                            Stop losing high margins to multi-tier middlemen. Partner directly with a verified Destination Management Company delivering transparent net tariffs, company-owned vehicle fleets, direct hotel blocks, and an ironclad non-compete guarantee.
                        </motion.p>

                        {/* Performance Counters */}
                        <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10 text-center">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                                <p className="text-3xl font-extrabold text-secondary"><AnimatedCounter to={300} /></p>
                                <p className="text-xs text-slate-300 uppercase tracking-wider font-semibold mt-1">Partner Agencies</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                                <p className="text-3xl font-extrabold text-emerald-400"><AnimatedCounter to={15000} /></p>
                                <p className="text-xs text-slate-300 uppercase tracking-wider font-semibold mt-1">Guests Handled</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                                <p className="text-3xl font-extrabold text-blue-400">12+</p>
                                <p className="text-xs text-slate-300 uppercase tracking-wider font-semibold mt-1">Direct DMC Sectors</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                                <p className="text-3xl font-extrabold text-purple-400">2-4 Hrs</p>
                                <p className="text-xs text-slate-300 uppercase tracking-wider font-semibold mt-1">Quotation SLA</p>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a href="#onboarding" className="w-full sm:w-auto bg-gradient-to-r from-secondary to-amber-500 hover:from-secondary/90 hover:to-amber-600 text-slate-950 px-8 py-4 rounded-xl font-bold text-base shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 transition-all">
                                <Handshake className="w-5 h-5" /> Instant Agent Registration
                            </a>
                            <a href="https://wa.me/919203650311?text=Hi%20Rudraksh%20Safar%20B2B%20Desk,%20I%20am%20a%20travel%20agent%20interested%20in%20partnering%20for%20wholesale%20DMC%20net%20rates." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white border border-emerald-400/40 px-8 py-4 rounded-xl font-bold text-base shadow-lg flex items-center justify-center gap-2 transition-all">
                                <MessageSquare className="w-5 h-5" /> WhatsApp B2B Helpdesk
                            </a>
                            <a href="#destinations" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-base backdrop-blur-md flex items-center justify-center gap-2 transition-all">
                                <Compass className="w-5 h-5" /> Explore DMC Sectors
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Navigation Strip */}
            <section className="py-4 bg-white border-b border-border sticky top-16 z-30 shadow-sm backdrop-blur-md bg-white/95">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between overflow-x-auto gap-6 text-sm font-semibold text-slate-700 no-scrollbar py-1">
                        <a href="#destinations" className="whitespace-nowrap hover:text-primary flex items-center gap-1.5"><Compass className="w-4 h-4 text-primary" /> 12 DMC Sectors</a>
                        <a href="#operational-firewall" className="whitespace-nowrap hover:text-primary flex items-center gap-1.5"><Shield className="w-4 h-4 text-emerald-600" /> Non-Compete Guarantee</a>
                        <a href="#benefits" className="whitespace-nowrap hover:text-primary flex items-center gap-1.5"><Star className="w-4 h-4 text-amber-500" /> B2B Advantages</a>
                        <a href="#aeo-knowledge" className="whitespace-nowrap hover:text-primary flex items-center gap-1.5"><HelpCircle className="w-4 h-4 text-blue-600" /> Operational Insights (AEO)</a>
                        <a href="#onboarding" className="whitespace-nowrap hover:text-primary flex items-center gap-1.5"><UserCheck className="w-4 h-4 text-purple-600" /> Fast-Track Registration</a>
                        <a href="#faqs" className="whitespace-nowrap hover:text-primary flex items-center gap-1.5"><FileText className="w-4 h-4 text-slate-500" /> Trade FAQs</a>
                    </div>
                </div>
            </section>

            {/* Master 12-Destination B2B DMC Grid */}
            <section id="destinations" className="py-20 bg-slate-50 border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-3">
                            <Layers className="w-4 h-4" /> Comprehensive Ground Capabilities
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                            Explore Our Direct <span className="text-primary">DMC Destination Sectors</span>
                        </h2>
                        <p className="text-base md:text-lg text-slate-600 mt-4">
                            We own, operate, or directly contract our vehicle fleets, high-altitude camps, luxury houseboats, and hotel allocations across 12 high-velocity domestic and international sectors.
                        </p>

                        {/* Search & Category Filter */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
                            <input 
                                type="text"
                                placeholder="Search sector (e.g. Chardham, Kashmir, Dubai, Vietnam, Manali)..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full sm:w-80 px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                            />
                            <div className="flex flex-wrap gap-2 justify-center">
                                {[
                                    { key: 'all', label: 'All 12 Sectors' },
                                    { key: 'spiritual', label: 'Spiritual / Yatra' },
                                    { key: 'himalayan', label: 'Himalayan / Snow' },
                                    { key: 'island', label: 'Islands & Beach' },
                                    { key: 'international', label: 'International & Trade' },
                                    { key: 'heritage', label: 'Hill Stations / Wildlife' }
                                ].map(cat => (
                                    <button
                                        key={cat.key}
                                        onClick={() => setSelectedCategory(cat.key)}
                                        className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                                            selectedCategory === cat.key 
                                                ? 'bg-slate-900 text-white shadow' 
                                                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                                        }`}
                                    >
                                        {cat.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Destination Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {filteredDestinations.map((dest) => (
                            <div 
                                key={dest.id}
                                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img 
                                        src={dest.image} 
                                        alt={dest.name} 
                                        loading="lazy" 
                                        decoding="async" 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                    <div className="absolute top-3 left-3">
                                        <span className="bg-primary/95 text-white text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                                            {dest.badge}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-3 left-3 right-3 text-white">
                                        <h3 className="font-bold text-xl leading-snug drop-shadow">{dest.name}</h3>
                                        <p className="text-xs text-slate-200 truncate">{dest.region}</p>
                                    </div>
                                </div>

                                <div className="p-5 flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1.5 rounded-lg text-xs font-bold mb-3 flex items-center justify-between">
                                            <span>{dest.b2bNetIndicator}</span>
                                            <span className="text-[10px] bg-emerald-200/60 px-2 py-0.5 rounded text-emerald-900 font-semibold">SLA: {dest.sla}</span>
                                        </div>

                                        <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                                            {dest.tagline}
                                        </p>

                                        {/* Key B2B Specifications */}
                                        <div className="space-y-2 border-t border-slate-100 pt-3 text-xs">
                                            <div>
                                                <span className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                                                    <Car className="w-3.5 h-3.5 text-blue-600" /> Ground Fleet:
                                                </span>
                                                <p className="text-slate-600 pl-5 text-[11px] leading-tight line-clamp-2">{dest.groundAssets[0]}</p>
                                            </div>
                                            <div>
                                                <span className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                                                    <Hotel className="w-3.5 h-3.5 text-purple-600" /> Hotel Inventory:
                                                </span>
                                                <p className="text-slate-600 pl-5 text-[11px] leading-tight line-clamp-2">{dest.hotelInventory[0]}</p>
                                            </div>
                                            <div>
                                                <span className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                                                    <Sparkles className="w-3.5 h-3.5 text-amber-500" /> B2B Exclusives:
                                                </span>
                                                <p className="text-slate-600 pl-5 text-[11px] leading-tight line-clamp-2">{dest.b2bExclusives[0]}</p>
                                            </div>
                                            <div>
                                                <span className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                                                    <Utensils className="w-3.5 h-3.5 text-emerald-600" /> Dietary Support:
                                                </span>
                                                <p className="text-slate-600 pl-5 text-[11px] leading-tight">{dest.foodSupport}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-5 mt-4 border-t border-slate-100 flex items-center gap-2">
                                        <button 
                                            onClick={() => {
                                                setSelectedDest(dest);
                                                const el = document.getElementById('dest-detail-modal');
                                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                                            }}
                                            className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold py-2.5 rounded-lg transition-colors text-center"
                                        >
                                            Inspect Operations
                                        </button>
                                        <a 
                                            href={`https://wa.me/919203650311?text=Hi%20Rudraksh%20Safar%20B2B%20Desk,%20please%20share%20wholesale%20net%20rates%20and%20quotation%20format%20for%20${encodeURIComponent(dest.name)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3 py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1"
                                            title="Request Net Rates on WhatsApp"
                                        >
                                            <MessageSquare className="w-3.5 h-3.5" /> Quote
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Quick Sector Details Deep-Dive Drawer */}
                    {selectedDest && (
                        <div id="dest-detail-modal" className="mt-16 bg-white rounded-3xl border border-slate-200 p-6 md:p-10 shadow-lg max-w-5xl mx-auto scroll-mt-28">
                            <div className="flex flex-col md:flex-row gap-6 items-start justify-between border-b border-slate-200 pb-6">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-extrabold uppercase tracking-wider mb-2">
                                        {selectedDest.badge}
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">{selectedDest.name} — B2B Operational Blueprint</h3>
                                    <p className="text-sm text-slate-500 mt-1">{selectedDest.region}</p>
                                </div>
                                <div className="text-left md:text-right">
                                    <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">Standard B2B Indicator</p>
                                    <p className="text-lg font-extrabold text-emerald-600">{selectedDest.b2bNetIndicator}</p>
                                    <p className="text-xs text-slate-500 font-medium">Turnaround SLA: {selectedDest.sla}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                                <div>
                                    <h4 className="font-bold text-sm text-slate-900 mb-3 flex items-center gap-2">
                                        <Car className="w-4 h-4 text-blue-600" /> Dedicated Fleet & Transit Grid
                                    </h4>
                                    <ul className="space-y-2 text-xs text-slate-600">
                                        {selectedDest.groundAssets.map((asset, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                                <span>{asset}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <h4 className="font-bold text-sm text-slate-900 mt-6 mb-3 flex items-center gap-2">
                                        <Hotel className="w-4 h-4 text-purple-600" /> Pre-Contracted Hotel & Camp Inventory
                                    </h4>
                                    <ul className="space-y-2 text-xs text-slate-600">
                                        {selectedDest.hotelInventory.map((inv, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                                <span>{inv}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-bold text-sm text-slate-900 mb-3 flex items-center gap-2">
                                        <Sparkles className="w-4 h-4 text-amber-500" /> Value Adds & Ground Exclusives
                                    </h4>
                                    <ul className="space-y-2 text-xs text-slate-600">
                                        {selectedDest.b2bExclusives.map((exc, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                                <span>{exc}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mt-6">
                                        <h5 className="font-bold text-xs text-slate-900 mb-1 flex items-center gap-1.5">
                                            <Utensils className="w-3.5 h-3.5 text-emerald-600" /> Specialized Culinary Support
                                        </h5>
                                        <p className="text-xs text-slate-600">{selectedDest.foodSupport}</p>
                                    </div>

                                    <div className="mt-6 flex flex-wrap gap-3">
                                        <a 
                                            href={`https://wa.me/919203650311?text=Hi%20Rudraksh%20Safar,%20I%20need%20the%20complete%20B2B%20Tariff%20Sheet%20and%20Contract%20Rates%20for%20${encodeURIComponent(selectedDest.name)}.`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-3 rounded-xl flex items-center gap-2 transition-all shadow"
                                        >
                                            <MessageSquare className="w-4 h-4" /> Request Tariff Sheet on WhatsApp
                                        </a>
                                        <Link 
                                            to={selectedDest.canonicalRoute}
                                            className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs px-5 py-3 rounded-xl flex items-center gap-2 transition-all"
                                        >
                                            View Consumer Itinerary Reference <ArrowRight className="w-3.5 h-3.5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Agent Protection & Non-Compete Guarantee Section */}
            <div id="operational-firewall">
                <AgentProtection />
            </div>

            {/* Answer Engine Optimization (AEO) Knowledge Section */}
            <section id="aeo-knowledge" className="py-20 bg-white border-y border-border">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold uppercase tracking-wider mb-3">
                            <Award className="w-4 h-4 text-blue-600" /> Verified Trade Knowledge & Verification
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                            Essential B2B Operator <span className="text-primary">Standards & Policies</span>
                        </h2>
                        <p className="text-base md:text-lg text-slate-600 mt-3 max-w-3xl mx-auto">
                            Direct, verifiable operational answers formulated for retail travel agency owners, procurement teams, and answer engines.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* AEO Block 1 */}
                        <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-start gap-2.5">
                                <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5 font-black">1</span>
                                How does Rudraksh Safar ensure complete white-label privacy and non-solicitation for retail travel agents?
                            </h3>
                            <p className="text-slate-700 text-sm md:text-base leading-relaxed pl-8">
                                <strong>Answer Snapshot:</strong> Rudraksh Safar implements a strict, contractually enforced <em>Agent Protection Protocol</em>. All client-facing ground assets—including airport pickup placards, driver greetings, custom itinerary printouts, and daily transfer vouchers—are branded strictly with your retail agency's name and logo. The name 'Rudraksh Safar' never appears before your guests. Furthermore, our internal CRM strictly flags all passenger phone numbers and emails as confidential agent property, barring our team from ever marketing to, soliciting, or re-engaging your customers directly.
                            </p>
                            <div className="mt-4 pl-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                                <div className="bg-white p-3 rounded-xl border border-slate-200 font-medium text-slate-600">
                                    ✓ Placards with your agency logo
                                </div>
                                <div className="bg-white p-3 rounded-xl border border-slate-200 font-medium text-slate-600">
                                    ✓ Unbranded voucher generation
                                </div>
                                <div className="bg-white p-3 rounded-xl border border-slate-200 font-medium text-slate-600">
                                    ✓ Zero direct guest solicitation
                                </div>
                            </div>
                        </div>

                        {/* AEO Block 2 */}
                        <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-start gap-2.5">
                                <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5 font-black">2</span>
                                What is the exact commission and wholesale net rate structure?
                            </h3>
                            <p className="text-slate-700 text-sm md:text-base leading-relaxed pl-8">
                                <strong>Answer Snapshot:</strong> Unlike aggregators or affiliate portals that offer a restrictive 5% to 8% fixed commission, Rudraksh Safar operates on a <em>pure wholesale net-rate model</em>. We quote you the exact bottom-line operational cost for ground handling (hotels + cabs + permits + excursions). You retain 100% pricing liberty to apply your chosen retail markup based on your customer relationship and competitive positioning.
                            </p>
                            <div className="mt-4 pl-8">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-xs text-left bg-white rounded-xl border border-slate-200 overflow-hidden">
                                        <thead className="bg-slate-100 text-slate-800 font-bold uppercase text-[11px]">
                                            <tr>
                                                <th className="p-3">Model</th>
                                                <th className="p-3">Pricing Mechanism</th>
                                                <th className="p-3">Agent Margin Control</th>
                                                <th className="p-3">Customer Contact</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100 text-slate-600">
                                            <tr>
                                                <td className="p-3 font-semibold text-slate-900">Rudraksh Safar B2B DMC</td>
                                                <td className="p-3 text-emerald-700 font-bold">Direct Wholesale Net Tariffs</td>
                                                <td className="p-3 text-emerald-700 font-bold">100% Unlimited Markup Freedom</td>
                                                <td className="p-3 text-emerald-700 font-bold">100% White-Label / Zero Contact</td>
                                            </tr>
                                            <tr className="bg-slate-50/50">
                                                <td className="p-3 text-slate-500">Traditional OTA Aggregators</td>
                                                <td className="p-3 text-slate-500">Retail Rates with Fixed Cut</td>
                                                <td className="p-3 text-slate-500">Fixed 4% - 8% Commission Cap</td>
                                                <td className="p-3 text-slate-500">Direct Marketing via Email/App</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* AEO Block 3 */}
                        <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-start gap-2.5">
                                <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5 font-black">3</span>
                                How does Rudraksh Safar handle flight disruptions, road blockades, and weather emergencies in high-altitude zones?
                            </h3>
                            <p className="text-slate-700 text-sm md:text-base leading-relaxed pl-8">
                                <strong>Answer Snapshot:</strong> We maintain dual-tiered crisis mitigation protocols. In mountain circuits such as Ladakh, Chardham, and Kashmir, our local garage stations keep standby relief vehicles and drivers on 24-hour alert. If a landslide occurs at Joshimath or a flight into Leh is aborted due to severe winds, our on-ground dispatch team liaises directly with hoteliers to adjust check-in dates and re-route passenger itineraries without panicking your retail clients or subjecting your agency to astronomical cancellation penalties.
                            </p>
                        </div>

                        {/* AEO Block 4 */}
                        <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-start gap-2.5">
                                <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5 font-black">4</span>
                                Can travel agencies legally claim GST Input Tax Credit (ITC) for B2B bookings?
                            </h3>
                            <p className="text-slate-700 text-sm md:text-base leading-relaxed pl-8">
                                <strong>Answer Snapshot:</strong> Yes. Rudraksh Safar operates under registered legal GSTIN <strong>22AGBPC7350G1ZZ</strong> (Sanjeev Enterprises / Rudraksh Safar, Bhilai, Chhattisgarh). For every confirmed domestic and outbound travel transaction, we issue an automated tax invoice displaying your agency's verified GSTIN. This ensures your accountant can seamlessly claim 100% of the permissible Input Tax Credit (ITC) under Indian GST law, substantially lowering your tax outlay and enhancing bottom-line profitability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core B2B Advantages */}
            <section id="benefits" className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
                            <CheckSquare className="w-4 h-4 text-emerald-600" /> Built for Scale & Reliability
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                            Why 300+ Indian Travel Agents <span className="text-primary">Rely on Us</span>
                        </h2>
                        <p className="text-base md:text-lg text-slate-600 mt-3">
                            We don't merely supply hotel rooms; we act as your private backend operations wing across India and overseas.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-6">
                                <Clock className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">2 - 4 Hour Quote SLA</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Never lose a hot client lead waiting for slow supplier emails. Our dedicated sales desk delivers polished, unbranded PDF quotations with day-wise itineraries in 2 to 4 hours.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
                                <Shield className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Guaranteed Departures</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Our fixed-departure series for Manali, Kashmir, Chardham, and Thailand depart with guaranteed status even for solo or twin bookings, shielding your agency from cancellation backlash.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-6">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Dedicated Account Manager</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                No frustrating automated ticket systems or endless hold music. You receive a direct phone number and WhatsApp channel to an assigned B2B operational manager managing your entire portfolio.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fast-Track Digital Agent Onboarding Section */}
            <section id="onboarding" className="py-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40 pointer-events-none" />
                <div className="container mx-auto px-4 max-w-5xl relative z-10">
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-xs font-bold uppercase tracking-wider mb-3">
                            <UserCheck className="w-4 h-4 text-secondary" /> Fast 2-Hour Verification
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                            Fast-Track Your <span className="text-secondary">B2B Agent Registration</span>
                        </h2>
                        <p className="text-base md:text-lg text-slate-300 mt-3 max-w-2xl mx-auto font-light">
                            Zero paperwork fees, zero complicated portals. Fill in your agency details to unlock immediate wholesale net rates and priority ground inventory.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        {/* Onboarding Steps */}
                        <div className="lg:col-span-5 space-y-6">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                                    <span className="w-7 h-7 rounded-full bg-secondary text-slate-950 font-black text-xs flex items-center justify-center">1</span>
                                    Submit Trade Details
                                </h4>
                                <p className="text-xs text-slate-300 leading-relaxed pl-9">
                                    Provide your agency name, active WhatsApp number, and city. Adding your GSTIN or MSME number ensures automated fast-track verification within 2 hours.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                                    <span className="w-7 h-7 rounded-full bg-secondary text-slate-950 font-black text-xs flex items-center justify-center">2</span>
                                    Receive Wholesale Tariff Sheet
                                </h4>
                                <p className="text-xs text-slate-300 leading-relaxed pl-9">
                                    Your assigned Account Manager connects with you on WhatsApp and delivers your welcome package containing net pricing sheets and unbranded itinerary collateral.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                                    <span className="w-7 h-7 rounded-full bg-secondary text-slate-950 font-black text-xs flex items-center justify-center">3</span>
                                    Start Quoting & Maximizing Profits
                                </h4>
                                <p className="text-xs text-slate-300 leading-relaxed pl-9">
                                    Send us your passenger inquiries anytime. Receive customized unbranded PDF quotes within 2-4 hours, apply your desired markup, and close more bookings.
                                </p>
                            </div>
                        </div>

                        {/* Registration Form */}
                        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-2xl text-slate-900 border border-slate-200">
                            <h3 className="text-2xl font-extrabold mb-1 text-slate-900">Partner Registration Form</h3>
                            <p className="text-xs text-slate-500 mb-6 font-medium">Join 300+ Indian travel partners scaling their operations.</p>

                            {isSubmitted ? (
                                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center text-emerald-800">
                                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                                    <h4 className="text-lg font-bold mb-1">Registration In Progress!</h4>
                                    <p className="text-xs text-emerald-700 mb-4">
                                        Your agency details have been forwarded to our WhatsApp B2B desk. If WhatsApp didn't open automatically, click below to connect directly:
                                    </p>
                                    <a 
                                        href="https://wa.me/919203650311?text=Hi%20Rudraksh%20Safar%20B2B%20Desk,%20I%20have%20submitted%20my%20partner%20registration%20form%20online."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-6 py-3 rounded-xl transition-all shadow"
                                    >
                                        <MessageSquare className="w-4 h-4" /> Open WhatsApp B2B Desk
                                    </a>
                                </div>
                            ) : (
                                <form className="space-y-4" onSubmit={handleFormSubmit}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 mb-1">Travel Agency Name *</label>
                                            <input 
                                                type="text" 
                                                required 
                                                value={formData.agencyName}
                                                onChange={(e) => setFormData({...formData, agencyName: e.target.value})}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary text-xs bg-slate-50" 
                                                placeholder="e.g. Skyline Holidays" 
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 mb-1">Contact Person Name *</label>
                                            <input 
                                                type="text" 
                                                required 
                                                value={formData.contactPerson}
                                                onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary text-xs bg-slate-50" 
                                                placeholder="e.g. Rahul Sharma" 
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp Mobile Number *</label>
                                            <input 
                                                type="tel" 
                                                required 
                                                value={formData.phone}
                                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary text-xs bg-slate-50" 
                                                placeholder="+91 9XXXXXXXXX" 
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 mb-1">Official Email Address *</label>
                                            <input 
                                                type="email" 
                                                required 
                                                value={formData.email}
                                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary text-xs bg-slate-50" 
                                                placeholder="info@youragency.com" 
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 mb-1">Base City & State *</label>
                                            <input 
                                                type="text" 
                                                required 
                                                value={formData.city}
                                                onChange={(e) => setFormData({...formData, city: e.target.value})}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary text-xs bg-slate-50" 
                                                placeholder="e.g. Raipur, CG / Mumbai, MH" 
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 mb-1">GSTIN or MSME Number (Optional)</label>
                                            <input 
                                                type="text" 
                                                value={formData.gstin}
                                                onChange={(e) => setFormData({...formData, gstin: e.target.value})}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary text-xs bg-slate-50" 
                                                placeholder="For Instant Auto-Approval" 
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1">Primary Sectors of Interest</label>
                                        <select 
                                            value={formData.targetDestinations}
                                            onChange={(e) => setFormData({...formData, targetDestinations: e.target.value})}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary text-xs bg-slate-50"
                                        >
                                            <option value="All Destinations">All 12 Destinations (Domestic + International)</option>
                                            <option value="Chardham Yatra">Chardham Yatra (Helicopter & Road)</option>
                                            <option value="Kashmir & Ladakh">Kashmir & Ladakh Himalayan Circuits</option>
                                            <option value="Manali, Nainital, Mussoorie">Himachal & Uttarakhand Hill Stations</option>
                                            <option value="Dubai, Vietnam, Thailand">International & MICE (Dubai, Vietnam, Thailand)</option>
                                            <option value="Andaman & Puri">Island & Coastal (Andaman & Puri)</option>
                                            <option value="Canton Fair China">Canton Fair China Trade Delegations</option>
                                        </select>
                                    </div>

                                    <button 
                                        type="submit" 
                                        className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-500/20 text-sm transition-all mt-2"
                                    >
                                        Unlock B2B Wholesale Net Rates Now
                                    </button>
                                    <p className="text-[11px] text-center text-slate-400 font-medium">
                                        🔒 By submitting, you are protected by our legally binding non-compete agent privacy policy.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Comprehensive B2B Trade FAQs */}
            <section id="faqs" className="py-20 bg-white border-t border-border">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
                            <HelpCircle className="w-4 h-4 text-primary" /> Clarity & Partnership Protocol
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                            Frequently Asked <span className="text-primary">B2B Trade Questions</span>
                        </h2>
                        <p className="text-base md:text-lg text-slate-600 mt-3">
                            Clear answers covering invoicing, payment schedules, itinerary white-labeling, and crisis handling.
                        </p>
                    </div>

                    <FAQsSection faqs={finalFaqs} title="" />

                    {/* Final CTA Bar */}
                    <div className="mt-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-8 md:p-12 text-center shadow-xl border border-slate-800">
                        <h3 className="text-2xl md:text-3xl font-extrabold mb-3">
                            Ready to Transform Your Travel Agency's Profit Margins?
                        </h3>
                        <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto mb-8 font-light">
                            Connect directly with our senior B2B operations management team today. Get wholesale net rates and begin offering unbranded world-class ground experiences.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a 
                                href="tel:+919203650311"
                                className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-950 font-bold px-8 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow"
                            >
                                <Phone className="w-4 h-4 text-primary" /> Call B2B Desk: +91 9203650311
                            </a>
                            <a 
                                href="https://wa.me/919203650311?text=Hi%20Rudraksh%20Safar,%20I%20am%20calling/messaging%20to%20discuss%20a%20B2B%20tie-up%20for%20our%20agency."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow"
                            >
                                <MessageSquare className="w-4 h-4" /> Message on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <FloatingWhatsApp />
            <Footer />
        </main>
    );
};

export default B2BHub;

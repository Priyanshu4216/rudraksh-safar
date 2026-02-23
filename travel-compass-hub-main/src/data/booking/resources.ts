import { Phone, Mail, MessageCircle, FileText, CheckCircle2, Clock, Ban } from 'lucide-react';

export const supportContacts = {
    sales: {
        name: 'Sales Team',
        phone: '+91-94061-82174',
        email: 'bookings@rudrakshsafar.com',
        available: '10:00 AM - 8:00 PM'
    },
    support: {
        name: 'Urgent Support',
        phone: '+91-94061-82174', // Using same for now, can be distinguished later
        available: '24/7 for On-Trip Guests'
    }
};

export const bookingStatusSteps = [
    {
        id: 'confirmed',
        label: 'Booking Confirmed',
        description: 'Your advance payment is received.',
        icon: CheckCircle2,
        color: 'text-green-600'
    },
    {
        id: 'hotels',
        label: 'Hotels Reserved',
        description: 'Rooms have been blocked in your name.',
        icon: FileText,
        color: 'text-blue-600'
    },
    {
        id: 'transport',
        label: 'Transport Assigned',
        description: 'Driver details will be shared 24hrs before trip.',
        icon: Clock,
        color: 'text-orange-600'
    },
    {
        id: 'ready',
        label: 'Ready for Trip',
        description: 'All documents and permits are ready.',
        icon: CheckCircle2,
        color: 'text-purple-600'
    }
];

export const usefulResources = [
    {
        title: 'Char Dham Packing List',
        link: '/what-to-pack-for-chardham-yatra',
        icon: FileText
    },
    {
        title: 'Temple Registration Guide',
        link: '/chardham-yatra-registration-process',
        icon: FileText
    },
    {
        title: 'Thailand Visa Info',
        link: '/international-tours/thailand',
        icon: FileText
    }
];

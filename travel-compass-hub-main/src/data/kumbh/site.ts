/**
 * Site configuration and publisher entity data for Haridwar Kumbh 2027 Hub.
 */

// Safe fallback for environment variables
const getEnvVar = (key: string, fallback: string): string => {
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env[key]) {
    return import.meta.env[key] as string;
  }
  return fallback;
};

export const KUMBH_SITE = {
  brandName: "Rudraksh Safar",
  brandNameHi: "रुद्राक्ष सफ़र",
  domain: "https://rudrakshsafar.com",
  canonicalBase: "https://rudrakshsafar.com",
  whatsappNumber: getEnvVar("VITE_WHATSAPP_NUMBER", "919203650311"),
  phoneNumber: getEnvVar("VITE_PHONE_NUMBER", "+919203650311"),
  displayPhone: "+91 92036 50311",
  supportEmail: "info@rudrakshsafar.com",
  headOffice: {
    address: "Shop No. 106, Satya Shanti Complex, Near Amantran Hotel, Supela, Bhilai, Chhattisgarh 490021",
    addressHi: "दुकान नं. 106, सत्य शांति कॉम्प्लेक्स, आमंत्रण होटल के पास, सुपेला, भिलाई, छत्तीसगढ़ 490021",
    city: "Bhilai",
    state: "Chhattisgarh",
    postalCode: "490021",
    country: "India"
  },
  sameAs: [
    "https://www.facebook.com/people/Rudraksh-Safar/pfbid0iAvSgkmW94itABRQ4h3f8kSkkyT16Kn7ocq97wUWVY35GWgj61YjdQNBeLy2nVTtl/",
    "https://www.instagram.com/rudrakshsafar?igsh=MWhnY25ieDBlNDVwbw==",
    "https://www.youtube.com/@RudrakshSafar"
  ],
  author: {
    name: "Rudraksh Safar Editorial Team",
    nameHi: "रुद्राक्ष सफ़र संपादकीय टीम",
    role: "Pilgrimage Planning Desk",
    verifiedName: "TODO_VERIFY" // To be verified with named ground guide
  },
  reviewer: {
    name: "Pandit & Tradition Research Cell",
    nameHi: "धार्मिक परंपरा एवं पंचांग शोध प्रकोष्ठ",
    verifiedName: "TODO_VERIFY" // To be verified with local scholar
  },
  responseCommitmentMinutes: 30, // Published human response commitment
  flagShowNashikDisambiguation: false // SHOW_NASHIK_DISAMBIGUATION default false as per spec
};

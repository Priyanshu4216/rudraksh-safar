import type { SnanEntry, SourceItem } from './types.ts';

export const HARIDWAR_KUMBH_FACTS = {
  eventNameEn: "Haridwar Ardh Kumbh Mela 2027",
  eventNameHi: "हरिद्वार अर्ध कुंभ मेला 2027",
  startDateISO: "2027-01-14",
  endDateISO: "2027-04-20",
  locationNameEn: "Har Ki Pauri, Haridwar, Uttarakhand, India",
  locationNameHi: "हर की पौड़ी, हरिद्वार, उत्तराखंड, भारत",
  melaType: "Ardh Kumbh (held every 6 years; previous Purna Kumbh held in 2021)",
  melaTypeHi: "अर्ध कुंभ (प्रत्येक 6 वर्ष में आयोजित; पिछला पूर्ण कुंभ 2021 में हुआ था)",
  officialAmritSnanCount: 3,
  totalBathingFestivals: 10,
  lastVerifiedDate: "2026-11-15",
  discrepancyNoteEn: "Note on Amrit Snan Count: Certain private travel and media portals refer to Chaitra Purnima (20 April 2027) as a 4th Amrit Snan. However, the official schedule released by the Uttarakhand Mela Administration on 15 April 2026 recognizes exactly three official Amrit Snan dates (6 March, 8 March, and 14 April 2027). Rudraksh Safar publishes the verified three-date list as mandated by the administration.",
  discrepancyNoteHi: "अमृत स्नान की संख्या पर आधिकारिक स्पष्टीकरण: कुछ निजी पोर्टल और ब्लॉग चैत्र पूर्णिमा (20 अप्रैल 2027) को चौथा अमृत स्नान बताते हैं। जबकि उत्तराखंड मेला प्रशासन द्वारा 15 अप्रैल 2026 को घोषित आधिकारिक कार्यक्रम में स्पष्ट रूप से केवल 3 अमृत स्नान (6 मार्च, 8 मार्च, और 14 अप्रैल 2027) शामिल हैं। रुद्राक्ष सफ़र केवल मेला प्रशासन द्वारा सत्यापित तीन तिथियों को ही प्रकाशित करता है।"
};

export const OFFICIAL_SOURCES: SourceItem[] = [
  {
    name: "Uttarakhand Mela Administration Notification (Mela Officer Sonika Singh)",
    url: "https://haridwarkumbhmela2027.uk.gov.in", // Verified official government portal link
    accessedOn: "2026-11-15",
    details: "Official schedule of 10 major bathing festivals and 3 Amrit Snans announced on 15 April 2026 as reported by PTI."
  },
  {
    name: "Uttarakhand Chief Minister Secretariat Announcement",
    url: "https://cm.uk.gov.in",
    accessedOn: "2026-11-15",
    details: "Cabinet briefing and preliminary notification of Haridwar Ardh Kumbh 2027 royal bath framework."
  },
  {
    name: "Press Trust of India (PTI) Bathing Calendar Dispatch",
    url: "https://www.ptinews.com",
    accessedOn: "2026-11-15",
    details: "Syndicated media release confirming official Haridwar 2027 Ardh Kumbh bathing dates."
  }
];

export const SNAN_DATES_2027: SnanEntry[] = [
  {
    id: "snan-1-makar-sankranti",
    dateISO: "2027-01-14",
    weekday: "Thursday",
    occasionEn: "Makar Sankranti",
    occasionHi: "मकर संक्रांति",
    type: "major",
    crowdEstimate: "very-high",
    crowdNoteEn: "Official opening bathing day of the Ardh Kumbh. Heavy rush of traditional pilgrims from North India; early morning dips recommended.",
    crowdNoteHi: "अर्ध कुंभ का आधिकारिक उद्घाटन स्नान। उत्तर भारत से भारी संख्या में श्रद्धालु आते हैं; प्रातःकाल स्नान श्रेयस्कर है।",
    suitableForSeniors: false
  },
  {
    id: "snan-2-mauni-amavasya",
    dateISO: "2027-02-06",
    weekday: "Saturday",
    occasionEn: "Mauni Amavasya",
    occasionHi: "मौनी अमावस्या",
    type: "major",
    crowdEstimate: "very-high",
    crowdNoteEn: "Sacred silent vow bathing festival. One of the highest single-day crowd gatherings of the festival season.",
    crowdNoteHi: "पवित्र मौन व्रत और मोक्षदायिनी स्नान। पूरे मेले के सबसे अधिक भीड़ वाले प्रमुख दिनों में से एक।",
    suitableForSeniors: false
  },
  {
    id: "snan-3-basant-panchami",
    dateISO: "2027-02-11",
    weekday: "Thursday",
    occasionEn: "Basant Panchami",
    occasionHi: "बसंत पंचमी",
    type: "major",
    crowdEstimate: "moderate",
    crowdNoteEn: "Pleasant spring weather and comparatively manageable ghat access. Well-suited for family groups and senior devotees.",
    crowdNoteHi: "सुखद वसंत ऋतु और अपेक्षाकृत सुगम घाट व्यवस्था। परिवारों और वरिष्ठ नागरिकों के लिए अत्यधिक अनुकूल दिन।",
    suitableForSeniors: true
  },
  {
    id: "snan-4-magh-purnima",
    dateISO: "2027-02-20",
    weekday: "Saturday",
    occasionEn: "Magh Purnima",
    occasionHi: "माघ पूर्णिमा",
    type: "major",
    crowdEstimate: "very-high",
    crowdNoteEn: "Culmination of the sacred month of Magha. Major turnout of Kalpvasis, saints, and rural pilgrim groups.",
    crowdNoteHi: "माघ मास के कल्पवास की पूर्णाहुति। संतों और कल्पवासी श्रद्धालुओं का व्यापक समागम।",
    suitableForSeniors: false
  },
  {
    id: "snan-5-mahashivratri",
    dateISO: "2027-03-06",
    weekday: "Saturday",
    occasionEn: "Maha Shivratri (1st Amrit Snan)",
    occasionHi: "महाशिवरात्रि (प्रथम अमृत स्नान)",
    type: "amrit",
    crowdEstimate: "very-high",
    crowdNoteEn: "First official Amrit Snan (Shahi Snan). Royal Akhara processions and Naga Sadhu entry to Brahma Kund. Extreme security and pedestrian cordons.",
    crowdNoteHi: "प्रथम आधिकारिक अमृत स्नान (शाही स्नान)। ब्रह्मकुंड पर अखाड़ों की भव्य पेशवाई एवं नागा संन्यासियों का स्नान। अत्यधिक सुरक्षा और पैदल नियम।",
    suitableForSeniors: false
  },
  {
    id: "snan-6-phalguna-amavasya",
    dateISO: "2027-03-08",
    weekday: "Monday",
    occasionEn: "Phalguna / Somvati Amavasya (2nd Amrit Snan)",
    occasionHi: "फाल्गुन / सोमवती अमावस्या (द्वितीय अमृत स्नान)",
    type: "amrit",
    crowdEstimate: "very-high",
    crowdNoteEn: "Second official Amrit Snan coinciding with Somvati Amavasya. Supreme astrological merit for ancestral tarpan; massive congregation.",
    crowdNoteHi: "द्वितीय आधिकारिक अमृत स्नान। सोमवती अमावस्या का दुर्लभ संयोग; पितृ तर्पण एवं अखाड़ा संतों का दिव्य स्नान।",
    suitableForSeniors: false
  },
  {
    id: "snan-7-nav-samvatsar",
    dateISO: "2027-04-07",
    weekday: "Wednesday",
    occasionEn: "Nav Samvatsar (Hindu New Year)",
    occasionHi: "नव संवत्सर (हिंदू नववर्ष)",
    type: "major",
    crowdEstimate: "calm",
    crowdNoteEn: "Hindu New Year and Chaitra Navratri commencement. Calm and devotional atmosphere, ideal for serene family bathing.",
    crowdNoteHi: "हिंदू नववर्ष और चैत्र नवरात्रि का पावन प्रारंभ। शांत और आध्यात्मिक वातावरण, बुजुर्गों और बाल-परिवारों के लिए सर्वोत्तम।",
    suitableForSeniors: true
  },
  {
    id: "snan-8-mesh-sankranti",
    dateISO: "2027-04-14",
    weekday: "Wednesday",
    occasionEn: "Mesh Sankranti / Baisakhi (3rd Amrit Snan)",
    occasionHi: "मेष संक्रांति / बैसाखी (तृतीय अमृत स्नान)",
    type: "amrit",
    crowdEstimate: "very-high",
    crowdNoteEn: "Third and principal Amrit Snan. Astronomical solar ingress into Aries; grand culmination of all 13 Akharas at Har Ki Pauri.",
    crowdNoteHi: "तृतीय एवं मुख्य अमृत स्नान। सूर्य का मेष राशि में प्रवेश; सभी 13 अखाड़ों का भव्यतम शाही स्नान समागम।",
    suitableForSeniors: false
  },
  {
    id: "snan-9-ram-navami",
    dateISO: "2027-04-15",
    weekday: "Thursday",
    occasionEn: "Ram Navami",
    occasionHi: "राम नवमी",
    type: "major",
    crowdEstimate: "very-high",
    crowdNoteEn: "Auspicious celebration of Maryada Purushottam Bhagwan Ram. High enthusiasm with devotional bhajans across all Haridwar ashrams.",
    crowdNoteHi: "मर्यादा पुरुषोत्तम भगवान श्री राम जन्मोत्सव। आश्रमों में विशेष रामकथा एवं गंगा तट पर उत्सवपूर्ण स्नान।",
    suitableForSeniors: false
  },
  {
    id: "snan-10-chaitra-purnima",
    dateISO: "2027-04-20",
    weekday: "Tuesday",
    occasionEn: "Chaitra Purnima (Final Concluding Snan)",
    occasionHi: "चैत्र पूर्णिमा (समापन महास्नान)",
    type: "final",
    crowdEstimate: "moderate",
    crowdNoteEn: "Final official bathing festival of the Ardh Kumbh Mela and Hanuman Jayanti. Mela Purnahuti ceremonies concluding the 4-month spiritual festival.",
    crowdNoteHi: "अर्ध कुंभ मेले का अंतिम आधिकारिक स्नान एवं हनुमान जयंती। 4 माह के महाकुंभ अनुष्ठान की पूर्णाहुति।",
    suitableForSeniors: true
  }
];

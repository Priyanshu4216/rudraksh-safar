const fs = require('fs');
const file = 'travel-compass-hub-main/src/data/kumbh/packages.ts';

const newContent = `import type { PackageTier } from './types.ts';
import { KUMBH_DISCLAIMERS } from './disclaimers.ts';

export const KUMBH_PACKAGES: PackageTier[] = [
  {
    id: "pkg-express-snan-2d1n",
    titleEn: "Haridwar Kumbh Express Snan Yatra",
    titleHi: "हरिद्वार कुंभ एक्सप्रेस स्नान यात्रा",
    duration: "2 Days / 1 Night",
    priceRangeInr: "Starting from ₹4,999 per person (Twin Sharing)",
    idealForEn: "Devotees and working professionals looking for a quick, focused sacred bath during major snan dates without taking extensive leave.",
    idealForHi: "सीमित समय में प्रमुख स्नान पर्व पर पवित्र गंगा स्नान एवं दर्शन के इच्छुक कामकाजी श्रद्धालुओं के लिए उत्तम।",
    inclusionsEn: [
      "1 Night AC hotel / ashram accommodation in Bhupatwala / Haridwar",
      "Haridwar railway station pickup and drop in private vehicle",
      "Pure vegetarian sattvic dinner and breakfast",
      "Guided walk to designated bathing ghat with safety escort",
      "Reserved viewing assistance for Har Ki Pauri evening Ganga Aarti",
      "24/7 on-ground emergency helpdesk assistance"
    ],
    inclusionsHi: [
      "भूपतवाला/हरिद्वार के सत्यापित होटल या आश्रम में 1 रात्रि वातानुकूलित प्रवास",
      "हरिद्वार रेलवे स्टेशन से आगमन एवं प्रस्थान हेतु वाहन सुविधा",
      "प्रतिदिन शुद्ध सात्विक रात्रि भोजन एवं प्रातःकालीन अल्पाहार",
      "निर्धारित पवित्र स्नान घाट तक मार्गदर्शक सहायता",
      "हर की पौड़ी पर सायंकालीन गंगा आरती दर्शन सहयोग",
      "रुद्राक्ष सफ़र हरिद्वार हेल्पडेस्क द्वारा 24/7 आपातकालीन सहयोग"
    ],
    exclusionsEn: [
      "Train or flight tickets to and from Haridwar",
      "Personal puja samagri, priest dakshina, and ritual fees",
      "Vehicle movement inside restricted pedestrian mela security cordons",
      "Mandatory 5% GST as applicable"
    ],
    exclusionsHi: [
      "हरिद्वार आने-जाने हेतु रेल अथवा वायुयान टिकट",
      "व्यक्तिगत पूजा सामग्री, दक्षिणा एवं धार्मिक कर्मकांड शुल्क",
      "मेला क्षेत्र के पैदल प्रतिबंधित सुरक्षा घेरे में वाहन आवागमन",
      "लागू 5% सरकारी जीएसटी"
    ],
    cancellationPolicyEn: "100% refund up to 20 days prior to arrival. 50% refund between 10–19 days. Non-refundable within 9 days of peak snan date.",
    cancellationPolicyHi: "आगमन से 20 दिन पूर्व तक पूर्ण वापसी। 10 से 19 दिन पूर्व 50% वापसी। प्रमुख स्नान तिथि से 9 दिन के भीतर अग्रिम राशि अहस्तांतरणीय।"
  },
  {
    id: "pkg-ashram-hotel-3d2n",
    titleEn: "Devotional Snan Stay (Ashram / Hotel)",
    titleHi: "श्रद्धा एवं स्नान प्रवास (आश्रम / होटल)",
    duration: "3 Days / 2 Nights",
    priceRangeInr: "Starting from ₹7,499 per person (Twin Sharing)",
    idealForEn: "Individual devotees, couples, and budget-conscious pilgrims seeking a traditional, spiritual stay near holy bathing ghats.",
    idealForHi: "पवित्र घाटों के समीप पारंपरिक एवं सात्विक प्रवास चाहने वाले व्यक्तिगत श्रद्धालुओं और युगलों के लिए उत्तम।",
    inclusionsEn: [
      "2 Nights AC accommodation in verified Bhoopatwala / Haridwar ashram or hotel",
      "Daily pure vegetarian sattvic breakfast and dinner",
      "Assisted walking guidance to designated public bathing ghats",
      "Evening Ganga Aarti darshan guidance at Har Ki Pauri",
      "Station pickup and drop coordination",
      "24/7 telephonic assistance from Rudraksh Safar Haridwar helpdesk"
    ],
    inclusionsHi: [
      "भूपतवाला/हरिद्वार के सत्यापित आश्रम या होटल में 2 रात्रि वातानुकूलित प्रवास",
      "प्रतिदिन शुद्ध सात्विक प्रातःकालीन अल्पाहार एवं रात्रि भोजन",
      "निर्धारित स्नान घाटों तक मार्गदर्शक सहायता",
      "हर की पौड़ी पर सायंकालीन भव्य गंगा आरती दर्शन मार्गदर्शन",
      "रेलवे स्टेशन से आगमन एवं प्रस्थान सहायता",
      "रुद्राक्ष सफ़र हरिद्वार हेल्पडेस्क द्वारा 24/7 दूरभाषीय सहयोग"
    ],
    exclusionsEn: [
      "Personal train or flight fares to and from Haridwar",
      "Personal temple puja, dakshina, and ritual offerings",
      "Any vehicle transfers inside restricted pedestrian mela cordons",
      "Mandatory 5% GST as applicable"
    ],
    exclusionsHi: [
      "हरिद्वार आने-जाने के लिए रेल या वायुयान किराया",
      "व्यक्तिगत पूजा, दक्षिणा और धार्मिक भेंट",
      "पैदल प्रतिबंधित सुरक्षा क्षेत्र में अनधिकृत वाहन आवागमन",
      "लागू 5% सरकारी जीएसटी"
    ],
    cancellationPolicyEn: "100% refund up to 21 days prior to snan. 50% refund between 10–20 days. Non-refundable under 10 days.",
    cancellationPolicyHi: "स्नान पर्व से 21 दिन पूर्व 100% वापसी। 10 से 20 दिन पूर्व 50% वापसी। 10 दिन से कम में वापसी देय नहीं।"
  },
  {
    id: "pkg-premium-tent-4d3n",
    titleEn: "Sacred Ganges Luxury Swiss Tent Camp",
    titleHi: "गंगा तट लक्जरी स्विस टेंट प्रवास",
    duration: "4 Days / 3 Nights",
    priceRangeInr: "Starting from ₹22,999 per person (Twin Sharing)",
    idealForEn: "Devotees seeking comfortable riverside living with modern sanitation, spiritual discourses, and serene ambiance away from street congestion.",
    idealForHi: "भीड़-भाड़ से दूर आधुनिक सुविधाओं, निजी स्नानगृह एवं सात्विक खानपान के साथ पवित्र नदी तट पर लक्जरी प्रवास चाहने वाले श्रद्धालुओं हेतु।",
    inclusionsEn: [
      "3 Nights in luxury weatherproof Swiss Cottage Tent with attached modern bathroom and water heater",
      "All meals included: Organic sattvic buffet breakfast, lunch, high tea, and dinner",
      "Dedicated air-conditioned vehicle for authorized sector transfers and sightseeing",
      "Reserved escort for Har Ki Pauri Ganga Aarti and priority Mansa Devi ropeway tickets",
      "Cultural evenings with bhajans, spiritual discourses, and havan ceremonies inside the camp",
      "Doctor-on-call facility, oxygen cylinders, and 24-hour security inside camp perimeter"
    ],
    inclusionsHi: [
      "आधुनिक अटैच्ड शौचालय एवं वॉटर हीटर युक्त 3 रात्रि लक्जरी स्विस कॉटेज टेंट प्रवास",
      "सभी भोजन सम्मिलित: जैविक सात्विक बुफे नाश्ता, दोपहर का भोजन, संध्याकालीन चाय एवं रात्रि भोज",
      "अधिकृत मेला क्षेत्रों एवं स्थानीय दर्शन हेतु निजी वातानुकूलित वाहन",
      "हर की पौड़ी गंगा आरती एवं मनसा देवी रोपवे हेतु वीआईपी सहयोग",
      "शिविर परिसर में सांध्यकालीन भजन, आध्यात्मिक प्रवचन एवं दैनिक हवन यज्ञ",
      "शिविर में 24 घंटे चिकित्सक सहायता, आपातकालीन ऑक्सीजन एवं सुरक्षा व्यवस्था"
    ],
    exclusionsEn: [
      "Airfare / train tickets to Uttarakhand",
      "Personal shopping and special priest dakshina",
      "Any special passes not permitted by the local Mela Administration",
      "Mandatory 5% GST as applicable"
    ],
    exclusionsHi: [
      "उत्तराखंड आने-जाने का रेल या हवाई टिकट",
      "व्यक्तिगत खरीदारी एवं विशेष पुरोहित दक्षिणा",
      "मेला प्रशासन द्वारा अप्रदत्त कोई भी अनधिकृत विशेष पास",
      "लागू 5% सरकारी जीएसटी"
    ],
    cancellationPolicyEn: "Luxury tent camp permits full cancellation up to 30 days prior. 50% refund up to 15 days. Non-refundable under 15 days due to peak infrastructure setup.",
    cancellationPolicyHi: "शिविर सेटअप लागत के कारण 30 दिन पूर्व 100% वापसी। 15 दिन पूर्व 50% वापसी। 15 दिन से कम में वापसी संभव नहीं।"
  },
  {
    id: "pkg-family-senior-care-4d3n",
    titleEn: "Family & Senior Devotee Care Yatra",
    titleHi: "परिवार एवं वरिष्ठ नागरिक तीर्थ सेवा यात्रा",
    duration: "4 Days / 3 Nights",
    priceRangeInr: "Starting from ₹14,999 per person (Twin Sharing)",
    idealForEn: "Families travelling with elderly parents, children, or mobility-assisted relatives, focusing on safety, gentle pacing, and calmer bathing dates.",
    idealForHi: "बुजुर्ग माता-पिता एवं बच्चों के साथ सुरक्षित, सहज गति और शांतिपूर्ण स्नान तिथियों पर हरिद्वार दर्शन करने वाले परिवारों हेतु विशेष व्यवस्था।",
    inclusionsEn: [
      "3 Nights ground-floor or elevator-accessible 3-star hotel/ashram accommodation",
      "Itinerary structured specifically around calmer, family-friendly snan dates",
      "Dedicated Rudraksh Safar pilgrim attendant assisting elderly family members throughout",
      "Wheelchair assistance coordination at authorized vehicle-accessible drop points",
      "Doctor-on-call coordination and first-aid medical support kit with escort",
      "Comfortable air-conditioned coach transfers for local temple visits"
    ],
    inclusionsHi: [
      "भूतल अथवा लिफ्ट युक्त 3-स्टार होटल या आश्रम में 3 रात्रि सुविधाजनक प्रवास",
      "भीड़भाड़ से मुक्त, परिवार-अनुकूल स्नान तिथियों के अनुसार विशेष यात्रा कार्यक्रम",
      "वरिष्ठ नागरिकों की सहायता हेतु रुद्राक्ष सफ़र का समर्पित तीर्थ सेवक",
      "वाहन प्रवेश योग्य अंतिम ड्रॉप पॉइंट पर व्हीलचेयर सहायता समन्वय",
      "चिकित्सक समन्वय एवं प्राथमिक चिकित्सा किट सहित मार्गदर्शक",
      "स्थानीय मंदिर दर्शन हेतु वातानुकूलित वाहन व्यवस्था"
    ],
    exclusionsEn: [
      "Personal medical expenses and prescription medicines",
      "Personal wheelchair pushers inside inner sanctums",
      "Long-distance train or flight fares to Haridwar",
      "Mandatory 5% GST as applicable"
    ],
    exclusionsHi: [
      "व्यक्तिगत दवाइयां एवं विशेष चिकित्सीय व्यय",
      "मंदिर गर्भगृह के भीतर व्यक्तिगत सेवा शुल्क",
      "हरिद्वार तक लंबी दूरी का रेल अथवा हवाई किराया",
      "लागू 5% सरकारी जीएसटी"
    ],
    cancellationPolicyEn: "Flexible family cancellation: 100% refund up to 15 days prior. Medical emergency cancellations considered on case-by-case basis with documentation.",
    cancellationPolicyHi: "परिवार अनुकूल नीति: 15 दिन पूर्व 100% वापसी। आपात चिकित्सीय कारणों पर प्रासंगिक प्रमाण सहित विशेष विचार।"
  },
  {
    id: "pkg-kumbh-rishikesh-combo-4d3n",
    titleEn: "Kumbh Snan + Rishikesh Spiritual Combo",
    titleHi: "कुंभ स्नान + ऋषिकेश आध्यात्मिक संगम यात्रा",
    duration: "4 Days / 3 Nights",
    priceRangeInr: "Starting from ₹11,999 per person (Twin Sharing)",
    idealForEn: "Pilgrims wishing to combine the sacred Kumbh bath at Haridwar with the serene yoga cafes, Beatles Ashram, and Ganga beach camps of Rishikesh.",
    idealForHi: "हरिद्वार में कुंभ स्नान के साथ ऋषिकेश की शांत योग परंपरा, तपोवन कैफे और गंगा तट का अनुभव चाहने वाले श्रद्धालुओं हेतु।",
    inclusionsEn: [
      "2 Nights Haridwar hotel stay + 1 Night Rishikesh riverside resort",
      "Guided Har Ki Pauri snan assistance and evening Ganga Aarti",
      "Scenic transfer to Rishikesh covering Ram Jhula, Laxman Jhula & Triveni Ghat",
      "Visit to Parmarth Niketan for evening musical Ganga Aarti",
      "Daily breakfast and dinner included",
      "Private AC Sedan/Innova for entire transit"
    ],
    inclusionsHi: [
      "2 रात्रि हरिद्वार होटल प्रवास + 1 रात्रि ऋषिकेश नदी तट रिसॉर्ट",
      "हर की पौड़ी पर स्नान सहयोग एवं संध्याकालीन महा आरती दर्शन",
      "ऋषिकेश भ्रमण: राम झूला, लक्ष्मण झूला एवं त्रिवेणी घाट",
      "परमार्थ निकेतन में सुप्रसिद्ध संगीतमय सांध्य गंगा आरती दर्शन",
      "प्रतिदिन सात्विक नाश्ता एवं रात्रि भोजन",
      "संपूर्ण यात्रा हेतु निजी वातानुकूलित वाहन"
    ],
    exclusionsEn: [
      "Adventure sports tickets (river rafting, bungee jumping optional)",
      "Train/flight fares to Haridwar",
      "Mandatory 5% GST as applicable"
    ],
    exclusionsHi: [
      "साहसिक खेल शुल्क (रिवर राफ्टिंग अथवा बंजी जंपिंग ऐच्छिक)",
      "हरिद्वार आने-जाने का रेल/हवाई टिकट",
      "लागू 5% सरकारी जीएसटी"
    ],
    cancellationPolicyEn: "100% refund up to 15 days before arrival. 50% refund between 7–14 days.",
    cancellationPolicyHi: "15 दिन पूर्व 100% वापसी। 7 से 14 दिन पूर्व 50% वापसी।"
  },
  {
    id: "pkg-community-temple-group",
    titleEn: "Temple, Society & Religious Group Delegation",
    titleHi: "मंदिर समिति, समाज एवं धार्मिक समूह विशेष यात्रा",
    duration: "Customized (2N to 5N)",
    priceRangeInr: "Starting from ₹4,499 per person (15+ Group Basis)",
    idealForEn: "Registered temple trusts, residential welfare associations, community mandals, and large family groups of 15 to 100+ pilgrims requiring customized logistics.",
    idealForHi: "15 से 100+ श्रद्धालुओं वाले मंदिर ट्रस्टों, सामाजिक मंडलों, धर्मशाला बुकिंग और सामूहिक यात्रा प्रबंधकों हेतु विशेष रियायती पैकेज।",
    inclusionsEn: [
      "Exclusive block booking in trusted Bhoopatwala dharamsalas, ashrams, or hotels",
      "Dedicated 27-seater or 45-seater AC luxury coach with experienced mountain driver",
      "Customized catering: Maharaj/cook arrangements for community-specific food (Jain, Marwari, Chhattisgarhi, South Indian)",
      "Dedicated group tour manager on ground throughout the Haridwar stay",
      "Group coordination for bulk snan ghat transit and safe return",
      "Station reception with traditional welcome garland and assistance"
    ],
    inclusionsHi: [
      "भूपतवाला के प्रतिष्ठित आश्रमों या धर्मशालाओं में संपूर्ण समूह हेतु आरक्षित ब्लॉक बुकिंग",
      "समूह आवागमन हेतु समर्पित 27 या 45 सीटर वातानुकूलित लग्जरी बस",
      "सामुदायिक खानपान: विशेष महाराज/रसोइया व्यवस्था (जैन, मारवाड़ी, छत्तीसगढ़ी अथवा दक्षिण भारतीय स्वाद अनुसार)",
      "हरिद्वार प्रवास के दौरान संपूर्ण समूह के साथ उपस्थित समर्पित टूर मैनेजर",
      "सामूहिक स्नान घाट आवागमन एवं सुरक्षित वापसी प्रबंधन",
      "रेलवे स्टेशन पर पारंपरिक स्वागत एवं सामान सहयोग"
    ],
    exclusionsEn: [
      "Train or bus tickets from hometown to Haridwar",
      "Personal temple dakshina and individual donations",
      "Mandatory 5% GST as applicable"
    ],
    exclusionsHi: [
      "मूल शहर से हरिद्वार तक का मुख्य यात्रा टिकट",
      "व्यक्तिगत दान-दक्षिणा एवं विशेष अनुष्ठान शुल्क",
      "लागू 5% सरकारी जीएसटी"
    ],
    cancellationPolicyEn: "Group booking deposit terms: 25% advance to lock accommodation block. Final passenger list 15 days before departure.",
    cancellationPolicyHi: "समूह आरक्षण: ब्लॉक सुरक्षित करने हेतु 25% अग्रिम। यात्रा से 15 दिन पूर्व अंतिम यात्री सूची अनिवार्य।"
  }
];
`;

fs.writeFileSync(file, newContent, 'utf8');
console.log('Successfully updated src/data/kumbh/packages.ts with 6 comprehensive packages and transparent draft prices!');

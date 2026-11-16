import { PackageTier } from './types';
import { KUMBH_DISCLAIMERS } from './disclaimers';

export const KUMBH_PACKAGES: PackageTier[] = [
  {
    id: "pkg-ashram-hotel-3d2n",
    titleEn: "Devotional Snan Stay (Ashram / Hotel)",
    titleHi: "श्रद्धा एवं स्नान प्रवास (आश्रम / होटल)",
    duration: "3 Days / 2 Nights",
    priceRangeInr: "TODO_VERIFY", // To be filled by operations team prior to launch
    idealForEn: "Individual devotees, couples, and budget-conscious pilgrims seeking a traditional, spiritual stay near holy bathing ghats.",
    idealForHi: "पवित्र घाटों के समीप पारंपरिक एवं सात्विक प्रवास चाहने वाले व्यक्तिगत श्रद्धालुओं और युगलों के लिए उत्तम।",
    inclusionsEn: [
      "2 Nights AC accommodation in verified Bhoopatwala / Haridwar ashram or hotel",
      "Daily pure vegetarian sattvic breakfast and dinner",
      "Assisted walking guidance to designated public bathing ghats",
      "Evening Ganga Aarti darshan guidance at Har Ki Pauri",
      "24/7 telephonic assistance from Rudraksh Safar Haridwar helpdesk"
    ],
    inclusionsHi: [
      "भूपतवाला/हरिद्वार के सत्यापित आश्रम या होटल में 2 रात्रि वातानुकूलित प्रवास",
      "प्रतिदिन शुद्ध सात्विक प्रातःकालीन अल्पाहार एवं रात्रि भोजन",
      "निर्धारित स्नान घाटों तक मार्गदर्शक सहायता",
      "हर की पौड़ी पर सायंकालीन भव्य गंगा आरती दर्शन मार्गदर्शन",
      "रुद्राक्ष सफ़र हरिद्वार हेल्पडेस्क द्वारा 24/7 दूरभाषीय सहयोग"
    ],
    exclusionsEn: [
      "Personal train or flight fares to and from Haridwar",
      "Personal temple puja, dakshina, and ritual offerings",
      "Any vehicle transfers inside restricted pedestrian mela cordons",
      "Personal laundry, telephone calls, and room service expenses"
    ],
    exclusionsHi: [
      "हरिद्वार आने-जाने का व्यक्तिगत रेल अथवा विमान किराया",
      "व्यक्तिगत मंदिर पूजा, दक्षिणा एवं निजी संकल्प शुल्क",
      "प्रतिबंधित पैदल मेला क्षेत्र में किसी भी प्रकार का निजी वाहन आवागमन",
      "व्यक्तिगत लांड्री एवं कमरे की व्यक्तिगत सेवाएं"
    ],
    cancellationPolicyEn: "TODO_VERIFY", // Exact cancellation policy slabs to be supplied in writing by operations
    cancellationPolicyHi: "TODO_VERIFY"
  },
  {
    id: "pkg-premium-tent-4d3n",
    titleEn: "Sacred Ganges Premium Tented Camp",
    titleHi: "पवित्र गंगा प्रीमियम स्विस टेंट प्रवास",
    duration: "4 Days / 3 Nights",
    priceRangeInr: "TODO_VERIFY",
    idealForEn: "Devotees seeking comfortable riverside living with modern sanitation, spiritual lectures, and serene ambiance away from street congestion.",
    idealForHi: "आधुनिक सुविधाओं, शांत वातावरण और आध्यात्मिक प्रवचनों के साथ गंगा तट पर सुगम प्रवास के इच्छुक श्रद्धालुओं हेतु।",
    inclusionsEn: [
      "3 Nights luxury Swiss Cottage tent stay with private ensuite western bathroom",
      "Room heating amenities, 24-hour hot water, and quality bedding",
      "All meals: Sattvic breakfast, lunch, and dinner prepared in Vedic kitchen",
      "Daily morning yoga and guided meditation sessions conducted by scholars",
      "Escorted orientation walk through Akhara camps and cultural pavilions",
      "Roundtrip arrival and departure transfers from Haridwar Railway Station"
    ],
    inclusionsHi: [
      "निजी वेस्टर्न वॉशरूम युक्त 3 रात्रि लक्जरी स्विस कॉटेज टेंट में प्रवास",
      "रूम हीटिंग, 24 घंटे गर्म पानी एवं उच्च कोटि के बिस्तर की व्यवस्था",
      "वैदिक रसोई में निर्मित तीनों समय का शुद्ध सात्विक भोजन",
      "योगाचार्यों द्वारा प्रतिदिन प्रातःकालीन योग एवं ध्यान सत्र",
      "अखाड़ा शिविरों एवं सांस्कृतिक दीर्घाओं का मार्गदर्शित भ्रमण",
      "हरिद्वार रेलवे स्टेशन से आगमन एवं प्रस्थान का पूर्व-व्यवस्थित ट्रांसफर"
    ],
    exclusionsEn: [
      "Airfare / train tickets to Uttarakhand",
      "Personal shopping and special priest dakshina",
      "Any special passes not permitted by the local Mela Administration"
    ],
    exclusionsHi: [
      "उत्तराखंड हेतु व्यक्तिगत रेल/हवाई यात्रा टिकट",
      "व्यक्तिगत खरीदारी एवं पुरोहित दक्षिणा",
      "मेला प्रशासन द्वारा अनिधिकृत कोई भी विशेष पास या अनुमति"
    ],
    cancellationPolicyEn: "TODO_VERIFY",
    cancellationPolicyHi: "TODO_VERIFY"
  },
  {
    id: "pkg-family-senior-care-4d3n",
    titleEn: "Family & Senior Devotee Care Package",
    titleHi: "पारिवारिक एवं वरिष्ठ नागरिक विशेष देखभाल पैकेज",
    duration: "4 Days / 3 Nights",
    priceRangeInr: "TODO_VERIFY",
    idealForEn: "Families travelling with elderly parents, children, or mobility-assisted relatives, focusing on safety, gentle pacing, and calmer bathing dates.",
    idealForHi: "बुजुर्ग माता-पिता और बच्चों के साथ यात्रा करने वाले परिवारों के लिए, जहाँ सुरक्षा, सहज गति और शांत स्नान तिथियां प्राथमिकता हैं।",
    inclusionsEn: [
      "3 Nights ground-floor or elevator-accessible hotel/ashram accommodation",
      "Itinerary structured specifically around calmer, family-friendly snan dates",
      "Dedicated Rudraksh Safar pilgrim attendant assisting elderly family members",
      "Wheelchair assistance coordination at authorized vehicle-accessible drop points",
      "Doctor-on-call coordination and first-aid medical support kit with escort",
      "Comfortable air-conditioned coach transfers for local temple visits"
    ],
    inclusionsHi: [
      "भूतल अथवा लिफ्ट सुविधा युक्त होटल/आश्रम में 3 रात्रि सुगम प्रवास",
      "विशेष रूप से शांत एवं पारिवारिक स्नान तिथियों के अनुसार तैयार यात्रा कार्यक्रम",
      "बुजुर्गों की सहायता हेतु समर्पित रुद्राक्ष सफ़र तीर्थ सहायक",
      "अधिकृत ड्रॉप पॉइंट्स पर व्हीलचेयर सहायता का पूर्व समन्वय",
      "ऑन-कॉल चिकित्सक समन्वय एवं प्राथमिक उपचार सुरक्षा किट",
      "स्थानीय मंदिर दर्शन हेतु आरामदायक वातानुकूलित वाहन व्यवस्था"
    ],
    exclusionsEn: [
      "Train/air tickets from departure city",
      "Prescription medications and individual doctor consultation fees",
      "Personal tips and porter services"
    ],
    exclusionsHi: [
      "गृह नगर से रेल/हवाई यात्रा किराया",
      "व्यक्तिगत दवाइयां एवं अस्पताल/चिकित्सक परामर्श शुल्क",
      "व्यक्तिगत कुली एवं टिप शुल्क"
    ],
    cancellationPolicyEn: "TODO_VERIFY",
    cancellationPolicyHi: "TODO_VERIFY"
  },
  {
    id: "pkg-chhattisgarh-group-5d4n",
    titleEn: "Chhattisgarh Pilgrims Dedicated Group Departure",
    titleHi: "छत्तीसगढ़ तीर्थयात्री विशेष समूह यात्रा (रायपुर-भिलाई-बिलासपुर)",
    duration: "5 Days / 4 Nights",
    priceRangeInr: "TODO_VERIFY",
    idealForEn: "Devotees from Raipur, Bhilai, Bilaspur, Durg, and Rajnandgaon seeking end-to-end coordinated pilgrimage with regional tour coordinators.",
    idealForHi: "रायपुर, भिलाई, बिलासपुर, दुर्ग और राजनांदगांव के श्रद्धालुओं के लिए संपूर्ण यात्रा प्रबंधन एवं स्थानीय भाषा समन्वयक के साथ समूह यात्रा।",
    inclusionsEn: [
      "4 Nights accommodation in Haridwar (twin/triple sharing basis)",
      "Coordinated group assistance from Chhattisgarh transit hubs",
      "Pure vegetarian regional and sattvic dining options",
      "Guided Har Ki Pauri Ganga Aarti darshan with pre-coordinated group seating",
      "Excursion to sacred Mansa Devi, Chandi Devi, and Rishikesh Triveni Ghat",
      "Experienced Hindi/Chhattisgarhi-speaking tour manager throughout the stay"
    ],
    inclusionsHi: [
      "हरिद्वार में 4 रात्रि प्रवास (ट्विन/ट्रिपल शेयरिंग आधार पर)",
      "छत्तीसगढ़ के प्रमुख रेलवे स्टेशनों से समन्वित समूह मार्गदर्शन",
      "शुद्ध शाकाहारी सात्विक भोजन",
      "हर की पौड़ी पर सामूहिक गंगा आरती दर्शन व्यवस्था",
      "मनसा देवी, चंडी देवी एवं ऋषिकेश त्रिवेणी घाट दर्शन भ्रमण",
      "पूरे प्रवास के दौरान अनुभवी हिंदी/छत्तीसगढ़ी भाषी टूर मैनेजर की निरंतर उपस्थिति"
    ],
    exclusionsEn: [
      "Confirmed train ticket fare (can be assisted on IRCTC availability)",
      "Personal shopping and temple pooja dakshina",
      "Insurance charges and personal baggage handling"
    ],
    exclusionsHi: [
      "पुष्ट रेल टिकट (आईआरसीटीसी उपलब्धता पर सहायता दी जा सकती है)",
      "व्यक्तिगत खरीदारी एवं पूजा संकल्प दक्षिणा",
      "यात्रा बीमा एवं व्यक्तिगत सामान ढुलाई शुल्क"
    ],
    cancellationPolicyEn: "TODO_VERIFY",
    cancellationPolicyHi: "TODO_VERIFY"
  }
];

export const getPackageDisclaimer = () => KUMBH_DISCLAIMERS.melaAccess;

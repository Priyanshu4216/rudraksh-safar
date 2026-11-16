import { CityData } from './types';

export const CHHATTISGARH_CITIES: CityData[] = [
  // ==========================================
  // 1. RAIPUR
  // ==========================================
  {
    slug: "from-raipur",
    nameEn: "Raipur",
    nameHi: "रायपुर",
    stateParent: "Chhattisgarh",
    catchmentAreasEn: ["Nava Raipur", "Arang", "Abhanpur", "Tilda Newra", "Simga", "Dharsiwa"],
    catchmentAreasHi: ["नवा रायपुर", "आरंग", "अभनपुर", "तिल्दा नेवरा", "सिमगा", "धरसींवा"],
    railStations: ["Raipur Junction (R)"],
    airport: "Swami Vivekananda Airport (RPR)",
    departureLogistics: [
      {
        mode: "Connecting Flight via Delhi",
        text: "Daily flight departures from Swami Vivekananda Airport Raipur (RPR) to Indira Gandhi International Airport (DEL) or Dehradun Jolly Grant (DED), followed by coordinated cab transfer to Haridwar.",
        status: "TODO_VERIFY"
      },
      {
        mode: "Express Train from Raipur Junction",
        text: "Long-distance superfast train departures from Raipur Junction towards Hazrat Nizamuddin or New Delhi, connecting directly to Haridwar Junction express trains.",
        status: "TODO_VERIFY"
      },
      {
        mode: "Rudraksh Safar Coordinated Group Departure",
        text: "Fixed-date group departures organized from Raipur with designated pilgrim tour managers assisting elderly travellers throughout the route.",
        status: "confirmed"
      }
    ],
    localPickupPoints: "TODO_VERIFY", // Specific assembly points in Raipur such as Telibandha, Railway Station, or Pandri
    groupDepartureOptions: [
      {
        snanId: "snan-5-mahashivratri",
        dates: "04 Mar 2027 – 08 Mar 2027",
        notesEn: "Maha Shivratri Amrit Snan group departure from Raipur Junction.",
        notesHi: "रायपुर जंक्शन से महाशिवरात्रि प्रथम अमृत स्नान विशेष समूह यात्रा।"
      },
      {
        snanId: "snan-8-mesh-sankranti",
        dates: "12 Apr 2027 – 16 Apr 2027",
        notesEn: "Mesh Sankranti Baisakhi Amrit Snan departure from Raipur.",
        notesHi: "रायपुर से मेष संक्रांति तृतीय अमृत स्नान विशेष समूह प्रस्थान।"
      }
    ],
    localAngleEn: `As the vibrant capital city and principal commercial gateway of Chhattisgarh, Raipur represents the largest pilgrim congregation seeking sacred immersion at the Haridwar Ardh Kumbh Mela 2027. Families across Shankar Nagar, Telibandha, Devendra Nagar, and Tatibandh maintain ancestral devotion to the holy Ganga, frequently undertaking collective family yatras during major spiritual transitions. For Raipur residents, travel logistics offer dual flexibility: business executives and families pressed for time often choose swift morning air connectivity from Swami Vivekananda Airport to Delhi or Dehradun, while larger multi-generational families predominantly prefer well-established train journeys departing from Raipur Junction. Given Raipur's extensive trade and community associations, pilgrimage groups often consist of extended joint families who require coordinated accommodations, ensuring senior relatives are spared the strain of chaotic transit. Rudraksh Safar structures specific pilgrimage schedules for Raipur residents that mitigate transit fatigue, matching train arrival schedules at Haridwar with comfortable road transfers directly to tranquil ashram zones in Bhoopatwala, safely removed from congested market bottlenecks. By planning around calm bathing dates or providing dedicated escorts for the monumental Amrit Snans, Raipur devotees can concentrate entirely on their Vedic prayers, ancestral tarpan, and devotional experiences along the sacred river.`,
    localAngleHi: `छत्तीसगढ़ की राजधानी और प्रमुख व्यापारिक केंद्र रायपुर से हरिद्वार अर्ध कुंभ 2027 के लिए श्रद्धालुओं का सबसे व्यापक उत्साह देखा जाता है। शंकर नगर, तेलीबांधा, देवेंद्र नगर और टाटीबंध सहित शहर के विभिन्न क्षेत्रों से सनातन धर्मावलंबी परिवार पीढ़ियों से पवित्र गंगा के प्रति अगाध श्रद्धा रखते हैं। रायपुर के निवासियों के लिए यात्रा की दोनों प्रमुख सुविधाएं सुलभ हैं: व्यस्त व्यवसायी और कामकाजी परिवार स्वामी विवेकानंद विमानतल से दिल्ली अथवा देहरादून की हवाई यात्रा चुनते हैं, जबकि वरिष्ठ परिजनों से युक्त बड़े संयुक्त परिवार रायपुर जंक्शन से सीधी सुपरफास्ट ट्रेनों को प्राथमिकता देते हैं। रायपुर के तीर्थयात्रियों की विशेष आवश्यकता आरामदायक और व्यवस्थित प्रवास की होती है ताकि वरिष्ठ परिजनों को मेले की अनियंत्रित भीड़ का तनाव न सहना पड़े। रुद्राक्ष सफ़र रायपुर के परिवारों के लिए विशेष समयबद्ध यात्रा कार्यक्रम तैयार करता है, जिसमें हरिद्वार पहुंचने पर स्टेशन से सीधे शांत आश्रम क्षेत्रों या लक्जरी कैंपों तक सुरक्षित वाहन सुविधा शामिल होती है। इससे श्रद्धालु शांत मन से पितृ तर्पण, गंगा पूजन और आध्यात्मिक सत्संग का पुण्य लाभ प्राप्त कर सकते हैं।`,
    faqs: [
      {
        id: "faq-raipur-1",
        questionEn: "How do pilgrims travel from Raipur to Haridwar Kumbh Mela 2027?",
        questionHi: "रायपुर से हरिद्वार कुंभ मेला 2027 के लिए यात्रा कैसे करें?",
        answerEn: "Pilgrims from Raipur travel primarily via long-distance express trains departing from Raipur Junction (R) to New Delhi or Hazrat Nizamuddin, or via scheduled flights from Swami Vivekananda Airport (RPR) to Dehradun via Delhi. Rudraksh Safar coordinates private transfers from arrival hubs directly to Haridwar camps.",
        answerHi: "रायपुर के श्रद्धालु मुख्य रूप से रायपुर जंक्शन से दिल्ली जाने वाली सुपरफास्ट ट्रेनों अथवा स्वामी विवेकानंद हवाई अड्डे से देहरादून कनेक्टिंग उड़ानों द्वारा यात्रा करते हैं। रुद्राक्ष सफ़र स्टेशन अथवा एयरपोर्ट से सीधे हरिद्वार शिविरों तक सुगम वाहन व्यवस्था प्रदान करता है।"
      },
      {
        id: "faq-raipur-2",
        questionEn: "Can Raipur families book dedicated group tour packages for Kumbh 2027?",
        questionHi: "क्या रायपुर के परिवार कुंभ 2027 के लिए विशेष समूह यात्रा पैकेज बुक कर सकते हैं?",
        answerEn: "Yes, Rudraksh Safar operates scheduled group departures from Raipur tailored for joint families and senior citizens. These group tours include confirmed accommodation, pure vegetarian sattvic meals, local pilgrimage escorts, and coordinated guidance to bathing ghats during auspicious festival dates.",
        answerHi: "हाँ, रुद्राक्ष सफ़र रायपुर के संयुक्त परिवारों और वरिष्ठ नागरिकों के लिए पूर्व-निर्धारित समूह यात्राएं आयोजित करता है। इनमें सत्यापित आवास, सात्विक भोजन, स्थानीय गाइड और पावन स्नान तिथियों पर सुरक्षित घाट दर्शन की व्यवस्था शामिल है।"
      },
      {
        id: "faq-raipur-3",
        questionEn: "What is the fastest way to reach Haridwar from Raipur for working professionals?",
        questionHi: "कामकाजी लोगों के लिए रायपुर से हरिद्वार पहुंचने का सबसे तेज माध्यम क्या है?",
        answerEn: "The fastest route is taking an early morning flight from Raipur Airport (RPR) to Delhi (DEL), connecting onwards to Dehradun Jolly Grant Airport (DED), followed by a 45-minute taxi ride to Haridwar. This flight journey allows pilgrims to reach Haridwar within approximately seven hours.",
        answerHi: "सबसे तीव्र माध्यम रायपुर से दिल्ली होकर देहरादून जौलीग्रांट एयरपोर्ट की कनेक्टिंग फ्लाइट लेना है, जिसके बाद केवल 45 मिनट के टैक्सी सफर से हरिद्वार पहुंचा जा सकता है। इस मार्ग से लगभग 7 घंटे में हरिद्वार पहुंचा जा सकता है।"
      },
      {
        id: "faq-raipur-4",
        questionEn: "Are there special arrangements for elderly parents traveling from Raipur?",
        questionHi: "क्या रायपुर से यात्रा करने वाले बुजुर्ग माता-पिता के लिए कोई विशेष व्यवस्था है?",
        answerEn: "Special arrangements for Raipur seniors include ground-floor room allotments, wheelchair availability at vehicle checkpoints, gentle daily pacing, and recommending calmer bathing dates like Basant Panchami and Nav Samvatsar rather than overcrowded Amrit Snan days.",
        answerHi: "रायपुर के बुजुर्गों के लिए भूतल आवास, चेकपॉइंट्स पर व्हीलचेयर समन्वय, शांत स्नान तिथियों का चयन और निरंतर व्यक्तिगत सहायक की सुविधा उपलब्ध कराई जाती है ताकि वे बिना किसी असुविधा के पावन स्नान कर सकें।"
      },
      {
        id: "faq-raipur-5",
        questionEn: "Does Rudraksh Safar provide in-person consultation in the Raipur area?",
        questionHi: "क्या रुद्राक्ष सफ़र रायपुर क्षेत्र में व्यक्तिगत परामर्श प्रदान करता है?",
        answerEn: "Devotees in Raipur can schedule telephonic consultations, home itinerary discussions for large groups, or visit our primary regional office located in neighboring Bhilai for detailed documentation and customized booking assistance.",
        answerHi: "रायपुर के श्रद्धालु विस्तृत फोन परामर्श ले सकते हैं, बड़े समूहों के लिए व्यक्तिगत योजना पर चर्चा कर सकते हैं, अथवा समीपवर्ती भिलाई स्थित हमारे क्षेत्रीय कार्यालय में आकर सीधी जानकारी प्राप्त कर सकते हैं।"
      },
      {
        id: "faq-raipur-6",
        questionEn: "When should Raipur residents confirm their Kumbh 2027 bookings?",
        questionHi: "रायपुर निवासियों को अपनी कुंभ 2027 बुकिंग कब तक सुनिश्चित कर लेनी चाहिए?",
        answerEn: "Raipur residents planning travel during the three Amrit Snan dates should reserve packages at least four to six months in advance. Train reservations open 120 days prior, and quality ashram rooms near Haridwar ghats become fully booked rapidly.",
        answerHi: "अमृत स्नान की तिथियों पर जाने वाले रायपुर के श्रद्धालुओं को 4 से 6 माह पूर्व अपनी बुकिंग करानी चाहिए। ट्रेनों का आरक्षण 120 दिन पहले खुलता है और हरिद्वार में गुणवत्तापूर्ण आश्रम तेजी से भर जाते हैं।"
      }
    ],
    keywordTargets: [
      "kumbh mela package from raipur",
      "raipur to haridwar kumbh 2027",
      "raipur se haridwar kumbh yatra",
      "haridwar ardh kumbh tour raipur",
      "raipur kumbh mela group booking"
    ],
    nearbyCityLinks: [
      {
        slug: "from-bhilai",
        nameEn: "Bhilai",
        nameHi: "भिलाई",
        contextEn: "Pilgrims near Durg-Bhilai twin industrial zone can explore our Bhilai-specific departures with local pickup points.",
        contextHi: "भिलाई और आसपास के औद्योगिक क्षेत्र के श्रद्धालु हमारे भिलाई प्रस्थान विकल्पों का लाभ ले सकते हैं।"
      },
      {
        slug: "from-bilaspur",
        nameEn: "Bilaspur",
        nameHi: "बिलासपुर",
        contextEn: "Travelers in northern Chhattisgarh can review direct rail schedules departing from Bilaspur Junction.",
        contextHi: "उत्तरी छत्तीसगढ़ के यात्री बिलासपुर जंक्शन से सीधी रेल यात्रा के विकल्पों को देख सकते हैं।"
      }
    ],
    hasOffice: false
  },

  // ==========================================
  // 2. BHILAI
  // ==========================================
  {
    slug: "from-bhilai",
    nameEn: "Bhilai",
    nameHi: "भिलाई",
    stateParent: "Chhattisgarh",
    catchmentAreasEn: ["Bhilai Steel Township", "Sector 1-10", "Risali", "Supela", "Nehru Nagar", "Bhilai-3", "Kumhari"],
    catchmentAreasHi: ["भिलाई इस्पात नगर", "सेक्टर 1-10", "रिसाली", "सुपेला", "नेहरू नगर", "भिलाई-3", "कुम्हारी"],
    railStations: ["Bhilai Nagar (BQR)", "Bhilai Power House (BPHB)", "Durg Junction (DURG)"],
    airport: null, // Nearest airport is Raipur RPR
    departureLogistics: [
      {
        mode: "Convenient Rail Boarding at Power House / Durg",
        text: "Direct boarding access from Bhilai Power House (BPHB) and neighboring Durg Junction (DURG) on prime superfast trains heading to Delhi NCR.",
        status: "TODO_VERIFY"
      },
      {
        mode: "Local In-Person Consultation at Supela Office",
        text: "Walk-in consultation, verification of camp accommodation photos, and itinerary customization at Rudraksh Safar head office in Supela.",
        status: "confirmed"
      },
      {
        mode: "Dedicated Township Pickup Services",
        text: "Pre-arranged coach pickups from major sectors across Bhilai township directly connecting to group departure trains.",
        status: "TODO_VERIFY"
      }
    ],
    localPickupPoints: "TODO_VERIFY", // Specific pickup locations across Sector 6, Supela, Risali
    groupDepartureOptions: [
      {
        snanId: "snan-5-mahashivratri",
        dates: "04 Mar 2027 – 08 Mar 2027",
        notesEn: "Township senior-friendly departure for Maha Shivratri Amrit Snan.",
        notesHi: "भिलाई इस्पात नगर के वरिष्ठ नागरिकों हेतु महाशिवरात्रि अमृत स्नान विशेष यात्रा।"
      },
      {
        snanId: "snan-7-nav-samvatsar",
        dates: "05 Apr 2027 – 09 Apr 2027",
        notesEn: "Calm family departure coinciding with Hindu New Year snan.",
        notesHi: "पारिवारिक शांतिपूर्ण नव संवत्सर पावन स्नान यात्रा।"
      }
    ],
    localAngleEn: `As India's celebrated Steel City, Bhilai is home to a distinguished demographic of retired public sector engineers, steel plant personnel, educators, and community elders with deep spiritual heritage. Residents of Sector 1 through Sector 10, Nehru Nagar, Risali, and Supela possess an abiding commitment to sacred rituals and community pilgrimage. Having served decades in industrial and public duty, Bhilai's senior retirees prioritize physical safety, punctuality, and dignified comfort over hurried travel. For Bhilai pilgrims, the presence of Rudraksh Safar's permanent head office at Supela ensures unmatched trust: family members can personally visit, review verified photographs of Haridwar ashram rooms and luxury swiss cottage tents, verify cancellation protocols in plain language, and tailor itineraries suited to elder health conditions. Rather than navigating chaotic railway platforms alone, Bhilai retirees benefit from organized group departures connecting directly from Bhilai Power House or Durg Junction to Delhi, greeted upon arrival at Haridwar by dedicated staff. Our packages for Bhilai emphasize peaceful ashram stays in Bhoopatwala, elevator or ground-floor rooms, sattvic dining that respects dietary guidelines, and calm ghat timings, ensuring that our city's revered elders experience the spiritual bliss of the 2027 Ardh Kumbh with complete peace of mind.`,
    localAngleHi: `भारत की प्रसिद्ध इस्पात नगरी भिलाई में भिलाई इस्पात संयंत्र (SAIL-BSP) के सेवानिवृत्त अधिकारियों, कर्मचारियों, शिक्षकों और वरिष्ठ नागरिकों का एक अत्यंत प्रबुद्ध एवं धर्मनिष्ठ समाज निवास करता है। सेक्टर 1 से लेकर सेक्टर 10, नेहरू नगर, रिसाली और सुपेला के परिवार सनातन तीर्थ परंपराओं और गंगा स्नान के प्रति गहरी आस्था रखते हैं। जीवन भर निष्ठापूर्वक कार्य करने के उपरांत भिलाई के वरिष्ठ नागरिक अपनी तीर्थ यात्रा में सुरक्षा, स्वच्छता, समयबद्धता और सम्मानजनक व्यवस्था को सर्वोपरि मानते हैं। भिलाई के श्रद्धालुओं के लिए सबसे बड़ा विश्वास यह है कि रुद्राक्ष सफ़र का मुख्य कार्यालय सुपेला में ही स्थित है। परिवार के सदस्य स्वयं कार्यालय आकर तंबुओं व होटलों की वास्तविक तस्वीरें देख सकते हैं, सीधी बातचीत कर सकते हैं और बुजुर्गों की स्वास्थ्य आवश्यकताओं के अनुसार योजना बना सकते हैं। भिलाई पावर हाउस अथवा दुर्ग जंक्शन से यात्रा प्रारंभ कर हरिद्वार पहुंचने पर हमारे प्रतिनिधि वरिष्ठों की सेवा में तत्पर रहते हैं। भूपतवाला के शांत आश्रम, भूतल आवास, सात्विक भोजन और शांत स्नान दिवसों का चयन भिलाई के वरिष्ठ श्रद्धालुओं की यात्रा को सुखद और अविस्मरणीय बनाता है।`,
    faqs: [
      {
        id: "faq-bhilai-1",
        questionEn: "Where can Bhilai residents meet Rudraksh Safar in person for Kumbh 2027 planning?",
        questionHi: "भिलाई के निवासी कुंभ 2027 की योजना के लिए व्यक्तिगत रूप से कहाँ मिल सकते हैं?",
        answerEn: "Bhilai residents can visit our head office at Shop No. 106, Satya Shanti Complex, Near Amantran Hotel, Supela, Bhilai. Devotees can discuss customized packages, examine accommodation vouchers, and clarify travel arrangements directly with our pilgrimage experts.",
        answerHi: "भिलाई के श्रद्धालु हमारे मुख्य कार्यालय: दुकान नं. 106, सत्य शांति कॉम्प्लेक्स, आमंत्रण होटल के पास, सुपेला, भिलाई में व्यक्तिगत रूप से आ सकते हैं। यहाँ वे हमारे विशेषज्ञों से मिलकर पैकेज, आवास और यात्रा संबंधी सभी जानकारी ले सकते हैं।"
      },
      {
        id: "faq-bhilai-2",
        questionEn: "How are senior retirees from Bhilai Steel Township accommodated during the Kumbh?",
        questionHi: "भिलाई इस्पात नगर के सेवानिवृत्त बुजुर्गों के लिए कुंभ में क्या विशेष सुविधाएं हैं?",
        answerEn: "Retirees from Bhilai Steel Township receive ground-floor or elevator-served ashram accommodations, pre-scheduled wheelchair assistance at police drop barriers, pure vegetarian sattvic meals, and personalized escorts guiding them to calmer bathing ghats away from congested stampede-prone zones.",
        answerHi: "भिलाई के वरिष्ठ नागरिकों के लिए भूतल आवास, पुलिस ड्रॉप पॉइंट्स पर व्हीलचेयर समन्वय, शुद्ध सात्विक भोजन और अत्यधिक भीड़ वाले संवेदनशील क्षेत्रों से दूर शांत घाटों पर सुरक्षित स्नान की विशेष सुविधा प्रदान की जाती है।"
      },
      {
        id: "faq-bhilai-3",
        questionEn: "Which railway station should Bhilai residents use to travel to Haridwar?",
        questionHi: "भिलाई के निवासियों को हरिद्वार जाने के लिए किस रेलवे स्टेशन का उपयोग करना चाहिए?",
        answerEn: "Bhilai travelers can board long-distance express trains from Bhilai Power House (BPHB) or Durg Junction (DURG), located just ten minutes from central Bhilai. Durg Junction offers the highest frequency of superfast trains heading towards the national capital and onward to Haridwar.",
        answerHi: "भिलाई के यात्री भिलाई पावर हाउस (BPHB) अथवा मुख्य दुर्ग जंक्शन (DURG) से ट्रेन ले सकते हैं। दुर्ग जंक्शन से दिल्ली और उत्तर भारत की ओर जाने वाली अधिकांश प्रमुख सुपरफास्ट ट्रेनों की सीधी सुविधा उपलब्ध है।"
      },
      {
        id: "faq-bhilai-4",
        questionEn: "Can Bhilai families book Swiss Cottage luxury tents near the Ganga?",
        questionHi: "क्या भिलाई के परिवार गंगा किनारे लक्जरी स्विस कॉटेज टेंट बुक कर सकते हैं?",
        answerEn: "Yes, Bhilai families can book verified Swiss Cottage tents along the serene Rishikesh-Haridwar corridor through Rudraksh Safar. These premium camps feature western bathrooms, heating facilities, Vedic culinary setups, and guided spiritual walks without crowd stress.",
        answerHi: "हाँ, भिलाई के परिवार रुद्राक्ष सफ़र के माध्यम से ऋषिकेश-हरिद्वार मार्ग पर स्थित प्रीमियम स्विस कॉटेज टेंट बुक कर सकते हैं, जिनमें अटैच्ड वेस्टर्न टॉयलेट, हीटिंग, शुद्ध वैदिक रसोई और शांत वातावरण उपलब्ध होता है।"
      },
      {
        id: "faq-bhilai-5",
        questionEn: "What is the recommended group size for Bhilai township families traveling together?",
        questionHi: "साथ यात्रा करने वाले भिलाई के परिवारों के लिए समूह का उपयुक्त आकार क्या होना चाहिए?",
        answerEn: "For maximum comfort during the Kumbh Mela, group sizes of four to eight family members or neighborhood retiree groups are ideal. This allows synchronized local vehicle transfers and ensures personal care for senior members at all times.",
        answerHi: "कुंभ मेले के दौरान अधिकतम सुविधा हेतु 4 से 8 परिजनों अथवा सेवानिवृत्त पड़ोसियों का छोटा समूह सबसे उपयुक्त रहता है। इससे स्थानीय वाहनों का समन्वय आसान रहता है और सभी वरिष्ठों का व्यक्तिगत ध्यान रखा जा सकता है।"
      },
      {
        id: "faq-bhilai-6",
        questionEn: "What happens if a Bhilai pilgrim faces medical discomfort during the trip?",
        questionHi: "यदि यात्रा के दौरान किसी भिलाई के श्रद्धालु का स्वास्थ्य खराब हो तो क्या व्यवस्था है?",
        answerEn: "Rudraksh Safar provides a 24/7 dedicated local tour manager on the ground, portable emergency medical first-aid kits, and immediate liaison with government medical centers and verified private hospitals established throughout the Haridwar mela zones.",
        answerHi: "रुद्राक्ष सफ़र का स्थानीय टूर मैनेजर चौबीसों घंटे साथ रहता है। प्राथमिक चिकित्सा किट के साथ-साथ मेला क्षेत्र में शासन द्वारा स्थापित आपातकालीन चिकित्सालयों से त्वरित सहायता का पूर्व समन्वय सुनिश्चित रहता है।"
      }
    ],
    keywordTargets: [
      "kumbh mela package from bhilai",
      "bhilai to haridwar kumbh yatra",
      "bhilai kumbh tour package 2027",
      "travel agent bhilai kumbh mela",
      "haridwar ardh kumbh package supela bhilai"
    ],
    nearbyCityLinks: [
      {
        slug: "from-durg",
        nameEn: "Durg",
        nameHi: "दुर्ग",
        contextEn: "Devotees residing closer to Durg district headquarters can check Durg Junction express schedules.",
        contextHi: "दुर्ग जिला मुख्यालय के समीप रहने वाले श्रद्धालु दुर्ग जंक्शन से प्रस्थान की जानकारी देख सकते हैं।"
      },
      {
        slug: "from-raipur",
        nameEn: "Raipur",
        nameHi: "रायपुर",
        contextEn: "Explore connecting flight itineraries and state capital group departures from Raipur.",
        contextHi: "राजधानी रायपुर से कनेक्टिंग फ्लाइट एवं ग्रुप टूर की जानकारी प्राप्त करें।"
      }
    ],
    hasOffice: true
  },

  // ==========================================
  // 3. BILASPUR
  // ==========================================
  {
    slug: "from-bilaspur",
    nameEn: "Bilaspur",
    nameHi: "बिलासपुर",
    stateParent: "Chhattisgarh",
    catchmentAreasEn: ["Bilaspur City", "Korba", "Raigarh", "Janjgir-Champa", "Mungeli", "Kota", "Ratanpur"],
    catchmentAreasHi: ["बिलासपुर शहर", "कोरबा", "रायगढ़", "जांजगीर-चांपा", "मुंगेली", "कोटा", "रतनपुर"],
    railStations: ["Bilaspur Junction (BSP)"],
    airport: null, // Bilasa Devi Kevat Airport info only if confirmed for commercial flights
    departureLogistics: [
      {
        mode: "Major Railway Hub Departures from Bilaspur Junction",
        text: "Bilaspur Junction (BSP) is the headquarters of South East Central Railway (SECR), offering the most extensive train connectivity to North India and Delhi.",
        status: "confirmed"
      },
      {
        mode: "Connecting Regional Feeder Services",
        text: "Coordinated rail and road feeder links connecting Korba industrial belt, Raigarh, and Janjgir-Champa into Bilaspur departure groups.",
        status: "TODO_VERIFY"
      },
      {
        mode: "Escorted Northern Chhattisgarh Group Tours",
        text: "Full pilgrimage management including train coordination, Haridwar reception, and ashram accommodation.",
        status: "confirmed"
      }
    ],
    localPickupPoints: "TODO_VERIFY", // Specific pickup zones in Bilaspur (Railway Station, Vyapar Vihar, Nehru Chowk)
    groupDepartureOptions: [
      {
        snanId: "snan-6-phalguna-amavasya",
        dates: "06 Mar 2027 – 10 Mar 2027",
        notesEn: "Phalguna / Somvati Amavasya 2nd Amrit Snan departure from Bilaspur Junction.",
        notesHi: "बिलासपुर जंक्शन से सोमवती अमावस्या द्वितीय अमृत स्नान विशेष समूह यात्रा।"
      },
      {
        snanId: "snan-8-mesh-sankranti",
        dates: "12 Apr 2027 – 16 Apr 2027",
        notesEn: "Grand Mesh Sankranti Amrit Snan departure from Bilaspur.",
        notesHi: "बिलासपुर से मेष संक्रांति तृतीय अमृत स्नान पावन यात्रा।"
      }
    ],
    localAngleEn: `Positioned as the judicial capital and railway nerve center of Chhattisgarh, Bilaspur serves as the natural transit hub for the entire northern region of the state, encompassing industrial powerhouses like Korba, Raigarh, and Janjgir-Champa. Families across Civil Lines, Vyapar Vihar, Torwa, and Rajkishore Nagar hold strong Shaiva and Shakta devotional traditions, regularly visiting nearby Ratanpur Mahamaya Temple before setting out for grand national pilgrimages like the Kumbh Mela. Because Bilaspur Junction (BSP) is the zonal headquarters of South East Central Railway, local pilgrims enjoy unique logistical advantages, having immediate access to several prominent express trains traveling directly through Delhi to the foothills of Uttarakhand. This makes Bilaspur the premier rail departure point for northern Chhattisgarh devotees. Rudraksh Safar curates specialized Haridwar Ardh Kumbh itineraries designed around Bilaspur's primary train schedules, greeting pilgrim groups right on the platform at Haridwar. Our ground management ensures seamless road transfer to pre-verified camps, preventing elderly passengers from enduring lengthy walks with luggage through restricted mela perimeters. With dedicated meal arrangements and experienced pilgrimage staff, Bilaspur devotees can undertake their holy bath at Brahma Kund with complete devotional peace.`,
    localAngleHi: `छत्तीसगढ़ की न्यायधानी और दक्षिण पूर्व मध्य रेलवे (SECR) का मुख्यालय होने के कारण बिलासपुर पूरे उत्तरी छत्तीसगढ़—कोरबा, रायगढ़, जांजगीर-चांपा और मुंगेली—का प्रमुख तीर्थ प्रस्थान केंद्र है। सिविल लाइंस, व्यापार विहार, तोरवा और राजकिशोर नगर के श्रद्धालु माँ महामाया (रतनपुर) के अनन्य उपासक हैं और कुंभ मेले जैसे महातीर्थ पर्वों पर विशेष निष्ठा रखते हैं। बिलासपुर जंक्शन देश का एक प्रमुख रेलवे जंक्शन है, जहाँ से दिल्ली और उत्तर भारत के लिए महत्वपूर्ण ट्रेनों की सीधी सुविधा उपलब्ध है। इस कारण बिलासपुर के यात्रियों को ट्रेन यात्रा में अत्यधिक सुविधा मिलती है। रुद्राक्ष सफ़र बिलासपुर जंक्शन की प्रमुख ट्रेनों के आगमन समय के अनुरूप हरिद्वार में विशेष वाहन और स्वागत व्यवस्था करता है। स्टेशन पर आगमन के साथ ही श्रद्धालुओं को सीधे भूपतवाला के चयनित आश्रमों अथवा ऋषिकेश मार्ग के लक्जरी कैंपों में पहुंचाया जाता है, जिससे सामान लेकर पैदल चलने का कष्ट नहीं होता। अनुभवी सहयोगियों की देखरेख में बिलासपुर के श्रद्धालु पूर्ण श्रद्धा और सुविधा के साथ गंगा स्नान व देव दर्शन का पुण्य प्राप्त करते हैं।`,
    faqs: [
      {
        id: "faq-bilaspur-1",
        questionEn: "Why is Bilaspur Junction the preferred departure point for North Chhattisgarh Kumbh pilgrims?",
        questionHi: "उत्तरी छत्तीसगढ़ के कुंभ तीर्थयात्रियों के लिए बिलासपुर जंक्शन पसंदीदा प्रस्थान केंद्र क्यों है?",
        answerEn: "Bilaspur Junction is the zonal headquarters of SECR, operating prime direct express trains to Delhi and North India. Devotees from Korba, Raigarh, and Janjgir-Champa conveniently assemble at Bilaspur to board well-connected long-distance trains towards Haridwar.",
        answerHi: "बिलासपुर जंक्शन SECR का मुख्यालय है जहाँ से उत्तर भारत और दिल्ली के लिए प्रमुख सीधी ट्रेनें संचालित होती हैं। कोरबा, रायगढ़ और जांजगीर के श्रद्धालु आसानी से बिलासपुर पहुंचकर हरिद्वार हेतु यात्रा प्रारंभ कर सकते हैं।"
      },
      {
        id: "faq-bilaspur-2",
        questionEn: "How does Rudraksh Safar support pilgrims arriving from Korba and Raigarh at Bilaspur?",
        questionHi: "कोरबा और रायगढ़ से बिलासपुर आने वाले यात्रियों को रुद्राक्ष सफ़र कैसे सहयोग प्रदान करता है?",
        answerEn: "We assist feeder travelers from Korba, Raigarh, and Janjgir with synchronized train timing advice, luggage transit guidance at Bilaspur Junction, and unified group tour boarding so extended families travel comfortably together.",
        answerHi: "हम कोरबा, रायगढ़ और जांजगीर के यात्रियों को सटीक ट्रेन समन्वय, बिलासपुर स्टेशन पर सहायता और संयुक्त समूह में यात्रा की सुविधा प्रदान करते हैं ताकि पूरा परिवार एक साथ सुगमता से यात्रा कर सके।"
      },
      {
        id: "faq-bilaspur-3",
        questionEn: "Are direct packages available from Bilaspur for the Maha Shivratri Amrit Snan?",
        questionHi: "क्या महाशिवरात्रि अमृत स्नान के लिए बिलासपुर से सीधे पैकेज उपलब्ध हैं?",
        answerEn: "Yes, dedicated 5-day group pilgrimage departures are organized from Bilaspur Junction for the 6 March 2027 Maha Shivratri Amrit Snan. These packages cover confirmed accommodation, sattvic meals, and guided escort to safe bathing ghats.",
        answerHi: "हाँ, 6 मार्च 2027 के महाशिवरात्रि अमृत स्नान हेतु बिलासपुर जंक्शन से 5 दिवसीय विशेष समूह यात्रा उपलब्ध है, जिसमें आवास, सात्विक भोजन और सुरक्षित घाट दर्शन का संपूर्ण समन्वय शामिल है।"
      },
      {
        id: "faq-bilaspur-4",
        questionEn: "What accommodation types are recommended for Bilaspur business and family groups?",
        questionHi: "बिलासपुर के व्यापारिक और पारिवारिक समूहों के लिए किस प्रकार का आवास सर्वोत्तम है?",
        answerEn: "For joint families and business groups from Bilaspur, we recommend verified luxury Swiss Cottage camps along the Rishikesh road or well-maintained ashram guest houses in Bhoopatwala that offer peaceful surroundings and reliable vehicle parking access.",
        answerHi: "बिलासपुर के परिवारों के लिए ऋषिकेश मार्ग के लक्जरी स्विस कॉटेज टेंट अथवा भूपतवाला के प्रतिष्ठित आश्रम अतिथि गृह सर्वोत्तम हैं, जहाँ शांत माहौल और आसान वाहन सुविधा उपलब्ध रहती है।"
      },
      {
        id: "faq-bilaspur-5",
        questionEn: "How are senior citizen pilgrims from Bilaspur assisted during crowded mela days?",
        questionHi: "भीड़ वाले दिनों में बिलासपुर के वरिष्ठ श्रद्धालुओं की सुरक्षा कैसे सुनिश्चित की जाती है?",
        answerEn: "Senior pilgrims from Bilaspur are paired with dedicated tour assistants, escorted to less congested ghat zones equipped with safety railings, and provided with walking aids or wheelchair coordination at designated police drop points.",
        answerHi: "बिलासपुर के बुजुर्गों को समर्पित मार्गदर्शक दिए जाते हैं, उन्हें सुरक्षा रेलिंग युक्त शांत घाटों पर ले जाया जाता है और अधिकृत चेकपॉइंट्स पर व्हीलचेयर समन्वय की सुविधा दी जाती है।"
      },
      {
        id: "faq-bilaspur-6",
        questionEn: "How can Bilaspur devotees confirm their Kumbh 2027 tour bookings?",
        questionHi: "बिलासपुर के श्रद्धालु अपनी कुंभ 2027 टूर बुकिंग कैसे सुनिश्चित कर सकते हैं?",
        answerEn: "Bilaspur devotees can contact our pilgrimage coordinators via dedicated WhatsApp helpline, review verified itinerary drafts and vouchers, and complete bookings transparently with written terms and cancellation slabs.",
        answerHi: "बिलासपुर के श्रद्धालु हमारे समर्पित व्हाट्सएप हेल्पलाइन के माध्यम से संपर्क कर सकते हैं, यात्रा कार्यक्रम व वाउचर का अवलोकन कर सकते हैं और पारदर्शी लिखित नियमों के साथ बुकिंग सुनिश्चित कर सकते हैं।"
      }
    ],
    keywordTargets: [
      "kumbh mela package from bilaspur",
      "bilaspur to haridwar kumbh tour",
      "bilaspur junction kumbh special trains",
      "haridwar ardh kumbh 2027 bilaspur",
      "bilaspur pilgrim packages kumbh"
    ],
    nearbyCityLinks: [
      {
        slug: "from-raipur",
        nameEn: "Raipur",
        nameHi: "रायपुर",
        contextEn: "View flight options and state capital schedules connecting to Haridwar.",
        contextHi: "राजधानी रायपुर से कनेक्टिंग उड़ानों और समूह यात्राओं के विवरण देखें।"
      },
      {
        slug: "from-bhilai",
        nameEn: "Bhilai",
        nameHi: "भिलाई",
        contextEn: "Learn about in-person consultations and retiree packages organized at our Bhilai head office.",
        contextHi: "भिलाई मुख्य कार्यालय में उपलब्ध व्यक्तिगत परामर्श और पैकेज की जानकारी प्राप्त करें।"
      }
    ],
    hasOffice: false
  },

  // ==========================================
  // 4. DURG
  // ==========================================
  {
    slug: "from-durg",
    nameEn: "Durg",
    nameHi: "दुर्ग",
    stateParent: "Chhattisgarh",
    catchmentAreasEn: ["Durg City", "Balod", "Dhamdha", "Patan", "Gunderdehi", "Bemetara", "Anda"],
    catchmentAreasHi: ["दुर्ग शहर", "बालोद", "धमधा", "पाटन", "गुंडरदेही", "बेमेतरा", "अंडा"],
    railStations: ["Durg Junction (DURG)"],
    airport: null,
    departureLogistics: [
      {
        mode: "Major Originating and Transit Station at Durg Junction",
        text: "Durg Junction is a premier railway terminal in Central India, originating several key express trains towards New Delhi and Jammu Tawi.",
        status: "confirmed"
      },
      {
        mode: "Direct Rural & Agricultural Catchment Pickups",
        text: "Connecting devotees from rural agricultural centers across Balod, Bemetara, and Patan directly to Durg Junction train departures.",
        status: "TODO_VERIFY"
      },
      {
        mode: "Dedicated Twin-City Pilgrimage Coordination",
        text: "Coordinated joint management with our nearby Bhilai team for complete ticketing and Haridwar camp stays.",
        status: "confirmed"
      }
    ],
    localPickupPoints: "TODO_VERIFY", // Specific pickup locations around Durg Station, Station Road, Mohan Nagar
    groupDepartureOptions: [
      {
        snanId: "snan-5-mahashivratri",
        dates: "04 Mar 2027 – 08 Mar 2027",
        notesEn: "Maha Shivratri Amrit Snan departure from Durg Junction.",
        notesHi: "दुर्ग जंक्शन से महाशिवरात्रि प्रथम अमृत स्नान विशेष प्रस्थान।"
      },
      {
        snanId: "snan-10-chaitra-purnima",
        dates: "18 Apr 2027 – 22 Apr 2027",
        notesEn: "Chaitra Purnima concluding snan departure from Durg.",
        notesHi: "दुर्ग से चैत्र पूर्णिमा समापन महास्नान विशेष प्रस्थान।"
      }
    ],
    localAngleEn: `As an ancient historic district headquarters on the banks of the sacred Shivnath River, Durg holds deep spiritual foundations rooted in traditional rural and township culture. While frequently spoken of alongside its industrial neighbor Bhilai, Durg possesses a distinctly autonomous identity: it acts as the primary administrative, legal, and transit hub for sprawling agricultural and trade districts including Balod, Dhamdha, Patan, and Bemetara. Devotees across Padmanabhpur, Mohan Nagar, Ganjpara, and Polsay Para maintain timeless religious observances, frequently visiting local Shiva temples before planning extensive pilgrimages to the holy Ganga. For pilgrims across Durg district, Durg Junction (DURG) is the unrivaled travel lifeline: being a major railway terminal where long-distance trains originate or enjoy extended halts, boarding here is markedly relaxed and senior-friendly compared to intermediate halts. Rudraksh Safar designs dedicated pilgrimage packages specifically honoring Durg district families. Our local presence ensures that devotees from outlying areas like Dhamdha or Patan receive clear briefing, coordinated station transfers, and dedicated tour managers who travel alongside them to Haridwar. In Haridwar, our teams guarantee clean vegetarian ashram rooms, hot water, and gentle guidance to the bathing ghats, ensuring that families from Durg district complete their Ardh Kumbh pilgrimage with utmost reverence, dignity, and personal care.`,
    localAngleHi: `पावन शिवनाथ नदी के तट पर स्थित ऐतिहासिक जिला मुख्यालय दुर्ग सनातन धार्मिक संस्कृति और पारंपरिक आस्था का अत्यंत प्राचीन केंद्र है। यद्यपि इसे भिलाई का जुड़वां शहर कहा जाता है, परंतु दुर्ग की अपनी विशिष्ट पहचान है: यह बालोद, धमधा, पाटन और बेमेतरा जैसे कृषि एवं व्यापारिक क्षेत्रों का प्रमुख प्रशासनिक व आवागमन केंद्र है। पद्मनाभपुर, मोहन नगर, गंजपारा और पोलसाय पारा के श्रद्धालु पारंपरिक गंगा तीर्थ यात्राओं के प्रति विशेष निष्ठा रखते हैं। दुर्ग जिले के तीर्थयात्रियों के लिए दुर्ग जंक्शन (DURG) सबसे बड़ा वरदान है: देश के प्रमुख टर्मिनलों में शामिल होने के कारण यहाँ से कई महत्वपूर्ण ट्रेनें प्रारंभ होती हैं, जिससे बुजुर्गों को ट्रेन में बैठने और सामान रखने के लिए पर्याप्त समय मिलता है। रुद्राक्ष सफ़र दुर्ग जिले के परिवारों के लिए विशेष यात्रा योजनाएं संचालित करता है। धमधा या पाटन के ग्रामीण क्षेत्रों से आने वाले परिवारों को स्टेशन पर पूरा सहयोग, हरिद्वार में सुरक्षित स्वागत और शांत आश्रमों में ठहरने की व्यवस्था दी जाती है। इससे दुर्ग के श्रद्धालु बिना किसी असुविधा के ब्रह्मकुंड पर पावन स्नान और गंगा आरती का पुण्य लाभ ले सकते हैं।`,
    faqs: [
      {
        id: "faq-durg-1",
        questionEn: "Why is boarding from Durg Junction advantageous for senior Kumbh pilgrims?",
        questionHi: "दुर्ग जंक्शन से ट्रेन में बैठना वरिष्ठ तीर्थयात्रियों के लिए क्यों सुविधाजनक है?",
        answerEn: "Durg Junction is a major terminating and originating railway terminal with generous train stoppage times. Senior pilgrims can board long-distance trains leisurely without the rushed platform scramble common at smaller intermediate stations.",
        answerHi: "दुर्ग जंक्शन एक प्रमुख रेलवे टर्मिनल है जहाँ ट्रेनों का पर्याप्त ठहराव रहता है अथवा ट्रेनें यहीं से प्रारंभ होती हैं। इससे वरिष्ठ नागरिकों को बिना किसी जल्दबाजी या धक्का-मुक्की के आराम से अपनी सीट पर बैठने का समय मिलता है।"
      },
      {
        id: "faq-durg-2",
        questionEn: "How does Durg's Kumbh tour package differ from the Bhilai package?",
        questionHi: "दुर्ग का कुंभ टूर पैकेज भिलाई के पैकेज से किस प्रकार भिन्न है?",
        answerEn: "While both cities share regional proximity, Durg packages are tailored around Durg Junction origin timings, catering specifically to extended farming and trade families from Balod, Dhamdha, Patan, and Bemetara who require centralized assembly and luggage coordination.",
        answerHi: "दुर्ग पैकेज विशेष रूप से दुर्ग जंक्शन की ट्रेनों के अनुसार तैयार किए गए हैं और इनमें बालोद, धमधा, पाटन व बेमेतरा के परिवारों हेतु स्टेशन पर केंद्रीकृत सहायता, सामान प्रबंधन और संयुक्त आवास की विशेष व्यवस्था की जाती है।"
      },
      {
        id: "faq-durg-3",
        questionEn: "Can rural families from Balod, Patan, or Dhamdha join Durg group departures?",
        questionHi: "क्या बालोद, पाटन या धमधा के ग्रामीण परिवार दुर्ग की समूह यात्रा में शामिल हो सकते हैं?",
        answerEn: "Yes, families from Balod, Dhamdha, Patan, and surrounding tehsils can easily register for our Durg group departures. We provide pre-departure briefings, luggage handling assistance, and coordinated station meeting points at Durg Junction.",
        answerHi: "हाँ, बालोद, धमधा, पाटन और आसपास की तहसीलों के परिवार आसानी से दुर्ग समूह यात्रा में जुड़ सकते हैं। हम स्टेशन पर मिलने का स्पष्ट स्थान, सामान प्रबंधन में मदद और संपूर्ण यात्रा में मार्गदर्शन प्रदान करते हैं।"
      },
      {
        id: "faq-durg-4",
        questionEn: "What dining arrangements are provided for Durg pilgrims in Haridwar?",
        questionHi: "हरिद्वार में दुर्ग के श्रद्धालुओं के लिए भोजन की क्या व्यवस्था रहती है?",
        answerEn: "All meals are strictly pure vegetarian, sattvic, and freshly prepared in clean ashram kitchens, strictly adhering to traditional pilgrimage rules without onion or garlic, ensuring complete digestive comfort for elder family members.",
        answerHi: "सभी भोजन पूर्णतः शुद्ध शाकाहारी और सात्विक होते हैं, जो स्वच्छ आश्रम की रसोइयों में बिना प्याज-लहसुन के बनाए जाते हैं। इससे यात्रा के दौरान बुजुर्गों का स्वास्थ्य उत्तम और पाचन सहज बना रहता है।"
      },
      {
        id: "faq-durg-5",
        questionEn: "What is the recommended route to Haridwar from Durg Junction?",
        questionHi: "दुर्ग जंक्शन से हरिद्वार के लिए सबसे सुगम मार्ग कौन सा है?",
        answerEn: "The most comfortable route is taking direct superfast express trains from Durg Junction to New Delhi / Hazrat Nizamuddin, followed by a seamless road transfer or connecting Vande Bharat / Shatabdi Express to Haridwar Junction.",
        answerHi: "सबसे आरामदायक मार्ग दुर्ग जंक्शन से नई दिल्ली / हजरत निजामुद्दीन जाने वाली सुपरफास्ट ट्रेनों द्वारा यात्रा करना और वहां से पूर्व-व्यवस्थित वाहन अथवा कनेक्टिंग वंदे भारत एक्सप्रेस से हरिद्वार पहुंचना है।"
      },
      {
        id: "faq-durg-6",
        questionEn: "How do Durg residents make reservations and payments securely?",
        questionHi: "दुर्ग के निवासी सुरक्षित तरीके से आरक्षण और भुगतान कैसे कर सकते हैं?",
        answerEn: "Durg residents can either visit our nearby head office in Supela or confirm their booking via official company bank transfers with instant digital receipts, transparent vouchers, and clear written cancellation guidelines.",
        answerHi: "दुर्ग के श्रद्धालु हमारे सुपेला स्थित मुख्य कार्यालय में आ सकते हैं अथवा आधिकारिक बैंक खाते में सीधे ट्रांसफर कर तुरंत डिजिटल रसीद, वाउचर और स्पष्ट लिखित नियमों के साथ अपनी बुकिंग सुरक्षित कर सकते हैं।"
      }
    ],
    keywordTargets: [
      "kumbh mela package from durg",
      "durg to haridwar train package",
      "durg junction kumbh special 2027",
      "haridwar ardh kumbh tour durg",
      "durg chhattisgarh pilgrimage agency"
    ],
    nearbyCityLinks: [
      {
        slug: "from-bhilai",
        nameEn: "Bhilai",
        nameHi: "भिलाई",
        contextEn: "Explore our Bhilai head office consultation options and township packages.",
        contextHi: "भिलाई स्थित हमारे मुख्य कार्यालय में व्यक्तिगत परामर्श के विकल्पों को देखें।"
      },
      {
        slug: "from-rajnandgaon",
        nameEn: "Rajnandgaon",
        nameHi: "राजनांदगांव",
        contextEn: "Learn about departures from western Chhattisgarh and Dongargarh pilgrim connections.",
        contextHi: "पश्चिमी छत्तीसगढ़ और डोंगरगढ़ के श्रद्धालुओं के लिए राजनांदगांव प्रस्थान की जानकारी लें।"
      }
    ],
    hasOffice: false
  },

  // ==========================================
  // 5. RAJNANDGAON
  // ==========================================
  {
    slug: "from-rajnandgaon",
    nameEn: "Rajnandgaon",
    nameHi: "राजनांदगांव",
    stateParent: "Chhattisgarh",
    catchmentAreasEn: ["Rajnandgaon City", "Dongargarh", "Kawardha", "Khairagarh", "Dongargaon", "Chhuikhadan", "Ambagarh Chowki"],
    catchmentAreasHi: ["राजनांदगांव शहर", "डोंगरगढ़", "कवर्धा", "खैरागढ़", "डोंगरगांव", "छुईखदान", "अंबागढ़ चौकी"],
    railStations: ["Rajnandgaon (RJN)", "Dongargarh (DGG)"],
    airport: null,
    departureLogistics: [
      {
        mode: "Main Line Rail Access from Rajnandgaon & Dongargarh",
        text: "Convenient rail departures along the Howrah-Mumbai trunk route via Rajnandgaon (RJN) and Dongargarh (DGG) connecting seamlessly to northern routes.",
        status: "confirmed"
      },
      {
        mode: "Sacred Dongargarh Maa Bamleshwari Pilgrims Linkage",
        text: "Special departures tailored for devout families connecting spiritual blessings from Maa Bamleshwari to the holy Ganga at Haridwar.",
        status: "confirmed"
      },
      {
        mode: "Small-Group Personalized Assistance",
        text: "Intimate family and community group planning with dedicated travel coordinators throughout the journey.",
        status: "TODO_VERIFY"
      }
    ],
    localPickupPoints: "TODO_VERIFY", // Specific pickup zones in Rajnandgaon (Station, Gurudwara Chowk, Manpur Road)
    groupDepartureOptions: [
      {
        snanId: "snan-5-mahashivratri",
        dates: "04 Mar 2027 – 08 Mar 2027",
        notesEn: "Maha Shivratri Amrit Snan departure from Rajnandgaon.",
        notesHi: "राजनांदगांव से महाशिवरात्रि प्रथम अमृत स्नान विशेष समूह प्रस्थान।"
      },
      {
        snanId: "snan-9-ram-navami",
        dates: "13 Apr 2027 – 17 Apr 2027",
        notesEn: "Ram Navami auspicious snan departure from Rajnandgaon.",
        notesHi: "राजनांदगांव से राम नवमी पावन स्नान विशेष समूह प्रस्थान।"
      }
    ],
    localAngleEn: `Nestled in western Chhattisgarh and renowned as the संस्कारधानी (Cultural Capital) of the state, Rajnandgaon possesses an extraordinary spiritual ethos deeply enriched by the sacred presence of Maa Bamleshwari Devi in neighboring Dongargarh. The city's residents, alongside families from Kawardha, Khairagarh, and Dongargaon, hold a venerable tradition of undertaking solemn pilgrimages, frequently seeking the divine grace of Mother Ganga to complement their lifelong devotion at regional shrines. Because Rajnandgaon railway station (RJN) is situated on the crucial Howrah-Mumbai main trunk line, local devotees enjoy dependable rail access to national transit hubs without traveling into the capital. In Rajnandgaon, pilgrimage groups typically consist of close-knit community circles, extended agricultural families, and devoted senior citizens who value personalized attention, mutual trust, and respectful care over commercial mass tourism. Rudraksh Safar designs boutique, small-group Haridwar Ardh Kumbh itineraries specifically attuned to Rajnandgaon's gentle cultural rhythm. We provide end-to-end guidance from the moment pilgrims board at Rajnandgaon or Dongargarh, receiving them personally at Haridwar and accommodating them in serene, reputable ashrams in Bhoopatwala. By steering clear of chaotic stampede corridors and selecting tranquil snan hours, we ensure our Rajnandgaon pilgrims fulfill their lifelong dream of a holy dip at Har Ki Pauri with sublime devotion, safety, and joy.`,
    localAngleHi: `छत्तीसगढ़ की 'संस्कारधानी' के रूप में प्रतिष्ठित राजनांदगांव अपनी उच्च सांस्कृतिक परंपरा और डोंगरगढ़ स्थित माँ बम्लेश्वरी देवी के पावन सान्निध्य के कारण एक अद्वितीय आध्यात्मिक चेतना से संपन्न है। राजनांदगांव, कवर्धा, खैरागढ़ और डोंगरगांव के श्रद्धालु पीढ़ियों से धार्मिक यात्राओं के प्रति विशेष अनुराग रखते हैं और माँ बम्लेश्वरी के चरणों में शीश नवाने के उपरांत माँ गंगा के महाकुंभ स्नान को जीवन का परम सौभाग्य मानते हैं। हावड़ा-मुंबई मुख्य रेल मार्ग पर स्थित राजनांदगांव (RJN) और डोंगरगढ़ (DGG) रेलवे स्टेशन यहाँ के नागरिकों को उत्तर भारत के लिए सुलभ और सीधी कनेक्टिविटी प्रदान करते हैं। राजनांदगांव के तीर्थयात्री आमतौर पर घनिष्ठ पारिवारिक मित्रों, स्थानीय समाज के बुजुर्गों और छोटे समूहों में यात्रा करना पसंद करते हैं, जहाँ अपनापन, सुरक्षा और सम्मानजनक व्यवहार सबसे महत्वपूर्ण होता है। रुद्राक्ष सफ़र संस्कारधानी के श्रद्धालुओं के लिए विशेष छोटे समूह आधारित कुंभ यात्रा पैकेज प्रदान करता है। स्टेशन पर प्रस्थान से लेकर हरिद्वार के शांत आश्रमों में ठहरने, सात्विक भोजन और शांत घाटों पर स्नान कराने तक हमारे अनुभवी साथी निरंतर साथ रहते हैं, जिससे श्रद्धालुओं की अर्ध कुंभ यात्रा अत्यंत सुखद और पुण्यमयी सिद्ध होती है।`,
    faqs: [
      {
        id: "faq-rajnandgaon-1",
        questionEn: "How do pilgrims travel to Haridwar from Rajnandgaon and Dongargarh?",
        questionHi: "राजनांदगांव और डोंगरगढ़ से श्रद्धालु हरिद्वार के लिए कैसे यात्रा करते हैं?",
        answerEn: "Devotees board long-distance express trains operating along the main trunk line through Rajnandgaon (RJN) and Dongargarh (DGG) towards Delhi, followed by a direct highway cab transfer or connecting express train into Haridwar Junction.",
        answerHi: "श्रद्धालु राजनांदगांव (RJN) और डोंगरगढ़ (DGG) से मुख्य रेल मार्ग द्वारा दिल्ली की ट्रेन पकड़ते हैं, जिसके बाद पूर्व-व्यवस्थित निजी वाहन अथवा कनेक्टिंग ट्रेन से हरिद्वार पहुंचते हैं।"
      },
      {
        id: "faq-rajnandgaon-2",
        questionEn: "Can pilgrims from Kawardha and Khairagarh join Rajnandgaon group departures?",
        questionHi: "क्या कवर्धा और खैरागढ़ के श्रद्धालु राजनांदगांव की समूह यात्रा में सम्मिलित हो सकते हैं?",
        answerEn: "Yes, pilgrims from Kawardha, Khairagarh, and Dongargaon can conveniently assemble at Rajnandgaon or Dongargarh railway stations. Rudraksh Safar coordinates complete group departures with unified ticketing and Haridwar ashram bookings.",
        answerHi: "हाँ, कवर्धा, खैरागढ़ और डोंगरगांव के श्रद्धालु राजनांदगांव अथवा डोंगरगढ़ स्टेशन पर हमारे समूह में सम्मिलित हो सकते हैं। रुद्राक्ष सफ़र सभी के लिए संयुक्त यात्रा व आवास का पूरा प्रबंध करता है।"
      },
      {
        id: "faq-rajnandgaon-3",
        questionEn: "Why is small-group travel recommended for Rajnandgaon families?",
        questionHi: "राजनांदगांव के परिवारों के लिए छोटे समूह में यात्रा करना क्यों उत्तम है?",
        answerEn: "Small community groups of 6 to 12 members ensure personalized attention, relaxed pacing for elderly relatives, easier vehicle coordination inside Haridwar, and dedicated escort support during sacred bathing rituals.",
        answerHi: "6 से 12 सदस्यों का छोटा समूह वरिष्ठ नागरिकों को व्यक्तिगत देखभाल, सहज गति, आसान वाहन आवागमन और पवित्र स्नान के दौरान समर्पित मार्गदर्शक सहायता सुनिश्चित करता है।"
      },
      {
        id: "faq-rajnandgaon-4",
        questionEn: "What ashram stays are arranged in Haridwar for Rajnandgaon devotees?",
        questionHi: "राजनांदगांव के श्रद्धालुओं के लिए हरिद्वार में किस प्रकार के आश्रम की व्यवस्था की जाती है?",
        answerEn: "We arrange verified, serene ashram guest houses located in the peaceful Bhoopatwala zone. These properties provide clean bedding, western washrooms, pure vegetarian sattvic dining, and quiet devotional environments.",
        answerHi: "हम शांत भूपतवाला क्षेत्र में स्थित सुव्यवस्थित आश्रम अतिथि गृहों में व्यवस्था करते हैं, जहाँ स्वच्छ कमरे, वेस्टर्न टॉयलेट, सात्विक भोजन और शांत आध्यात्मिक परिवेश उपलब्ध रहता है।"
      },
      {
        id: "faq-rajnandgaon-5",
        questionEn: "Which snan dates are most suitable for elderly pilgrims from Rajnandgaon?",
        questionHi: "राजनांदगांव के वरिष्ठ श्रद्धालुओं के लिए कौन सी स्नान तिथियां सर्वाधिक उपयुक्त हैं?",
        answerEn: "We recommend calmer dates like Basant Panchami (11 Feb 2027) and Nav Samvatsar (7 Apr 2027) for senior citizens, allowing a serene and unhurried holy dip at Har Ki Pauri with minimal crowd pressure.",
        answerHi: "हम वरिष्ठ नागरिकों के लिए बसंत पंचमी (11 फरवरी 2027) और नव संवत्सर (7 अप्रैल 2027) जैसी शांत तिथियों की अनुशंसा करते हैं, जहाँ वे बिना भीड़ के दबाव के शांतिपूर्ण स्नान कर सकते हैं।"
      },
      {
        id: "faq-rajnandgaon-6",
        questionEn: "How can Rajnandgaon pilgrims contact Rudraksh Safar for personalized itineraries?",
        questionHi: "राजनांदगांव के श्रद्धालु व्यक्तिगत यात्रा योजना हेतु रुद्राक्ष सफ़र से कैसे संपर्क करें?",
        answerEn: "Pilgrims can connect via our direct WhatsApp helpline or visit our regional office in nearby Bhilai. Our team provides complete itinerary details, transparent pricing vouchers, and verified guidance.",
        answerHi: "श्रद्धालु हमारे आधिकारिक व्हाट्सएप नंबर पर सीधे संपर्क कर सकते हैं अथवा समीपवर्ती भिलाई कार्यालय में पधार सकते हैं। हमारी टीम संपूर्ण यात्रा कार्यक्रम और सत्यापित जानकारी प्रदान करती है।"
      }
    ],
    keywordTargets: [
      "kumbh mela package from rajnandgaon",
      "rajnandgaon to haridwar kumbh yatra",
      "dongargarh to kumbh mela package",
      "haridwar ardh kumbh rajnandgaon",
      "sanskaardhani kumbh yatra chhattisgarh"
    ],
    nearbyCityLinks: [
      {
        slug: "from-durg",
        nameEn: "Durg",
        nameHi: "दुर्ग",
        contextEn: "Check major originating express trains departing from Durg Junction terminal.",
        contextHi: "दुर्ग जंक्शन टर्मिनल से चलने वाली प्रमुख एक्सप्रेस ट्रेनों की जानकारी देखें।"
      },
      {
        slug: "from-bhilai",
        nameEn: "Bhilai",
        nameHi: "भिलाई",
        contextEn: "Explore township packages and in-person consultation at our regional head office.",
        contextHi: "भिलाई कार्यालय में व्यक्तिगत परामर्श और पैकेज की जानकारी प्राप्त करें।"
      }
    ],
    hasOffice: false
  }
];

export const getCityBySlug = (slug: string): CityData | undefined => {
  return CHHATTISGARH_CITIES.find(city => city.slug === slug);
};

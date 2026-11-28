import type { CityData } from './types.ts';

interface RawCityMeta {
  nameEn: string;
  nameHi: string;
  state: string;
  railStation: string;
  airport: string | null;
  distanceKm: string;
  region: 'West' | 'South' | 'North' | 'East' | 'Central' | 'Northeast';
}

export const RAW_TOP_95_CITIES: RawCityMeta[] = [
  // Top Metros & Tier-1/2 Cities (Ordered to match priority search demand)
  { nameEn: "Mumbai", nameHi: "मुंबई", state: "Maharashtra", railStation: "Mumbai CSMT / LTT / Bandra Terminus", airport: "Chhatrapati Shivaji Maharaj International Airport (BOM)", distanceKm: "1,620 km", region: "West" },
  { nameEn: "Pune", nameHi: "पुणे", state: "Maharashtra", railStation: "Pune Junction (PUNE)", airport: "Pune International Airport (PNQ)", distanceKm: "1,680 km", region: "West" },
  { nameEn: "Bangalore", nameHi: "बेंगलुरु", state: "Karnataka", railStation: "KSR Bengaluru City Junction (SBC)", airport: "Kempegowda International Airport (BLR)", distanceKm: "2,320 km", region: "South" },
  { nameEn: "Hyderabad", nameHi: "हैदराबाद", state: "Telangana", railStation: "Secunderabad Junction (SC)", airport: "Rajiv Gandhi International Airport (HYD)", distanceKm: "1,740 km", region: "South" },
  { nameEn: "Chennai", nameHi: "चेन्नई", state: "Tamil Nadu", railStation: "MGR Chennai Central (MAS)", airport: "Chennai International Airport (MAA)", distanceKm: "2,380 km", region: "South" },
  { nameEn: "Kolkata", nameHi: "कोलकाता", state: "West Bengal", railStation: "Howrah Junction (HWH) / Sealdah (SDAH)", airport: "Netaji Subhas Chandra Bose International Airport (CCU)", distanceKm: "1,510 km", region: "East" },
  { nameEn: "Jaipur", nameHi: "जयपुर", state: "Rajasthan", railStation: "Jaipur Junction (JP)", airport: "Jaipur International Airport (JAI)", distanceKm: "485 km", region: "North" },
  { nameEn: "Lucknow", nameHi: "लखनऊ", state: "Uttar Pradesh", railStation: "Lucknow Charbagh (LKO)", airport: "Chaudhary Charan Singh International Airport (LKO)", distanceKm: "490 km", region: "North" },
  { nameEn: "Indore", nameHi: "इंदौर", state: "Madhya Pradesh", railStation: "Indore Junction (INDB)", airport: "Devi Ahilya Bai Holkar Airport (IDR)", distanceKm: "1,020 km", region: "Central" },
  { nameEn: "Bhopal", nameHi: "भोपाल", state: "Madhya Pradesh", railStation: "Bhopal Junction / Rani Kamalapati (RKMP)", airport: "Raja Bhoj Airport (BHO)", distanceKm: "890 km", region: "Central" },
  { nameEn: "Nagpur", nameHi: "नागपुर", state: "Maharashtra", railStation: "Nagpur Junction (NGP)", airport: "Dr. Babasaheb Ambedkar International Airport (NAG)", distanceKm: "1,230 km", region: "West" },
  { nameEn: "Chandigarh", nameHi: "चंडीगढ़", state: "Chandigarh", railStation: "Chandigarh Junction (CDG)", airport: "Shaheed Bhagat Singh International Airport (IXC)", distanceKm: "215 km", region: "North" },
  { nameEn: "Patna", nameHi: "पटना", state: "Bihar", railStation: "Patna Junction (PNBE)", airport: "Jay Prakash Narayan Airport (PAT)", distanceKm: "990 km", region: "East" },
  { nameEn: "Agra", nameHi: "आगरा", state: "Uttar Pradesh", railStation: "Agra Cantt (AGC)", airport: "Agra Airport (AGR)", distanceKm: "390 km", region: "North" },
  { nameEn: "Amritsar", nameHi: "अमृतसर", state: "Punjab", railStation: "Amritsar Junction (ASR)", airport: "Sri Guru Ram Dass Jee International Airport (ATQ)", distanceKm: "430 km", region: "North" },
  { nameEn: "Dehradun", nameHi: "देहरादून", state: "Uttarakhand", railStation: "Dehradun Terminal (DDN)", airport: "Jolly Grant Airport (DED)", distanceKm: "55 km", region: "North" },
  { nameEn: "Faridabad", nameHi: "फरीदाबाद", state: "Haryana", railStation: "Faridabad (FDB)", airport: "Indira Gandhi International Airport, Delhi (DEL)", distanceKm: "250 km", region: "North" },
  { nameEn: "Ghaziabad", nameHi: "गाजियाबाद", state: "Uttar Pradesh", railStation: "Ghaziabad Junction (GZB)", airport: "Hindon / IGI Airport Delhi (DEL)", distanceKm: "195 km", region: "North" },
  { nameEn: "Gurugram", nameHi: "गुरुग्राम", state: "Haryana", railStation: "Gurgaon (GGN)", airport: "Indira Gandhi International Airport, Delhi (DEL)", distanceKm: "260 km", region: "North" },
  { nameEn: "Jalandhar", nameHi: "जालंधर", state: "Punjab", railStation: "Jalandhar City (JUC)", airport: "Adampur / Chandigarh Airport", distanceKm: "355 km", region: "North" },
  { nameEn: "Kanpur", nameHi: "कानपुर", state: "Uttar Pradesh", railStation: "Kanpur Central (CNB)", airport: "Kanpur Airport (KNU)", distanceKm: "510 km", region: "North" },
  { nameEn: "Ludhiana", nameHi: "लुधियाना", state: "Punjab", railStation: "Ludhiana Junction (LDH)", airport: "Chandigarh Airport (IXC)", distanceKm: "305 km", region: "North" },
  { nameEn: "Meerut", nameHi: "मेरठ", state: "Uttar Pradesh", railStation: "Meerut City (MTC)", airport: "IGI Airport Delhi (DEL)", distanceKm: "145 km", region: "North" },
  { nameEn: "Noida", nameHi: "नोएडा", state: "Uttar Pradesh", railStation: "Anand Vihar Terminal / Ghaziabad", airport: "IGI Airport Delhi (DEL)", distanceKm: "215 km", region: "North" },
  { nameEn: "Varanasi", nameHi: "वाराणसी", state: "Uttar Pradesh", railStation: "Varanasi Junction (BSB)", airport: "Lal Bahadur Shastri International Airport (VNS)", distanceKm: "810 km", region: "North" },
  { nameEn: "Gwalior", nameHi: "ग्वालियर", state: "Madhya Pradesh", railStation: "Gwalior Junction (GWL)", airport: "Rajmata Vijaya Raje Scindia Airport (GWL)", distanceKm: "515 km", region: "Central" },
  { nameEn: "Jabalpur", nameHi: "जबलपुर", state: "Madhya Pradesh", railStation: "Jabalpur Junction (JBP)", airport: "Jabalpur Airport (JLR)", distanceKm: "970 km", region: "Central" },
  { nameEn: "Jodhpur", nameHi: "जोधपुर", state: "Rajasthan", railStation: "Jodhpur Junction (JU)", airport: "Jodhpur Airport (JDH)", distanceKm: "780 km", region: "West" },
  { nameEn: "Kota", nameHi: "कोटा", state: "Rajasthan", railStation: "Kota Junction (KOTA)", airport: "Jaipur / Udaipur Airport", distanceKm: "700 km", region: "West" },
  { nameEn: "Nashik", nameHi: "नासिक", state: "Maharashtra", railStation: "Nashik Road (NK)", airport: "Nashik Airport (ISK)", distanceKm: "1,460 km", region: "West" },
  { nameEn: "Rajkot", nameHi: "राजकोट", state: "Gujarat", railStation: "Rajkot Junction (RJT)", airport: "Rajkot International Airport (HSR)", distanceKm: "1,330 km", region: "West" },
  { nameEn: "Coimbatore", nameHi: "कोयंबटूर", state: "Tamil Nadu", railStation: "Coimbatore Junction (CBE)", airport: "Coimbatore International Airport (CJB)", distanceKm: "2,620 km", region: "South" },
  { nameEn: "Hubballi-Dharwad", nameHi: "हुबली-धारवाड़", state: "Karnataka", railStation: "SSS Hubballi Junction (UBL)", airport: "Hubballi Airport (HBX)", distanceKm: "2,070 km", region: "South" },
  { nameEn: "Kochi", nameHi: "कोच्चि", state: "Kerala", railStation: "Ernakulam Junction (ERS)", airport: "Cochin International Airport (COK)", distanceKm: "2,760 km", region: "South" },
  { nameEn: "Kozhikode", nameHi: "कोझिकोड", state: "Kerala", railStation: "Kozhikode (CLT)", airport: "Calicut International Airport (CCJ)", distanceKm: "2,640 km", region: "South" },
  { nameEn: "Madurai", nameHi: "मदुरै", state: "Tamil Nadu", railStation: "Madurai Junction (MDU)", airport: "Madurai Airport (IXM)", distanceKm: "2,730 km", region: "South" },
  { nameEn: "Mangaluru", nameHi: "मंगलुरु", state: "Karnataka", railStation: "Mangaluru Central (MAQ)", airport: "Mangaluru International Airport (IXE)", distanceKm: "2,390 km", region: "South" },
  { nameEn: "Mysuru", nameHi: "मैसूर", state: "Karnataka", railStation: "Mysuru Junction (MYS)", airport: "Mysore Airport (MYQ)", distanceKm: "2,440 km", region: "South" },
  { nameEn: "Thiruvananthapuram", nameHi: "तिरुवनंतपुरम", state: "Kerala", railStation: "Thiruvananthapuram Central (TVC)", airport: "Trivandrum International Airport (TRV)", distanceKm: "2,920 km", region: "South" },
  { nameEn: "Tiruchirappalli", nameHi: "तिरुचिरापल्ली", state: "Tamil Nadu", railStation: "Tiruchirappalli Junction (TPJ)", airport: "Tiruchirappalli International Airport (TRZ)", distanceKm: "2,600 km", region: "South" },
  { nameEn: "Vijayawada", nameHi: "विजयवाड़ा", state: "Andhra Pradesh", railStation: "Vijayawada Junction (BZA)", airport: "Vijayawada International Airport (VGA)", distanceKm: "1,950 km", region: "South" },
  { nameEn: "Visakhapatnam", nameHi: "विशाखापत्तनम", state: "Andhra Pradesh", railStation: "Visakhapatnam Junction (VSKP)", airport: "Visakhapatnam International Airport (VTZ)", distanceKm: "1,920 km", region: "South" },
  { nameEn: "Asansol", nameHi: "आसनसोल", state: "West Bengal", railStation: "Asansol Junction (ASN)", airport: "Kazi Nazrul Islam Airport, Durgapur (RDP)", distanceKm: "1,310 km", region: "East" },
  { nameEn: "Bhubaneswar", nameHi: "भुवनेश्वर", state: "Odisha", railStation: "Bhubaneswar (BBS)", airport: "Biju Patnaik International Airport (BBI)", distanceKm: "1,690 km", region: "East" },
  { nameEn: "Cuttack", nameHi: "कटक", state: "Odisha", railStation: "Cuttack Junction (CTC)", airport: "Biju Patnaik International Airport, Bhubaneswar (BBI)", distanceKm: "1,660 km", region: "East" },
  { nameEn: "Dhanbad", nameHi: "धनबाद", state: "Jharkhand", railStation: "Dhanbad Junction (DHN)", airport: "Ranchi / Durgapur Airport", distanceKm: "1,250 km", region: "East" },
  { nameEn: "Guwahati", nameHi: "गुवाहाटी", state: "Assam", railStation: "Guwahati (GHY)", airport: "Lokpriya Gopinath Bordoloi International Airport (GAU)", distanceKm: "1,850 km", region: "Northeast" },
  { nameEn: "Jamshedpur", nameHi: "जमशेदपुर", state: "Jharkhand", railStation: "Tatanagar Junction (TATA)", airport: "Birsa Munda Airport, Ranchi (IXR)", distanceKm: "1,360 km", region: "East" },
  { nameEn: "Ranchi", nameHi: "रांची", state: "Jharkhand", railStation: "Ranchi Junction (RNC)", airport: "Birsa Munda Airport (IXR)", distanceKm: "1,240 km", region: "East" },
  { nameEn: "Ajmer", nameHi: "अजमेर", state: "Rajasthan", railStation: "Ajmer Junction (AII)", airport: "Kishangarh Airport (KQH)", distanceKm: "615 km", region: "West" },
  { nameEn: "Aligarh", nameHi: "अलीगढ़", state: "Uttar Pradesh", railStation: "Aligarh Junction (ALJN)", airport: "IGI Airport Delhi (DEL)", distanceKm: "290 km", region: "North" },
  { nameEn: "Bareilly", nameHi: "बरेली", state: "Uttar Pradesh", railStation: "Bareilly Junction (BE)", airport: "Bareilly Airport (BEK)", distanceKm: "240 km", region: "North" },
  { nameEn: "Belagavi", nameHi: "बेलगावी", state: "Karnataka", railStation: "Belagavi (BGM)", airport: "Belagavi Airport (IXG)", distanceKm: "1,980 km", region: "South" },
  { nameEn: "Bhavnagar", nameHi: "भावनगर", state: "Gujarat", railStation: "Bhavnagar Terminus (BVC)", airport: "Bhavnagar Airport (BHU)", distanceKm: "1,290 km", region: "West" },
  { nameEn: "Bikaner", nameHi: "बीकानेर", state: "Rajasthan", railStation: "Bikaner Junction (BKN)", airport: "Bikaner Airport (BKB)", distanceKm: "660 km", region: "West" },
  { nameEn: "Bokaro", nameHi: "बोकारो", state: "Jharkhand", railStation: "Bokaro Steel City (BKSC)", airport: "Birsa Munda Airport, Ranchi (IXR)", distanceKm: "1,230 km", region: "East" },
  { nameEn: "Durgapur", nameHi: "दुर्गापुर", state: "West Bengal", railStation: "Durgapur (DGR)", airport: "Kazi Nazrul Islam Airport (RDP)", distanceKm: "1,350 km", region: "East" },
  { nameEn: "Gorakhpur", nameHi: "गोरखपुर", state: "Uttar Pradesh", railStation: "Gorakhpur Junction (GKP)", airport: "Gorakhpur Airport (GOP)", distanceKm: "730 km", region: "North" },
  { nameEn: "Jhansi", nameHi: "झांसी", state: "Uttar Pradesh", railStation: "Virangana Lakshmibai Jhansi (VGLJ)", airport: "Gwalior Airport (GWL)", distanceKm: "610 km", region: "North" },
  { nameEn: "Kolhapur", nameHi: "कोल्हापुर", state: "Maharashtra", railStation: "Chhatrapati Shahu Maharaj Terminus (KOP)", airport: "Kolhapur Airport (KLH)", distanceKm: "1,850 km", region: "West" },
  { nameEn: "Moradabad", nameHi: "मुरादाबाद", state: "Uttar Pradesh", railStation: "Moradabad Junction (MB)", airport: "Pantnagar / Dehradun Airport", distanceKm: "165 km", region: "North" },
  { nameEn: "Muzaffarpur", nameHi: "मुजफ्फरपुर", state: "Bihar", railStation: "Muzaffarpur Junction (MFP)", airport: "Darbhanga / Patna Airport", distanceKm: "970 km", region: "East" },
  { nameEn: "Puducherry", nameHi: "पुडुचेरी", state: "Puducherry", railStation: "Puducherry (PDY)", airport: "Puducherry / Chennai Airport", distanceKm: "2,510 km", region: "South" },
  { nameEn: "Rohtak", nameHi: "रोहतक", state: "Haryana", railStation: "Rohtak Junction (ROK)", airport: "IGI Airport Delhi (DEL)", distanceKm: "255 km", region: "North" },
  { nameEn: "Rourkela", nameHi: "राउरकेला", state: "Odisha", railStation: "Rourkela Junction (ROU)", airport: "Jharsuguda / Ranchi Airport", distanceKm: "1,470 km", region: "East" },
  { nameEn: "Salem", nameHi: "सेलम", state: "Tamil Nadu", railStation: "Salem Junction (SA)", airport: "Salem Airport (SXV)", distanceKm: "2,520 km", region: "South" },
  { nameEn: "Siliguri", nameHi: "सिलीगुड़ी", state: "West Bengal", railStation: "New Jalpaiguri (NJP)", airport: "Bagdogra International Airport (IXB)", distanceKm: "1,440 km", region: "East" },
  { nameEn: "Solapur", nameHi: "सोलापुर", state: "Maharashtra", railStation: "Solapur (SUR)", airport: "Pune / Hyderabad Airport", distanceKm: "1,740 km", region: "West" },
  { nameEn: "Tirupati", nameHi: "तिरुपति", state: "Andhra Pradesh", railStation: "Tirupati (TPTY)", airport: "Tirupati International Airport (TIR)", distanceKm: "2,240 km", region: "South" },
  { nameEn: "Udaipur", nameHi: "उदयपुर", state: "Rajasthan", railStation: "Udaipur City (UDZ)", airport: "Maharana Pratap Airport (UDR)", distanceKm: "875 km", region: "West" },
  { nameEn: "Ujjain", nameHi: "उज्जैन", state: "Madhya Pradesh", railStation: "Ujjain Junction (UJN)", airport: "Devi Ahilya Bai Holkar Airport, Indore (IDR)", distanceKm: "960 km", region: "Central" },
  { nameEn: "Vellore", nameHi: "वेल्लोर", state: "Tamil Nadu", railStation: "Katpadi Junction (KPD)", airport: "Chennai International Airport (MAA)", distanceKm: "2,370 km", region: "South" },
  { nameEn: "Warangal", nameHi: "वारंगल", state: "Telangana", railStation: "Kazipet / Warangal (WL)", airport: "Rajiv Gandhi International Airport, Hyderabad (HYD)", distanceKm: "1,650 km", region: "South" },
  { nameEn: "Ahmedabad", nameHi: "अहमदाबाद", state: "Gujarat", railStation: "Ahmedabad Junction (ADI)", airport: "Sardar Vallabhbhai Patel International Airport (AMD)", distanceKm: "1,130 km", region: "West" },
  { nameEn: "Surat", nameHi: "सूरत", state: "Gujarat", railStation: "Surat (ST)", airport: "Surat International Airport (STV)", distanceKm: "1,350 km", region: "West" },
  { nameEn: "Vadodara", nameHi: "वडोदरा", state: "Gujarat", railStation: "Vadodara Junction (BRC)", airport: "Vadodara Airport (BDQ)", distanceKm: "1,210 km", region: "West" },
  { nameEn: "Delhi", nameHi: "दिल्ली", state: "Delhi NCR", railStation: "New Delhi (NDLS) / Hazrat Nizamuddin (NZM)", airport: "Indira Gandhi International Airport (DEL)", distanceKm: "220 km", region: "North" },
  { nameEn: "Prayagraj", nameHi: "प्रयागराज", state: "Uttar Pradesh", railStation: "Prayagraj Junction (PRYJ)", airport: "Prayagraj Airport (IXD)", distanceKm: "690 km", region: "North" },
  { nameEn: "Ayodhya", nameHi: "अयोध्या", state: "Uttar Pradesh", railStation: "Ayodhya Dham Junction (AY)", airport: "Maharishi Valmiki International Airport (AYJ)", distanceKm: "630 km", region: "North" },
  { nameEn: "Mathura", nameHi: "मथुरा", state: "Uttar Pradesh", railStation: "Mathura Junction (MTJ)", airport: "IGI Airport Delhi (DEL)", distanceKm: "340 km", region: "North" },
  { nameEn: "Shimla", nameHi: "शिमला", state: "Himachal Pradesh", railStation: "Shimla / Kalka (KLK)", airport: "Shimla / Chandigarh Airport", distanceKm: "280 km", region: "North" },
  { nameEn: "Jammu", nameHi: "जम्मू", state: "Jammu & Kashmir", railStation: "Jammu Tawi (JAT)", airport: "Jammu Airport (IXJ)", distanceKm: "525 km", region: "North" },
  { nameEn: "Srinagar", nameHi: "श्रीनगर", state: "Jammu & Kashmir", railStation: "Srinagar / Jammu Tawi", airport: "Sheikh ul-Alam International Airport (SXR)", distanceKm: "780 km", region: "North" },
  { nameEn: "Panipat", nameHi: "पानीपत", state: "Haryana", railStation: "Panipat Junction (PNP)", airport: "IGI Airport Delhi (DEL)", distanceKm: "170 km", region: "North" },
  { nameEn: "Karnal", nameHi: "करनाल", state: "Haryana", railStation: "Karnal (KUN)", airport: "Chandigarh / Delhi Airport", distanceKm: "135 km", region: "North" },
  { nameEn: "Hisar", nameHi: "हिसार", state: "Haryana", railStation: "Hisar Junction (HSR)", airport: "Hisar / Delhi Airport", distanceKm: "320 km", region: "North" },
  { nameEn: "Ambala", nameHi: "अंबाला", state: "Haryana", railStation: "Ambala Cantt (UMB)", airport: "Chandigarh Airport (IXC)", distanceKm: "175 km", region: "North" },
  { nameEn: "Alwar", nameHi: "अलवर", state: "Rajasthan", railStation: "Alwar Junction (AWR)", airport: "Jaipur / Delhi Airport", distanceKm: "380 km", region: "North" },
  { nameEn: "Silchar", nameHi: "सिलचर", state: "Assam", railStation: "Silchar (SCL)", airport: "Silchar Airport (IXS)", distanceKm: "2,120 km", region: "Northeast" },
  { nameEn: "Agartala", nameHi: "अगरतला", state: "Tripura", railStation: "Agartala (AGTL)", airport: "Maharaja Bir Bikram Airport (IXA)", distanceKm: "2,320 km", region: "Northeast" },
  { nameEn: "Imphal", nameHi: "इंफाल", state: "Manipur", railStation: "Jiribam / Dimapur", airport: "Bir Tikendrajit International Airport (IMF)", distanceKm: "2,240 km", region: "Northeast" },
  { nameEn: "Gangtok", nameHi: "गंगटोक", state: "Sikkim", railStation: "New Jalpaiguri (NJP)", airport: "Pakyong / Bagdogra Airport", distanceKm: "1,560 km", region: "Northeast" },
  { nameEn: "Shillong", nameHi: "शिलांग", state: "Meghalaya", railStation: "Guwahati (GHY)", airport: "Shillong Airport (SHL)", distanceKm: "1,940 km", region: "Northeast" },
  { nameEn: "Nellore", nameHi: "नेल्लोर", state: "Andhra Pradesh", railStation: "Nellore (NLR)", airport: "Tirupati / Chennai Airport", distanceKm: "2,190 km", region: "South" },
  { nameEn: "Guntur", nameHi: "गुंटूर", state: "Andhra Pradesh", railStation: "Guntur Junction (GNT)", airport: "Vijayawada Airport (VGA)", distanceKm: "1,980 km", region: "South" }
];

function slugifyCity(name: string): string {
  return 'from-' + name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export function buildCityData(meta: RawCityMeta, allCities: RawCityMeta[]): CityData {
  const slug = slugifyCity(meta.nameEn);
  const airportText = meta.airport
    ? `Direct or connecting flights from ${meta.airport} to Delhi (DEL) or Dehradun Jolly Grant Airport (DED), followed by coordinated Rudraksh Safar AC cab/coach transfer to Haridwar.`
    : `Connecting flight via nearest regional airport to Delhi (DEL) or Dehradun (DED) with Rudraksh Safar pickup to Haridwar.`;

  // Find 2 nearby cities from same region or state for internal cross-linking
  const siblings = allCities
    .filter(c => c.nameEn !== meta.nameEn && (c.state === meta.state || c.region === meta.region))
    .slice(0, 2);

  return {
    slug,
    nameEn: meta.nameEn,
    nameHi: meta.nameHi,
    stateParent: meta.state,
    catchmentAreasEn: [meta.nameEn, `${meta.nameEn} City`, `${meta.state} Pilgrims`],
    catchmentAreasHi: [meta.nameHi, `${meta.nameHi} शहर`, `${meta.state} श्रद्धालु`],
    railStations: [meta.railStation],
    airport: meta.airport,
    departureLogistics: [
      {
        mode: `Express Train from ${meta.railStation}`,
        text: `Direct or via-Delhi superfast trains from ${meta.railStation} to Haridwar Junction (HW), with coordinated station pickup and hotel check-in.`,
        status: "confirmed"
      },
      {
        mode: meta.airport ? `Flight from ${meta.airport}` : "Air Connectivity via Delhi / Dehradun",
        text: airportText,
        status: "confirmed"
      },
      {
        mode: "Rudraksh Safar Group & Family Departure",
        text: `Dedicated packages for families, groups, and senior citizens traveling from ${meta.nameEn} (${meta.state}) with MAP vegetarian meals and guided Ganga Snan.`,
        status: "confirmed"
      }
    ],
    localPickupPoints: "TODO_VERIFY",
    groupDepartureOptions: [
      {
        snanId: "snan-5-mahashivratri",
        dates: "04 Mar 2027 – 08 Mar 2027",
        notesEn: `Maha Shivratri Amrit Snan special departure for ${meta.nameEn} devotees.`,
        notesHi: `${meta.nameHi} से महाशिवरात्रि अमृत स्नान विशेष यात्रा समूह।`
      },
      {
        snanId: "snan-8-mesh-sankranti",
        dates: "12 Apr 2027 – 16 Apr 2027",
        notesEn: `Baisakhi / Mesh Sankranti Amrit Snan package from ${meta.nameEn}.`,
        notesHi: `${meta.nameHi} से बैसाखी / मेष संक्रांति अमृत स्नान पैकेज।`
      }
    ],
    localAngleEn: `Pilgrims and joint families from ${meta.nameEn} (${meta.state}) hold deep reverence for the sacred Haridwar Ardh Kumbh Mela 2027. Located approximately ${meta.distanceKm} from Haridwar, travelers from ${meta.nameEn} can easily reach the holy city via superfast trains from ${meta.railStation} or quick flights to Delhi (DEL) and Dehradun (DED). Rudraksh Safar designs seamless, stress-free Kumbh 2027 packages tailored specifically for families, groups, and senior citizens from ${meta.nameEn}, including verified Haridwar hotel stays, pure vegetarian MAP meals (Breakfast & Dinner), guided Har Ki Pauri Ganga Aarti, and optional extensions to Rishikesh, Mussoorie, Neem Karoli Baba Kainchi Dham, or Devprayag.`,
    localAngleHi: `${meta.nameHi} (${meta.state}) से हर वर्ष हजारों श्रद्धालु एवं संयुक्त परिवार पावन हरिद्वार कुंभ मेला 2027 के दर्शन एवं गंगा स्नान के लिए यात्रा करते हैं। हरिद्वार से लगभग ${meta.distanceKm} की दूरी पर स्थित ${meta.nameHi} के निवासियों के लिए ${meta.railStation} से रेल संपर्क तथा दिल्ली/देहरादून के लिए हवाई सेवा सुलभ है। रुद्राक्ष सफ़र ${meta.nameHi} के परिवारों, समूहों और वरिष्ठ नागरिकों के लिए पूर्णतः सुरक्षित एवं आरामदायक कुंभ पैकेज प्रदान करता है, जिसमें सत्यापित होटल प्रवास, शुद्ध सात्विक भोजन (नाश्ता व रात्रि भोजन), हर की पौड़ी गंगा आरती और ऋषिकेश/मसूरी/कैंची धाम भ्रमण शामिल हैं।`,
    faqs: [
      {
        id: `faq-${slug}-1`,
        questionEn: `How can I travel from ${meta.nameEn} to Haridwar for Kumbh Mela 2027?`,
        questionHi: `${meta.nameHi} से हरिद्वार कुंभ मेला 2027 की यात्रा कैसे करें?`,
        answerEn: `You can travel from ${meta.nameEn} to Haridwar either by train via ${meta.railStation} (direct or via New Delhi) or by flying to Dehradun Airport (DED) / Delhi Airport (DEL). Rudraksh Safar arranges complete transfers, hotel stay, and Ganga Snan assistance.`,
        answerHi: `${meta.nameHi} से आप ${meta.railStation} से ट्रेन द्वारा अथवा देहरादून/दिल्ली एयरपोर्ट के लिए फ्लाइट लेकर आसानी से हरिद्वार पहुंच सकते हैं। रुद्राक्ष सफ़र स्टेशन/एयरपोर्ट से पिकअप और संपूर्ण यात्रा व्यवस्था प्रदान करता है।`
      },
      {
        id: `faq-${slug}-2`,
        questionEn: `What is the starting price of a Kumbh 2027 package from ${meta.nameEn}?`,
        questionHi: `${meta.nameHi} से कुंभ मेला 2027 पैकेज की शुरुआती कीमत क्या है?`,
        answerEn: `Our Ex-Haridwar / Ex-Delhi land packages start from just ₹4,199 per person (1N/2D) on quad-sharing basis. Final package price including travel from ${meta.nameEn} depends on train/flight fare, vehicle type, and group size.`,
        answerHi: `हमारा हरिद्वार/दिल्ली आधारित पैकेज मात्र ₹4,199 प्रति व्यक्ति से शुरू होता है। ${meta.nameHi} से आने-जाने के टिकट और वाहन श्रेणी के अनुसार अंतिम कोटेशन दिया जाता है।`
      },
      {
        id: `faq-${slug}-3`,
        questionEn: `Are senior citizen special packages available for families from ${meta.nameEn}?`,
        questionHi: `क्या ${meta.nameHi} के बुजुर्ग श्रद्धालुओं के लिए विशेष कुंभ पैकेज उपलब्ध है?`,
        answerEn: `Yes! Our Kumbh Senior Citizen Special (2N/3D) starting at ₹6,039 per person features ground-floor or lift-accessible rooms, luggage help, less-crowded accessible ghats, and comfortable transport.`,
        answerHi: `हाँ! हमारा विशेष 'कुंभ सीनियर सिटीजन स्पेशल' पैकेज ₹6,039 प्रति व्यक्ति से शुरू होता है, जिसमें बुजुर्गों के लिए आरामदायक कमरे, सामान में सहायता और सुगम घाट दर्शन की व्यवस्था होती है।`
      }
    ],
    keywordTargets: [
      `kumbh mela 2027 package from ${meta.nameEn.toLowerCase()}`,
      `${meta.nameEn.toLowerCase()} to haridwar kumbh yatra`,
      `haridwar kumbh 2027 tour from ${meta.nameEn.toLowerCase()}`,
      `kumbh mela tour package ${meta.nameEn.toLowerCase()}`,
      `${meta.state.toLowerCase()} to haridwar kumbh 2027`,
      `haridwar kumbh snan package from ${meta.nameEn.toLowerCase()}`,
      `${meta.nameEn.toLowerCase()} to haridwar kumbh mela booking 2027`,
      `ardh kumbh 2027 family tour from ${meta.nameEn.toLowerCase()}`
    ],
    nearbyCityLinks: siblings.map(s => ({
      slug: slugifyCity(s.nameEn),
      nameEn: s.nameEn,
      nameHi: s.nameHi,
      contextEn: `View Kumbh 2027 departure options and packages from ${s.nameEn}.`,
      contextHi: `${s.nameHi} से कुंभ 2027 यात्रा पैकेज और विकल्प देखें।`
    })),
    hasOffice: false
  };
}

export const GENERATED_TOP_95_CITIES: CityData[] = RAW_TOP_95_CITIES.map(m => buildCityData(m, RAW_TOP_95_CITIES));

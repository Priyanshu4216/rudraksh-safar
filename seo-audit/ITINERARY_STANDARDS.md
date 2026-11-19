# STEP 4 — ITINERARY STANDARDS, COST MODELS & DRAFT PRICING
**Website:** [www.rudrakshsafar.com](https://www.rudrakshsafar.com) | **Brand:** Rudraksh Safar (Bhilai, CG)  
**Date:** November 19, 2026  
**Auditor & Conversion Specialist:** Senior Technical SEO Lead, Information Architect & Content Lead  
**Deliverables Generated:**
- [`PRICE_MODEL.csv`](file:///c:/Rudraksh%20Safar/seo-data/PRICE_MODEL.csv)
- [`PRICE_REVIEW.csv`](file:///c:/Rudraksh%20Safar/seo-data/PRICE_REVIEW.csv)

---

## 1. THE RUDRAKSH SAFAR ITINERARY WRITING STANDARD (SECTION E1)

Every package itinerary created or upgraded on this website must be written fresh in our brand voice and adhere to this 12-point quality standard. Never copy text from DMCs or competitors.

### 12-Point Itinerary Structure
1. **Compelling H1 Title**: Includes destination, duration, and target persona (e.g. *"Manali & Kasol Strangers Group Trip 3N/4D — Adventure, Snow & Mountain Vibes"* or *"Canton Fair Business Tour 4N/5D — Official Buyer Badge, 4-Star Stay & Trade Logistics"*).
2. **Quick Fact Sheet**:
   - **Duration**: Nights / Days (e.g. 3N/4D, 5N/6D)
   - **Ideal For**: Youth & Solo Travellers, Couples, Families, Senior Citizens, or Business Importers
   - **Best Season / Batch Window**: Exact calendar months with weather details
   - **Pickup / Drop Hub**: Concrete transit points (e.g. Majnu Ka Tila Delhi, Durg Junction, Swami Vivekananda Airport Raipur, or Guangzhou Baiyun Airport)
3. **Transparent Price Display String (Rule E2)**:
   - Format: *"Starting from ₹X per person (twin sharing / quad sharing), [season]. Flights [included/excluded]. 5% GST and TCS [as applicable]."*
   - Clearly flags Budget vs Standard vs Premium tiers where applicable.
4. **Day-by-Day Detailed Plan**:
   - Explicit daily headers (Day 1, Day 2, etc.) with evocative taglines.
   - **Concrete timings**: (e.g. "6:30 PM Assembly", "8:00 AM Breakfast", "3-hour drive / 85 km").
   - **Sightseeing & Activities**: Specific points of interest, entry guidelines, and free exploration windows.
   - **Meals Breakdown**: Explicitly indicates which meals are included (e.g. "Breakfast included", "Dhaba stop at traveller's expense", "Indian dinner buffet included").
   - **Night Stay**: Hotel category and location area (Rule E1: *"3-star category hotel in [Area]"*; never invent fake hotel affiliations).
5. **Accommodation Specifications**:
   - Clear disclosure of room sharing (Twin / Triple / Quad sharing).
   - Clean area description (e.g. "Central Pattaya near beach", "Bhupatwala Haridwar near ghat", "Pazhou exhibition district Guangzhou").
6. **Vehicle & Transport Details**:
   - Vehicle type: AC Tempo Traveller (12/17/26 seater), AC Innova/Crysta, Private Sedan, or Volvo semi-sleeper coach.
   - Luggage allowance and AC operation rules on hill sections.
7. **Comprehensive Inclusions**:
   - Bulleted checklist with zero ambiguity (accommodation nights, daily meal counts, private/shared vehicle usage, driver allowances, toll taxes, parking, inner line permits, buyer badges).
8. **Clear Exclusions**:
   - Airfare / long-distance train tickets (unless specified).
   - Lunch or personal meals on highway stops.
   - Entry fees / camera charges / adventure sports (paragliding, rafting, snow suit rental).
   - Early check-in / late check-out.
   - Mandatory government taxes: 5% GST and 5%/20% TCS on international bookings.
9. **Visa, Entry Permits & Documentation (Verified)**:
   - Specific document checklist (validity of passport, e-pass, biometric registration, passport size photographs).
   - Link to official government portal for visa verification.
10. **Packing & What to Carry Checklist**:
    - Season-specific gear (thermal inners, woollen caps, waterproof trekking shoes, personal medicines, power bank, motion sickness tablets).
11. **Transparent Booking & Cancellation Summary**:
    - Advance booking token amount (e.g. ₹2,000 to ₹5,000 per seat).
    - Clear refund terms (e.g. 100% refund up to 15 days before departure; 50% refund between 7–14 days; non-refundable within 7 days).
12. **Conversion & Lead Capture Triggers**:
    - Pre-filled WhatsApp direct booking link with package title and departure city.
    - Prominent Call to Action with telephone number `+91 9203650311` / `9713057086`.
    - Sticky mobile booking bar on mobile viewports.

---

## 2. COST MODEL METHODOLOGY (SECTION E2)

Every price in [`PRICE_MODEL.csv`](file:///c:/Rudraksh%20Safar/seo-data/PRICE_MODEL.csv) is derived mathematically from realistic ground components, not guesses:

$$\text{Calculated Price} = \frac{\text{Hotels} + \text{Transfers} + \text{Entry Tickets} + \text{Meals} + \text{Guides / Permits}}{1 - \text{Target Margin (15–18\%)}}$$

### Pricing Rules Followed:
1. **Existing Prices are Sacred**: Manali Kasol Strangers Trip is locked at **₹5,999** (Quad sharing). It will never be altered or contradicted.
2. **Taxes & TCS Clarification**:
   - Domestic packages: Displayed price excludes **5% GST**.
   - International packages: Displayed price excludes **5% GST** and **5% TCS** (Tax Collected at Source under Section 206C(1G) for payments up to ₹7 Lakhs).
3. **No Hidden Costs**: Airfares and visas are explicitly flagged as `[Included]` or `[Excluded]`.
4. **Price Review Flagging**: Every newly calculated price is marked `PRICE_DRAFT` in [`PRICE_REVIEW.csv`](file:///c:/Rudraksh%20Safar/seo-data/PRICE_REVIEW.csv) for your explicit approval before production deployment.
5. **Schema Guardrail (Rule E2.5)**: No `Offer` or `AggregateOffer` schema will be attached to draft prices until you approve them. Only confirmed prices (e.g. Manali ₹5,999) receive active `Offer` schema.

---

## 3. SUMMARY OF CALCULATED DRAFT PRICES (FOR OWNER REVIEW)

| Package | Duration | Basis | Calculated Starting Price (INR) | Inclusions Highlight | Review Flag |
|---|---|---|---|---|---|
| **Manali Kasol Strangers Trip** | 3N/4D | Quad Sharing | **₹5,999** *(Live Website Offer)* | Roundtrip AC Traveller from Delhi, hotel stay, 2 dinners, 2 breakfasts, Solang Valley, Kasol | `PRICE_CONFIRMED` |
| **Haridwar Kumbh Essential Snan** | 2N/3D | Twin Sharing | **₹7,499** *(Draft)* | Hotel/camp stay near Haridwar, ghat shuttles, Sattvic meals, yatra sahayak guide | `PRICE_DRAFT` |
| **Haridwar Kumbh Luxury Swiss Tent** | 3N/4D | Twin Sharing | **₹22,999** *(Draft)* | Deluxe Alpine Swiss tent with heater & bath, all organic meals, VIP darshan assistance | `PRICE_DRAFT` |
| **Canton Fair Essential Trade Tour** | 4N/5D | Twin Sharing | **₹30,999** *(Draft)* | 4-star Pazhou business hotel, daily fair shuttles, official buyer badge registration, Indian dinners | `PRICE_DRAFT` |
| **Canton Fair + Shenzhen Electronics** | 6N/7D | Twin Sharing | **₹48,999** *(Draft)* | High-speed bullet train Guangzhou-Shenzhen, 4-star stays, buyer badge, Huaqiangbei market guide | `PRICE_DRAFT` |
| **Thailand: Pattaya & Bangkok** | 4N/5D | Twin Sharing | **₹16,999** *(Draft)* | 3-star hotels (Pattaya+Bangkok), Coral Island speedboat with lunch, temple tour, airport transfers | `PRICE_DRAFT` |
| **Phuket & Krabi Island Explorer** | 5N/6D | Twin Sharing | **₹26,599** *(Draft)* | 3-star beach resorts, Phi Phi island speedboat, Krabi 4-islands tour with national park fees | `PRICE_DRAFT` |
| **Dubai City & Desert Wonder** | 4N/5D | Twin Sharing | **₹28,999** *(Draft)* | 3-star Deira/Bur Dubai hotel, Burj Khalifa 124th floor, Desert Safari with BBQ, Marina Dhow Cruise | `PRICE_DRAFT` |
| **Bali Romantic & Scenic Escape** | 5N/6D | Twin Sharing | **₹28,400** *(Draft)* | 3N hotel + 1N private pool villa, private car with chauffeur, Kintamani, Uluwatu sunset | `PRICE_DRAFT` |
| **Vietnam Highlights** | 6N/7D | Twin Sharing | **₹36,900** *(Draft)* | Overnight Halong Bay cruise, Ba Na Hills & Golden Bridge, Hanoi & Da Nang hotels, domestic flight | `PRICE_DRAFT` |
| **Singapore & Malaysia Combined** | 6N/7D | Twin Sharing | **₹47,999** *(Draft)* | 3-star hotels, Universal Studios Singapore, Sentosa, luxury coach to KL, Genting cable car | `PRICE_DRAFT` |
| **Almaty Snow & Nature Adventure** | 4N/5D | Twin Sharing | **₹25,999** *(Draft)* | 3-star central hotel, Medeu & Shymbulak mountain cable car pass, 4x4 transfers, Indian dinners | `PRICE_DRAFT` |
| **Char Dham Sacred Yatra (Complete)** | 11N/12D | Twin Sharing | **₹36,999** *(Draft)* | Pushback coach from Haridwar, route hotels, Sattvic breakfast & dinner, emergency oxygen lead | `PRICE_DRAFT` |
| **Kedarnath & Badrinath (Do Dham)** | 5N/6D | Twin Sharing | **₹20,999** *(Draft)* | Haridwar-Guptkashi-Badrinath coach, Sonprayag transfers, vegetarian meals, yatra coordinator | `PRICE_DRAFT` |
| **Kashmir Paradise Tour** | 5N/6D | Twin Sharing | **₹24,999** *(Draft)* | 3-star hotels + Deluxe Dal Lake Houseboat, private car for all transfers, Shikara ride, breakfasts & dinners | `PRICE_DRAFT` |
| **Ladakh High Altitude Circuit** | 6N/7D | Twin Sharing | **₹32,999** *(Draft)* | 3-star Leh hotel + Nubra & Pangong deluxe camps, Scorpio/Innova vehicle, Inner Line Permits, oxygen | `PRICE_DRAFT` |
| **Goa Relaxed Beach Holiday** | 3N/4D | Twin Sharing | **₹11,599** *(Draft)* | 3-star pool resort in Calangute/Candolim, airport/railway transfers, 2 full-day sightseeing cars | `PRICE_DRAFT` |
| **Kerala Backwaters & Hills** | 5N/6D | Twin Sharing | **₹24,999** *(Draft)* | Munnar tea resorts + Private AC Deluxe Alleppey Houseboat with all meals, private car for full trip | `PRICE_DRAFT` |
| **Puri Jagannath Dham & Konark** | 2N/3D | Twin Sharing | **₹8,199** *(Draft)* | Beach hotel near Puri temple, Konark Sun Temple, Chilika dolphin boat ride, panda darshan assist | `PRICE_DRAFT` |
| **Ayodhya, Varanasi & Prayagraj** | 3N/4D | Twin Sharing | **₹12,999** *(Draft)* | Standard hotels near temples, private AC sedan, Kashi Vishwanath darshan, private boat Ganga Aarti | `PRICE_DRAFT` |

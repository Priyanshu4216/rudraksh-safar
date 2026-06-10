import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "When does the Leh Ladakh road open in 2026?", a: "The Srinagar-Leh road is expected to open by late March 2026, while the Manali-Leh road usually opens by late April to early May 2026 depending on BRO snow clearance." },
  { q: "Is Ladakh open in May 2026?", a: "Yes, by May, both major highways (Srinagar-Leh and Manali-Leh) and internal routes to Pangong Lake and Nubra Valley are generally open to tourists." },
  { q: "Can we go to Ladakh in April 2026 by road?", a: "You can likely take the Srinagar-Leh route by mid-April. However, the Manali-Leh route is highly risky and often closed until late April due to heavy snow at Baralacha La." },
  { q: "When does the Atal Tunnel open for Leh?", a: "The Atal Tunnel is open year-round for reaching Lahaul Valley. However, the onward route to Leh over Baralacha La only opens around May." },
  { q: "Which is better: Srinagar to Leh or Manali to Leh?", a: "Srinagar to Leh is much better for acclimatization and opens earlier. Manali to Leh is more adventurous and scenic but climbs to extreme altitudes very rapidly, increasing AMS risk." },
  { q: "Is it safe to ride a bike to Ladakh in May?", a: "It is possible but extremely challenging. You must expect icy roads, rapid melting snow causing heavy water crossings (pagal nallahs), and sudden weather changes. June is significantly safer." },
  { q: "When will Pangong Lake open in 2026?", a: "Pangong Lake is technically accessible year-round from Leh via Chang La pass, though heavy snowfall can cause temporary 1-2 day closures during the winter months." },
  { q: "Do I need a permit for Ladakh in 2026?", a: "Yes, Indian nationals need to pay an Environmental Fee (often still called ILP), and foreigners need a Protected Area Permit (PAP) to visit restricted areas like Nubra, Pangong, and Hanle." },
  { q: "When does the Zojila Pass open in 2026?", a: "Zojila Pass historically opens between mid-March and early April. We predict a late March 2026 opening based on recent BRO project beacon trends." },
  { q: "When does Rohtang Pass / Baralacha La open?", a: "Baralacha La is the major bottleneck on the Manali route and usually opens by late April or early May." },
  { q: "How to avoid AMS in Ladakh?", a: "Rest completely for the first 24-48 hours upon arrival in Leh. Stay hydrated, avoid alcohol/smoking, and ascend gradually. Consult a doctor for Diamox." },
  { q: "Which mobile network works in Ladakh?", a: "BSNL and Jio postpaid networks work best across Ladakh. Airtel postpaid works fine in Leh town. Prepaid connections from outside J&K/Ladakh do not work at all." },
  { q: "Are ATMs easily available in Ladakh?", a: "Leh town has plenty of ATMs (SBI, J&K Bank, HDFC). Outside Leh (in Nubra or Pangong), ATMs are rare to non-existent, so carry sufficient cash." },
  { q: "Is a 4x4 vehicle required for Ladakh?", a: "Not strictly required for main tourist routes, but a high-ground-clearance vehicle (SUV/MUV) is highly recommended for tackling deep water crossings and rough patches." },
  { q: "Can I drive a hatchback to Ladakh?", a: "Yes, but you will face severe challenges at water crossings on the Manali route and unpaved mountain passes. It requires exceptional mountain driving skills and underbody protection." },
  { q: "When is the best time to cross water crossings?", a: "Always cross them early in the morning before the strong sun melts the glacier snow, which drastically increases the water volume and current by the afternoon." },
  { q: "Is Umling La open for tourists?", a: "Yes, Umling La is the world's highest motorable road and is open to tourists. It generally becomes accessible around June when the extreme weather stabilizes." },
  { q: "Do I need advance hotel bookings in June?", a: "Yes, absolutely. June is the peak tourist season. Advance booking in Leh, Nubra, and Pangong is crucial as properties sell out months in advance." },
  { q: "What kind of clothes should I pack for a May trip?", a: "Carry heavy woolens, thermal inner-wear, a windproof and waterproof jacket, and good trekking shoes. Layering is key as temperatures fluctuate wildly." },
  { q: "Is medical oxygen easily available?", a: "Oxygen cylinders can be easily rented in Leh for your vehicle. You should carry portable oxygen cans for emergencies on high passes like Khardung La." },
  { q: "Can foreigners travel the Manali-Leh highway?", a: "Yes, but they must register at checkposts along the way and will need Protected Area Permits (PAPs) for internal restricted areas like Pangong and Nubra." },
  { q: "How much does a Ladakh road trip cost?", a: "A standard 7-10 day road trip can cost anywhere from ₹25,000 to ₹50,000 per person, heavily depending on your choice of transport, stay, and group size." },
  { q: "Is vegetarian food easily available?", a: "Yes, Ladakh caters heavily to Indian tourists; vegetarian food, dal chawal, momos, and Maggi are ubiquitous everywhere." },
  { q: "Are there mechanics on the Manali-Leh route?", a: "Very few. You must carry basic spare parts (clutch cables, puncture kits, air pump) and know how to do basic repairs if you are self-driving or riding." },
  { q: "Why choose Rudraksh Safar for a Ladakh trip?", a: "We provide expertly curated itineraries, reliable local transport, oxygen-equipped vehicles, and 24/7 on-ground support to ensure a seamless, safe experience." }
];

export const FAQSection = () => {
  return (
    <section id="faqs" className="space-y-6 scroll-mt-24">
      <h2 className="text-3xl font-bold">Frequently Asked Questions (FAQs)</h2>
      <p className="text-lg text-muted-foreground">
        We've compiled the 25 most critical questions travelers ask us when planning their 2026 Leh Ladakh expedition.
      </p>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-semibold">{faq.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

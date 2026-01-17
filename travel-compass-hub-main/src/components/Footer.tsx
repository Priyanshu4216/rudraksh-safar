import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from './ThemeProvider';
import logoDark from '@/assets/images/logo-dark-original.jpg';
import logoLight from '@/assets/images/logo-light-theme.png';

import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PHONE_NUMBER = '919229150311';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Packages', href: '#packages' },
  { name: 'Destinations', href: '#destinations' },
  { name: 'Contact', href: '#contact' },
];

const legalLinks = [
  { name: 'Privacy Policy', id: 'privacy' },
  { name: 'Terms & Conditions', id: 'terms' },
  { name: 'Cookie Policy', id: 'cookies' },
  { name: 'Disclaimer', id: 'disclaimer' },
  { name: 'Refund Policy', id: 'refund' },
];

const supportLinks = [
  { name: 'Contact Support', href: '#contact' },
  { name: 'Cancellation Policy', id: 'cancellation' },
  { name: 'Booking Policy', id: 'booking' },
  { name: 'FAQs', href: '#faqs' },
];

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/people/Rudraksh-Safar/pfbid0iAvSgkmW94itABRQ4h3f8kSkkyT16Kn7ocq97wUWVY35GWgj61YjdQNBeLy2nVTtl/', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/rudrakshsafar?igsh=MWhnY25ieDBlNDVwbw==', label: 'Instagram' },
  { icon: Youtube, href: 'https://www.youtube.com/@RudrakshSafar', label: 'YouTube' },
];

const legalContent = {
  privacy: {
    title: 'Privacy Policy',
    content: `
      <p><strong>Effective Date:</strong> January 14, 2026 | <strong>Last Updated:</strong> January 14, 2026</p>
      
      <p>Rudraksh Safar ("we," "us," or "our"), located at GE Road, In Front of Petrol Pump, Bhilai 3, Chhattisgarh 490021, India, is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website or use our travel services.</p>
      
      <h3>1. Information We Collect</h3>
      <p>We may collect the following categories of personal information:</p>
      <ul>
        <li><strong>Identity Information:</strong> Full name, date of birth, gender, nationality, passport details, and government-issued identification numbers as required for travel bookings.</li>
        <li><strong>Contact Information:</strong> Email address, phone number, postal address, and emergency contact details.</li>
        <li><strong>Travel Information:</strong> Travel preferences, dietary requirements, medical conditions relevant to travel, frequent flyer numbers, and past travel history with us.</li>
        <li><strong>Financial Information:</strong> Payment card details, bank account information, and billing address (processed through secure third-party payment gateways).</li>
        <li><strong>Technical Information:</strong> IP address, browser type, device information, operating system, and cookies data.</li>
        <li><strong>Communication Data:</strong> Records of correspondence, feedback, and reviews you provide to us.</li>
      </ul>
      
      <h3>2. Legal Basis for Processing</h3>
      <p>We process your personal data based on:</p>
      <ul>
        <li><strong>Contractual Necessity:</strong> To fulfill our obligations under travel booking contracts.</li>
        <li><strong>Legal Obligations:</strong> To comply with applicable laws, including visa requirements and tax regulations.</li>
        <li><strong>Legitimate Interests:</strong> To improve our services and prevent fraud.</li>
        <li><strong>Consent:</strong> For marketing communications and non-essential cookies.</li>
      </ul>
      
      <h3>3. How We Use Your Information</h3>
      <ul>
        <li>Processing and managing your travel bookings, reservations, and inquiries.</li>
        <li>Communicating booking confirmations, travel updates, and itinerary changes.</li>
        <li>Facilitating visa applications and travel documentation requirements.</li>
        <li>Processing payments and issuing invoices and receipts.</li>
        <li>Providing customer support and resolving complaints.</li>
        <li>Sending promotional offers and newsletters (with your consent).</li>
        <li>Improving our website, services, and customer experience.</li>
        <li>Complying with legal and regulatory requirements.</li>
        <li>Detecting and preventing fraud and security threats.</li>
      </ul>
      
      <h3>4. Sharing of Information</h3>
      <p>We may share your personal information with:</p>
      <ul>
        <li><strong>Service Providers:</strong> Airlines, hotels, transport operators, tour guides, and other third-party suppliers necessary to fulfill your travel arrangements.</li>
        <li><strong>Government Authorities:</strong> Immigration, customs, and security agencies as required by law.</li>
        <li><strong>Payment Processors:</strong> Secure third-party payment gateways for transaction processing.</li>
        <li><strong>Insurance Providers:</strong> When you purchase travel insurance through us.</li>
        <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority.</li>
      </ul>
      <p>We do not sell, rent, or trade your personal information to third parties for their marketing purposes.</p>
      
      <h3>5. International Data Transfers</h3>
      <p>Your information may be transferred to and processed in countries outside India for the purpose of fulfilling international travel bookings. We ensure appropriate safeguards are in place to protect your data in accordance with applicable data protection laws.</p>
      
      <h3>6. Data Retention</h3>
      <p>We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, typically for a period of 7 years from the date of your last transaction, or as required by applicable laws and regulations.</p>
      
      <h3>7. Your Rights</h3>
      <p>Subject to applicable law, you have the right to:</p>
      <ul>
        <li>Access and obtain a copy of your personal data.</li>
        <li>Rectify inaccurate or incomplete information.</li>
        <li>Request deletion of your personal data (subject to legal retention requirements).</li>
        <li>Object to or restrict processing of your data.</li>
        <li>Withdraw consent for marketing communications.</li>
        <li>Data portability where technically feasible.</li>
      </ul>
      <p>To exercise these rights, contact us at rudrakshsafar@gmail.com or call +91 92291 50311.</p>
      
      <h3>8. Data Security</h3>
      <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
      
      <h3>9. Children's Privacy</h3>
      <p>Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children without parental consent. Travel bookings for minors must be made by a parent or legal guardian.</p>
      
      <h3>10. Third-Party Links</h3>
      <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies before providing any personal information.</p>
      
      <h3>11. Changes to This Policy</h3>
      <p>We may update this Privacy Policy periodically. The "Last Updated" date at the top indicates when revisions were made. Continued use of our services after changes constitutes acceptance of the updated policy.</p>
      
      <h3>12. Contact Us</h3>
      <p>For any privacy-related questions or concerns, contact us at:</p>
      <p><strong>Rudraksh Safar</strong><br/>
      GE Road, In Front of Petrol Pump, Bhilai 3, Chhattisgarh 490021<br/>
      Email: rudrakshsafar@gmail.com | Phone: +91 92291 50311</p>
    `,
  },
  terms: {
    title: 'Terms & Conditions',
    content: `
      <p><strong>Effective Date:</strong> January 14, 2026 | <strong>Last Updated:</strong> January 14, 2026</p>
      
      <p>These Terms and Conditions ("Terms") govern your use of the Rudraksh Safar website and all travel services provided by Rudraksh Safar ("Company," "we," "us," or "our"). By accessing our website or booking any travel service, you agree to be bound by these Terms. If you do not agree, please do not use our services.</p>
      
      <h3>1. Definitions</h3>
      <ul>
        <li><strong>"Client," "You," "Your":</strong> Any person or entity using our services or website.</li>
        <li><strong>"Services":</strong> All travel-related services including but not limited to tour packages, flight bookings, hotel reservations, visa assistance, and travel consultancy.</li>
        <li><strong>"Third-Party Suppliers":</strong> Airlines, hotels, transport operators, tour operators, and other service providers engaged to fulfill your travel arrangements.</li>
        <li><strong>"Booking":</strong> A confirmed reservation for any travel service.</li>
      </ul>
      
      <h3>2. Role of Rudraksh Safar</h3>
      <p><strong>IMPORTANT:</strong> Rudraksh Safar acts solely as an intermediary and facilitator between you and Third-Party Suppliers. We are not the principal provider of travel services such as accommodation, transportation, tours, or activities. All such services are provided directly by the respective Third-Party Suppliers under their own terms and conditions.</p>
      <p>We exercise reasonable care in selecting reputable suppliers but do not own, operate, manage, or control any aircraft, hotels, transportation, or other facilities used in connection with the travel services. Our responsibility is limited to making reservations on your behalf.</p>
      
      <h3>3. Booking Process & Confirmation</h3>
      <ul>
        <li>All inquiries submitted through our website or WhatsApp are non-binding expressions of interest.</li>
        <li>A booking is confirmed only upon: (a) receipt of required deposit/payment, (b) written confirmation from Rudraksh Safar, and (c) subject to availability from Third-Party Suppliers.</li>
        <li>Prices quoted are estimates based on current rates and may change until confirmed in writing.</li>
        <li>Final itineraries, prices, and terms will be communicated in the booking confirmation document.</li>
      </ul>
      
      <h3>4. Payment Terms</h3>
      <ul>
        <li>A non-refundable deposit (typically 25-50% of total cost) is required to initiate booking.</li>
        <li>Full payment is due as specified in your booking confirmation, typically 30 days before departure for domestic trips and 45 days for international trips.</li>
        <li>Payment can be made via bank transfer, credit/debit card, or UPI. All payment processing is handled through secure third-party gateways.</li>
        <li>Failure to make timely payments may result in automatic cancellation of your booking.</li>
        <li>All prices are quoted in Indian Rupees (INR) unless otherwise specified.</li>
      </ul>
      
      <h3>5. Travel Documentation</h3>
      <p>You are solely responsible for:</p>
      <ul>
        <li>Ensuring valid passports with at least 6 months validity from return date.</li>
        <li>Obtaining necessary visas, travel permits, and entry requirements.</li>
        <li>Carrying required health certificates, vaccination records, and travel insurance documents.</li>
        <li>Complying with all immigration, customs, and security regulations.</li>
      </ul>
      <p>While we may provide visa assistance services, obtaining the visa remains your responsibility. We are not liable for any denied entry, deportation, or travel disruption due to documentation issues.</p>
      
      <h3>6. Health & Fitness</h3>
      <p>You must disclose any medical conditions, disabilities, dietary requirements, or mobility limitations that may affect your travel. Certain tours require a minimum level of physical fitness. We reserve the right to refuse participation if we reasonably believe your health condition poses a risk to yourself or others.</p>
      
      <h3>7. Changes & Modifications</h3>
      <ul>
        <li><strong>By You:</strong> Requests for changes to confirmed bookings are subject to availability and may incur additional charges imposed by Third-Party Suppliers.</li>
        <li><strong>By Us:</strong> We reserve the right to modify itineraries due to weather conditions, safety concerns, local regulations, or operational requirements. We will endeavor to provide equivalent alternatives without additional cost.</li>
        <li><strong>By Third-Party Suppliers:</strong> Airlines, hotels, and other suppliers may change schedules, routes, or services. We will communicate such changes promptly but are not liable for disruptions caused by suppliers.</li>
      </ul>
      
      <h3>8. Limitation of Liability</h3>
      <p><strong>To the maximum extent permitted by law:</strong></p>
      <ul>
        <li>Rudraksh Safar shall not be liable for any death, injury, illness, damage, delay, loss, or expense arising from acts or omissions of Third-Party Suppliers, including airlines, hotels, transport operators, tour guides, or any other service providers.</li>
        <li>We are not liable for any losses arising from Force Majeure events including but not limited to natural disasters, pandemics, civil unrest, war, terrorism, strikes, or government actions.</li>
        <li>Our maximum aggregate liability for any claim shall not exceed the total amount paid by you for the specific service giving rise to the claim.</li>
        <li>We are not liable for indirect, incidental, consequential, or punitive damages.</li>
      </ul>
      
      <h3>9. Indemnification</h3>
      <p>You agree to indemnify and hold harmless Rudraksh Safar, its directors, employees, and agents from any claims, damages, losses, or expenses arising from your breach of these Terms, your violation of any law, or your conduct during travel.</p>
      
      <h3>10. Travel Insurance</h3>
      <p>We strongly recommend purchasing comprehensive travel insurance covering trip cancellation, medical emergencies, evacuation, baggage loss, and personal liability. Rudraksh Safar is not an insurance provider and assumes no liability for uninsured losses.</p>
      
      <h3>11. Intellectual Property</h3>
      <p>All content on our website including text, images, logos, and graphics is the intellectual property of Rudraksh Safar or its licensors. Unauthorized use, reproduction, or distribution is prohibited.</p>
      
      <h3>12. Governing Law & Dispute Resolution</h3>
      <ul>
        <li>These Terms are governed by the laws of India.</li>
        <li>Any disputes shall first be attempted to be resolved through mutual negotiation.</li>
        <li>Unresolved disputes shall be subject to the exclusive jurisdiction of the courts in Durg, Chhattisgarh, India.</li>
      </ul>
      
      <h3>13. Severability</h3>
      <p>If any provision of these Terms is found invalid or unenforceable, the remaining provisions shall continue in full force and effect.</p>
      
      <h3>14. Contact Information</h3>
      <p><strong>Rudraksh Safar</strong><br/>
      GE Road, In Front of Petrol Pump, Bhilai 3, Chhattisgarh 490021<br/>
      Email: rudrakshsafar@gmail.com | Phone: +91 92291 50311</p>
    `,
  },
  cookies: {
    title: 'Cookie Policy',
    content: `
      <p><strong>Effective Date:</strong> January 14, 2026 | <strong>Last Updated:</strong> January 14, 2026</p>
      
      <p>This Cookie Policy explains how Rudraksh Safar uses cookies and similar tracking technologies on our website. By continuing to use our website, you consent to the use of cookies as described herein.</p>
      
      <h3>1. What Are Cookies?</h3>
      <p>Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit a website. They help websites remember your preferences, understand how you use the site, and improve your browsing experience.</p>
      
      <h3>2. Types of Cookies We Use</h3>
      
      <h4>a) Strictly Necessary Cookies</h4>
      <p>Essential for website functionality. These cookies enable core features like security, network management, and accessibility. You cannot opt out of these cookies as they are necessary for the website to function.</p>
      
      <h4>b) Performance & Analytics Cookies</h4>
      <p>Help us understand how visitors interact with our website by collecting anonymous information about page visits, traffic sources, and user behavior. We use this data to improve our website and services.</p>
      
      <h4>c) Functionality Cookies</h4>
      <p>Remember your preferences and settings (such as language, region, or display preferences) to provide a more personalized experience.</p>
      
      <h4>d) Marketing & Advertising Cookies</h4>
      <p>Used to deliver relevant advertisements and track the effectiveness of our marketing campaigns. These cookies may be set by third-party advertising networks with our permission.</p>
      
      <h3>3. Third-Party Cookies</h3>
      <p>We may allow third-party service providers to place cookies on your device for:</p>
      <ul>
        <li>Analytics services (e.g., Google Analytics)</li>
        <li>Social media integration (e.g., Facebook, Instagram)</li>
        <li>Advertising and remarketing</li>
        <li>Payment processing</li>
      </ul>
      <p>These third parties have their own privacy and cookie policies, which we encourage you to review.</p>
      
      <h3>4. Cookie Retention</h3>
      <ul>
        <li><strong>Session Cookies:</strong> Temporary cookies deleted when you close your browser.</li>
        <li><strong>Persistent Cookies:</strong> Remain on your device for a set period (typically 30 days to 2 years) or until you delete them.</li>
      </ul>
      
      <h3>5. Managing Cookies</h3>
      <p>You can control and manage cookies through your browser settings:</p>
      <ul>
        <li><strong>Chrome:</strong> Settings > Privacy and Security > Cookies</li>
        <li><strong>Firefox:</strong> Options > Privacy & Security > Cookies</li>
        <li><strong>Safari:</strong> Preferences > Privacy > Cookies</li>
        <li><strong>Edge:</strong> Settings > Privacy & Security > Cookies</li>
      </ul>
      <p><strong>Note:</strong> Disabling cookies may affect website functionality and your user experience.</p>
      
      <h3>6. Do Not Track</h3>
      <p>Some browsers offer a "Do Not Track" feature. Our website does not currently respond to DNT signals as there is no industry standard for compliance.</p>
      
      <h3>7. Updates to This Policy</h3>
      <p>We may update this Cookie Policy periodically. The "Last Updated" date indicates when changes were made.</p>
      
      <h3>8. Contact Us</h3>
      <p>For questions about our use of cookies, contact us at rudrakshsafar@gmail.com.</p>
    `,
  },
  disclaimer: {
    title: 'Disclaimer',
    content: `
      <p><strong>Effective Date:</strong> January 14, 2026 | <strong>Last Updated:</strong> January 14, 2026</p>
      
      <p>Please read this disclaimer carefully before using the Rudraksh Safar website or services. By accessing our website or engaging our services, you acknowledge and accept the following disclaimers.</p>
      
      <h3>1. General Disclaimer</h3>
      <p>The information provided on this website is for general informational purposes only. While we strive to keep information accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on this website.</p>
      
      <h3>2. Visual Representations</h3>
      <p>Photographs, images, and videos displayed on this website are for illustrative purposes only. They may not accurately represent actual accommodations, destinations, attractions, or experiences. Images may be sourced from suppliers, stock libraries, or promotional materials. Actual conditions may vary significantly due to seasonality, renovation, or other factors.</p>
      
      <h3>3. Pricing Disclaimer</h3>
      <ul>
        <li>"Starting from" prices are indicative only and based on specific dates, seasons, room categories, and occupancy.</li>
        <li>Prices are subject to change without notice based on availability, currency fluctuations, taxes, and surcharges.</li>
        <li>Final confirmed prices will be communicated in your booking confirmation.</li>
        <li>Additional costs such as visa fees, travel insurance, tips, personal expenses, and optional activities are not included unless explicitly stated.</li>
      </ul>
      
      <h3>4. Itinerary Disclaimer</h3>
      <p>Published itineraries are subject to change without prior notice due to:</p>
      <ul>
        <li>Weather and natural conditions</li>
        <li>Local regulations and government directives</li>
        <li>Safety and security concerns</li>
        <li>Supplier operational requirements</li>
        <li>Force Majeure events</li>
      </ul>
      <p>We will endeavor to provide equivalent alternatives when changes are necessary, but we are not liable for any inconvenience or losses resulting from such changes.</p>
      
      <h3>5. Third-Party Services Disclaimer</h3>
      <p><strong>IMPORTANT:</strong> Rudraksh Safar acts as an intermediary and does not own, operate, or control any aircraft, hotels, vehicles, restaurants, or other facilities used in travel arrangements. All services are provided by independent Third-Party Suppliers under their own terms, conditions, and liability limitations. We expressly disclaim all liability for:</p>
      <ul>
        <li>Acts, omissions, or negligence of Third-Party Suppliers</li>
        <li>Quality, safety, or suitability of third-party services</li>
        <li>Delays, cancellations, or schedule changes by suppliers</li>
        <li>Loss, damage, or theft of personal belongings</li>
        <li>Injury, illness, or death during travel</li>
      </ul>
      
      <h3>6. Travel Advisory Disclaimer</h3>
      <p>Travelers are solely responsible for reviewing current travel advisories, health requirements, and entry regulations for their chosen destinations. We recommend checking official government sources such as the Ministry of External Affairs (MEA) travel advisories. We are not responsible for changes in entry requirements, health protocols, or travel restrictions.</p>
      
      <h3>7. Health & Safety Disclaimer</h3>
      <p>Travel involves inherent risks. You travel at your own risk and are responsible for your own health, safety, and well-being. We strongly recommend:</p>
      <ul>
        <li>Consulting healthcare providers before travel</li>
        <li>Obtaining necessary vaccinations and medications</li>
        <li>Purchasing comprehensive travel and medical insurance</li>
        <li>Following all safety guidelines during travel</li>
      </ul>
      
      <h3>8. No Professional Advice</h3>
      <p>Content on this website does not constitute professional travel, legal, financial, medical, or visa advice. For specific advice, please consult qualified professionals.</p>
      
      <h3>9. External Links Disclaimer</h3>
      <p>Our website may contain links to external websites. We have no control over the content, privacy policies, or practices of these third-party sites and assume no responsibility for them.</p>
      
      <h3>10. Limitation of Liability</h3>
      <p>To the fullest extent permitted by law, Rudraksh Safar, its directors, employees, and agents shall not be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising from your use of this website or our services.</p>
      
      <h3>11. Copyright Notice</h3>
      <p>All content on this website is protected by copyright and intellectual property laws. Unauthorized reproduction, distribution, or use of any content is strictly prohibited.</p>
      
      <h3>12. Changes to Disclaimer</h3>
      <p>We reserve the right to modify this disclaimer at any time. Continued use of our website constitutes acceptance of any changes.</p>
    `,
  },
  refund: {
    title: 'Refund Policy',
    content: `
      <p><strong>Effective Date:</strong> January 14, 2026 | <strong>Last Updated:</strong> January 14, 2026</p>
      
      <p><strong>PLEASE READ THIS POLICY CAREFULLY. IT CONTAINS IMPORTANT INFORMATION ABOUT REFUNDS AND YOUR RIGHTS.</strong></p>
      
      <h3>1. Understanding Our Role</h3>
      <p><strong>IMPORTANT NOTICE:</strong> Rudraksh Safar operates as an intermediary travel agent and facilitator between you (the traveler) and various Third-Party Service Providers including, but not limited to, airlines, hotels, resorts, transport operators, tour companies, and other hospitality and travel service providers ("Service Providers").</p>
      <p>We do not own, manage, or operate the hotels, flights, vehicles, or other services included in your travel arrangements. Therefore, <strong>refund decisions, policies, and processing are primarily governed by the respective Service Providers' terms and conditions</strong>, not solely by Rudraksh Safar.</p>
      
      <h3>2. How Refunds Are Determined</h3>
      <p>When you request a cancellation or refund:</p>
      <ul>
        <li>We will communicate your request to the relevant Service Providers (hotels, airlines, etc.).</li>
        <li>The Service Providers will assess your request based on their own cancellation and refund policies.</li>
        <li>The refund amount, if any, is determined entirely by the Service Providers' policies, booking conditions, and applicable laws.</li>
        <li>We will relay the Service Providers' decision to you accurately and transparently.</li>
      </ul>
      <p><strong>We have no authority to override, modify, or guarantee refunds from Service Providers.</strong></p>
      
      <h3>3. Service Provider Refund Policies</h3>
      <p>Refund policies vary significantly among Service Providers:</p>
      <ul>
        <li><strong>Airlines:</strong> Most airline tickets have strict cancellation policies. Low-cost carriers often offer non-refundable fares. Refunds, if available, may be subject to cancellation fees.</li>
        <li><strong>Hotels & Resorts:</strong> Policies range from fully refundable to non-refundable. Peak season and special rate bookings often have stricter policies.</li>
        <li><strong>Tour Operators:</strong> Group tours and fixed departures typically have tiered cancellation charges based on proximity to departure date.</li>
        <li><strong>Transport Services:</strong> Trains, buses, and cab services have their own cancellation policies.</li>
      </ul>
      
      <h3>4. Rudraksh Safar Service Fee</h3>
      <p>Our service fee (if applicable) for booking facilitation, consultation, and itinerary planning is generally non-refundable as it compensates for services already rendered. This fee is separate from amounts paid to Service Providers.</p>
      
      <h3>5. Refund Processing</h3>
      <ul>
        <li>Refund requests must be submitted in writing via email to rudrakshsafar@gmail.com or through WhatsApp.</li>
        <li>Processing time depends on the Service Providers and may take 15-45 business days from the date of cancellation approval.</li>
        <li>Refunds will be processed to the original payment method unless otherwise agreed.</li>
        <li>Bank processing times may add additional days for the refund to reflect in your account.</li>
        <li>Currency fluctuations and conversion fees may affect refund amounts for international transactions.</li>
      </ul>
      
      <h3>6. Non-Refundable Circumstances</h3>
      <p>Refunds are typically not available in the following circumstances:</p>
      <ul>
        <li>No-shows or failure to use booked services without prior cancellation.</li>
        <li>Early departure or voluntary termination of travel.</li>
        <li>Denied boarding or entry due to invalid travel documents.</li>
        <li>Cancellation of non-refundable bookings as per Service Provider terms.</li>
        <li>Force Majeure events beyond anyone's control.</li>
        <li>Services already utilized or partially consumed.</li>
      </ul>
      
      <h3>7. Cancellations Due to Force Majeure</h3>
      <p>In cases of Force Majeure (natural disasters, pandemics, civil unrest, war, government restrictions, etc.), refund policies of Service Providers shall apply. We will assist in communicating with Service Providers but cannot guarantee refunds. We encourage purchasing travel insurance to cover such events.</p>
      
      <h3>8. Disputes</h3>
      <p>If you disagree with a refund decision:</p>
      <ul>
        <li>Contact us first with your concerns and supporting documentation.</li>
        <li>We will escalate your case to the relevant Service Providers on your behalf.</li>
        <li>Final resolution rests with the Service Providers and applicable consumer protection laws.</li>
      </ul>
      
      <h3>9. Travel Insurance Recommendation</h3>
      <p>We strongly recommend purchasing comprehensive travel insurance that includes trip cancellation coverage. Insurance can protect you against financial losses when refunds are not available from Service Providers.</p>
      
      <h3>10. Your Acknowledgment</h3>
      <p>By booking with Rudraksh Safar, you acknowledge and accept that:</p>
      <ul>
        <li>Refund decisions are made by Service Providers, not Rudraksh Safar.</li>
        <li>We act in good faith to communicate your requests but cannot guarantee outcomes.</li>
        <li>You have reviewed and understood the cancellation policies of Service Providers before booking.</li>
      </ul>
      
      <h3>11. Contact Us</h3>
      <p>For refund inquiries, contact us at:<br/>
      <strong>Email:</strong> rudrakshsafar@gmail.com<br/>
      <strong>Phone:</strong> +91 92291 50311<br/>
      <strong>WhatsApp:</strong> +91 92291 50311</p>
    `,
  },
  cancellation: {
    title: 'Cancellation Policy',
    content: `
      <p><strong>Effective Date:</strong> January 14, 2026 | <strong>Last Updated:</strong> January 14, 2026</p>
      
      <h3>1. General Cancellation Guidelines</h3>
      <p>All cancellation requests must be submitted in writing via email (rudrakshsafar@gmail.com) or WhatsApp (+91 92291 50311). Verbal cancellation requests will not be accepted.</p>
      <p><strong>IMPORTANT:</strong> The cancellation charges outlined below are indicative and subject to the specific policies of Third-Party Service Providers (airlines, hotels, tour operators, etc.). Actual charges may be higher or lower based on their terms.</p>
      
      <h3>2. Standard Cancellation Timeline</h3>
      <p><strong>For Domestic Tour Packages:</strong></p>
      <ul>
        <li><strong>45+ days before departure:</strong> 10% of package cost or actual supplier charges, whichever is higher.</li>
        <li><strong>30-44 days before departure:</strong> 25% of package cost or actual supplier charges.</li>
        <li><strong>15-29 days before departure:</strong> 50% of package cost or actual supplier charges.</li>
        <li><strong>7-14 days before departure:</strong> 75% of package cost or actual supplier charges.</li>
        <li><strong>Less than 7 days:</strong> 100% cancellation charge (no refund).</li>
      </ul>
      
      <p><strong>For International Tour Packages:</strong></p>
      <ul>
        <li><strong>60+ days before departure:</strong> 10% of package cost or actual supplier charges, whichever is higher.</li>
        <li><strong>45-59 days before departure:</strong> 25% of package cost or actual supplier charges.</li>
        <li><strong>30-44 days before departure:</strong> 50% of package cost or actual supplier charges.</li>
        <li><strong>15-29 days before departure:</strong> 75% of package cost or actual supplier charges.</li>
        <li><strong>Less than 15 days:</strong> 100% cancellation charge (no refund).</li>
      </ul>
      
      <h3>3. Peak Season & Special Bookings</h3>
      <p>During peak seasons (e.g., Diwali, Christmas, New Year, summer holidays), festivals, and for special event bookings, stricter cancellation policies may apply with higher charges. These will be communicated at the time of booking.</p>
      
      <h3>4. Flight Tickets</h3>
      <p>Airline cancellation policies vary by:</p>
      <ul>
        <li>Airline and fare type (refundable vs. non-refundable)</li>
        <li>Timing of cancellation</li>
        <li>Applicable airline fees and penalties</li>
      </ul>
      <p>Many promotional and discounted fares are non-refundable. Refunds, if available, are processed as per airline policy minus applicable fees.</p>
      
      <h3>5. Hotel Reservations</h3>
      <p>Hotel cancellation policies depend on:</p>
      <ul>
        <li>Rate type (flexible, semi-flexible, non-refundable)</li>
        <li>Property policies</li>
        <li>Season and demand</li>
      </ul>
      <p>Non-refundable hotel rates, once booked, cannot be cancelled or refunded.</p>
      
      <h3>6. Visa Services</h3>
      <p>Visa processing fees paid to embassies/consulates are non-refundable regardless of visa outcome. Our visa assistance service fee is also non-refundable once processing has begun.</p>
      
      <h3>7. Cancellation by Rudraksh Safar</h3>
      <p>In rare circumstances where we must cancel a booking:</p>
      <ul>
        <li>You will receive a full refund of amounts paid to us.</li>
        <li>We will assist with rebooking at no additional service charge if desired.</li>
        <li>We are not liable for indirect costs such as non-refundable flights booked separately.</li>
      </ul>
      
      <h3>8. No-Show Policy</h3>
      <p>Failure to show up for any booked service without prior cancellation will result in:</p>
      <ul>
        <li>100% forfeiture of payment for that service.</li>
        <li>No refund will be provided for unused services.</li>
      </ul>
      
      <h3>9. Amendments vs. Cancellations</h3>
      <p>Date changes or modifications (where permitted) may be subject to:</p>
      <ul>
        <li>Amendment fees charged by Service Providers</li>
        <li>Rate differences if applicable</li>
        <li>Availability constraints</li>
      </ul>
      
      <h3>10. How to Request Cancellation</h3>
      <ol>
        <li>Send a written cancellation request to rudrakshsafar@gmail.com with your booking reference.</li>
        <li>Include your full name, booking details, and reason for cancellation.</li>
        <li>Await confirmation of cancellation and applicable charges within 48-72 hours.</li>
      </ol>
      
      <h3>11. Contact Us</h3>
      <p>For cancellation assistance, contact us at:<br/>
      <strong>Email:</strong> rudrakshsafar@gmail.com<br/>
      <strong>Phone/WhatsApp:</strong> +91 92291 50311</p>
    `,
  },
  booking: {
    title: 'Booking Policy',
    content: `
      <p><strong>Effective Date:</strong> January 14, 2026 | <strong>Last Updated:</strong> January 14, 2026</p>
      
      <h3>1. Booking Process</h3>
      <ul>
        <li><strong>Inquiry:</strong> Submit your travel inquiry through our website, WhatsApp, phone, or email.</li>
        <li><strong>Quotation:</strong> We will provide a customized quotation based on your requirements.</li>
        <li><strong>Confirmation:</strong> Upon your acceptance, pay the required deposit to confirm your booking.</li>
        <li><strong>Documentation:</strong> You will receive a booking confirmation with all details.</li>
      </ul>
      
      <h3>2. Booking Confirmation</h3>
      <p>A booking is confirmed only when:</p>
      <ul>
        <li>Required deposit has been received and verified.</li>
        <li>Written confirmation is issued by Rudraksh Safar.</li>
        <li>Service Providers have confirmed availability.</li>
      </ul>
      <p>Unconfirmed inquiries do not constitute a binding contract.</p>
      
      <h3>3. Deposit Requirements</h3>
      <ul>
        <li><strong>Domestic Packages:</strong> Minimum 25-30% of total package cost.</li>
        <li><strong>International Packages:</strong> Minimum 40-50% of total package cost.</li>
        <li><strong>Peak Season/Special Bookings:</strong> Higher deposits may be required.</li>
        <li><strong>Flight-Only Bookings:</strong> Full payment at time of booking.</li>
      </ul>
      <p>Deposit percentages may vary based on Service Provider requirements.</p>
      
      <h3>4. Balance Payment</h3>
      <ul>
        <li><strong>Domestic Travel:</strong> Full balance due 21-30 days before departure.</li>
        <li><strong>International Travel:</strong> Full balance due 30-45 days before departure.</li>
        <li><strong>Last-Minute Bookings:</strong> Full payment required at time of booking.</li>
      </ul>
      <p>Failure to pay balance by due date may result in automatic cancellation with applicable charges.</p>
      
      <h3>5. Payment Methods</h3>
      <p>We accept:</p>
      <ul>
        <li>Bank Transfer (NEFT/RTGS/IMPS)</li>
        <li>Credit Cards (Visa, MasterCard, American Express)</li>
        <li>Debit Cards</li>
        <li>UPI Payments</li>
        <li>Payment Links via secure gateways</li>
      </ul>
      <p>All online payments are processed through encrypted, secure third-party payment gateways. We do not store your card details.</p>
      
      <h3>6. Pricing</h3>
      <ul>
        <li>All prices are in Indian Rupees (INR) unless stated otherwise.</li>
        <li>Quoted prices are valid for 24-48 hours unless otherwise specified.</li>
        <li>Prices are subject to change until booking is confirmed with deposit.</li>
        <li>Prices may be affected by currency fluctuations, fuel surcharges, taxes, and availability.</li>
      </ul>
      
      <h3>7. What's Included & Excluded</h3>
      <p>Your booking confirmation will clearly state:</p>
      <ul>
        <li>Services included in the package price</li>
        <li>Services not included (typically: visa fees, travel insurance, personal expenses, tips, optional activities, meals not mentioned)</li>
      </ul>
      <p>Please review your confirmation carefully and seek clarification if needed.</p>
      
      <h3>8. Traveler Information</h3>
      <p>You must provide accurate traveler details including:</p>
      <ul>
        <li>Full name exactly as per passport/ID</li>
        <li>Date of birth</li>
        <li>Passport details (for international travel)</li>
        <li>Contact information</li>
        <li>Special requirements (dietary, medical, accessibility)</li>
      </ul>
      <p>Incorrect information may result in booking errors, additional charges, or denied services.</p>
      
      <h3>9. Special Requests</h3>
      <p>We will forward special requests (room preferences, dietary needs, etc.) to Service Providers but cannot guarantee they will be fulfilled. Special requests are not part of the contract unless confirmed in writing.</p>
      
      <h3>10. Group Bookings</h3>
      <p>For groups of 10 or more travelers:</p>
      <ul>
        <li>Special group rates may be available.</li>
        <li>Different deposit and payment schedules may apply.</li>
        <li>A designated group leader is required for communication.</li>
      </ul>
      
      <h3>11. Children & Infant Policies</h3>
      <ul>
        <li><strong>Infants (0-2 years):</strong> May travel free or at reduced rates; specific policies vary by Service Provider.</li>
        <li><strong>Children (2-12 years):</strong> May qualify for child rates; policies vary.</li>
        <li>Child/infant age is calculated as of the date of travel.</li>
      </ul>
      
      <h3>12. Booking on Behalf of Others</h3>
      <p>If you book for other travelers, you confirm that:</p>
      <ul>
        <li>You have their authorization to make the booking.</li>
        <li>You have informed them of all applicable terms and conditions.</li>
        <li>You accept responsibility for all payments and communications.</li>
      </ul>
      
      <h3>13. Contact Us</h3>
      <p>For booking inquiries, contact us at:<br/>
      <strong>Email:</strong> rudrakshsafar@gmail.com<br/>
      <strong>Phone/WhatsApp:</strong> +91 92291 50311</p>
    `,
  },
  faqs: {
    title: 'Frequently Asked Questions',
    content: `
      <h3>Booking & Payments</h3>
      
      <h4>How do I book a trip with Rudraksh Safar?</h4>
      <p>You can book by: (1) Filling out our inquiry form on the website, (2) WhatsApp us at +91 92291 50311, (3) Call us directly, or (4) Email us at rudrakshsafar@gmail.com. Our travel experts will guide you through the entire process.</p>
      
      <h4>What payment methods do you accept?</h4>
      <p>We accept bank transfers (NEFT/RTGS/IMPS), credit/debit cards (Visa, MasterCard, Amex), and UPI payments. All online payments are processed securely.</p>
      
      <h4>Is there an EMI option available?</h4>
      <p>EMI options may be available through select credit cards at checkout. Please check with your bank for applicable terms.</p>
      
      <h4>How far in advance should I book?</h4>
      <p>We recommend booking 4-8 weeks in advance for domestic trips and 8-12 weeks for international travel to ensure best availability and prices. Peak season and popular destinations may require earlier booking.</p>
      
      <h3>Cancellations & Refunds</h3>
      
      <h4>What is your cancellation policy?</h4>
      <p>Cancellation charges depend on how close to departure you cancel and the policies of hotels, airlines, and other service providers. Generally, earlier cancellations incur lower charges. Please refer to our Cancellation Policy for details.</p>
      
      <h4>Who decides the refund amount?</h4>
      <p>Refund decisions are primarily made by the Third-Party Service Providers (hotels, airlines, tour operators) based on their policies. Rudraksh Safar facilitates your refund request but does not control the outcome. Please see our Refund Policy for complete details.</p>
      
      <h4>How long does a refund take?</h4>
      <p>Approved refunds typically take 15-45 business days depending on the service providers involved and your bank's processing time.</p>
      
      <h3>Travel Documents</h3>
      
      <h4>Do you assist with visa applications?</h4>
      <p>Yes, we provide visa consultancy and assistance services. However, obtaining the visa remains the traveler's responsibility. Embassy/consulate decisions are beyond our control.</p>
      
      <h4>What documents do I need for travel?</h4>
      <p>Requirements vary by destination. Generally, you need: valid passport (6+ months validity), appropriate visa, travel tickets, hotel vouchers, and any required health certificates. We will advise specific requirements for your trip.</p>
      
      <h3>Travel Insurance</h3>
      
      <h4>Is travel insurance included in packages?</h4>
      <p>Travel insurance is generally not included but is highly recommended. We can assist you in choosing appropriate coverage for your trip.</p>
      
      <h4>Why should I buy travel insurance?</h4>
      <p>Travel insurance protects you against unforeseen events like trip cancellation, medical emergencies, lost baggage, and flight delays. It's especially important for international travel and adventure activities.</p>
      
      <h3>Customization</h3>
      
      <h4>Can itineraries be customized?</h4>
      <p>Absolutely! We specialize in tailor-made travel. Share your preferences, interests, budget, and travel dates, and we'll craft a unique experience just for you.</p>
      
      <h4>Can you accommodate dietary restrictions or special needs?</h4>
      <p>Yes, please inform us of any dietary requirements, medical conditions, or accessibility needs at the time of booking. We will communicate these to service providers, though fulfillment cannot be guaranteed.</p>
      
      <h3>During Travel</h3>
      
      <h4>What if there's an emergency during my trip?</h4>
      <p>Contact us immediately on our 24/7 emergency line. We will coordinate with local partners to assist you. Always keep your insurance provider's contact handy as well.</p>
      
      <h4>What if my flight is delayed or cancelled?</h4>
      <p>Contact the airline directly for immediate assistance. Inform us so we can help coordinate with hotels and other services if needed. Flight delays/cancellations are beyond our control.</p>
      
      <h3>About Rudraksh Safar</h3>
      
      <h4>How long have you been in business?</h4>
      <p>Rudraksh Safar has been crafting memorable travel experiences, serving thousands of happy travelers across domestic and international destinations.</p>
      
      <h4>Where are you located?</h4>
      <p>Our office is at GE Road, In Front of Petrol Pump, Bhilai 3, Chhattisgarh 490021, India. We serve clients across India and cater to travel worldwide.</p>
      
      <h4>Can I visit your office?</h4>
      <p>Yes! Walk-ins are welcome during business hours. For detailed consultations, we recommend scheduling an appointment to ensure a dedicated travel expert is available.</p>
    `,
  },
};

const Footer = () => {
  const { resolvedTheme } = useTheme();
  const [modalOpen, setModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<keyof typeof legalContent | null>(null);
  const handleNavClick = (href: string) => {
    if (location.pathname !== '/') {
      window.location.href = '/' + href;
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openModal = (id: keyof typeof legalContent) => {
    setActiveModal(id);
    setModalOpen(true);
  };

  return (
    <>
      <footer className="bg-foreground text-primary-foreground" role="contentinfo" aria-label="Site footer">
        {/* Main Footer */}
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <img
                  src={resolvedTheme === 'dark' ? logoDark : logoLight}
                  alt="Rudraksh Safar Logo"
                  className="h-16 w-auto object-contain"
                />
              </div>
              <p className="text-primary-foreground/70 mb-6 text-sm leading-relaxed">
                Crafting extraordinary travel experiences since 2010. Your journey, our passion.
              </p>
              <div className="space-y-3 text-sm">
                <p className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/70">
                    GE Road, In Front of Petrol Pump<br />Bhilai 3, Chhattisgarh 490021
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-secondary" />
                  <a href={`tel:+${PHONE_NUMBER}`} className="text-primary-foreground/70 hover:text-secondary transition-colors">
                    +91 92291 50311
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-secondary" />
                  <a href="mailto:rudrakshsafar@gmail.com" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                    rudrakshsafar@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-6 text-lg" id="footer-quick-links">Quick Links</h3>
              <nav aria-labelledby="footer-quick-links">
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }}
                        className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Legal & Compliance */}
            <div>
              <h3 className="font-semibold mb-6 text-lg">Legal</h3>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => openModal(link.id as keyof typeof legalContent)}
                      className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold mb-6 text-lg">Support</h3>
              <ul className="space-y-3 mb-8">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    {link.href ? (
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }}
                        className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <button
                        onClick={() => openModal(link.id as keyof typeof legalContent)}
                        className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm text-left"
                      >
                        {link.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <h4 className="font-semibold mb-4 text-sm">Follow Us</h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
                <a
                  href={`https://wa.me/${PHONE_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-500 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Accordion for Footer Links */}
          <div className="lg:hidden mt-8 border-t border-primary-foreground/10 pt-8">
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="legal" className="border-primary-foreground/10">
                <AccordionTrigger className="text-primary-foreground hover:text-secondary">
                  Legal & Policies
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3 pt-2">
                    {legalLinks.map((link) => (
                      <li key={link.name}>
                        <button
                          onClick={() => openModal(link.id as keyof typeof legalContent)}
                          className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                        >
                          {link.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="support" className="border-primary-foreground/10">
                <AccordionTrigger className="text-primary-foreground hover:text-secondary">
                  Help & Support
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3 pt-2">
                    {supportLinks.map((link) => (
                      <li key={link.name}>
                        {link.href ? (
                          <a
                            href={link.href}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavClick(link.href);
                            }}
                            className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                          >
                            {link.name}
                          </a>
                        ) : (
                          <button
                            onClick={() => openModal(link.id as keyof typeof legalContent)}
                            className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                          >
                            {link.name}
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10">
          <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-primary-foreground/60 text-center md:text-left">
              © {new Date().getFullYear()} Rudraksh Safar. All rights reserved.
            </p>
            <p className="text-primary-foreground/40 text-center md:text-right">
              Designed with care for seamless travel experiences
            </p>
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif">
              {activeModal && legalContent[activeModal].title}
            </DialogTitle>
          </DialogHeader>
          <div
            className="prose prose-sm max-w-none text-muted-foreground [&>h3]:text-foreground [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1 [&>p]:mb-4"
            dangerouslySetInnerHTML={{
              __html: activeModal ? legalContent[activeModal].content : '',
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Footer;

import { forwardRef, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useTheme } from './ThemeProvider';
import logoTransparent from '@/assets/dark_mode_web_logo_crop-removebg-preview.png';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Helmet } from 'react-helmet-async';
import BrevoNewsletter from './newsletter/BrevoNewsletter';

const PHONE_NUMBER = '919406182174';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about-rudraksh-safar' },
  { name: 'Packages', href: '#packages' },
  { name: 'Destinations', href: '#destinations' },
  { name: 'Contact', href: '#contact' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms & Conditions', href: '/terms-conditions' },
  { name: 'Cookie Policy', id: 'cookies' },
  { name: 'Disclaimer', href: '/disclaimer' },
  { name: 'Refund Policy', href: '/refund-policy' },
];

const supportLinks = [
  { name: 'Contact Support', href: '#contact' },
  { name: 'Cancellation Policy', href: '/cancellation-policy' },
  { name: 'Booking Policy', id: 'booking' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'FAQs', href: '#faqs' },
];

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/people/Rudraksh-Safar/pfbid0iAvSgkmW94itABRQ4h3f8kSkkyT16Kn7ocq97wUWVY35GWgj61YjdQNBeLy2nVTtl/', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/rudrakshsafar?igsh=MWhnY25ieDBlNDVwbw==', label: 'Instagram' },
  { icon: Youtube, href: 'https://www.youtube.com/@RudrakshSafar', label: 'YouTube' },
];

// Footer uses transparent logo for all themes
const getFooterLogo = () => {
  return logoTransparent;
};

const legalContent = {
  privacy: {
    title: 'Privacy Policy',
    content: `
      <p><strong>Last Updated:</strong> January 2026</p>

      <p>Rudraksh Safar (“we”, “us”, “our”), located at GE Road, Bhilai 3, Chhattisgarh – 490021, India, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information.</p>
      <p>By using our website or services, you agree to the terms of this Privacy Policy.</p>

      <h3>1. Information We Collect</h3>
      <p>We may collect the following types of information:</p>
      <h4>a) Personal & Identity Information</h4>
      <ul>
        <li>Full name</li>
        <li>Date of birth</li>
        <li>Passport details (for travel bookings only)</li>
      </ul>
      <h4>b) Contact Information</h4>
      <ul>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Residential address</li>
      </ul>
      <h4>c) Travel Information</h4>
      <ul>
        <li>Travel preferences</li>
        <li>Dietary or special requirements</li>
        <li>Booking history with us</li>
      </ul>
      <h4>d) Financial Information</h4>
      <ul>
        <li>Payment details processed only through secure third-party payment gateways (We do not store card or banking details on our servers.)</li>
      </ul>
      <h4>e) Technical Information</h4>
      <ul>
        <li>IP address</li>
        <li>Browser type</li>
        <li>Device information</li>
        <li>Cookies and usage data</li>
      </ul>

      <h3>2. How We Use Your Information</h3>
      <p>We use your data to:</p>
      <ul>
        <li>Process and manage bookings and inquiries</li>
        <li>Send booking confirmations, updates, and itinerary details</li>
        <li>Assist with visa and documentation processes</li>
        <li>Process payments and generate invoices</li>
        <li>Provide customer support and complaint resolution</li>
        <li>Improve our services and website experience</li>
        <li>Send promotional communication only with your consent</li>
        <li>Comply with legal and regulatory requirements</li>
      </ul>

      <h3>3. Data Sharing</h3>
      <p>We may share your information only with:</p>
      <ul>
        <li><strong>Service Providers:</strong> Airlines, hotels, transport operators, tour partners</li>
        <li><strong>Government Authorities:</strong> Immigration, customs, or regulatory bodies as required by law</li>
        <li><strong>Payment Processors:</strong> Secure third-party gateways for transaction processing</li>
      </ul>
      <p><strong>We do not sell, rent, or trade your personal data to any third party.</strong></p>

      <h3>4. Data Retention</h3>
      <ul>
        <li>Up to 7 years from your last transaction, or</li>
        <li>As required by applicable laws and regulations</li>
      </ul>
      <p>After this period, data is securely deleted or anonymized.</p>

      <h3>5. Your Rights</h3>
      <p>Subject to applicable Indian laws, you have the right to:</p>
      <ul>
        <li>Access your personal data</li>
        <li>Request correction of inaccurate data</li>
        <li>Request deletion (subject to legal obligations)</li>
        <li>Withdraw consent for marketing communication</li>
      </ul>
      <p>Requests can be made using the contact details below.</p>

      <h3>6. Data Security</h3>
      <p>We implement appropriate technical and organizational security measures to protect your information against unauthorized access, loss, or misuse. However, no method of online transmission or storage is completely secure, and we cannot guarantee absolute security.</p>

      <h3>7. Cookies</h3>
      <p>Our website may use cookies to improve user experience, analyze traffic, and personalize content. You may disable cookies through your browser settings if you choose.</p>

      <h3>8. Third-Party Links</h3>
      <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites.</p>

      <h3>9. Policy Updates</h3>
      <p>This Privacy Policy may be updated periodically. Any changes will be posted on this page. Continued use of our website or services after updates constitutes acceptance of the revised policy.</p>

      <h3>10. Contact Us</h3>
      <p><strong>Rudraksh Safar</strong><br/>
      GE Road, Bhilai 3, Chhattisgarh – 490021<br/>
      Email: rudrakshsafar@gmail.com<br/>
      Phone: +91 94061 82174</p>
    `,
  },
  terms: {
    title: 'Terms & Conditions',
    content: `
      <p><strong>Last Updated:</strong> January 2026</p>

      <p>By accessing this website or booking any service through Rudraksh Safar, you agree to be bound by the following Terms & Conditions. Please read them carefully before proceeding.</p>

      <h3>1. Role of Rudraksh Safar</h3>
      <p>Rudraksh Safar acts solely as an intermediary between customers and third-party service providers such as airlines, hotels, transport operators, cruise lines, and tour operators.</p>
      <p>We do not own, operate, or control these services. All services are provided directly by the respective suppliers under their own terms and conditions.</p>
      <p>Rudraksh Safar is not responsible for any changes, deficiencies, delays, or failures in services provided by third-party suppliers.</p>

      <h3>2. Booking & Confirmation</h3>
      <ul>
        <li>All inquiries are non-binding expressions of interest.</li>
        <li>Bookings are confirmed only after receipt of required deposit/payment, written confirmation from Rudraksh Safar, and availability confirmation from service providers.</li>
        <li>All prices quoted are indicative and subject to change until final confirmation.</li>
        <li>Rudraksh Safar reserves the right to correct any pricing or typographical errors.</li>
      </ul>

      <h3>3. Payment Terms</h3>
      <ul>
        <li>A non-refundable deposit (typically 25%–50%) is required to initiate bookings.</li>
        <li>Full payment must be completed 30 days before domestic travel and 45 days before international travel.</li>
        <li>Failure to make timely payment may result in automatic cancellation without liability to Rudraksh Safar.</li>
      </ul>

      <h3>4. Cancellations & Refunds</h3>
      <p>All cancellations and refunds are governed strictly by our Cancellation Policy and Refund Policy available on our website. Refund timelines depend on supplier processing and may take 7–21 working days after approval.</p>

      <h3>5. Your Responsibilities</h3>
      <p>You are solely responsible for:</p>
      <ul>
        <li>Holding a valid passport with minimum 6 months validity</li>
        <li>Obtaining required visas, permits, and approvals</li>
        <li>Carrying necessary health certificates and travel insurance</li>
        <li>Complying with immigration, customs, and local laws</li>
        <li>Declaring any medical conditions affecting travel</li>
      </ul>
      <p>Rudraksh Safar shall not be liable for denied boarding, denied entry, or trip disruption due to documentation or compliance failures.</p>

      <h3>6. Travel Insurance</h3>
      <p>We strongly recommend comprehensive travel insurance covering trip cancellation, medical emergencies, evacuation, and baggage loss. Rudraksh Safar assumes no responsibility for losses arising from lack of insurance coverage.</p>

      <h3>7. Supplier Changes</h3>
      <p>Airlines, hotels, and service providers may change schedules, services, routes, or facilities without prior notice. Rudraksh Safar is not responsible for such operational changes.</p>

      <h3>8. Limitation of Liability</h3>
      <p>To the maximum extent permitted by law:</p>
      <ul>
        <li>Rudraksh Safar is not liable for acts or omissions of third-party suppliers.</li>
        <li>Rudraksh Safar is not liable for force majeure events including natural disasters, pandemics, strikes, or civil unrest.</li>
        <li>Maximum liability shall not exceed the amount paid for the specific service booked.</li>
        <li>Rudraksh Safar is not liable for indirect, incidental, or consequential damages.</li>
      </ul>

      <h3>9. Website Usage</h3>
      <p>Unauthorized copying, scraping, reproduction, or commercial use of website content, images, or text is strictly prohibited.</p>

      <h3>10. Modification of Terms</h3>
      <p>Rudraksh Safar reserves the right to update or modify these Terms & Conditions at any time without prior notice. Continued use of the website constitutes acceptance of revised terms.</p>

      <h3>11. Governing Law & Jurisdiction</h3>
      <p>These Terms shall be governed by the laws of India. All disputes shall be subject to the exclusive jurisdiction of courts in Durg, Chhattisgarh, India.</p>

      <h3>12. Contact Information</h3>
      <p><strong>Rudraksh Safar</strong><br/>
      GE Road, Bhilai 3, Chhattisgarh – 490021<br/>
      Email: rudrakshsafar@gmail.com<br/>
      Phone: +91 94061 82174</p>
    `,
  },
  cookies: {
    title: 'Cookie Policy',
    content: `
      <p><strong>Effective Date:</strong> January 14, 2026<br/>
      <strong>Last Updated:</strong> January 14, 2026</p>

      <p>This Cookie Policy explains how Rudraksh Safar (“we”, “us”, “our”) uses cookies and similar tracking technologies on our website. By continuing to use our website, you consent to the use of cookies in accordance with this policy.</p>

      <h3>1. What Are Cookies?</h3>
      <p>Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit a website. They help websites remember user preferences, improve website functionality, analyze website performance, and provide personalized experiences. Cookies do not give us access to your device or personal files.</p>

      <h3>2. Types of Cookies We Use</h3>
      <h4>a) Strictly Necessary Cookies</h4>
      <p>These cookies are essential for the website to function properly. They enable core features such as security, network management, and accessibility. These cookies cannot be disabled.</p>

      <h4>b) Performance & Analytics Cookies</h4>
      <p>These cookies collect anonymous information about page visits, traffic sources, and user behavior. We use this data to improve website performance and user experience.</p>

      <h4>c) Functionality Cookies</h4>
      <p>These cookies remember your preferences such as language selection, region, and display settings. They help provide a more personalized browsing experience.</p>

      <h4>d) Marketing & Advertising Cookies</h4>
      <p>These cookies are used to deliver relevant advertisements, measure campaign effectiveness, and support remarketing activities. They may be placed by third-party advertising partners with our permission.</p>

      <h3>3. Third-Party Cookies</h3>
      <p>We may allow third-party service providers to place cookies for:</p>
      <ul>
        <li>Analytics services (e.g., Google Analytics)</li>
        <li>Social media integration (e.g., Facebook, Instagram)</li>
        <li>Advertising and remarketing</li>
        <li>Payment processing</li>
      </ul>
      <p>These third parties operate under their own privacy and cookie policies. We encourage you to review their policies separately.</p>

      <h3>4. Cookie Retention</h3>
      <ul>
        <li><strong>Session Cookies:</strong> Deleted automatically when you close your browser.</li>
        <li><strong>Persistent Cookies:</strong> Remain on your device for a defined period (typically 30 days to 2 years) or until manually deleted.</li>
      </ul>

      <h3>5. Managing Cookies</h3>
      <p>You can manage or disable cookies through your browser settings:</p>
      <ul>
        <li><strong>Chrome:</strong> Settings → Privacy & Security → Cookies</li>
        <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies</li>
        <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
        <li><strong>Edge:</strong> Settings → Privacy & Security → Cookies</li>
      </ul>
      <p>Please note that disabling cookies may affect certain website features and overall user experience.</p>

      <h3>6. Do Not Track (DNT)</h3>
      <p>Some browsers provide a “Do Not Track” feature. At present, our website does not respond to DNT signals, as there is no universally accepted standard for implementation.</p>

      <h3>7. Updates to This Policy</h3>
      <p>We may update this Cookie Policy from time to time. Any changes will be reflected by updating the “Last Updated” date at the top of this page. Continued use of the website after changes constitutes acceptance of the updated policy.</p>

      <h3>8. Contact Us</h3>
      <p>If you have any questions regarding this Cookie Policy, please contact:</p>
      <p>Email: rudrakshsafar@gmail.com</p>
    `,
  },
  disclaimer: {
    title: 'Disclaimer',
    content: `
      <p><strong>Last Updated:</strong> January 2026</p>

      <p>Please read this Disclaimer carefully before using the Rudraksh Safar website or services. By accessing or using our website, you agree to the terms stated below.</p>

      <h3>1. General Information</h3>
      <p>All information provided on this website is for general informational purposes only. While we strive to keep content accurate and up to date, Rudraksh Safar makes no warranties or representations, express or implied, regarding the completeness, accuracy, reliability, suitability, or availability of any information, products, services, or related graphics.</p>
      <p>Any reliance you place on such information is strictly at your own risk.</p>

      <h3>2. Role as an Intermediary</h3>
      <p>Rudraksh Safar acts solely as an intermediary between travelers and third-party service providers, including but not limited to airlines, hotels, transport operators, tour operators, and visa processing agencies. We do not own, operate, manage, or control these services. All services are provided directly by the respective suppliers under their own terms and conditions.</p>

      <h3>3. Travel Information Disclaimer</h3>
      <ul>
        <li>Visa requirements, travel advisories, health regulations, and entry rules are subject to frequent change. Travelers must verify requirements with official government or embassy sources before travel.</li>
        <li>Prices, availability, and itineraries are subject to change without prior notice.</li>
        <li>Images on the website are for illustrative purposes only and may not reflect actual accommodations, transport, or destinations.</li>
        <li>Weather conditions, seasonal information, and best travel periods are indicative and may vary.</li>
      </ul>
      <p>Rudraksh Safar shall not be responsible for discrepancies arising from such variations.</p>

      <h3>4. No Professional Advice</h3>
      <p>Content on this website does not constitute legal, financial, medical, immigration, or professional advice.</p>
      <ul>
        <li>For visa or immigration matters, consult the relevant embassy or authorized professionals.</li>
        <li>For health-related travel advice, consult qualified medical professionals.</li>
      </ul>
      <p>Rudraksh Safar is not responsible for decisions made based on website content.</p>

      <h3>5. Third-Party Links</h3>
      <p>Our website may contain links to external websites for user convenience. Rudraksh Safar has no control over the content, policies, or practices of such websites and accepts no responsibility for them. Inclusion of any external link does not imply endorsement.</p>

      <h3>6. Limitation of Liability</h3>
      <p>To the fullest extent permitted by law:</p>
      <ul>
        <li>Rudraksh Safar shall not be liable for any loss, damage, or inconvenience arising from the use of this website or services.</li>
        <li>We are not responsible for acts, omissions, delays, or failures of third-party service providers.</li>
        <li>We are not liable for losses caused by force majeure events including natural disasters, pandemics, war, terrorism, strikes, or government actions.</li>
        <li>Travelers are solely responsible for their safety, insurance coverage, and compliance with local laws.</li>
      </ul>

      <h3>7. User Responsibility</h3>
      <p>Users are responsible for:</p>
      <ul>
        <li>Verifying travel requirements with official sources</li>
        <li>Ensuring valid travel documents</li>
        <li>Reading supplier terms and conditions before booking</li>
        <li>Obtaining comprehensive travel insurance</li>
        <li>Respecting local laws, customs, and regulations</li>
      </ul>

      <h3>8. Changes to Disclaimer</h3>
      <p>Rudraksh Safar reserves the right to modify this Disclaimer at any time without prior notice. Changes take effect immediately upon posting. Continued use of the website or services constitutes acceptance of the revised Disclaimer.</p>

      <h3>9. Governing Law & Jurisdiction</h3>
      <p>This Disclaimer shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Durg, Chhattisgarh, India.</p>

      <h3>10. Contact Information</h3>
      <p><strong>Rudraksh Safar</strong><br/>
      GE Road, Bhilai 3, Chhattisgarh – 490021<br/>
      Email: rudrakshsafar@gmail.com<br/>
      Phone: +91 94061 82174</p>
    `,
  },
  refund: {
    title: 'Refund Policy',
    content: `
      <p><strong>Last Updated:</strong> January 2026</p>

      <p>Rudraksh Safar acts solely as an intermediary between customers and third-party service providers such as airlines, hotels, transport operators, and tour suppliers. All refunds are governed primarily by the refund policies of these respective suppliers.</p>
      <p>We facilitate the refund process on your behalf but do not control refund approvals, amounts, or timelines.</p>

      <h3>1. Refund Eligibility</h3>
      <p>Refunds may be applicable only under the following circumstances:</p>
      <ul>
        <li>Cancellation is made in accordance with our Cancellation Policy.</li>
        <li>Services were not delivered as confirmed in writing.</li>
        <li>Duplicate or excess payment was made due to technical or processing error.</li>
      </ul>
      <p>Refund eligibility is always subject to supplier approval.</p>

      <h3>2. Refund Process</h3>
      <ul>
        <li>Customer submits a cancellation or refund request via email or WhatsApp.</li>
        <li>Rudraksh Safar verifies booking details and applicable supplier refund rules.</li>
        <li>Refund request is formally initiated with the concerned suppliers.</li>
        <li>Once refund is received from suppliers, the amount is transferred to the original payment method used by the customer.</li>
      </ul>

      <h3>3. Refund Timeline</h3>
      <p>Refund timelines depend on supplier processing and banking systems. Indicative timelines are:</p>
      <ul>
        <li><strong>Credit / Debit Card</strong> — 7–14 business days</li>
        <li><strong>UPI / Net Banking</strong> — 5–10 business days</li>
        <li><strong>Bank Transfer</strong> — 7–14 business days</li>
        <li><strong>Forex Card</strong> — 14–21 business days</li>
      </ul>
      <p>These timelines are approximate and may vary based on supplier response and bank processing cycles.</p>

      <h3>4. Non-Refundable Items</h3>
      <p>The following are generally non-refundable:</p>
      <ul>
        <li>Visa processing fees</li>
        <li>Travel insurance premiums</li>
        <li>Non-refundable airline tickets</li>
        <li>Special event or attraction tickets</li>
        <li>Service, convenience, and administrative fees</li>
        <li>Peak season or promotional booking deposits (as per supplier policy)</li>
      </ul>

      <h3>5. Partial Refunds</h3>
      <p>If only part of a booking is cancelled or affected, refunds will be calculated proportionately based on supplier refund rules for each service component.</p>

      <h3>6. Currency & Charges</h3>
      <ul>
        <li>Refunds are processed in the same currency as the original payment.</li>
        <li>Any currency conversion differences or bank charges are not compensated by Rudraksh Safar.</li>
      </ul>

      <h3>7. Refund Disputes</h3>
      <p>If you believe your refund has been incorrectly calculated:</p>
      <ul>
        <li>Contact us within 30 days of refund receipt.</li>
        <li>Provide your booking ID and supporting documentation.</li>
        <li>We will review and respond within 7 business days.</li>
      </ul>

      <h3>8. Important Disclaimer</h3>
      <p>Rudraksh Safar does not guarantee refund approval, refund amount, or refund timelines, as these depend entirely on third-party suppliers. Our responsibility is limited to facilitating communication and refund processing.</p>

      <h3>9. Contact for Refund Requests</h3>
      <p>Email: rudrakshsafar@gmail.com<br/>
      WhatsApp: +91 94061 82174<br/>
      <strong>Subject Line:</strong> Refund Request- [Booking ID]</p>
    `,
  },
  cancellation: {
    title: 'Cancellation Policy',
    content: `
      <p><strong>Effective Date:</strong> January 14, 2026 | <strong>Last Updated:</strong> January 14, 2026</p>
      
      <h3>1. General Cancellation Guidelines</h3>
      <p>All cancellation requests must be submitted in writing via email (rudrakshsafar@gmail.com) or WhatsApp (+91 94061 82174). Verbal cancellation requests will not be accepted.</p>
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
      <strong>Phone/WhatsApp:</strong> +91 94061 82174</p>
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
      <strong>Phone/WhatsApp:</strong> +91 94061 82174</p>
    `,
  },
  faqs: {
    title: 'Frequently Asked Questions',
    content: `
      <h3>Booking & Payments</h3>
      
      <h4>How do I book a trip with Rudraksh Safar?</h4>
      <p>You can book by: (1) Filling out our inquiry form on the website, (2) WhatsApp us at +91 94061 82174, (3) Call us directly, or (4) Email us at rudrakshsafar@gmail.com. Our travel experts will guide you through the entire process.</p>
      
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

const Footer = forwardRef<HTMLElement>((_, ref) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<keyof typeof legalContent | null>(null);
  const { theme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (href: string) => {
    if (href.startsWith('/')) {
      navigate(href);
      window.scrollTo(0, 0);
      return;
    }
    if (location.pathname === '/') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = '/' + href;
    }
  };

  const openModal = (id: keyof typeof legalContent) => {
    setActiveModal(id);
    setModalOpen(true);
  };

  const footerSchema = {
    "@context": "https://schema.org",
    "@type": "WPFooter",
    "copyrightYear": new Date().getFullYear().toString(),
    "copyrightHolder": {
      "@type": "TravelAgency",
      "name": "Rudraksh Safar",
      "@id": "https://rudrakshsafar.com/#travelagency"
    }
  };

  return (
    <>
      <footer ref={ref} className="bg-black text-white relative overflow-hidden" role="contentinfo" aria-label="Site footer">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-navy-light rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold rounded-full blur-[100px]" />
        </div>

        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(footerSchema)}
          </script>
        </Helmet>

        {/* Main Footer */}
        <div className="container relative z-10 py-20 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="block mb-8">
                <img
                  src={logoTransparent} // Always use new transparent logo
                  alt="Rudraksh Safar Logo"
                  className="h-20 w-auto object-contain"
                />
              </Link>
              <p className="text-white/60 mb-8 text-sm leading-relaxed font-light">
                Crafting extraordinary travel experiences since 2010. We turn your journeys into timeless stories.
              </p>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                    <MapPin className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-white/70">
                    GE Road, Bhilai 3,<br />Chhattisgarh 490021
                  </span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                    <Phone className="w-4 h-4 text-gold" />
                  </div>
                  <a href={`tel:+${PHONE_NUMBER}`} className="text-white/70 hover:text-gold transition-colors">
                    +91 94061 82174
                  </a>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                    <Mail className="w-4 h-4 text-gold" />
                  </div>
                  <a href="mailto:rudrakshsafar@gmail.com" className="text-white/70 hover:text-gold transition-colors">
                    rudrakshsafar@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="lg:col-span-1">
              <BrevoNewsletter />
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-serif font-bold text-lg text-white mb-8">Explore</h3>
              <nav>
                <ul className="space-y-4">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }}
                        className="text-white/60 hover:text-gold transition-colors text-sm block hover:translate-x-1 duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                  <li>
                    <Link to="/sitemap" className="text-white/60 hover:text-gold transition-colors text-sm block hover:translate-x-1 duration-300">
                      Sitemap
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-serif font-bold text-lg text-white mb-8">Legal</h3>
              <nav>
                <ul className="space-y-4">
                  {legalLinks.map((link) => (
                    <li key={link.name}>
                      {'href' in link && link.href ? (
                        <Link
                          to={link.href}
                          className="text-white/60 hover:text-gold transition-colors text-sm block hover:translate-x-1 duration-300"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <button
                          onClick={() => openModal(link.id as keyof typeof legalContent)}
                          className="text-white/60 hover:text-gold transition-colors text-sm text-left block hover:translate-x-1 duration-300"
                        >
                          {link.name}
                        </button>
                      )}
                    </li>
                  ))}
                  {supportLinks.map((link) => (
                    <li key={link.name}>
                      {'href' in link && link.href ? (
                        <Link to={link.href} className="text-white/60 hover:text-gold transition-colors text-sm block hover:translate-x-1 duration-300">
                          {link.name}
                        </Link>
                      ) : (
                        <button
                          onClick={() => openModal(link.id as keyof typeof legalContent)}
                          className="text-white/60 hover:text-gold transition-colors text-sm text-left block hover:translate-x-1 duration-300"
                        >
                          {link.name}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Newsletter & Social */}
            <div>
              <BrevoNewsletter />
              <div className="h-8"></div>

              <h4 className="font-serif font-bold text-sm text-white mb-4">Follow Our Journey</h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gold hover:text-black transition-all duration-300 hover:-translate-y-1"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-black/50 backdrop-blur-xl relative z-10">
          <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
            <p className="text-center md:text-left">
              &copy; {new Date().getFullYear()} Rudraksh Safar. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <p className="hover:text-gold transition-colors cursor-default">Designed for Luxury</p>
              <span className="w-1 h-1 rounded-full bg-white/20"></span>
              <p className="hover:text-gold transition-colors cursor-default">Built with Passion</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-depth-1 border-white/10 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif text-gold">
              {activeModal && legalContent[activeModal].title}
            </DialogTitle>
          </DialogHeader>
          <div
            className="prose prose-invert prose-sm max-w-none text-white/70 [&>h3]:text-white [&>h3]:font-serif [&>h3]:mt-6 [&>h3]:mb-3 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1 [&>p]:mb-4"
            dangerouslySetInnerHTML={{
              __html: activeModal ? legalContent[activeModal].content : '',
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
});

Footer.displayName = 'Footer';

export default Footer;

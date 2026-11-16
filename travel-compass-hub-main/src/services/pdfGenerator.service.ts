// Professional PDF Print Service for Rudraksh Safar Itineraries
// Creates an executive, agency-grade A4 document ready for Print / Save as PDF

import { GeneratedItinerary, TripRequest } from '@/services/aiTripPlanner.service';

export function printItineraryPdf(itinerary: GeneratedItinerary, trip: TripRequest): void {
    const bookingRef = `RS-${Date.now().toString().slice(-6)}`;
    const issueDate = new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });

    const vibesText = trip.vibes && trip.vibes.length > 0 ? trip.vibes.join(', ') : 'Culture & Leisure';
    const nights = Math.max(1, trip.days - 1);

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>${itinerary.title} - Rudraksh Safar Itinerary</title>
    <style>
        @page {
            size: A4;
            margin: 14mm 14mm 14mm 14mm;
        }

        * {
            box-sizing: border-box;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            color: #1e293b;
            background: #ffffff;
            margin: 0;
            padding: 0;
            font-size: 11pt;
            line-height: 1.5;
        }

        .header-container {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            border-bottom: 2px solid #ea580c;
            padding-bottom: 12px;
            margin-bottom: 16px;
        }

        .brand-title {
            font-size: 24pt;
            font-weight: 800;
            letter-spacing: -0.5px;
            color: #0f172a;
            margin: 0;
            text-transform: uppercase;
        }

        .brand-title span {
            color: #ea580c;
        }

        .brand-subtitle {
            font-size: 9pt;
            font-weight: 600;
            color: #64748b;
            margin: 2px 0 0 0;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .company-contact {
            text-align: right;
            font-size: 8.5pt;
            color: #475569;
            line-height: 1.4;
        }

        .company-contact strong {
            color: #0f172a;
        }

        .badge-ref {
            display: inline-block;
            background: #f1f5f9;
            color: #334155;
            font-size: 8pt;
            font-weight: 700;
            padding: 2px 8px;
            border-radius: 4px;
            margin-bottom: 4px;
        }

        .trip-title-block {
            background: #fff7ed;
            border-left: 4px solid #ea580c;
            padding: 12px 16px;
            border-radius: 0 8px 8px 0;
            margin-bottom: 16px;
        }

        .trip-title-block h1 {
            font-size: 16pt;
            font-weight: 800;
            color: #0f172a;
            margin: 0 0 4px 0;
            line-height: 1.25;
        }

        .trip-title-block p {
            font-size: 10pt;
            color: #9a3412;
            margin: 0;
            font-weight: 500;
        }

        .meta-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 8px;
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 10px 14px;
            margin-bottom: 16px;
            font-size: 8.5pt;
        }

        .meta-item strong {
            display: block;
            color: #64748b;
            font-size: 7.5pt;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .meta-item span {
            color: #0f172a;
            font-weight: 600;
            font-size: 9pt;
        }

        .section-title {
            font-size: 12pt;
            font-weight: 700;
            color: #0f172a;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 4px;
            margin: 18px 0 10px 0;
            display: flex;
            align-items: center;
            gap: 6px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .overview-box {
            font-size: 9.5pt;
            color: #334155;
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 6px;
            padding: 10px 12px;
            margin-bottom: 16px;
            line-height: 1.5;
        }

        .day-card {
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            margin-bottom: 12px;
            page-break-inside: avoid;
            background: #ffffff;
            overflow: hidden;
        }

        .day-header {
            background: #f8fafc;
            border-bottom: 1px solid #e2e8f0;
            padding: 8px 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .day-tag {
            background: #ea580c;
            color: #ffffff;
            font-size: 8pt;
            font-weight: 800;
            padding: 2px 7px;
            border-radius: 4px;
            text-transform: uppercase;
            margin-right: 8px;
        }

        .day-title {
            font-weight: 700;
            font-size: 10.5pt;
            color: #0f172a;
        }

        .day-route {
            font-size: 8pt;
            color: #64748b;
            font-weight: 500;
        }

        .day-body {
            padding: 10px 12px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
            font-size: 8.5pt;
        }

        .schedule-slot {
            background: #fafaf9;
            border: 1px solid #f5f5f4;
            padding: 6px 8px;
            border-radius: 5px;
        }

        .schedule-slot strong {
            display: block;
            color: #0f172a;
            margin-bottom: 2px;
            font-size: 8pt;
            text-transform: uppercase;
        }

        .day-extras {
            padding: 6px 12px;
            background: #f8fafc;
            border-top: 1px solid #f1f5f9;
            display: flex;
            justify-content: space-between;
            font-size: 8pt;
            color: #475569;
        }

        .day-tip {
            margin: 6px 12px 10px 12px;
            padding: 6px 10px;
            background: #ecfdf5;
            border: 1px solid #a7f3d0;
            border-radius: 5px;
            font-size: 8pt;
            color: #065f46;
        }

        .grid-two {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-bottom: 16px;
            page-break-inside: avoid;
        }

        .table-box {
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 10px 12px;
            background: #ffffff;
            font-size: 8.5pt;
        }

        .table-box h4 {
            margin: 0 0 6px 0;
            font-size: 9.5pt;
            font-weight: 700;
            color: #0f172a;
        }

        .table-box ul {
            margin: 0;
            padding-left: 14px;
            color: #334155;
            line-height: 1.45;
        }

        .table-box ul li {
            margin-bottom: 3px;
        }

        .disclaimer-box {
            background: #fffbeb;
            border: 1px solid #fef3c7;
            border-left: 4px solid #f59e0b;
            border-radius: 0 6px 6px 0;
            padding: 10px 12px;
            margin: 16px 0;
            font-size: 8pt;
            color: #92400e;
            line-height: 1.45;
            page-break-inside: avoid;
        }

        .disclaimer-box strong {
            color: #78350f;
            text-transform: uppercase;
        }

        .terms-box {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 6px;
            padding: 10px 12px;
            font-size: 7.5pt;
            color: #64748b;
            line-height: 1.4;
            margin-bottom: 16px;
            page-break-inside: avoid;
        }

        .terms-box h5 {
            margin: 0 0 4px 0;
            font-size: 8pt;
            font-weight: 700;
            color: #334155;
            text-transform: uppercase;
        }

        .footer-banner {
            border-top: 1px solid #e2e8f0;
            padding-top: 10px;
            margin-top: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 8pt;
            color: #94a3b8;
            page-break-inside: avoid;
        }

        .footer-banner strong {
            color: #475569;
        }
    </style>
</head>
<body>

    <!-- Header Section -->
    <div class="header-container">
        <div>
            <div class="brand-title">RUDRAKSH <span>SAFAR</span></div>
            <div class="brand-subtitle">Central India's Premier Tour & Travel Specialists • Since 2010</div>
            <div style="font-size: 8pt; color: #64748b; margin-top: 3px;">
                Crafting extraordinary travel experiences since 2010. We turn your journeys into timeless stories.
            </div>
        </div>
        <div class="company-contact">
            <span class="badge-ref">REF: ${bookingRef}</span><br>
            <strong>Main Office:</strong> Shop No. 106, Satya Shanti Complex, Near Amantran Hotel, Supela, Bhilai, CG - 490021<br>
            <strong>Associate Office:</strong> Sanjeev Enterprises, GE Road, In Front of Petrol Pump, Bhilai-3, Durg 490021<br>
            <strong>Phone:</strong> +91 92036 50311 (Office) | +91 92291 50311 (Sanjeev Chaudhary)<br>
            <strong>Operations:</strong> +91 97130 57086 (Priyanshu Chaudhary)<br>
            <strong>Email:</strong> rudrakshsafar@gmail.com | <strong>Web:</strong> www.rudrakshsafar.com
        </div>
    </div>

    <!-- Title & Summary -->
    <div class="trip-title-block">
        <h1>${itinerary.title}</h1>
        <p>${itinerary.tagline || 'Customized Master Itinerary Blueprint'}</p>
    </div>

    <!-- Metadata Grid -->
    <div class="meta-grid">
        <div class="meta-item">
            <strong>Primary Destination</strong>
            <span>${trip.destination || 'Selected Destination'}</span>
        </div>
        <div class="meta-item">
            <strong>Starting Hub</strong>
            <span>${trip.startingCity || 'Bhilai / Raipur'}</span>
        </div>
        <div class="meta-item">
            <strong>Duration & Guests</strong>
            <span>${trip.days} Days / ${nights} Nights (${trip.travellers} Travellers)</span>
        </div>
        <div class="meta-item">
            <strong>Style & Tempo</strong>
            <span>${trip.style} • ${trip.pace} Pace</span>
        </div>
        <div class="meta-item">
            <strong>Desired Trip Feel</strong>
            <span>${vibesText}</span>
        </div>
        <div class="meta-item">
            <strong>Issue Date</strong>
            <span>${issueDate}</span>
        </div>
        <div class="meta-item">
            <strong>Estimated Distance</strong>
            <span>${itinerary.totalDistanceApprox || '~450 km'}</span>
        </div>
        <div class="meta-item">
            <strong>Best Travel Period</strong>
            <span>${itinerary.bestTimeToVisit ? itinerary.bestTimeToVisit.slice(0, 32) : 'Year-Round'}</span>
        </div>
    </div>

    <!-- Narrative Overview -->
    <div class="overview-box">
        <strong style="color: #0f172a; text-transform: uppercase; font-size: 8.5pt; display: block; margin-bottom: 4px;">
            Journey Philosophy & Route Summary:
        </strong>
        ${itinerary.overview}
    </div>

    <!-- Day-by-Day Timeline -->
    <div class="section-title">Day-by-Day Itinerary</div>

    ${itinerary.days.map((d) => `
        <div class="day-card">
            <div class="day-header">
                <div>
                    <span class="day-tag">Day ${d.day}</span>
                    <span class="day-title">${d.title}</span>
                </div>
                ${d.route ? `<span class="day-route">🚗 ${d.route}</span>` : ''}
            </div>
            <div class="day-body">
                <div class="schedule-slot">
                    <strong>🌅 Morning Schedule</strong>
                    ${d.morning}
                </div>
                <div class="schedule-slot">
                    <strong>☀️ Afternoon Discovery</strong>
                    ${d.afternoon}
                </div>
                <div class="schedule-slot">
                    <strong>🌙 Sunset & Evening</strong>
                    ${d.evening}
                </div>
            </div>
            ${(d.dinner || d.stay) ? `
                <div class="day-extras">
                    ${d.dinner ? `<span>🍽️ <strong>Dinner:</strong> ${d.dinner}</span>` : ''}
                    ${d.stay ? `<span>🏨 <strong>Stay:</strong> ${d.stay}</span>` : ''}
                </div>
            ` : ''}
            ${d.insiderTip ? `
                <div class="day-tip">
                    💡 <strong>Insider Secret:</strong> ${d.insiderTip}
                </div>
            ` : ''}
        </div>
    `).join('')}

    <!-- Financial Estimations & Inclusions Grid -->
    <div class="section-title">Investment & Hotel Blueprint</div>
    <div class="grid-two">
        <div class="table-box">
            <h4>Estimated Budget per Person</h4>
            <p style="margin: 0 0 6px 0; color: #475569;">
                • <strong>Comfort Tier (4-Star):</strong> ${itinerary.costEstimator?.comfortTier || 'Quoted upon confirmation'}<br>
                • <strong>Luxury Palace/Villa:</strong> ${itinerary.costEstimator?.luxuryTier || 'Quoted upon confirmation'}<br>
                • <strong>Boutique 3-Star:</strong> ${itinerary.costEstimator?.budgetTier || 'Quoted upon confirmation'}
            </p>
            <h4 style="margin-top: 10px;">Recommended Partner Hotels</h4>
            <ul>
                ${(itinerary.recommendedHotels || []).map(h => `
                    <li><strong>${h.name}</strong> (${h.category}) - ${h.highlight}</li>
                `).join('')}
            </ul>
        </div>

        <div class="table-box">
            <h4 style="color: #15803d;">✓ Included in Package</h4>
            <ul style="margin-bottom: 8px;">
                ${(itinerary.costEstimator?.includes || []).map(inc => `<li>${inc}</li>`).join('')}
            </ul>
            <h4 style="color: #b91c1c;">✗ Standard Exclusions</h4>
            <ul>
                ${(itinerary.costEstimator?.excludes || []).map(exc => `<li>${exc}</li>`).join('')}
            </ul>
        </div>
    </div>

    <!-- Important Disclaimer Box -->
    <div class="disclaimer-box">
        <strong>⚠️ IMPORTANT REFERENCE DISCLAIMER:</strong><br>
        This itinerary has been custom-generated by the Rudraksh Safar AI Planning System as a preliminary reference and architectural guide. Actual operational timings, sequence of sightseeing, flight connections, and hotel allocations are subject to seasonal weather conditions, road access, flight schedule revisions, and live property availability. A binding, finalized itinerary with verified booking vouchers, chauffeur contact, and GST tax invoice will be issued upon advance confirmation with our senior travel desk.
    </div>

    <!-- Standard Terms and Conditions -->
    <div class="terms-box">
        <h5>Standard Terms & Conditions (Rudraksh Safar)</h5>
        1. <strong>Booking & Payment:</strong> Confirmation requires standard 30% advance deposit; balance 70% payable 15 days prior to departure.<br>
        2. <strong>Hotel Norms:</strong> Standard check-in is 14:00 hrs and check-out is 11:00 hrs. Early check-in or late checkout is at property discretion.<br>
        3. <strong>Chauffeur & Vehicle:</strong> AC vehicle provided point-to-point as per schedule. Air conditioning will be switched off on steep mountain ascents for engine safety.<br>
        4. <strong>Permits & Government Norms:</strong> Travellers must carry valid original government photo IDs (Aadhaar/Passport). Foreign nationals require valid visa.<br>
        5. <strong>Jurisdiction:</strong> All transactions and disputes are subject to Durg/Bhilai (Chhattisgarh) jurisdiction only.
    </div>

    <!-- On-ground Support Offices -->
    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 8px 12px; margin-bottom: 14px; font-size: 7.5pt; color: #475569; line-height: 1.45; page-break-inside: avoid;">
        <strong style="color: #0f172a; text-transform: uppercase; font-size: 7.5pt; display: block; margin-bottom: 2px;">On-Ground Network & Regional Support Desks:</strong>
        • <strong>Uttarakhand:</strong> Gate No.4 Main Haridwar-Rishikesh Highway, Bhupatwala, Haridwar<br>
        • <strong>Kashmir:</strong> Hotel Duke, The Boulevard, Srinagar - 190001 Kashmir<br>
        • <strong>Thailand:</strong> 34, 42 M1 CHAITAPHON WITHI 21, Pattaya City, Bang Lamung District, Chon Buri 20150, Thailand
    </div>

    <!-- Footer Banner -->
    <div class="footer-banner">
        <div>
            <strong>Main Office:</strong> Shop No. 106, Satya Shanti Complex, Near Amantran Hotel, Supela, Bhilai (C.G.) - 490021
        </div>
        <div>
            Helpline: <strong>+91 92036 50311 / +91 92291 50311 / +91 97130 57086</strong> • rudrakshsafar@gmail.com
        </div>
    </div>

</body>
</html>
    `;

    // Open dedicated print window
    const printWindow = window.open('', '_blank', 'width=900,height=800,menubar=no,toolbar=no,location=no,status=no');

    if (printWindow) {
        printWindow.document.open();
        printWindow.document.write(htmlContent);
        printWindow.document.close();

        // Wait for DOM to paint completely before printing
        printWindow.onload = () => {
            setTimeout(() => {
                printWindow.focus();
                printWindow.print();
            }, 300);
        };

        // Fallback for immediate print
        setTimeout(() => {
            try {
                printWindow.focus();
                printWindow.print();
            } catch {
                // Ignore if already printed
            }
        }, 600);
    } else {
        // Fallback if popup is blocked by browser: use hidden iframe
        const iframe = document.createElement('iframe');
        iframe.style.position = 'fixed';
        iframe.style.right = '0';
        iframe.style.bottom = '0';
        iframe.style.width = '0';
        iframe.style.height = '0';
        iframe.style.border = '0';
        document.body.appendChild(iframe);

        const doc = iframe.contentWindow?.document || iframe.contentDocument;
        if (doc) {
            doc.open();
            doc.write(htmlContent);
            doc.close();
            setTimeout(() => {
                iframe.contentWindow?.focus();
                iframe.contentWindow?.print();
                setTimeout(() => document.body.removeChild(iframe), 2000);
            }, 400);
        }
    }
}

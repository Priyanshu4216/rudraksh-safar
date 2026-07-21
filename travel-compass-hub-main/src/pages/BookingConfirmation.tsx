import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { HotelApiService } from '../services/api/hotel.service';
import {
  CheckCircle, Loader2, Home, AlertCircle, MapPin,
  User, Phone, Mail, Printer, Download, Clock, Calendar, BedDouble
} from 'lucide-react';
import { BookingStepper } from '../components/BookingStepper';
import { supabase } from '../lib/supabase';
import logoLight from '../assets/logo-light.png';

export const BookingConfirmation = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const bookingId = searchParams.get('bookingId');

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // Supplier booking data (from LiteAPI)
  const [supplierData, setSupplierData] = useState<any>(null);
  // Our local DB record
  const [localBooking, setLocalBooking] = useState<any>(null);
  const [guestDetails, setGuestDetails] = useState<any>(null);

  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        if (bookingId === 'demo' || searchParams.get('demo') === 'true') {
          setLocalBooking({
            id: 'RS-BOOK-948210',
            created_at: new Date().toISOString(),
            user_id: 'usr-89214712',
            supplier_booking_id: 'RS-HTL-894210',
            booking_ref: 'LITE-894210-LKP',
            status: 'CONFIRMED',
            total_price: 28500,
            currency: 'INR',
            checkin: '2026-08-15',
            checkout: '2026-08-18',
            hotel_id: 'Taj Lake Palace, Udaipur',
            guest_info: {
              firstName: 'Rahul',
              lastName: 'Sharma',
              email: 'rahul.sharma@example.com',
              phone: '+91 98765 43210',
              gstin: '22AAAAA0000A1Z5',
              roomName: 'Luxury Lake View Suite',
              boardName: 'Complimentary Buffet Breakfast Included',
              specialRequests: 'High floor with Lake Pichola view'
            }
          });
          setSupplierData({
            hotelConfirmationCode: 'RS-HTL-894210',
            hotel: {
              name: 'Taj Lake Palace, Udaipur',
              address: 'Pichola, Udaipur, Rajasthan 313001, India',
              phone: '+91 294 242 8800',
              checkinInstructions: 'Primary guest must present government issued photo ID and credit card/cash deposit at front desk for incidental charges.'
            },
            rooms: [{ name: 'Luxury Lake View Suite', boardName: 'Complimentary Buffet Breakfast Included' }]
          });
          setGuestDetails({
            firstName: 'Rahul',
            lastName: 'Sharma',
            email: 'rahul.sharma@example.com',
            phone: '+91 98765 43210',
            gstin: '22AAAAA0000A1Z5',
            specialRequests: 'High floor with Lake Pichola view'
          });
          setLoading(false);
          return;
        }

        if (!bookingId) {
          throw new Error('Invalid booking link or booking ID missing.');
        }

        // 1. Fetch our local booking record from Supabase
        const { data: localRecord, error: localErr } = await supabase
          .from('hotel_bookings')
          .select('*')
          .eq('id', bookingId)
          .single();

        if (localErr || !localRecord) {
          throw new Error('Booking record not found.');
        }

        setLocalBooking(localRecord);

        // 2. Guest info from session or DB
        const rawGuestInfo = sessionStorage.getItem('guestInfo');
        if (rawGuestInfo) {
          setGuestDetails(JSON.parse(rawGuestInfo));
        } else if (localRecord.guest_info) {
          setGuestDetails(localRecord.guest_info);
        }

        // 3. Fetch supplier booking details (from LiteAPI via booking_ref)
        if (localRecord.booking_ref) {
          try {
            const apiData = await HotelApiService.getBooking(localRecord.booking_ref);
            setSupplierData(apiData?.data || apiData);
          } catch (e) {
            console.warn('Could not fetch supplier booking details', e);
          }
        }
      } catch (err: any) {
        console.error('Booking confirmation error:', err);
        setError(err.message || 'Failed to load booking details.');
      } finally {
        setLoading(false);
      }
    };

    fetchBookingDetails();
  }, [bookingId, searchParams]);

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return '—';
    return new Date(dateStr).toLocaleDateString('en-IN', {
      day: 'numeric', month: 'long', year: 'numeric'
    });
  };

  const formatDayName = (dateStr?: string) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('en-IN', { weekday: 'long' });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <Loader2 className="w-16 h-16 text-blue-600 animate-spin mb-6" />
        <h2 className="text-2xl font-bold text-gray-800">Loading your booking...</h2>
        <p className="text-gray-500 mt-2">Please do not refresh or close this page.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
        <div className="bg-red-50 p-8 rounded-2xl max-w-lg w-full text-center border border-red-100 shadow-sm">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-red-900 mb-2">Something went wrong</h2>
          <p className="text-red-700 mb-6">{error}</p>
          <button
            onClick={() => navigate('/')}
            className="bg-red-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  const confirmationCode = supplierData?.hotelConfirmationCode
    || localBooking?.supplier_booking_id
    || localBooking?.booking_ref
    || 'PENDING';

  const hotelName = supplierData?.hotel?.name || localBooking?.hotel_id || 'Hotel';
  const hotelAddress = supplierData?.hotel?.address || '';

  const checkin = localBooking?.checkin;
  const checkout = localBooking?.checkout;
  const nights = checkin && checkout
    ? Math.max(1, Math.round((new Date(checkout).getTime() - new Date(checkin).getTime()) / 86400000))
    : 1;

  const roomName = supplierData?.rooms?.[0]?.name || localBooking?.guest_info?.roomName || 'Room';
  const boardName = supplierData?.rooms?.[0]?.boardName || 'Room Only';
  const totalPaid = localBooking?.total_price || 0;
  const currency = localBooking?.currency || 'INR';
  const currencySymbol = currency === 'INR' ? '₹' : currency === 'USD' ? '$' : currency + ' ';

  const adultsCount = localBooking?.guest_info?.adults || guestDetails?.adults || '2';
  const roomsCount = localBooking?.guest_info?.rooms || '1 Room';

  // 9 Dynamic API/DB Fields
  const bookingDateStr = localBooking?.created_at
    ? new Date(localBooking.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
    : '—';
  const systemBookingId = localBooking?.id || bookingId || '—';
  const hotelConfirmationNumber = supplierData?.hotelConfirmationCode || localBooking?.supplier_booking_id || localBooking?.booking_ref || 'PENDING';
  const voucherGeneratedOn = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  const mealPlanName = supplierData?.rooms?.[0]?.boardName || localBooking?.guest_info?.boardName || 'Room Only';
  const guestGstNumber = guestDetails?.gstin || localBooking?.guest_info?.gstin || '';
  const customerId = localBooking?.user_id ? `CUST-${String(localBooking.user_id).slice(0, 8).toUpperCase()}` : '';
  const checkinInstructions = supplierData?.hotel?.checkinInstructions || supplierData?.checkinInstructions || '';
  const hotelPhone = supplierData?.hotel?.phone || supplierData?.hotel?.contactNumber || '';

  const handlePrint = () => {
    const printWindow = window.open('', '_blank', 'width=850,height=950');
    if (!printWindow) {
      alert('Please allow popup windows for this site to view and download your voucher PDF.');
      return;
    }

    const logoUrl = window.location.origin + logoLight;

    const voucherHtml = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <title>Hotel Voucher - ${confirmationCode}</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
              margin: 0;
              padding: 40px;
              color: #111827;
              background: #ffffff;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .voucher-card {
              max-width: 750px;
              margin: 0 auto;
              border: 2px solid #111827;
              border-radius: 16px;
              padding: 32px;
              box-shadow: 0 4px 20px rgba(0,0,0,0.05);
            }
            .header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              border-bottom: 2px solid #111827;
              padding-bottom: 20px;
              margin-bottom: 24px;
            }
            .logo-img {
              height: 52px;
              width: auto;
              object-fit: contain;
            }
            .sublogo {
              font-size: 11px;
              font-weight: 700;
              color: #4b5563;
              text-transform: uppercase;
              letter-spacing: 1px;
              margin-top: 4px;
            }
            .conf-badge {
              background: #111827;
              color: #ffffff;
              font-family: monospace;
              font-size: 14px;
              padding: 8px 16px;
              border-radius: 8px;
              font-weight: 700;
            }
            .status {
              font-size: 11px;
              color: #166534;
              font-weight: 700;
              margin-top: 6px;
              text-align: right;
            }
            .section-box {
              background: #f9fafb;
              border: 1px solid #e5e7eb;
              border-radius: 12px;
              padding: 20px;
              margin-bottom: 20px;
            }
            .hotel-name {
              font-size: 20px;
              font-weight: 800;
              margin: 0 0 6px 0;
            }
            .hotel-addr {
              font-size: 13px;
              color: #4b5563;
              margin: 0;
            }
            .dates-grid {
              display: flex;
              justify-content: space-around;
              background: #f3f4f6;
              border: 1px solid #d1d5db;
              border-radius: 12px;
              padding: 20px;
              margin-bottom: 20px;
              text-align: center;
            }
            .date-box {
              flex: 1;
            }
            .date-box-border {
              border-right: 1px solid #d1d5db;
            }
            .date-label {
              font-size: 11px;
              font-weight: 700;
              color: #6b7280;
              text-transform: uppercase;
              letter-spacing: 1px;
              margin-bottom: 4px;
            }
            .date-val {
              font-size: 22px;
              font-weight: 900;
              margin: 4px 0;
            }
            .info-grid {
              display: flex;
              gap: 24px;
              border: 1px solid #e5e7eb;
              border-radius: 12px;
              padding: 20px;
              margin-bottom: 20px;
            }
            .info-col {
              flex: 1;
            }
            .info-title {
              font-size: 11px;
              font-weight: 700;
              color: #6b7280;
              text-transform: uppercase;
              letter-spacing: 1px;
              margin-bottom: 8px;
            }
            .info-val {
              font-size: 15px;
              font-weight: 700;
              margin: 0 0 4px 0;
            }
            .info-sub {
              font-size: 13px;
              color: #4b5563;
              margin: 0;
            }
            .support-box {
              background: #eff6ff;
              border: 1px solid #bfdbfe;
              border-radius: 12px;
              padding: 14px 20px;
              margin-bottom: 20px;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            .support-text {
              font-size: 12px;
              color: #1e40af;
              font-weight: 600;
            }
            .footer {
              display: flex;
              justify-content: space-between;
              align-items: center;
              border-top: 1px solid #e5e7eb;
              padding-top: 16px;
              margin-top: 20px;
            }
            .price-val {
              font-size: 24px;
              font-weight: 900;
            }
            @media print {
              body { padding: 0; }
              .voucher-card { border: none; box-shadow: none; padding: 0; }
            }
          </style>
        </head>
        <body>
          <div class="voucher-card">
            <div class="header">
              <div>
                <img src="${logoUrl}" alt="Rudraksh Safar" class="logo-img" />
                <div class="sublogo">Official Hotel Booking Voucher</div>
              </div>
              <div>
                <div class="conf-badge">CONFIRMATION #: ${confirmationCode}</div>
                <div class="status">✓ CONFIRMED & FULLY PAID</div>
              </div>
            </div>

            <div class="section-box">
              <div class="hotel-name">${hotelName}</div>
              ${hotelAddress ? `<div class="hotel-addr">${hotelAddress}</div>` : ''}
              ${hotelPhone ? `<div style="font-size:12px; color:#4b5563; margin-top:4px;"><b>Hotel Contact:</b> ${hotelPhone}</div>` : ''}
            </div>

            <!-- Booking Metadata Bar -->
            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:12px; background:#f9fafb; border:1px solid #e5e7eb; border-radius:12px; padding:12px 16px; margin-bottom:20px; text-align:center;">
              <div>
                <div style="font-size:10px; font-weight:700; color:#6b7280; text-transform:uppercase;">Booking Date</div>
                <div style="font-size:12px; font-weight:800; color:#111827;">${bookingDateStr}</div>
              </div>
              <div>
                <div style="font-size:10px; font-weight:700; color:#6b7280; text-transform:uppercase;">Booking ID</div>
                <div style="font-size:12px; font-weight:800; color:#111827; font-family:monospace;">${systemBookingId}</div>
              </div>
              <div>
                <div style="font-size:10px; font-weight:700; color:#6b7280; text-transform:uppercase;">Hotel Conf #</div>
                <div style="font-size:12px; font-weight:800; color:#166534; font-family:monospace;">${hotelConfirmationNumber}</div>
              </div>
              <div>
                <div style="font-size:10px; font-weight:700; color:#6b7280; text-transform:uppercase;">Voucher Issued On</div>
                <div style="font-size:11px; font-weight:700; color:#374151;">${voucherGeneratedOn}</div>
              </div>
            </div>

            <div class="dates-grid">
              <div class="date-box date-box-border">
                <div class="date-label">Check-In Date</div>
                <div class="date-val">${checkin ? new Date(checkin).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : '—'}</div>
                <div style="font-size:11px; color:#6b7280;">Check-in: After 2:00 PM</div>
              </div>
              <div class="date-box">
                <div class="date-label">Check-Out Date</div>
                <div class="date-val">${checkout ? new Date(checkout).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : '—'}</div>
                <div style="font-size:11px; color:#6b7280;">Check-out: Before 11:00 AM</div>
              </div>
            </div>

            <div class="info-grid">
              <div class="info-col">
                <div class="info-title">Guest Information</div>
                <div class="info-val">${guestDetails?.firstName || 'Guest'} ${guestDetails?.lastName || ''}</div>
                ${guestDetails?.phone ? `<div class="info-sub">Phone: ${guestDetails.phone}</div>` : ''}
                ${guestDetails?.email ? `<div class="info-sub">Email: ${guestDetails.email}</div>` : ''}
                ${customerId ? `<div class="info-sub"><b>Customer ID:</b> ${customerId}</div>` : ''}
                ${guestGstNumber ? `<div class="info-sub" style="color:#1d4ed8; font-weight:700;"><b>GSTIN:</b> ${guestGstNumber}</div>` : ''}
              </div>
              <div class="info-col">
                <div class="info-title">Room & Meal Plan</div>
                <div class="info-val">${roomName}</div>
                <div class="info-sub" style="color:#047857; font-weight:700;">Meal Plan: ${mealPlanName}</div>
                <div style="font-size:12px; color:#1d4ed8; margin-top:4px; font-weight:700;">1 Room &bull; ${adultsCount} Guests &bull; ${nights} Night(s)</div>
              </div>
            </div>

            ${checkinInstructions ? `
              <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:12px; padding:14px 18px; margin-bottom:20px;">
                <div style="font-size:11px; font-weight:800; color:#1e40af; text-transform:uppercase; margin-bottom:4px;">
                  📌 Hotel Check-in Instructions
                </div>
                <div style="font-size:12px; color:#1e3a8a; font-weight:500;">${checkinInstructions}</div>
              </div>
            ` : ''}

            <!-- Terms & Conditions Box -->
            <div style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:12px; padding:18px; margin-bottom:20px;">
              <div style="font-size:12px; font-weight:900; color:#111827; text-transform:uppercase; margin-bottom:8px; border-bottom:1px solid #e5e7eb; padding-bottom:6px;">
                IMPORTANT TERMS & LEGAL CONDITIONS
              </div>
              <ol style="margin:0; padding-left:18px; font-size:10.5px; color:#374151; line-height:1.55;">
                <li style="margin-bottom:4px;">This voucher is valid only for the guest(s), hotel, room category, occupancy, and travel dates mentioned herein and is non-transferable.</li>
                <li style="margin-bottom:4px;">A valid government-issued photo ID is mandatory for all guests. Hotel reserves the right to refuse check-in for non-compliance with applicable laws or hotel policies.</li>
                <li style="margin-bottom:4px;">Check-in/check-out timings, room allocation, upgrades, bed preference, views, and all special requests are subject to hotel availability and the hotel's discretion unless expressly confirmed.</li>
                <li style="margin-bottom:4px;">Any charges not expressly included in this voucher (including taxes, security deposit, minibar, room service, parking, damages, tourism fees, or incidental expenses) shall be borne solely by the guest.</li>
                <li style="margin-bottom:4px;">Cancellation, amendment, refund, no-show, and rescheduling shall be governed by the applicable booking policy and supplier/hotel terms. Refunds, if applicable, shall be processed only after confirmation from the supplier.</li>
                <li style="margin-bottom:4px;">Rudraksh Safar acts solely as a booking facilitator and shall not be liable for any act, omission, overbooking, cancellation, service deficiency, delay, loss, injury, force majeure, or any direct, indirect, incidental, or consequential damages arising from the hotel or third-party service providers.</li>
                <li style="margin-bottom:4px;">By using this voucher, the guest acknowledges and accepts all booking terms, hotel policies, cancellation rules, and applicable laws.</li>
                <li style="margin-bottom:4px;">Any dispute arising from this booking shall be subject to the exclusive jurisdiction of the competent courts at Durg, Chhattisgarh, India.</li>
              </ol>
            </div>

            <div class="support-box">
              <div class="support-text">
                📞 <b>Customer Care:</b> 9203650311 &nbsp;|&nbsp; ✉️ <b>Support Email:</b> rudrakshsafar@gmail.com
              </div>
              <div style="font-size:11px; color:#3b82f6; font-weight:700;">24/7 Helpline</div>
            </div>

            <div class="footer">
              <div>
                <div style="font-size:12px; font-weight:700; color:#166534;">Payment Status: FULLY PAID</div>
                <div style="font-size:11px; color:#9ca3af; margin-top:2px;">Please present a valid photo ID upon check-in at hotel desk.</div>
              </div>
              <div style="text-align:right;">
                <div style="font-size:11px; font-weight:700; color:#6b7280; text-transform:uppercase;">Total Amount Paid</div>
                <div class="price-val">${currencySymbol}${totalPaid.toLocaleString('en-IN')}</div>
              </div>
            </div>
          </div>

          <script>
            window.onload = function() {
              setTimeout(function() {
                window.print();
              }, 250);
            };
          </script>
        </body>
      </html>
    `;

    printWindow.document.open();
    printWindow.document.write(voucherHtml);
    printWindow.document.close();
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <style>{`
        @media print {
          body * {
            visibility: hidden !important;
          }
          #print-voucher-area, #print-voucher-area * {
            visibility: visible !important;
          }
          #print-voucher-area {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 24px !important;
            background: #ffffff !important;
          }
          @page {
            size: A4 portrait;
            margin: 15mm;
          }
        }
      `}</style>

      {/* Dedicated Print Voucher Area (Triggered during window.print()) */}
      <div id="print-voucher-area" className="hidden print:block p-8 border-2 border-gray-900 rounded-2xl bg-white">
        {/* Header */}
        <div className="flex justify-between items-center border-b-2 border-gray-900 pb-6 mb-6">
          <div>
            <img src={logoLight} alt="Rudraksh Safar" className="h-14 w-auto object-contain mb-1" />
            <p className="text-xs font-bold text-gray-600 uppercase tracking-widest">Official Hotel Booking Voucher</p>
          </div>
          <div className="text-right">
            <div className="inline-block bg-gray-900 text-white font-mono text-sm px-4 py-2 rounded-lg font-bold">
              CONFIRMATION #: {confirmationCode}
            </div>
            <p className="text-xs text-gray-500 mt-1 font-semibold">Status: CONFIRMED & PAID</p>
          </div>
        </div>

        {/* Hotel Details */}
        <div className="bg-gray-50 p-5 rounded-xl border border-gray-300 mb-6">
          <h2 className="text-xl font-extrabold text-gray-900 mb-1">{hotelName}</h2>
          {hotelAddress && <p className="text-sm text-gray-600 font-medium">{hotelAddress}</p>}
          {hotelPhone && <p className="text-xs text-gray-500 mt-1 font-medium">Hotel Contact: {hotelPhone}</p>}
        </div>

        {/* Booking Metadata Bar */}
        <div className="grid grid-cols-4 gap-3 bg-gray-50 border border-gray-200 rounded-xl p-3 mb-6 text-center">
          <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase">Booking Date</p>
            <p className="text-xs font-black text-gray-900">{bookingDateStr}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase">Booking ID</p>
            <p className="text-xs font-black text-gray-900 font-mono">{systemBookingId}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase">Hotel Conf #</p>
            <p className="text-xs font-black text-green-700 font-mono">{hotelConfirmationNumber}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase">Voucher Issued On</p>
            <p className="text-xs font-bold text-gray-700">{voucherGeneratedOn}</p>
          </div>
        </div>

        {/* Stay Dates Grid */}
        <div className="grid grid-cols-2 gap-4 border border-gray-300 rounded-xl p-5 mb-6 text-center bg-gray-50/50">
          <div className="border-r border-gray-300 pr-4">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Check-In Date</p>
            <p className="text-2xl font-black text-gray-900">{checkin ? new Date(checkin).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : '—'}</p>
            <p className="text-xs text-gray-500 font-semibold mt-1">Check-in: After 2:00 PM</p>
          </div>
          <div className="pl-4">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Check-Out Date</p>
            <p className="text-2xl font-black text-gray-900">{checkout ? new Date(checkout).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : '—'}</p>
            <p className="text-xs text-gray-500 font-semibold mt-1">Check-out: Before 11:00 AM</p>
          </div>
        </div>

        {/* Guest & Room Grid */}
        <div className="grid grid-cols-2 gap-6 border border-gray-300 rounded-xl p-5 mb-6">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Guest Information</h3>
            <p className="text-base font-extrabold text-gray-900">{guestDetails?.firstName} {guestDetails?.lastName}</p>
            {guestDetails?.phone && <p className="text-sm text-gray-700 font-medium mt-1">Phone: {guestDetails.phone}</p>}
            {guestDetails?.email && <p className="text-sm text-gray-700 font-medium">Email: {guestDetails.email}</p>}
            {customerId && <p className="text-xs text-gray-600 mt-1 font-medium">Customer ID: {customerId}</p>}
            {guestGstNumber && <p className="text-xs text-blue-700 font-bold mt-0.5">GSTIN: {guestGstNumber}</p>}
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Room & Meal Plan</h3>
            <p className="text-base font-extrabold text-gray-900">{roomName}</p>
            <p className="text-sm text-emerald-700 font-bold mt-0.5">Meal Plan: {mealPlanName}</p>
            <p className="text-xs text-blue-700 font-bold mt-1">1 Room • {adultsCount} Guests • {nights} Night(s)</p>
          </div>
        </div>

        {checkinInstructions && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <p className="text-xs font-extrabold text-blue-900 uppercase tracking-wider mb-1">
              📌 Hotel Check-in Instructions
            </p>
            <p className="text-xs text-blue-950 font-medium">{checkinInstructions}</p>
          </div>
        )}

        {/* Terms & Conditions Box */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
          <p className="text-xs font-extrabold text-gray-900 uppercase tracking-wider mb-2 border-b border-gray-200 pb-2">
            IMPORTANT TERMS & LEGAL CONDITIONS
          </p>
          <ol className="text-xs text-gray-700 space-y-1.5 list-decimal list-inside leading-relaxed">
            <li>This voucher is valid only for the guest(s), hotel, room category, occupancy, and travel dates mentioned herein and is non-transferable.</li>
            <li>A valid government-issued photo ID is mandatory for all guests. Hotel reserves the right to refuse check-in for non-compliance with applicable laws or hotel policies.</li>
            <li>Check-in/check-out timings, room allocation, upgrades, bed preference, views, and all special requests are subject to hotel availability and the hotel's discretion unless expressly confirmed.</li>
            <li>Any charges not expressly included in this voucher (including taxes, security deposit, minibar, room service, parking, damages, tourism fees, or incidental expenses) shall be borne solely by the guest.</li>
            <li>Cancellation, amendment, refund, no-show, and rescheduling shall be governed by the applicable booking policy and supplier/hotel terms. Refunds, if applicable, shall be processed only after confirmation from the supplier.</li>
            <li>Rudraksh Safar acts solely as a booking facilitator and shall not be liable for any act, omission, overbooking, cancellation, service deficiency, delay, loss, injury, force majeure, or any direct, indirect, incidental, or consequential damages arising from the hotel or third-party service providers.</li>
            <li>By using this voucher, the guest acknowledges and accepts all booking terms, hotel policies, cancellation rules, and applicable laws.</li>
            <li>Any dispute arising from this booking shall be subject to the exclusive jurisdiction of the competent courts at Durg, Chhattisgarh, India.</li>
          </ol>
        </div>

        {/* Payment & Terms */}
        <div className="flex justify-between items-center border-t border-gray-300 pt-4 mt-6">
          <div>
            <p className="text-xs text-gray-500 font-medium">Payment Status: <span className="font-bold text-green-700">FULLY PAID</span></p>
            <p className="text-xs text-gray-400 mt-0.5">Please present a valid photo ID upon check-in at the hotel desk.</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold text-gray-500 uppercase">Total Amount</p>
            <p className="text-2xl font-black text-gray-900">{currencySymbol}{totalPaid.toLocaleString('en-IN')}</p>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200 shadow-sm mb-6 print:hidden">
        <BookingStepper currentStep={4} />
      </div>

      <div className="max-w-5xl mx-auto space-y-6 px-4">

        {/* Success Banner */}
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-32 translate-x-16 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-24 -translate-x-12 pointer-events-none" />

          <div className="flex items-center gap-6 relative z-10 text-center md:text-left">
            <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold mb-1">Booking Confirmed!</h1>
              <p className="text-green-100 font-medium text-lg">
                A confirmation email has been sent to {guestDetails?.email || 'your email'}.
              </p>
            </div>
          </div>

          <div className="mt-6 md:mt-0 relative z-10 text-center md:text-right bg-black/20 p-4 rounded-xl backdrop-blur-sm min-w-[160px]">
            <p className="text-green-100 text-xs uppercase tracking-wider font-semibold mb-1">Confirmation No.</p>
            <p className="text-xl font-black tracking-wider">{confirmationCode}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">

            {/* Hotel & Dates */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-1">{hotelName}</h2>
                {hotelAddress && (
                  <p className="text-gray-500 flex items-center gap-1.5 text-sm">
                    <MapPin className="w-4 h-4 shrink-0" />
                    {hotelAddress}
                  </p>
                )}
              </div>

              <div className="p-6 bg-blue-50/30">
                <div className="grid grid-cols-2 gap-8 relative">
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200" />
                  <div className="text-center">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center justify-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> Check In
                    </p>
                    <p className="text-2xl font-black text-gray-900">
                      {checkin ? new Date(checkin).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) : '—'}
                    </p>
                    <p className="text-gray-500 text-sm">{formatDayName(checkin)}</p>
                    <p className="text-xs text-gray-400 mt-1 bg-white inline-block px-2 py-0.5 rounded-full border border-gray-100">After 2:00 PM</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center justify-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> Check Out
                    </p>
                    <p className="text-2xl font-black text-gray-900">
                      {checkout ? new Date(checkout).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) : '—'}
                    </p>
                    <p className="text-gray-500 text-sm">{formatDayName(checkout)}</p>
                    <p className="text-xs text-gray-400 mt-1 bg-white inline-block px-2 py-0.5 rounded-full border border-gray-100">Before 11:00 AM</p>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <BedDouble className="w-4 h-4 text-gray-500" />
                  Room Details
                </h3>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900">{roomName}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{boardName}</p>
                  </div>
                  <div className="text-right border-l border-gray-200 pl-4">
                    <p className="text-sm font-semibold text-gray-700">{nights} Night{nights > 1 ? 's' : ''}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{formatDate(checkin)} – {formatDate(checkout)}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Guest Details */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-gray-500" />
                Primary Guest
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Full Name</p>
                  <p className="font-bold text-gray-900 text-lg">
                    {guestDetails?.firstName} {guestDetails?.lastName}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Contact</p>
                  {guestDetails?.phone && (
                    <p className="text-gray-700 flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                      {guestDetails.phone}
                    </p>
                  )}
                  {guestDetails?.email && (
                    <p className="text-gray-700 flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-gray-400 shrink-0" />
                      {guestDetails.email}
                    </p>
                  )}
                </div>
                {guestDetails?.specialRequests && (
                  <div className="md:col-span-2 bg-yellow-50 p-4 rounded-xl border border-yellow-100">
                    <p className="text-sm font-semibold text-yellow-800 mb-1 flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      Special Request Sent to Hotel:
                    </p>
                    <p className="text-yellow-900 text-sm italic">"{guestDetails.specialRequests}"</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="grid grid-cols-2 gap-3 print:hidden">
              <button
                onClick={handlePrint}
                className="bg-white border border-gray-200 text-gray-700 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 px-4 py-4 rounded-xl font-semibold transition-all flex flex-col items-center justify-center gap-2 shadow-sm"
              >
                <Printer className="w-6 h-6" />
                <span className="text-sm">Print</span>
              </button>
              <button
                onClick={handlePrint}
                className="bg-white border border-gray-200 text-gray-700 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 px-4 py-4 rounded-xl font-semibold transition-all flex flex-col items-center justify-center gap-2 shadow-sm"
              >
                <Download className="w-6 h-6" />
                <span className="text-sm">Download</span>
              </button>
            </div>

            {/* Customer Support Card */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 space-y-3">
              <h3 className="text-sm font-bold text-blue-900 flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-600" /> Need Help With Your Booking?
              </h3>
              <div className="space-y-1.5 text-xs text-blue-800 font-medium">
                <p className="flex items-center gap-2">
                  <span className="font-bold">Customer Care:</span> 9203650311
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-bold">Support Email:</span> rudrakshsafar@gmail.com
                </p>
              </div>
            </div>

            {/* Payment Summary */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="font-bold text-gray-900 mb-4 text-lg">Payment Summary</h2>
              <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg font-semibold text-sm mb-5 flex items-center gap-2 border border-green-100">
                <CheckCircle className="w-4 h-4" />
                Payment Confirmed
              </div>

              <div className="space-y-2.5 mb-5">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Booking Date</span>
                  <span className="font-semibold text-gray-800 text-xs">{bookingDateStr}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Booking ID</span>
                  <span className="font-mono text-gray-800 text-xs">{String(systemBookingId || '—').slice(0, 12)}...</span>
                </div>
                {hotelConfirmationNumber && (
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Hotel Conf #</span>
                    <span className="font-mono text-emerald-700 font-bold text-xs">{hotelConfirmationNumber}</span>
                  </div>
                )}
                {guestGstNumber && (
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>GSTIN</span>
                    <span className="font-mono text-blue-700 font-bold text-xs">{guestGstNumber}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Status</span>
                  <span className="text-green-600 font-semibold capitalize">{localBooking?.status?.toLowerCase() || 'confirmed'}</span>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-900">Total Paid</span>
                  <span className="text-2xl font-black text-gray-900">
                    {currencySymbol}{totalPaid.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate('/')}
              className="w-full bg-blue-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 print:hidden"
            >
              <Home className="w-5 h-5" />
              Return to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

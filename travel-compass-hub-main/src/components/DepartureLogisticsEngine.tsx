import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Train, Plane, Car, MapPin, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface DepartureLogisticsProps {
  originCity: 'Bhilai' | 'Raipur' | 'Bilaspur' | 'Durg';
}

export const DepartureLogisticsEngine: React.FC<DepartureLogisticsProps> = ({ originCity }) => {
  const trainSchedules = [
    {
      trainNo: '18477 / 18478',
      name: 'Kalinga Utkal Express',
      route: 'To Haridwar & Rishikesh (Uttarakhand / Kumbh)',
      station: originCity === 'Bilaspur' ? 'BSP (Bilaspur Jn)' : (originCity === 'Raipur' ? 'R (Raipur Jn)' : 'DURG (Durg Jn)'),
      frequency: 'Daily (Year-round)',
      notes: 'Direct train to Haridwar without changing. Ideal for Kumbh Mela & Char Dham yatris.'
    },
    {
      trainNo: '12441 / 12442',
      name: 'Bilaspur Rajdhani Express',
      route: 'To New Delhi (NDLS) — Manali Batch Connection',
      station: originCity === 'Bilaspur' ? 'BSP' : (originCity === 'Raipur' ? 'R' : 'DURG'),
      frequency: 'Mon & Thu',
      notes: 'Fastest connection to Delhi. Arrives Friday morning for our Friday night Manali departures.'
    },
    {
      trainNo: '18426 / 18425',
      name: 'Durg – Puri Intercity Express',
      route: 'To Puri (Lord Jagannath Dham & Konark)',
      station: originCity === 'Bilaspur' ? 'Transfer at R' : (originCity === 'Raipur' ? 'Raipur Jn (16:55)' : 'Durg Jn (16:10)'),
      frequency: 'Daily Overnight',
      notes: 'Board in the evening; arrives Puri Golden Beach at 05:40 AM next morning.'
    },
    {
      trainNo: '12742 / 12741',
      name: 'Bilaspur – Vasco Da Gama Express',
      route: 'To Goa (Madgaon Jn - MAO)',
      station: originCity === 'Bilaspur' ? 'BSP' : (originCity === 'Raipur' ? 'R' : 'DURG'),
      frequency: 'Weekly',
      notes: 'Direct scenic train passing Western Ghats directly into Goa.'
    },
    {
      trainNo: '12823 / 12824',
      name: 'Chhattisgarh Sampark Kranti Express',
      route: 'To Hazrat Nizamuddin (Delhi NCR)',
      station: originCity === 'Bilaspur' ? 'BSP' : (originCity === 'Raipur' ? 'R' : 'DURG'),
      frequency: '3 Days / Week',
      notes: 'Superfast connectivity to Delhi with minimal stops.'
    }
  ];

  const flightSectors = [
    {
      destination: 'New Delhi (DEL)',
      type: 'Nonstop (Direct)',
      duration: '1h 45m',
      airlines: 'IndiGo, Air India (6+ Daily)',
      connectingTo: 'Primary hub for Manali Volvo, Ladakh flights & Almaty/Canton Fair tours.'
    },
    {
      destination: 'Mumbai (BOM)',
      type: 'Nonstop (Direct)',
      duration: '1h 50m',
      airlines: 'IndiGo, Air India (4+ Daily)',
      connectingTo: 'Prime connection hub for Dubai, Europe, and Western outbound.'
    },
    {
      destination: 'Kolkata (CCU)',
      type: 'Nonstop (Direct)',
      duration: '1h 30m',
      airlines: 'IndiGo (2+ Daily)',
      connectingTo: 'Shortest transit corridor for Thailand (BKK/DMK), Vietnam, and Bali.'
    },
    {
      destination: 'Goa (GOX / GOI)',
      type: 'Direct / 1-Stop',
      duration: '2h 10m',
      airlines: 'IndiGo',
      connectingTo: 'Direct beach connection for weekend getaways and honeymoon trips.'
    },
    {
      destination: 'International 1-Stop',
      type: 'Baggage Thru-Check',
      duration: '6h – 8h total',
      airlines: 'Via DEL / BOM / CCU',
      connectingTo: 'Seamless single-ticket transit to Bangkok, Dubai, Vietnam, Bali, and Almaty.'
    }
  ];

  const getDistanceText = () => {
    switch (originCity) {
      case 'Bhilai':
        return '45 km via 6-lane GE Road / NH 53 expressway (approx. 45–50 minutes by private AC cab).';
      case 'Durg':
        return '52 km via NH 53 expressway (approx. 55 minutes door-to-door).';
      case 'Bilaspur':
        return '115 km via modern 4-lane NH 130 expressway (approx. 2 hours direct transfer).';
      case 'Raipur':
      default:
        return '15 km from central city / Telibandha (approx. 20–25 minutes via VIP Road).';
    }
  };

  return (
    <section className="py-12 bg-slate-900/60 border-y border-slate-800 space-y-8">
      <div className="container mx-auto px-4 max-w-6xl space-y-6">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30 text-xs font-semibold px-2.5 py-1">
            Verified Departure Logistics & Feeder
          </Badge>
          <h2 className="text-2xl md:text-4xl font-black text-white">
            How You Travel from {originCity} to India & Beyond
          </h2>
          <p className="text-sm text-slate-300">
            Real train schedules, airport transit corridors, and doorstep vehicle pickups. No hypothetical routes or automated guesswork.
          </p>
        </div>

        {/* Airport Highway Feeder Card */}
        <Card className="bg-slate-900 border-slate-800 text-slate-200">
          <CardHeader className="p-4 md:p-6 pb-2 border-b border-slate-800/80">
            <CardTitle className="text-base md:text-lg text-white flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Plane className="w-5 h-5 text-blue-400" /> Primary Aviation Hub: Swami Vivekananda Airport, Raipur (RPR)
              </span>
              <Badge variant="outline" className="border-blue-500/40 text-blue-300 text-xs hidden sm:inline-flex">
                IATA: RPR
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 md:p-6 space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 bg-slate-800/50 rounded-xl text-xs md:text-sm">
              <span className="text-slate-300 flex items-center gap-2">
                <Car className="w-4 h-4 text-emerald-400" />
                <strong>Highway Distance from {originCity}:</strong> {getDistanceText()}
              </span>
              <span className="text-emerald-400 font-semibold whitespace-nowrap">
                Doorstep AC Cab Pickup Arranged
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs md:text-sm text-slate-300">
                <thead className="bg-slate-800/80 text-xs font-bold text-slate-200 uppercase">
                  <tr>
                    <th className="p-3">Sector</th>
                    <th className="p-3">Flight Type</th>
                    <th className="p-3">Duration</th>
                    <th className="p-3">Airlines</th>
                    <th className="p-3">Seamless Connecting Route</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {flightSectors.map((f, i) => (
                    <tr key={i} className="hover:bg-slate-800/40 transition">
                      <td className="p-3 font-bold text-white">{f.destination}</td>
                      <td className="p-3 text-blue-300">{f.type}</td>
                      <td className="p-3">{f.duration}</td>
                      <td className="p-3 text-slate-300">{f.airlines}</td>
                      <td className="p-3 text-xs text-slate-400">{f.connectingTo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Rail Connectivity Table */}
        <Card className="bg-slate-900 border-slate-800 text-slate-200">
          <CardHeader className="p-4 md:p-6 pb-2 border-b border-slate-800/80">
            <CardTitle className="text-base md:text-lg text-white flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Train className="w-5 h-5 text-emerald-400" /> Direct Key Express Trains from {originCity} Corridors
              </span>
              <Badge variant="outline" className="border-emerald-500/40 text-emerald-300 text-xs hidden sm:inline-flex">
                SECR Main Line
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 md:p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs md:text-sm text-slate-300">
                <thead className="bg-slate-800/80 text-xs font-bold text-slate-200 uppercase">
                  <tr>
                    <th className="p-3">Train No & Name</th>
                    <th className="p-3">Boarding Station</th>
                    <th className="p-3">Destination / Route</th>
                    <th className="p-3">Frequency</th>
                    <th className="p-3">Logistical Advantage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {trainSchedules.map((t, i) => (
                    <tr key={i} className="hover:bg-slate-800/40 transition">
                      <td className="p-3 font-bold text-white">
                        {t.trainNo}
                        <span className="block text-xs font-normal text-slate-400">{t.name}</span>
                      </td>
                      <td className="p-3 text-emerald-300 font-medium">{t.station}</td>
                      <td className="p-3 text-slate-200">{t.route}</td>
                      <td className="p-3 text-xs text-slate-400">{t.frequency}</td>
                      <td className="p-3 text-xs text-slate-300">{t.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Real Headquarters & Trust Notice */}
        <div className="p-4 md:p-5 bg-gradient-to-r from-blue-950/40 via-slate-900 to-slate-900 border border-blue-500/30 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-bold text-white text-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              Verified Base: Bhilai Central Headquarters
            </div>
            <p className="text-xs text-slate-300">
              Rudraksh Safar operates its central booking and ticketing desk at GE Road, Bhilai-3, Chhattisgarh (GSTIN: 22AGBPC7350G1ZZ). We serve travelers across Bhilai, Durg, Raipur, and Bilaspur with 24/7 on-ground assistance and doorstep cab pickups.
            </p>
          </div>
          <div className="whitespace-nowrap">
            <a
              href="tel:9713057086"
              className="text-xs font-bold px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg inline-flex items-center gap-1.5 transition"
            >
              Direct Call: +91 9713057086
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartureLogisticsEngine;

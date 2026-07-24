import React, { useEffect, useState } from 'react';
import { HotelApiService } from '../services/api/hotel.service';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, MapPin, CreditCard, ChevronRight, 
  AlertCircle, CheckCircle2, Clock, XCircle, Search, Edit 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Bookings = () => {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cancellingId, setCancellingId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'upcoming' | 'completed' | 'cancelled'>('upcoming');
  const navigate = useNavigate();

  // Amend booking state
  const [amendingBookingId, setAmendingBookingId] = useState<string | null>(null);
  const [isAmending, setIsAmending] = useState(false);
  const [amendForm, setAmendForm] = useState({ firstName: '', lastName: '', email: '', remarks: '' });

  // Hard amend state (Dates/Occupancy)
  const [hardAmendBookingId, setHardAmendBookingId] = useState<string | null>(null);
  const [hardAmendForm, setHardAmendForm] = useState({ checkIn: '', checkOut: '', adults: 2 });
  const [alternativePrebooks, setAlternativePrebooks] = useState<any[]>([]);
  const [isSearchingAlternatives, setIsSearchingAlternatives] = useState(false);
  const [isRebooking, setIsRebooking] = useState(false);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const res = await HotelApiService.listBookings();
      const bookingsArray = res?.data?.data || res?.data || [];
      setBookings(Array.isArray(bookingsArray) ? bookingsArray : []);
    } catch (err: any) {
      setError(err.message || "Failed to load bookings");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async (bookingId: string) => {
    if (!window.confirm("Are you sure you want to cancel this booking? Cancellation policies may apply.")) return;
    
    try {
      setCancellingId(bookingId);
      await HotelApiService.cancelBooking(bookingId);
      await fetchBookings();
    } catch (err: any) {
      alert("Failed to cancel booking: " + err.message);
    } finally {
      setCancellingId(null);
    }
  };

  const handleAmendSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!amendingBookingId) return;

    try {
      setIsAmending(true);
      await HotelApiService.amendBooking(
        amendingBookingId,
        { 
          firstName: amendForm.firstName, 
          lastName: amendForm.lastName, 
          email: amendForm.email 
        },
        amendForm.remarks
      );
      
      alert("Guest details updated successfully!");
      setAmendingBookingId(null);
      await fetchBookings();
    } catch (err: any) {
      alert("Failed to update guest details: " + err.message);
    } finally {
      setIsAmending(false);
    }
  };

  const handleSearchAlternatives = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!hardAmendBookingId) return;

    try {
      setIsSearchingAlternatives(true);
      setAlternativePrebooks([]);
      const data = await HotelApiService.getAlternativePrebooks(
        hardAmendBookingId,
        {
          occupancies: [{ adults: hardAmendForm.adults }],
          checkin: hardAmendForm.checkIn,
          checkout: hardAmendForm.checkOut
        }
      );
      setAlternativePrebooks(data || []);
    } catch (err: any) {
      alert("Failed to search alternatives: " + err.message);
    } finally {
      setIsSearchingAlternatives(false);
    }
  };

  const handleRebook = async (prebookId: string) => {
    if (!hardAmendBookingId) return;
    if (!window.confirm("Are you sure you want to confirm this new booking? The old booking will be cancelled.")) return;

    try {
      setIsRebooking(true);
      await HotelApiService.rebookBooking(prebookId, hardAmendBookingId);
      alert("Booking successfully changed!");
      setHardAmendBookingId(null);
      setAlternativePrebooks([]);
      await fetchBookings();
    } catch (err: any) {
      alert("Failed to rebook: " + err.message);
    } finally {
      setIsRebooking(false);
    }
  };

  // Categorize bookings
  const today = new Date();
  today.setHours(0,0,0,0);

  const categorizedBookings = {
    upcoming: bookings.filter(b => b.status === 'CONFIRMED' && new Date(b.checkIn) >= today),
    completed: bookings.filter(b => b.status === 'CONFIRMED' && new Date(b.checkIn) < today),
    cancelled: bookings.filter(b => b.status === 'CANCELLED'),
  };

  const currentBookings = categorizedBookings[activeTab];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cinematic Header */}
      <div className="relative h-[300px] w-full overflow-hidden flex items-end pb-12">
        <div className="absolute inset-0 bg-blue-700">
          {/* Subtle gradient pattern */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-transparent z-10" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        </div>
        
        <div className="container px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-200 font-bold tracking-wider text-sm uppercase mb-3 block">Your Profile</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">My Bookings</h1>
            <p className="text-blue-50 text-lg">Manage your past and future adventures.</p>
          </motion.div>
        </div>
      </div>

      <div className="container px-4 -mt-6 relative z-30 pb-24">
        {/* Tab Navigation */}
        <div className="flex space-x-2 bg-white p-1.5 rounded-2xl w-fit mb-8 border border-gray-200 shadow-md">
          {(['upcoming', 'completed', 'cancelled'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 capitalize ${
                activeTab === tab 
                  ? 'bg-blue-600 text-white shadow-lg scale-[1.02]' 
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="min-h-[400px]">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-[300px] space-y-4">
              <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin" />
              <p className="text-gray-500 font-medium">Retrieving your itinerary...</p>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 text-red-800 p-6 rounded-2xl flex items-start gap-4 shadow-sm">
              <AlertCircle className="w-6 h-6 shrink-0 mt-0.5 text-red-500" />
              <div>
                <h3 className="font-bold text-red-900 mb-1">Failed to load bookings</h3>
                <p className="text-sm font-medium text-red-700">{error}</p>
                <Button variant="outline" className="mt-4 border-red-200 hover:bg-red-100 text-red-700 bg-white" onClick={fetchBookings}>
                  Try Again
                </Button>
              </div>
            </div>
          ) : currentBookings.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white border border-gray-200 rounded-3xl p-12 text-center max-w-2xl mx-auto shadow-sm"
            >
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">No {activeTab} bookings</h3>
              <p className="text-gray-500 mb-8 max-w-md mx-auto">
                {activeTab === 'upcoming' 
                  ? "It's time to plan your next great adventure. Discover our curated collection of luxury stays."
                  : activeTab === 'completed'
                  ? "You haven't completed any trips with us yet. Your journey awaits!"
                  : "You have no cancelled bookings."}
              </p>
              {(activeTab === 'upcoming' || activeTab === 'completed') && (
                <Button onClick={() => navigate('/hotels')} className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full px-8 py-6 h-auto transition-transform hover:scale-105 shadow-lg">
                  Explore Destinations <Search className="w-4 h-4 ml-2" />
                </Button>
              )}
            </motion.div>
          ) : (
            <div className="grid gap-6">
              <AnimatePresence mode="popLayout">
                {currentBookings.map((booking: any, index: number) => (
                    <motion.div
                      key={booking.bookingId || booking.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="flex flex-col md:flex-row">
                        {/* Left: Info */}
                        <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-3 mb-4">
                              {booking.status === 'CONFIRMED' ? (
                                 <span className="flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-200">
                                   <CheckCircle2 className="w-3.5 h-3.5" /> Confirmed
                                 </span>
                              ) : (
                                 <span className="flex items-center gap-1.5 px-3 py-1 bg-red-50 text-red-700 text-xs font-bold rounded-full border border-red-200">
                                   <XCircle className="w-3.5 h-3.5" /> Cancelled
                                 </span>
                              )}
                              <span className="text-sm text-gray-400 font-mono">Ref: {booking.clientReference || booking.bookingId || booking.id}</span>
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                              {booking.hotelName || 'Luxury Accommodation'}
                            </h3>
                            <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm mt-4">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-blue-500" />
                                <span>{booking.checkIn} &rarr; {booking.checkOut}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CreditCard className="w-4 h-4 text-blue-500" />
                                <span>{booking.currency} {booking.price}</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Actions */}
                          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-4">
                            <Button variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-full bg-white">
                              View Itinerary
                            </Button>
                            {activeTab === 'upcoming' && booking.status === 'CONFIRMED' && (
                              <div className="flex gap-2 ml-auto">
                                <Button 
                                  variant="outline" 
                                  onClick={() => {
                                    setHardAmendBookingId(booking.bookingId || booking.id);
                                    setHardAmendForm({ checkIn: booking.checkIn, checkOut: booking.checkOut, adults: 2 });
                                    setAlternativePrebooks([]);
                                  }}
                                  className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-full flex items-center gap-2 bg-white"
                                >
                                  <Calendar className="w-4 h-4" /> Change Dates
                                </Button>
                              <Button 
                                variant="outline" 
                                onClick={() => {
                                  setAmendingBookingId(booking.bookingId || booking.id);
                                  // Pre-fill form if data is available, otherwise leave blank to fill
                                  setAmendForm({
                                    firstName: booking.holderFirstName || '',
                                    lastName: booking.holderLastName || '',
                                    email: booking.holderEmail || '',
                                    remarks: ''
                                  });
                                }}
                                className="border-white/20 text-white hover:bg-white/10 hover:text-white rounded-full flex items-center gap-2"
                              >
                                <Edit className="w-4 h-4" /> Amend Details
                              </Button>
                              <Button 
                                variant="ghost" 
                                onClick={() => handleCancel(booking.bookingId || booking.id)}
                                disabled={cancellingId === (booking.bookingId || booking.id)}
                                className="text-red-600 hover:bg-red-50 hover:text-red-700 rounded-full bg-white"
                              >
                                {cancellingId === (booking.bookingId || booking.id) ? 'Cancelling...' : 'Cancel Booking'}
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Right: Visual / Image Placeholder */}
                      <div className="md:w-72 lg:w-96 bg-gray-100 hidden md:block relative overflow-hidden">
                        {/* We could show a hotel image here if returned by the API, otherwise a nice abstract */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 opacity-50" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                           <MapPin className="w-32 h-32 text-blue-600" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>

      {/* Amend Booking Modal */}
      <AnimatePresence>
        {amendingBookingId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-gray-900/40 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-gray-200 p-8 rounded-3xl shadow-2xl w-full max-w-md relative"
            >
              <button 
                onClick={() => setAmendingBookingId(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <XCircle className="w-6 h-6" />
              </button>
              
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">Amend Guest Details</h2>
              <p className="text-gray-500 text-sm mb-6">Update the primary holder's name and email for this booking.</p>
              
              <form onSubmit={handleAmendSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">First Name</label>
                    <input 
                      type="text" 
                      required
                      value={amendForm.firstName}
                      onChange={e => setAmendForm({...amendForm, firstName: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Last Name</label>
                    <input 
                      type="text" 
                      required
                      value={amendForm.lastName}
                      onChange={e => setAmendForm({...amendForm, lastName: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                    />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={amendForm.email}
                    onChange={e => setAmendForm({...amendForm, email: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                  />
                </div>
                
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Remarks (Optional)</label>
                  <textarea 
                    value={amendForm.remarks}
                    onChange={e => setAmendForm({...amendForm, remarks: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow h-24 resize-none"
                    placeholder="Any special requests..."
                  />
                </div>
                
                <div className="pt-4 flex justify-end gap-3">
                  <Button type="button" variant="ghost" onClick={() => setAmendingBookingId(null)} className="text-gray-500 hover:text-gray-700 hover:bg-gray-100">
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isAmending} className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6">
                    {isAmending ? 'Updating...' : 'Save Changes'}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Hard Amend (Change Dates) Modal */}
      <AnimatePresence>
        {hardAmendBookingId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-gray-900/40 backdrop-blur-sm overflow-y-auto pt-20 pb-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-gray-200 p-8 rounded-3xl shadow-2xl w-full max-w-2xl relative"
            >
              <button 
                onClick={() => setHardAmendBookingId(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <XCircle className="w-6 h-6" />
              </button>
              
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">Change Dates & Guests</h2>
              <p className="text-gray-500 text-sm mb-6">Search for alternative availability and instantly rebook.</p>
              
              <form onSubmit={handleSearchAlternatives} className="flex gap-4 mb-8">
                <div className="flex-1 space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Check In</label>
                  <input 
                    type="date" 
                    required
                    value={hardAmendForm.checkIn}
                    onChange={e => setHardAmendForm({...hardAmendForm, checkIn: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                  />
                </div>
                <div className="flex-1 space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Check Out</label>
                  <input 
                    type="date" 
                    required
                    value={hardAmendForm.checkOut}
                    onChange={e => setHardAmendForm({...hardAmendForm, checkOut: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                  />
                </div>
                <div className="w-24 space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Adults</label>
                  <input 
                    type="number" 
                    required
                    min="1"
                    value={hardAmendForm.adults}
                    onChange={e => setHardAmendForm({...hardAmendForm, adults: parseInt(e.target.value) || 1})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                  />
                </div>
                <div className="flex items-end">
                  <Button type="submit" disabled={isSearchingAlternatives} className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2.5 h-[46px]">
                    {isSearchingAlternatives ? 'Searching...' : 'Search'}
                  </Button>
                </div>
              </form>

              {alternativePrebooks.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Select Alternative Rate</h3>
                  {alternativePrebooks.map((alt, idx) => (
                    <div key={alt.prebookId || idx} className="bg-gray-50 border border-gray-200 p-4 rounded-xl flex items-center justify-between hover:border-blue-300 transition-colors shadow-sm hover:shadow-md">
                      <div>
                        <div className="text-gray-900 font-bold mb-1 flex items-center gap-2">
                          <span>{alt.price} {alt.currency}</span>
                          {alt.priceDifferencePercent !== undefined && alt.priceDifferencePercent !== null && (
                            <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${alt.priceDifferencePercent < 0 ? 'bg-green-100 text-green-700' : alt.priceDifferencePercent > 0 ? 'bg-orange-100 text-orange-700' : 'bg-gray-200 text-gray-600'}`}>
                              {alt.priceDifferencePercent < 0 ? `${Math.abs(alt.priceDifferencePercent)}% Cheaper` : alt.priceDifferencePercent > 0 ? `${alt.priceDifferencePercent}% More Expensive` : 'Same Price'}
                            </span>
                          )}
                        </div>
                        <div className="text-gray-500 text-sm">
                          {alt.roomTypes?.[0]?.name || 'Standard Room'} • {alt.roomTypes?.[0]?.rates?.[0]?.boardName || 'Room Only'}
                        </div>
                        {alt.cancellationChanged && <div className="text-orange-500 font-semibold text-xs mt-1">Note: Cancellation policy changed</div>}
                      </div>
                      <Button 
                        onClick={() => handleRebook(alt.prebookId)}
                        disabled={isRebooking}
                        className="bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700 border border-blue-200"
                      >
                        {isRebooking ? 'Rebooking...' : 'Confirm Rebook'}
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

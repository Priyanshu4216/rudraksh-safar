import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { HotelApiService } from "../services/api/hotel.service";
import { useCurrency } from "../contexts/CurrencyContext";
import { BookingStepper } from "../components/BookingStepper";
import Navbar from "../components/Navbar";

const RoomCardItem: React.FC<{
  offer: any;
  idx: number;
  details: any;
  currency: string;
  checkInDate: string;
  checkOutDate: string;
  guestInfo: string;
  id: string;
  navigate: any;
}> = ({ offer, idx, details, currency, checkInDate, checkOutDate, guestInfo, id, navigate }) => {
  const rate = offer.rates?.[0] || offer;
  const offerId = rate.offerId || offer.offerId || rate.rateId || offer.rateId || idx;
  const roomName = offer.name || rate.name || "Standard Room";
  const mappedRoomId = offer.mappedRoomId || rate.mappedRoomId;
  const maxOccupancy = offer.maxOccupancy || rate.maxOccupancy || 2;

  const matchedRoom = details?.rooms?.find((r: any) =>
    mappedRoomId ? r.id === mappedRoomId : r.roomName === roomName
  );

  const totalAmount = typeof rate.retailRate === 'number' 
    ? rate.retailRate 
    : rate.retailRate?.total?.[0]?.amount || rate.price || rate.retailRate;
  
  const initialAmount = rate.retailRate?.initialPrice || rate.sellerRate || null;
  const hasDiscount = initialAmount && totalAmount && initialAmount > totalAmount;
  const topPromo = rate.retailRate?.promotions?.[0] || rate.promotions?.[0];
  const taxesAmount = rate.retailRate?.taxesAndFees?.[0]?.amount || rate.taxes || 0;

  // Photos
  const photos = matchedRoom?.photos || [];
  const [photoIndex, setPhotoIndex] = useState(0);
  const currentPhoto = photos[photoIndex]?.url || matchedRoom?.main_photo || details?.main_photo || details?.images?.[0]?.url || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80';

  // Room facilities: prefer room facilities -> hotel amenities -> rate perks -> room defaults
  const rawFacilities =
    (matchedRoom?.facilities && matchedRoom.facilities.length > 0)
      ? matchedRoom.facilities.map((f: any) => typeof f === 'string' ? f : f.name || f)
      : (details?.amenities && details.amenities.length > 0)
        ? details.amenities.map((a: any) => typeof a === 'string' ? a : a.name || a)
        : (rate?.perks && rate.perks.length > 0)
          ? rate.perks.map((p: any) => typeof p === 'string' ? p : p.name || p)
          : ['Heater', 'Mineral Water', 'Laundry Service', 'Air Conditioning', 'Housekeeping', 'Ironing Board'];

  const roomFacilities: string[] = Array.from(new Set(rawFacilities)).slice(0, 6);

  const currencySymbol = currency === "INR" ? "₹" : currency === "USD" ? "$" : currency + " ";
  const displayPrice = totalAmount != null ? Math.round(totalAmount).toLocaleString("en-IN") : "";
  const displayInitialPrice = initialAmount ? Math.round(initialAmount).toLocaleString("en-IN") : "";
  const displayTaxes = taxesAmount > 0 ? Math.round(taxesAmount).toLocaleString("en-IN") : "";

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0">
      
      {/* ── Left Column: Media & Specifications ── */}
      <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-gray-200 p-5 bg-gray-50/30 flex flex-col justify-between">
        <div>
          {/* Photo Carousel Container */}
          <div className="relative w-full h-52 rounded-xl overflow-hidden bg-gray-100 group/img mb-4">
            <img
              src={currentPhoto}
              alt={roomName}
              className="w-full h-full object-cover transition-all duration-300"
            />
            {photos.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setPhotoIndex((prev) => (prev > 0 ? prev - 1 : photos.length - 1)); }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setPhotoIndex((prev) => (prev < photos.length - 1 ? prev + 1 : 0)); }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity"
                >
                  ›
                </button>
              </>
            )}

            {/* Photo count badge */}
            <div className="absolute bottom-2.5 left-2.5 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-blue-600 shadow-sm">
              {photos.length > 0 ? `${photos.length} PHOTOS →` : '1 PHOTO →'}
            </div>
          </div>

          {/* Room Title & Max Occupancy */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-base font-extrabold text-gray-900 uppercase tracking-tight line-clamp-2">
              {roomName}
            </h3>
            {maxOccupancy && (
              <span className="text-xs font-semibold text-gray-500 shrink-0 mt-0.5">
                Max {maxOccupancy} Guests
              </span>
            )}
          </div>

          {/* Specifications list (Size, View, Beds, Bathroom) */}
          <div className="space-y-1.5 text-xs text-gray-600 my-3 font-medium">
            {matchedRoom?.roomSizeSquare && (
              <div className="flex items-center gap-2">
                <span className="text-gray-400">📐</span>
                <span>{matchedRoom.roomSizeSquare} sq.ft ({matchedRoom.roomSizeSquareMt || Math.round(matchedRoom.roomSizeSquare * 0.0929)} sq.mt)</span>
              </div>
            )}
            {matchedRoom?.bedTypes?.[0] && (
              <div className="flex items-center gap-2">
                <span className="text-gray-400">🛏️</span>
                <span>{matchedRoom.bedTypes[0].quantity || 1}x {matchedRoom.bedTypes[0].bedType}</span>
              </div>
            )}
            {matchedRoom?.view && (
              <div className="flex items-center gap-2">
                <span className="text-gray-400">🪟</span>
                <span>{matchedRoom.view}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <span className="text-gray-400">🚿</span>
              <span>{matchedRoom?.bathrooms || 1} Bathroom{(matchedRoom?.bathrooms || 1) > 1 ? 's' : ''}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Right Column: Inclusions, Cancellation & Pricing ── */}
      <div className="lg:col-span-7 p-5 sm:p-6 flex flex-col justify-between">
        <div>
          {/* Rate Title */}
          <h4 className="text-lg font-extrabold text-gray-900 mb-3 leading-snug">
            {roomName} {rate.cancellationPolicies?.refundableTag === "RFN" ? "| Free Cancellation" : ""} {rate.boardName ? `| ${rate.boardName}` : ""}
          </h4>

          {/* Inclusions list with icons */}
          <div className="space-y-2 text-xs font-semibold text-gray-700 mb-4">
            {topPromo && (
              <div className="flex items-center gap-2 text-gray-600">
                <span>🏷️</span>
                <span>{topPromo.title || `${topPromo.discount}% off`}</span>
              </div>
            )}

            {rate.boardName && (
              <div className="flex items-center gap-2 text-gray-700">
                <span>☕</span>
                <span>{rate.boardName}</span>
              </div>
            )}

            {matchedRoom?.bedTypes?.[0] && (
              <div className="flex items-center gap-2 text-gray-600">
                <span className="text-gray-400 font-bold">•</span>
                <span>{matchedRoom.bedTypes[0].bedType}</span>
              </div>
            )}

            {/* 2-Column Bulleted Room Amenities directly under bed spec */}
            {roomFacilities.length > 0 && (
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 my-3 pt-2 text-xs text-gray-600 font-medium max-w-md">
                {roomFacilities.slice(0, 6).map((fac: string, i: number) => (
                  <div key={i} className="flex items-center gap-1.5 truncate">
                    <span className="text-gray-400 font-bold">•</span>
                    <span className="truncate">{fac}</span>
                  </div>
                ))}
              </div>
            )}

            {rate.cancellationPolicies?.refundableTag === "RFN" && (
              <div className="flex items-center gap-1.5 text-emerald-600 font-bold mt-3">
                <span>✓</span>
                <span>Free Cancellation till 24 hrs before check in</span>
              </div>
            )}
          </div>
        </div>

        {/* Far Right Pricing & Action Box */}
        <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-end sm:items-center justify-between gap-4">
          <div className="text-right sm:text-right w-full sm:w-auto">
            {hasDiscount && (
              <div className="text-xs text-gray-400 line-through font-semibold mb-0.5">
                {currencySymbol} {displayInitialPrice}
              </div>
            )}

            <div className="text-3xl font-black text-gray-900 tracking-tight">
              {currencySymbol} {displayPrice}
            </div>

            {taxesAmount > 0 && (
              <div className="text-[11px] text-gray-500 font-medium mt-1">
                +{currencySymbol} {displayTaxes} Taxes & Fees Per Room Per Night
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() =>
              navigate(`/checkout/${offerId}`, {
                state: {
                  price: totalAmount,
                  currency: currency,
                  roomName: roomName,
                  hotelName: details.name,
                  hotelAddress: `${details.address}, ${details.city}, ${details.country}`,
                  taxes: taxesAmount,
                  hotelId: id,
                  checkin: checkInDate,
                  checkout: checkOutDate,
                  adults: guestInfo,
                  boardName: rate.boardName || 'Room Only',
                }
              })
            }
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-orange-200 transition-all hover:scale-105 active:scale-95 text-center shrink-0"
          >
            SELECT ROOM
          </button>
        </div>
      </div>
    </div>
  );
};

export const HotelDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { currency } = useCurrency();
  const [details, setDetails] = useState<any>(null);
  const [rates, setRates] = useState<any>(null);
  const [reviews, setReviews] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedRate, setSelectedRate] = useState<any>(null);
  const [showAllAmenities, setShowAllAmenities] = useState(false);
  const [weather, setWeather] = useState<any[]>([]);
  const [ratesLoading, setRatesLoading] = useState(true);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const stateParams = (location.state as any) || {};
  
  const rawChkIn = queryParams.get('checkin') || stateParams.checkin;
  const rawChkOut = queryParams.get('checkout') || stateParams.checkout;
  const guestInfo = queryParams.get('adults') || (stateParams.adults ? stateParams.adults.toString() : "2");

  // Format helper for future dates
  const todayStr = new Date().toISOString().split("T")[0];
  const tomorrowStr = new Date(Date.now() + 86400000).toISOString().split("T")[0];
  const dayAfterTomorrowStr = new Date(Date.now() + 86400000 * 2).toISOString().split("T")[0];
  const defaultFutureCheckin = new Date(Date.now() + 86400000 * 7).toISOString().split("T")[0];
  const defaultFutureCheckout = new Date(Date.now() + 86400000 * 10).toISOString().split("T")[0];

  const sanitizeDate = (raw?: string | null, fallbackDefault?: string) => {
    if (!raw || !raw.trim()) return fallbackDefault || defaultFutureCheckin;
    const formatted = raw.trim().replace(/\s+/g, '-');
    // If date is today or past date, auto-bump to valid future date (tomorrow or +7d)
    if (formatted <= todayStr) {
      return fallbackDefault || tomorrowStr;
    }
    return formatted;
  };

  const initialChkIn = sanitizeDate(rawChkIn, tomorrowStr);
  const initialChkOut = sanitizeDate(rawChkOut, dayAfterTomorrowStr);

  const [checkInDate, setCheckInDate] = useState(initialChkIn);
  const [checkOutDate, setCheckOutDate] = useState(initialChkOut);

  const fetchRatesForDates = async (inDate: string, outDate: string) => {
    setRatesLoading(true);
    try {
      const ratesData = await HotelApiService.getRates(id!, {
        chkIn: inDate,
        chkOut: outDate,
        guestInfo: guestInfo,
        currency: currency,
      });
      setRates(ratesData);
    } catch (e) {
      console.error("Rates fetch failed", e);
      setRates(null);
    } finally {
      setRatesLoading(false);
    }
  };

  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        setLoading(true);
        const [detailsData, ratesData, reviewsData] = await Promise.all([
          HotelApiService.getDetails(id!).catch((err) => {
            console.error("Details fetch failed", err);
            return null;
          }),
          HotelApiService.getRates(id!, {
            chkIn: checkInDate,
            chkOut: checkOutDate,
            guestInfo: guestInfo,
            currency: currency,
          }).catch((err) => {
            console.error("Rates fetch failed", err);
            return null;
          }),
          HotelApiService.getHotelReviews(id!).catch((err) => {
            console.error("Reviews fetch failed", err);
            return null;
          }),
        ]);

        const detailsObj = detailsData?.data || detailsData || {};
        setDetails(detailsObj);
        console.log('[HotelDetails] Rates fetched:', ratesData);
        setRates(ratesData);
        setRatesLoading(false);
        setReviews(reviewsData || null);

        if (detailsObj.latitude && detailsObj.longitude) {
          HotelApiService.getWeather(
            detailsObj.latitude,
            detailsObj.longitude,
            checkInDate,
            checkOutDate,
          )
            .then((wData) => setWeather(wData?.weatherData || []))
            .catch((e) => console.error("Weather fetch failed", e));
        }
      } catch (err: any) {
        setError(err.message || "Failed to load hotel details");
      } finally {
        setLoading(false);
      }
    };
    fetchHotelData();
  }, [id, currency]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <Navbar />
        <div className="flex items-center justify-center h-[calc(100vh-80px)]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  if (error || !details) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <Navbar />
        <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] p-4">
          <div className="bg-red-50 text-red-700 p-6 rounded-xl max-w-lg text-center">
            <h2 className="text-2xl font-bold mb-2">Error Loading Hotel</h2>
            <p>{error}</p>
            <Link
              to="/hotels"
              className="mt-4 inline-block text-blue-600 font-medium"
            >
              ← Back to Search
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const images = details.hotelImages || [];
  const amenities = details.hotelFacilities || [];
  const displayedAmenities = showAllAmenities
    ? amenities
    : amenities.slice(0, 10);

  return (
    <div className="min-h-screen bg-gray-50 pb-12 pt-20">
      <Navbar />
      <div className="bg-white border-b border-gray-200">
        <BookingStepper currentStep={1} />
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 pt-6 pb-4">
          <Link
            to="/hotels"
            className="text-gray-600 hover:text-black mb-4 inline-block text-sm font-medium transition-colors"
          >
            ← Back to Search
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-gray-900">
            {details.name}
          </h1>
          <p className="text-lg flex items-center gap-2 text-gray-600">
            <span className="text-yellow-400 text-xl">
              {"★".repeat(details.starRating || 5)}
            </span>
            <span>
              {details.address}, {details.city}, {details.country}
            </span>
          </p>
        </div>

        {/* Hero Image Gallery */}
        <div className="max-w-7xl mx-auto px-4 mb-12">
          {images.length >= 5 ? (
            <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <div className="col-span-2 row-span-2 relative group overflow-hidden">
                <img
                  src={images[0]?.urlHd || images[0]?.url}
                  alt="Main"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                />
              </div>
              <div className="col-span-1 row-span-1 relative group overflow-hidden">
                <img
                  src={images[1]?.urlHd || images[1]?.url}
                  alt="Hotel"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                />
              </div>
              <div className="col-span-1 row-span-1 relative group overflow-hidden">
                <img
                  src={images[2]?.urlHd || images[2]?.url}
                  alt="Hotel"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                />
              </div>
              <div className="col-span-1 row-span-1 relative group overflow-hidden">
                <img
                  src={images[3]?.urlHd || images[3]?.url}
                  alt="Hotel"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                />
              </div>
              <div className="col-span-1 row-span-1 relative group overflow-hidden">
                <img
                  src={images[4]?.urlHd || images[4]?.url}
                  alt="Hotel"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                />
              </div>
            </div>
          ) : (
            <div className="w-full h-[400px] rounded-2xl overflow-hidden relative group">
              <img
                src={details.main_photo || details.thumbnail}
                alt={details.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                About this property
              </h2>
              <div
                className="text-gray-600 leading-relaxed prose max-w-none"
                dangerouslySetInnerHTML={{
                  __html:
                    details.hotelDescription ||
                    "Experience unparalleled luxury and comfort.",
                }}
              />
            </section>

            {amenities.length > 0 && (
              <section className="border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  What this place offers
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {displayedAmenities.map((amenity: string, idx: number) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <svg
                        className="w-6 h-6 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
                {amenities.length > 10 && (
                  <button
                    onClick={() => setShowAllAmenities(!showAllAmenities)}
                    className="mt-6 px-6 py-3 border-2 border-gray-900 text-gray-900 bg-white hover:bg-gray-900 hover:text-white rounded-xl font-bold text-sm transition-all shadow-sm active:scale-95"
                  >
                    {showAllAmenities
                      ? "Show less"
                      : `Show all ${amenities.length} amenities`}
                  </button>
                )}
              </section>
            )}

            {(details.hotelImportantInformation ||
              details.checkinCheckoutTimes) && (
              <section className="border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Things to know
                </h2>
                <div className="bg-gray-50 rounded-xl p-6">
                  {details.checkinCheckoutTimes && (
                    <div className="mb-4">
                      <p className="font-semibold text-gray-900">
                        Check-in: {details.checkinCheckoutTimes.checkin}
                      </p>
                      <p className="font-semibold text-gray-900">
                        Check-out: {details.checkinCheckoutTimes.checkout}
                      </p>
                    </div>
                  )}
                  <div
                    className="text-sm text-gray-600 prose"
                    dangerouslySetInnerHTML={{
                      __html: details.hotelImportantInformation || "",
                    }}
                  />
                </div>
              </section>
            )}

            {weather.length > 0 && (
              <section className="border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Weather Forecast for Your Stay
                </h2>
                <div className="flex overflow-x-auto gap-4 pb-4">
                  {weather.map((w: any, idx: number) => {
                    const data = w.dailyWeather || w;
                    if (!data.date) return null;
                    return (
                      <div
                        key={idx}
                        className="min-w-[140px] bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm"
                      >
                        <p className="text-sm font-semibold text-gray-600">
                          {new Date(data.date).toLocaleDateString("en-US", {
                            weekday: "short",
                            month: "short",
                            day: "numeric",
                          })}
                        </p>
                        <div className="my-2 text-3xl">
                          {data.temperature?.max > 25
                            ? "☀️"
                            : data.precipitation?.total > 1
                              ? "🌧️"
                              : "⛅"}
                        </div>
                        <p className="text-lg font-bold text-gray-900">
                          {Math.round(data.temperature?.max)}°C
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Precip: {data.precipitation?.total || 0}mm
                        </p>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            <section className="border-t border-gray-200 pt-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Available Rooms
                  </h2>
                  <p className="text-sm text-gray-500 mt-0.5">
                    Showing prices for {checkInDate} to {checkOutDate} ({guestInfo} Guests)
                  </p>
                </div>

                {/* Inline Date Selector */}
                <div className="bg-gray-100 p-1.5 rounded-xl flex items-center gap-2 border border-gray-200">
                  <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-700">
                    <span className="text-gray-400">In:</span>
                    <input
                      type="date"
                      value={checkInDate}
                      min={tomorrowStr}
                      onChange={(e) => {
                        const newIn = e.target.value;
                        setCheckInDate(newIn);
                        if (newIn >= checkOutDate) {
                          const nextDay = new Date(new Date(newIn).getTime() + 86400000).toISOString().split('T')[0];
                          setCheckOutDate(nextDay);
                          fetchRatesForDates(newIn, nextDay);
                        } else {
                          fetchRatesForDates(newIn, checkOutDate);
                        }
                      }}
                      className="bg-transparent outline-none cursor-pointer"
                    />
                  </div>
                  <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-700">
                    <span className="text-gray-400">Out:</span>
                    <input
                      type="date"
                      value={checkOutDate}
                      min={checkInDate}
                      onChange={(e) => {
                        const newOut = e.target.value;
                        setCheckOutDate(newOut);
                        fetchRatesForDates(checkInDate, newOut);
                      }}
                      className="bg-transparent outline-none cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {ratesLoading ? (
                  <div className="space-y-4">
                    {[1,2].map(i => (
                      <div key={i} className="bg-white rounded-2xl border border-gray-200 flex flex-col md:flex-row overflow-hidden animate-pulse">
                        <div className="w-full md:w-72 h-48 bg-gray-200 shrink-0" />
                        <div className="flex-1 p-6 space-y-3">
                          <div className="h-5 bg-gray-200 rounded w-1/2" />
                          <div className="h-4 bg-gray-100 rounded w-1/3" />
                          <div className="h-4 bg-gray-100 rounded w-2/3" />
                        </div>
                        <div className="w-full md:w-64 bg-gray-50 p-6 space-y-4">
                          <div className="h-8 bg-gray-200 rounded" />
                          <div className="h-10 bg-gray-200 rounded-xl" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (() => {
                  // Normalized format: { hotelId, roomTypes: [...] }
                  let roomTypes = rates?.roomTypes 
                    || rates?.data?.roomTypes 
                    || rates?.rates?.[0]?.roomTypes 
                    || rates?.data?.rates?.[0]?.roomTypes 
                    || rates?.[0]?.roomTypes;

                  // If API returns no rooms, show no availability message + quick suggestions
                  if (!roomTypes || roomTypes.length === 0) {
                    return (
                      <div className="p-8 text-center bg-gray-50 border border-dashed border-gray-300 rounded-2xl">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">No Rooms Available for {checkInDate}</h3>
                        <p className="text-gray-500 max-w-md mx-auto mb-6">Same-day or past check-in dates may not have real-time API inventory. Try selecting future dates below:</p>
                        
                        {/* Quick date suggestion buttons */}
                        <div className="flex flex-wrap justify-center gap-3">
                          <button
                            onClick={() => {
                              const nextWeekIn = defaultFutureCheckin;
                              const nextWeekOut = defaultFutureCheckout;
                              setCheckInDate(nextWeekIn);
                              setCheckOutDate(nextWeekOut);
                              fetchRatesForDates(nextWeekIn, nextWeekOut);
                            }}
                            className="px-5 py-2.5 bg-blue-600 text-white text-sm rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-sm"
                          >
                            Check Next Week ({defaultFutureCheckin})
                          </button>
                          <button
                            onClick={() => {
                              setCheckInDate(tomorrowStr);
                              setCheckOutDate(dayAfterTomorrowStr);
                              fetchRatesForDates(tomorrowStr, dayAfterTomorrowStr);
                            }}
                            className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 text-sm rounded-xl font-semibold hover:bg-gray-50 transition-all"
                          >
                            Check Tomorrow ({tomorrowStr})
                          </button>
                        </div>
                      </div>
                    );
                  }

                  return roomTypes.map((offer: any, idx: number) => (
                    <RoomCardItem
                      key={idx}
                      offer={offer}
                      idx={idx}
                      details={details}
                      currency={currency}
                      checkInDate={checkInDate}
                      checkOutDate={checkOutDate}
                      guestInfo={guestInfo}
                      id={id!}
                      navigate={navigate}
                    />
                  ));
                })()}
              </div>
            </section>

            {/* AI Sentiment Reviews Section */}
            {reviews?.sentimentAnalysis && (
              <section className="border-t border-gray-200 pt-8 mt-8">
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    AI Review Analysis
                  </h2>
                  <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    AI Powered
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                    <h3 className="font-bold text-green-800 text-lg mb-4 flex items-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                        />
                      </svg>
                      Top Pros
                    </h3>
                    <ul className="space-y-2">
                      {reviews.sentimentAnalysis.pros
                        ?.slice(0, 5)
                        .map((pro: string, i: number) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-green-700 text-sm"
                          >
                            <span className="text-green-500 mt-1">•</span> {pro}
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                    <h3 className="font-bold text-red-800 text-lg mb-4 flex items-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
                        />
                      </svg>
                      Common Cons
                    </h3>
                    <ul className="space-y-2">
                      {reviews.sentimentAnalysis.cons
                        ?.slice(0, 5)
                        .map((con: string, i: number) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-red-700 text-sm"
                          >
                            <span className="text-red-500 mt-1">•</span> {con}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="font-bold text-gray-900 text-lg">
                    Category Ratings
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {reviews.sentimentAnalysis.categories?.map(
                      (cat: any, i: number) => (
                        <div
                          key={i}
                          className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-bold text-gray-800">
                              {cat.name}
                            </span>
                            <span
                              className={`font-black ${cat.rating >= 8 ? "text-green-600" : cat.rating >= 6 ? "text-yellow-600" : "text-red-600"}`}
                            >
                              {cat.rating}/10
                            </span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-2 mb-3">
                            <div
                              className={`h-2 rounded-full ${cat.rating >= 8 ? "bg-green-500" : cat.rating >= 6 ? "bg-yellow-500" : "bg-red-500"}`}
                              style={{ width: `${(cat.rating / 10) * 100}%` }}
                            ></div>
                          </div>
                          <p className="text-xs text-gray-500 leading-relaxed">
                            {cat.description}
                          </p>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </section>
            )}

            {/* Individual Guest Reviews Section */}
            {reviews?.data && reviews.data.length > 0 && (
              <section className="border-t border-gray-200 pt-8 mt-8">
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Guest Reviews
                  </h2>
                  <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {reviews.data.length} Reviews
                  </span>
                </div>

                <div className="space-y-6">
                  {reviews.data.map((review: any, i: number) => (
                    <div
                      key={i}
                      className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg">
                            {review.headline || "Review"}
                          </h4>
                          <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                            <span className="font-medium text-gray-700">
                              {review.name}
                            </span>
                            •
                            <span className="uppercase text-xs tracking-wider">
                              {review.type}
                            </span>
                            •
                            {review.date
                              ? new Date(review.date).toLocaleDateString()
                              : ""}
                          </p>
                        </div>
                        <div className="flex flex-col items-end">
                          <div
                            className={`text-xl font-black ${review.averageScore >= 8 ? "text-green-600" : review.averageScore >= 6 ? "text-yellow-600" : "text-red-600"}`}
                          >
                            {review.averageScore}/10
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 mt-4">
                        {review.pros && (
                          <div className="flex items-start gap-2 bg-green-50/50 p-3 rounded-lg">
                            <span className="text-green-600 font-bold shrink-0">
                              Pros:
                            </span>
                            <span className="text-gray-700 text-sm">
                              {review.pros}
                            </span>
                          </div>
                        )}
                        {review.cons && (
                          <div className="flex items-start gap-2 bg-red-50/50 p-3 rounded-lg">
                            <span className="text-red-600 font-bold shrink-0">
                              Cons:
                            </span>
                            <span className="text-gray-700 text-sm">
                              {review.cons}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column - Checkout Sticky */}
          <div>
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Ready to Book?
                </h3>
                <p className="text-gray-500">
                  Click the <strong>Book Now</strong> button on any available
                  room to proceed to secure checkout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

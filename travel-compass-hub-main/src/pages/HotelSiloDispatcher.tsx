import React from 'react';
import { useParams } from 'react-router-dom';
import { HOTEL_CITIES, HOTEL_STATES } from '../data/hotelSiloData';
import { HotelStatePage } from './HotelStatePage';
import { HotelCityPage } from './HotelCityPage';
import NotFound from './NotFound';

export const HotelSiloDispatcher: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const normalized = (slug || '').toLowerCase();

  if (HOTEL_STATES[normalized]) {
    return <HotelStatePage stateData={HOTEL_STATES[normalized]} />;
  }

  if (HOTEL_CITIES[normalized]) {
    return <HotelCityPage cityData={HOTEL_CITIES[normalized]} />;
  }

  return <NotFound />;
};

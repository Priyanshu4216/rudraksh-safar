/**
 * Private DTO (Raw LiteAPI Response Interfaces)
 */
export interface LiteApiHotelRaw {
  id?: string;
  hotelId?: string;
  name: string;
  address: string;
  stars?: number;
  starRating?: number;
  latitude: number;
  longitude: number;
  minPrice?: number;
  currency?: string;
  thumbnailUrl?: string;
}

/**
 * Public DTO (Unified format returned to our frontend)
 */
export interface PublicHotelDto {
  id: string;
  provider: string; // e.g. "liteapi", "hotelbeds"
  name: string;
  address: string;
  rating: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  pricing: {
    amount: number | null;
    currency: string | null;
  };
  image: string | null;
}

/**
 * Mapper layer to prevent Vendor Lock-In.
 */
export class HotelMapper {
  static toPublicDto(raw: LiteApiHotelRaw): PublicHotelDto {
    return {
      id: raw.id || raw.hotelId || 'unknown',
      provider: 'liteapi',
      name: raw.name,
      address: raw.address,
      rating: raw.stars || raw.starRating || 0,
      coordinates: {
        lat: raw.latitude,
        lng: raw.longitude
      },
      pricing: {
        amount: raw.minPrice ?? null,
        currency: raw.currency ?? null
      },
      image: raw.thumbnailUrl ?? null
    };
  }

  static toPublicDtoList(rawList: LiteApiHotelRaw[]): PublicHotelDto[] {
    return rawList.map(raw => this.toPublicDto(raw));
  }
}

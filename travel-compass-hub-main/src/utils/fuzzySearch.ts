export const TOP_GLOBAL_CITIES = [
  'Dubai', 'Abu Dhabi',
  'Bangkok', 'Phuket', 'Pattaya', 'Chiang Mai',
  'Bali', 'Jakarta',
  'Singapore',
  'Kuala Lumpur',
  'Tokyo', 'Osaka', 'Kyoto',
  'Paris', 'Nice', 'Lyon',
  'Rome', 'Milan', 'Venice', 'Florence',
  'Barcelona', 'Madrid', 'Seville',
  'London', 'Edinburgh', 'Manchester',
  'New York', 'Los Angeles', 'Las Vegas', 'Miami', 'Chicago',
  'Sydney', 'Melbourne', 'Brisbane',
  'Toronto', 'Vancouver', 'Montreal',
  'Mumbai', 'Delhi', 'Bangalore', 'Goa', 'Jaipur', 'Hyderabad', 'Chennai', 'Kolkata',
  'Kathmandu', 'Colombo', 'Male', 'Maldives',
  'Istanbul', 'Antalya',
  'Amsterdam', 'Berlin', 'Munich', 'Vienna', 'Zurich', 'Geneva',
  'Prague', 'Budapest', 'Warsaw', 'Krakow',
  'Cairo', 'Marrakech', 'Cape Town',
  'Rio de Janeiro', 'Buenos Aires', 'Lima', 'Cancun', 'Mexico City'
];

/**
 * Calculates the Levenshtein distance between two strings
 */
export function levenshteinDistance(a: string, b: string): number {
  const matrix = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          Math.min(
            matrix[i][j - 1] + 1, // insertion
            matrix[i - 1][j] + 1 // deletion
          )
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

/**
 * Attempts to correct a typo in a city name by finding the closest match
 * from a known list of top destinations. Returns the corrected name if within
 * an acceptable distance threshold, otherwise returns the original query.
 */
export function fuzzyMatchCity(query: string, maxDistance: number = 2): string {
  if (!query || query.length < 3) return query; // Don't try to fuzzy match very short strings

  const lowerQuery = query.toLowerCase().trim();
  
  // Direct match
  if (TOP_GLOBAL_CITIES.some(c => c.toLowerCase() === lowerQuery)) {
    return query;
  }

  let bestMatch = query;
  let lowestDistance = Infinity;

  for (const city of TOP_GLOBAL_CITIES) {
    const lowerCity = city.toLowerCase();
    
    // Partial substring match (e.g. 'mumb' in 'mumbai') is heavily favoured
    if (lowerCity.includes(lowerQuery) || lowerQuery.includes(lowerCity)) {
       return city; 
    }
    
    const distance = levenshteinDistance(lowerQuery, lowerCity);
    
    // Adjust max distance based on word length. 
    // e.g. "Paris" allows 1 typo, "Los Angeles" allows 2 or 3
    const threshold = Math.max(1, Math.min(maxDistance, Math.floor(lowerCity.length / 3)));
    
    if (distance <= threshold && distance < lowestDistance) {
      lowestDistance = distance;
      bestMatch = city;
    }
  }

  return lowestDistance !== Infinity ? bestMatch : query;
}

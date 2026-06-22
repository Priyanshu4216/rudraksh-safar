export interface DestinationTheme {
  id: string;
  name: string;
  primaryColor: string;
  accentColor: string;
  highlightColor: string;
  lightThemeMood: string;
  darkThemeMood: string;
}

export const destinationThemes: Record<string, DestinationTheme> = {
  phuket: {
    id: "phuket",
    name: "Phuket",
    primaryColor: "text-[#0EA5E9]", // Ocean Blue
    accentColor: "text-[#14B8A6]",  // Tropical Teal
    highlightColor: "text-[#F97316]", // Sunset Orange
    lightThemeMood: "Luxury Beach Resort",
    darkThemeMood: "Luxury Beach Club"
  },
  krabi: {
    id: "krabi",
    name: "Krabi",
    primaryColor: "text-[#10B981]", // Emerald Green
    accentColor: "text-[#06B6D4]",  // Cyan
    highlightColor: "text-[#F59E0B]", // Amber
    lightThemeMood: "Nature & Romance",
    darkThemeMood: "Jungle Retreat"
  },
  pattaya: {
    id: "pattaya",
    name: "Pattaya",
    primaryColor: "text-[#2563EB]", // Electric Blue
    accentColor: "text-[#F97316]",  // Coral Orange
    highlightColor: "text-[#FBBF24]", // Sunset Gold
    lightThemeMood: "Modern Beach Resort",
    darkThemeMood: "Luxury Pattaya After Sunset"
  },
  bangkok: {
    id: "bangkok",
    name: "Bangkok",
    primaryColor: "text-[#EAB308]", // Golden Temple
    accentColor: "text-[#EF4444]",  // Vibrant Red
    highlightColor: "text-[#8B5CF6]", // Royal Purple
    lightThemeMood: "Royal City & Culture",
    darkThemeMood: "Neon Metropolis"
  },
  dubai: {
    id: "dubai",
    name: "Dubai",
    primaryColor: "text-[#D97706]", // Desert Gold
    accentColor: "text-[#0F172A]",  // Onyx Black
    highlightColor: "text-[#FDE047]", // Pure Gold
    lightThemeMood: "Luxury & Gold",
    darkThemeMood: "Future City"
  },
  bali: {
    id: "bali",
    name: "Bali",
    primaryColor: "text-[#16A34A]", // Rice Terrace Green
    accentColor: "text-[#8B5CF6]",  // Spiritual Purple
    highlightColor: "text-[#D97706]", // Wood Brown
    lightThemeMood: "Nature & Wellness",
    darkThemeMood: "Mystical Island"
  }
};

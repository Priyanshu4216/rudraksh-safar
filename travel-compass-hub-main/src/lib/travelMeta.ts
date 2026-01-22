type BestTimeArgs = {
  tag?: string;
  location?: string;
};

const normalize = (s: string) => s.toLowerCase().trim();

export const HOME_CITY = "Bhilai / Raipur";

export const getBestTimeToVisit = ({ tag, location }: BestTimeArgs): string => {
  const t = tag ? normalize(tag) : "";
  const loc = location ? normalize(location) : "";

  // Destination-specific overrides (more accurate than tag-only)
  if (loc.includes("dubai") || loc.includes("uae")) return "November to March";
  if (loc.includes("thailand") || loc.includes("phuket") || loc.includes("pattaya")) return "November to February";
  if (loc.includes("singapore")) return "Year-round (Feb–Apr driest)";
  if (loc.includes("bali") || loc.includes("indonesia")) return "April to October";
  if (loc.includes("maldives")) return "November to April";
  if (loc.includes("nepal")) return "October to November, March to April";
  if (loc.includes("sri lanka") || loc.includes("srilanka")) return "December to March (West), April to Sep (East)";
  if (loc.includes("turkey")) return "April to May, September to October";
  if (loc.includes("malaysia")) return "March to October";
  if (loc.includes("schengen") || loc.includes("europe")) return "April to June, September to October";

  // Tag-based fallback
  if (t.includes("spiritual") || t.includes("pilgrimage")) return "April to June, September to November";
  if (t.includes("beach") || t.includes("romantic")) return "October to March";
  if (t.includes("adventure") || t.includes("expedition") || t.includes("trek")) return "May to October";
  if (t.includes("hill") || t.includes("nature")) return "October to March";
  return "October to March";
};

export const getVisaGuidePath = (location?: string): string | null => {
  if (!location) return null;
  const loc = normalize(location);

  if (loc.includes("thailand") || loc.includes("phuket") || loc.includes("pattaya")) return "/visa/thailand";
  if (loc.includes("dubai") || loc.includes("uae")) return "/visa/dubai";
  if (loc.includes("singapore")) return "/visa/singapore";
  if (loc.includes("bali") || loc.includes("indonesia")) return "/visa/bali";
  if (loc.includes("maldives")) return "/visa/maldives";
  if (loc.includes("turkey")) return "/visa/turkey";
  if (loc.includes("schengen") || loc.includes("europe")) return "/visa/schengen";
  if (loc.includes("sri lanka") || loc.includes("srilanka")) return "/visa/sri-lanka";
  if (loc.includes("nepal")) return "/visa/nepal";
  if (loc.includes("malaysia")) return "/visa/malaysia";

  return null;
};

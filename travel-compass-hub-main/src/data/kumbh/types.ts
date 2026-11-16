export type SnanType = 'major' | 'amrit' | 'final';
export type CrowdEstimate = 'calm' | 'moderate' | 'very-high';

export interface SnanEntry {
  id: string;
  dateISO: string;
  weekday: string;
  occasionEn: string;
  occasionHi: string;
  type: SnanType;
  crowdEstimate: CrowdEstimate;
  crowdNoteEn: string;
  crowdNoteHi: string;
  suitableForSeniors: boolean;
}

export interface SourceItem {
  name: string;
  url: string;
  accessedOn: string;
  details?: string;
}

export type AkharaCategory = 'Shaiva' | 'Vaishnava' | 'Udasin' | 'Nirmal';

export interface AkharaItem {
  id: string;
  nameEn: string;
  nameHi: string;
  category: AkharaCategory;
  order: number;
  descriptionEn: string;
  descriptionHi: string;
}

export interface FAQItem {
  id: string;
  questionEn: string;
  questionHi: string;
  answerEn: string; // Must start with direct 40-60 word answer sentence block
  answerHi: string;
  category?: string;
}

export interface RouteRow {
  mode: string;
  typicalDuration: string;
  notes: string;
  sourceUrl: string;
  verifiedOn: string;
}

export interface RouteOrigin {
  originId: string;
  originEn: string;
  originHi: string;
  distanceKm: string;
  bestOptionEn: string;
  bestOptionHi: string;
  routes: RouteRow[];
}

export interface PackageTier {
  id: string;
  titleEn: string;
  titleHi: string;
  duration: string;
  priceRangeInr: string; // literal string 'TODO_VERIFY' until supplied
  inclusionsEn: string[];
  inclusionsHi: string[];
  exclusionsEn: string[];
  exclusionsHi: string[];
  cancellationPolicyEn: string;
  cancellationPolicyHi: string;
  idealForEn: string;
  idealForHi: string;
}

export interface CityDepartureLogistics {
  mode: string;
  text: string;
  status: 'confirmed' | 'TODO_VERIFY';
}

export interface CityGroupDepartureOption {
  snanId: string;
  dates: string;
  notesEn: string;
  notesHi: string;
}

export interface CitySiblingLink {
  slug: string;
  nameEn: string;
  nameHi: string;
  contextEn: string;
  contextHi: string;
}

export interface CityData {
  slug: string;
  nameEn: string;
  nameHi: string;
  stateParent: string;
  catchmentAreasEn: string[];
  catchmentAreasHi: string[];
  railStations: string[];
  airport: string | null;
  departureLogistics: CityDepartureLogistics[];
  localPickupPoints: string; // literal string 'TODO_VERIFY'
  groupDepartureOptions: CityGroupDepartureOption[];
  localAngleEn: string; // 200+ words of genuinely city-specific copy
  localAngleHi: string;
  faqs: FAQItem[]; // 6+ unique questions per city
  keywordTargets: string[];
  nearbyCityLinks: CitySiblingLink[];
  hasOffice: boolean;
}

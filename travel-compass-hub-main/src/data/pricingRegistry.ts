export interface PackagePrice {
  destination: string;
  slug: string;              
  variant: string;           
  basePrice: number;         
  currency: "INR";
  type: "domestic" | "international";
  lastUpdated: string;       
  source?: string;           
}

export const pricingRegistry: PackagePrice[] = [
  { destination: "Thailand - Pattaya", slug: "thailand-pattaya", variant: "standard", basePrice: 12499, currency: "INR", type: "international", lastUpdated: "2026-07-25" },
  { destination: "Thailand - Phuket", slug: "thailand-phuket", variant: "standard", basePrice: 16999, currency: "INR", type: "international", lastUpdated: "2026-07-25" },
  { destination: "Goa", slug: "goa", variant: "standard", basePrice: 9999, currency: "INR", type: "domestic", lastUpdated: "2026-07-25" },
  { destination: "Manali", slug: "manali", variant: "standard", basePrice: 9999, currency: "INR", type: "domestic", lastUpdated: "2026-07-25" },
  { destination: "Dubai", slug: "dubai", variant: "standard", basePrice: 23499, currency: "INR", type: "international", lastUpdated: "2026-07-25" },
  { destination: "Vietnam", slug: "vietnam", variant: "standard", basePrice: 27999, currency: "INR", type: "international", lastUpdated: "2026-07-25" },
  { destination: "Kashmir", slug: "kashmir", variant: "standard", basePrice: 9999, currency: "INR", type: "domestic", lastUpdated: "2026-07-25" }
];

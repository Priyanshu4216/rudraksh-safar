import { pricingRegistry, PackagePrice } from '../data/pricingRegistry';

export function getPrice(slug: string, variant: string = 'standard'): PackagePrice | undefined {
  return pricingRegistry.find(p => p.slug === slug && p.variant === variant);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);
}

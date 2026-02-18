import PremiumDestinationTemplate from '@/components/templates/PremiumDestinationTemplate';
import { SUMMER_PACKAGES } from '@/data/summer2026';

const SpitiSummerSpecial = () => {
    const data = SUMMER_PACKAGES.find(p => p.id === 'spiti');
    if (!data) return <div>Package Not Found</div>;
    return <PremiumDestinationTemplate data={data} />;
};

export default SpitiSummerSpecial;

import PremiumDestinationTemplate from '@/components/templates/PremiumDestinationTemplate';
import { SUMMER_PACKAGES } from '@/data/summer2026';

const ManaliSummerSpecial = () => {
    const data = SUMMER_PACKAGES.find(p => p.id === 'manali');
    if (!data) return <div>Package Not Found</div>;
    return <PremiumDestinationTemplate data={data} />;
};

export default ManaliSummerSpecial;

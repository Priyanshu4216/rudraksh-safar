import PremiumDestinationTemplate from '@/components/templates/PremiumDestinationTemplate';
import { SUMMER_PACKAGES } from '@/data/summer2026';

const LadakhUltimateExpedition = () => {
    // We know 'ladakh' is at index 0 or we can find it
    const ladakhData = SUMMER_PACKAGES.find(p => p.id === 'ladakh');

    if (!ladakhData) return <div>Package Not Found</div>;

    return <PremiumDestinationTemplate data={ladakhData} />;
};

export default LadakhUltimateExpedition;

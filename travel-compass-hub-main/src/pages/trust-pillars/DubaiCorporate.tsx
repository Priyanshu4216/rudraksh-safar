import TrustPillarTemplate from './TrustPillarTemplate';

const DubaiCorporate = () => {
    return (
        <TrustPillarTemplate
            title="Scale & Success: 50-Person Corporate Dubai Trip"
            subtitle="How we managed a flawless MICE tour for a top Bhilai corporate client."
            heroImage="https://images.unsplash.com/photo-1512453979798-5ea904ac22ee?q=80&w=2670&auto=format&fit=crop"
            theChallenge="The client needed to transport, accommodate, and entertain 50 top-performing employees in Dubai, requiring strict timeline management, dietary preferences, and premium gala dinner arrangements."
            ourSolution={[
                "Secured bulk group flight rates directly from Raipur to Dubai.",
                "Arranged a private Dhow Cruise exclusively for the company.",
                "Ensured 100% pure vegetarian Indian meals globally.",
                "Provided a dedicated Rudraksh Safar Tour Manager 24/7."
            ]}
            theResult="A 100% satisfaction rate. The company reported a 30% increase in employee morale and immediately booked their next year's corporate offsite with us."
            clientName="Leading Tech Firm"
            clientLocation="Bhilai, Chhattisgarh"
        />
    );
};

export default DubaiCorporate;

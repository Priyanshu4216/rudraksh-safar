import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";

interface LocalCoverageProps {
    city: 'Bhilai' | 'Raipur' | 'Durg' | 'General';
    className?: string;
}

const LocalCoverage = ({ city, className }: LocalCoverageProps) => {
    if (city === 'Bhilai') {
        return (
            <div className={cn("py-12 bg-muted/30 border-y border-border", className)}>
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl font-bold mb-6 text-foreground">Local Travel Services Coverage</h2>
                    <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-muted-foreground">
                        <p>
                            Rudraksh Safar proudly serves travelers from Bhilai and nearby areas.
                            Our travel services are frequently used by customers from{" "}
                            <strong>Supela, Smriti Nagar, Power House, Nehru Nagar, Risali, Charoda, Hudco</strong>{" "}
                            and surrounding localities of Bhilai, Durg & Raipur.
                        </p>
                        <p>
                            Whether you are planning a family vacation, honeymoon, group tour, or corporate travel,
                            our team provides complete assistance including flight bookings, hotel reservations,
                            tour packages, and customized itineraries for travelers across the region.
                            Explore our <Link to="/mountain-holiday-packages" className="text-primary hover:underline font-medium">Kashmir tour packages from Bhilai</Link> or plan an international trip with us.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    if (city === 'Raipur') {
        return (
            <div className={cn("py-12 bg-muted/30 border-y border-border", className)}>
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl font-bold mb-6 text-foreground">Local Travel Services Coverage</h2>
                    <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-muted-foreground">
                        <p>
                            Rudraksh Safar provides professional travel services for customers across Raipur and nearby locations.
                            We regularly assist travelers from{" "}
                            <strong>Raipur, Pandri, Telibandha, Shankar Nagar, Devendra Nagar, Tatibandh</strong>{" "}
                            and surrounding areas.
                        </p>
                        <p>
                            Our Raipur customers trust us for domestic tours, international holidays,
                            honeymoon packages, and hassle-free booking support with transparent pricing.
                            Looking for a getaway? Check our <Link to="/international-packages" className="text-primary hover:underline font-medium">international tour packages from Raipur</Link> or contact us for a custom itinerary.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    // General / Homepage version
    return (
        <div className={cn("py-12 bg-muted/30 border-y border-border", className)}>
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Serving Travelers Across Chhattisgarh</h2>
                <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-muted-foreground">
                    <p>
                        Rudraksh Safar is your trusted travel partner in Chhattisgarh. We are proud to serve travelers from{" "}
                        <strong>Bhilai, Raipur, Durg, Bilaspur, Rajnandgaon</strong>{" "}
                        and connecting cities.
                    </p>
                    <p>
                        From visa assistance to complete holiday planning, we bring world-class travel services to your doorstep.
                        Visit our <Link to="/travel-agent-bhilai" className="text-primary hover:underline font-medium">Bhilai office</Link> or connect with our <Link to="/travel-agent-raipur" className="text-primary hover:underline font-medium">Raipur team</Link> for personalized support.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LocalCoverage;

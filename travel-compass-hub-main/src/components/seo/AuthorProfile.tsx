import React from 'react';
import { Award, ShieldCheck, MapPin } from 'lucide-react';

interface AuthorProfileProps {
    name: string;
    role: string;
    experience: string;
    destinations: string;
    imageUrl: string;
    bio: string;
}

const AuthorProfile: React.FC<AuthorProfileProps> = ({ name, role, experience, destinations, imageUrl, bio }) => {
    return (
        <div className="bg-muted/10 border border-border rounded-xl p-6 md:p-8 mt-12">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-600" />
                Verified Travel Expert
            </h3>
            <div className="flex flex-col md:flex-row gap-6 items-start">
                <img 
                    src={imageUrl} 
                    alt={name} 
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 flex-shrink-0"
                />
                <div>
                    <h4 className="text-2xl font-bold mb-1">{name}</h4>
                    <p className="text-primary font-medium mb-3">{role}</p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                        {bio}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <Award className="w-4 h-4 text-gold" />
                            <span><strong>Experience:</strong> {experience}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-blue-500" />
                            <span><strong>Expertise:</strong> {destinations}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthorProfile;

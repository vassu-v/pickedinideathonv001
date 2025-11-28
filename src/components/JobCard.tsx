import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, DollarSign } from "lucide-react";

interface JobCardProps {
  id: string;
  company: string;
  position: string;
  logo: string;
  rating: number;
  reviews: number;
  location: string;
  salary: string;
  description: string;
  requirements: string[];
  verified?: boolean;
}

const JobCard = ({
  company,
  position,
  logo,
  rating,
  reviews,
  location,
  salary,
  description,
  requirements,
  verified = false,
}: JobCardProps) => {
  return (
    <Card className="p-5 hover:shadow-md transition-shadow">
      <div className="flex gap-4">
        <div className="shrink-0">
          <div className="h-16 w-16 rounded bg-card border border-border flex items-center justify-center overflow-hidden">
            <img src={logo} alt={company} className="h-12 w-12 object-contain" />
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-semibold text-base font-heading text-foreground">
                {position}
              </h3>
              <p className="text-sm text-muted-foreground">
                {company}
                {verified && (
                  <span className="ml-2 text-success">✓</span>
                )}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium text-foreground">{rating}</span>
              <span>({reviews} reviews)</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1">
              <DollarSign className="h-4 w-4" />
              <span className="font-medium text-foreground">{salary}</span>
            </div>
          </div>

          <p className="text-sm text-foreground mb-3 line-clamp-2">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-3">
            {requirements.map((req) => (
              <Badge key={req} variant="secondary" className="text-xs">
                {req}
              </Badge>
            ))}
          </div>

          <Button variant="outline" size="sm" className="w-full sm:w-auto">
            Apply Now
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default JobCard;

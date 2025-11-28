import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Bookmark } from "lucide-react";

interface JobCardProps {
  id: string;
  company: string;
  position: string;
  logo: string;
  location: string;
  jobType: string;
  postedDate: string;
  description: string;
  requirements: string[];
}

const JobCard = ({
  company,
  position,
  logo,
  location,
  jobType,
  postedDate,
  description,
  requirements,
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
              <h3 className="font-semibold text-base font-heading text-foreground hover:text-primary cursor-pointer">
                {position}
              </h3>
              <p className="text-sm text-foreground">
                {company}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
            <span>•</span>
            <span>{jobType}</span>
            <span>•</span>
            <span>{postedDate}</span>
          </div>

          <p className="text-sm text-foreground mb-3 line-clamp-2">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {requirements.map((req) => (
              <Badge key={req} variant="secondary" className="text-xs">
                {req}
              </Badge>
            ))}
          </div>

          <div className="flex gap-2">
            <Button size="sm" className="flex-1 sm:flex-initial">
              Apply
            </Button>
            <Button size="sm" variant="outline">
              <Bookmark className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default JobCard;

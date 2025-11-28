import { Card } from "@/components/ui/card";
import { Lightbulb, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";

const PromotedListings = () => {
  const recommendedJobs = [
    {
      title: "Senior Software Engineer",
      company: "TechCorp",
      location: "San Francisco, CA",
    },
    {
      title: "Data Scientist",
      company: "DataMinds Pro",
      location: "Remote",
    },
    {
      title: "Product Designer",
      company: "Creative Studios",
      location: "New York, NY",
    },
    {
      title: "DevOps Engineer",
      company: "CloudSystems Inc",
      location: "Seattle, WA",
    },
  ];

  const savedJobs = [
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
    },
    {
      title: "UX Researcher",
      company: "Design Co",
    },
  ];

  return (
    <aside className="w-80 space-y-4">
      <Card className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-sm font-heading">Recommended for you</h3>
        </div>
        <div className="space-y-3">
          {recommendedJobs.map((job, index) => (
            <Link
              key={index}
              to="/"
              className="block p-3 rounded hover:bg-secondary transition-colors"
            >
              <h4 className="text-sm font-medium text-foreground line-clamp-1 mb-1">
                {job.title}
              </h4>
              <p className="text-xs text-muted-foreground mb-1">{job.company}</p>
              <p className="text-xs text-muted-foreground">{job.location}</p>
            </Link>
          ))}
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <Bookmark className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-sm font-heading">Saved jobs</h3>
        </div>
        <div className="space-y-3">
          {savedJobs.map((job, index) => (
            <Link
              key={index}
              to="/"
              className="block p-3 rounded hover:bg-secondary transition-colors"
            >
              <h4 className="text-sm font-medium text-foreground line-clamp-1 mb-1">
                {job.title}
              </h4>
              <p className="text-xs text-muted-foreground">{job.company}</p>
            </Link>
          ))}
        </div>
      </Card>
    </aside>
  );
};

export default PromotedListings;

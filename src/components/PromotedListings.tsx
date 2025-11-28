import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const PromotedListings = () => {
  const promotedJobs = [
    {
      title: "Senior Software Engineer",
      company: "TechCorp",
      badge: "Hot",
    },
    {
      title: "Data Scientist",
      company: "DataMinds Pro",
      badge: "Featured",
    },
    {
      title: "Product Designer",
      company: "Creative Studios",
      badge: "New",
    },
    {
      title: "DevOps Engineer",
      company: "CloudSystems Inc",
      badge: "Featured",
    },
  ];

  return (
    <aside className="w-80 space-y-4">
      <Card className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-sm font-heading">Featured Jobs</h3>
        </div>
        <div className="space-y-3">
          {promotedJobs.map((job, index) => (
            <Link
              key={index}
              to="/marketplace"
              className="block p-3 rounded hover:bg-secondary transition-colors"
            >
              <div className="flex items-start justify-between gap-2 mb-1">
                <h4 className="text-sm font-medium text-foreground line-clamp-1">
                  {job.title}
                </h4>
                <Badge variant="secondary" className="text-xs shrink-0">
                  {job.badge}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">{job.company}</p>
            </Link>
          ))}
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="font-semibold text-sm mb-3 font-heading">Suggested Categories</h3>
        <div className="flex flex-wrap gap-2">
          {["AI/ML", "Blockchain", "Cloud", "DevOps", "Security"].map((category) => (
            <Badge key={category} variant="outline" className="text-xs cursor-pointer hover:bg-secondary">
              {category}
            </Badge>
          ))}
        </div>
      </Card>

      <Card className="p-4 bg-primary/5 border-primary/20">
        <h3 className="font-semibold text-sm mb-2 font-heading">Post a Job</h3>
        <p className="text-xs text-muted-foreground mb-3">
          Reach thousands of qualified candidates and find the perfect fit for your team.
        </p>
        <Link
          to="#"
          className="text-xs text-primary font-medium hover:underline"
        >
          Get started →
        </Link>
      </Card>
    </aside>
  );
};

export default PromotedListings;

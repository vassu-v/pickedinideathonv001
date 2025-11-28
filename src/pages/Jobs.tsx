import Navbar from "@/components/Navbar";
import FilterSidebar from "@/components/FilterSidebar";
import JobCard from "@/components/JobCard";
import PromotedListings from "@/components/PromotedListings";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";

const Jobs = () => {
  const jobListings = [
    {
      id: "1",
      company: "Google",
      position: "Senior Software Engineer",
      logo: "https://cdn.simpleicons.org/google",
      location: "Mountain View, CA",
      jobType: "Full-time",
      postedDate: "2 days ago",
      description: "Join our team to build the next generation of cloud infrastructure. Work on distributed systems at scale with cutting-edge technology.",
      requirements: ["Go", "Kubernetes", "Distributed Systems", "5+ years exp"],
    },
    {
      id: "2",
      company: "Meta",
      position: "Product Designer",
      logo: "https://cdn.simpleicons.org/meta",
      location: "Menlo Park, CA",
      jobType: "Full-time",
      postedDate: "3 days ago",
      description: "Design innovative social experiences for billions of users. Lead end-to-end product design from concept to launch.",
      requirements: ["Figma", "Product Design", "UX Research", "Portfolio required"],
    },
    {
      id: "3",
      company: "Netflix",
      position: "Data Scientist",
      logo: "https://cdn.simpleicons.org/netflix",
      location: "Los Gatos, CA",
      jobType: "Full-time",
      postedDate: "1 week ago",
      description: "Drive content recommendations and personalization using advanced ML models. Impact how millions discover entertainment.",
      requirements: ["Python", "Machine Learning", "SQL", "Statistics"],
    },
    {
      id: "4",
      company: "Apple",
      position: "iOS Engineer",
      logo: "https://cdn.simpleicons.org/apple",
      location: "Cupertino, CA",
      jobType: "Full-time",
      postedDate: "5 days ago",
      description: "Create groundbreaking experiences for iPhone and iPad. Work on frameworks and features used by millions of developers worldwide.",
      requirements: ["Swift", "UIKit", "SwiftUI", "iOS SDK"],
    },
    {
      id: "5",
      company: "Amazon",
      position: "DevOps Engineer",
      logo: "https://cdn.simpleicons.org/amazon",
      location: "Seattle, WA",
      jobType: "Full-time",
      postedDate: "1 day ago",
      description: "Build and maintain infrastructure for AWS services. Automate deployment pipelines and ensure high availability at scale.",
      requirements: ["AWS", "Docker", "Terraform", "CI/CD"],
    },
    {
      id: "6",
      company: "Microsoft",
      position: "Cloud Solutions Architect",
      logo: "https://cdn.simpleicons.org/microsoft",
      location: "Redmond, WA",
      jobType: "Full-time",
      postedDate: "4 days ago",
      description: "Design enterprise cloud solutions on Azure. Partner with customers to architect scalable, secure, and resilient systems.",
      requirements: ["Azure", "Kubernetes", "Microservices", "Enterprise Architecture"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Search Section */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex gap-3 max-w-3xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Job title or skills"
                className="pl-10"
              />
            </div>
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Location or Remote"
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Left Sidebar - Filters */}
          <FilterSidebar />

          {/* Main Content - Job Listings */}
          <main className="flex-1 space-y-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold font-heading text-foreground">
                  {jobListings.length} jobs
                </h1>
              </div>
              <select className="border border-border rounded px-3 py-2 text-sm bg-card">
                <option>Most relevant</option>
                <option>Most recent</option>
              </select>
            </div>

            {jobListings.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </main>

          {/* Right Sidebar - Recommended & Saved */}
          <PromotedListings />
        </div>
      </div>
    </div>
  );
};

export default Jobs;

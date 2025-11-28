import Navbar from "@/components/Navbar";
import FilterSidebar from "@/components/FilterSidebar";
import JobCard from "@/components/JobCard";
import PromotedListings from "@/components/PromotedListings";

const Marketplace = () => {
  const jobListings = [
    {
      id: "1",
      company: "Google",
      position: "Senior Software Engineer",
      logo: "https://cdn.simpleicons.org/google",
      rating: 4.6,
      reviews: 1250,
      location: "Mountain View, CA",
      salary: "$150k-200k",
      description: "Join our team to build the next generation of cloud infrastructure. Work on distributed systems at scale with cutting-edge technology.",
      requirements: ["Go", "Kubernetes", "Distributed Systems", "5+ years exp"],
      verified: true,
    },
    {
      id: "2",
      company: "Meta",
      position: "Product Designer",
      logo: "https://cdn.simpleicons.org/meta",
      rating: 4.5,
      reviews: 890,
      location: "Menlo Park, CA",
      salary: "$130k-170k",
      description: "Design innovative social experiences for billions of users. Lead end-to-end product design from concept to launch.",
      requirements: ["Figma", "Product Design", "UX Research", "Portfolio required"],
      verified: true,
    },
    {
      id: "3",
      company: "Netflix",
      position: "Data Scientist",
      logo: "https://cdn.simpleicons.org/netflix",
      rating: 4.7,
      reviews: 640,
      location: "Los Gatos, CA",
      salary: "$160k-210k",
      description: "Drive content recommendations and personalization using advanced ML models. Impact how millions discover entertainment.",
      requirements: ["Python", "Machine Learning", "SQL", "Statistics"],
      verified: true,
    },
    {
      id: "4",
      company: "Apple",
      position: "iOS Engineer",
      logo: "https://cdn.simpleicons.org/apple",
      rating: 4.8,
      reviews: 1580,
      location: "Cupertino, CA",
      salary: "$145k-195k",
      description: "Create groundbreaking experiences for iPhone and iPad. Work on frameworks and features used by millions of developers worldwide.",
      requirements: ["Swift", "UIKit", "SwiftUI", "iOS SDK"],
      verified: true,
    },
    {
      id: "5",
      company: "Amazon",
      position: "DevOps Engineer",
      logo: "https://cdn.simpleicons.org/amazon",
      rating: 4.4,
      reviews: 2100,
      location: "Seattle, WA",
      salary: "$135k-175k",
      description: "Build and maintain infrastructure for AWS services. Automate deployment pipelines and ensure high availability at scale.",
      requirements: ["AWS", "Docker", "Terraform", "CI/CD"],
      verified: true,
    },
    {
      id: "6",
      company: "Microsoft",
      position: "Cloud Solutions Architect",
      logo: "https://cdn.simpleicons.org/microsoft",
      rating: 4.6,
      reviews: 1840,
      location: "Redmond, WA",
      salary: "$155k-205k",
      description: "Design enterprise cloud solutions on Azure. Partner with customers to architect scalable, secure, and resilient systems.",
      requirements: ["Azure", "Kubernetes", "Microservices", "Enterprise Architecture"],
      verified: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Left Sidebar - Filters */}
          <FilterSidebar />

          {/* Main Content - Job Listings */}
          <main className="flex-1 space-y-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold font-heading text-foreground">
                  Job Listings
                </h1>
                <p className="text-sm text-muted-foreground">
                  {jobListings.length} jobs available
                </p>
              </div>
              <select className="border border-border rounded px-3 py-2 text-sm bg-card">
                <option>Sort by: Recommended</option>
                <option>Highest Rated</option>
                <option>Most Reviews</option>
                <option>Lowest Salary</option>
                <option>Highest Salary</option>
              </select>
            </div>

            {jobListings.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </main>

          {/* Right Sidebar - Promoted/Suggested */}
          <PromotedListings />
        </div>
      </div>
    </div>
  );
};

export default Marketplace;

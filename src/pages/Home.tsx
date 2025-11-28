import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, TrendingUp, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const recentActivity = [
    {
      type: "application",
      title: "You applied to Senior Frontend Developer",
      company: "TechCorp",
      time: "2 hours ago",
    },
    {
      type: "view",
      title: "Your profile was viewed by Google",
      company: "Google",
      time: "5 hours ago",
    },
    {
      type: "saved",
      title: "You saved Product Manager position",
      company: "Startup Inc",
      time: "1 day ago",
    },
  ];

  const suggestedJobs = [
    {
      title: "Senior React Developer",
      company: "TechCorp",
      location: "Remote",
      salary: "$120k-150k",
    },
    {
      title: "Full Stack Engineer",
      company: "StartupXYZ",
      location: "San Francisco, CA",
      salary: "$130k-160k",
    },
    {
      title: "Frontend Architect",
      company: "BigTech Inc",
      location: "New York, NY",
      salary: "$150k-180k",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4">
            {/* Welcome Card */}
            <Card className="p-6">
              <h1 className="text-2xl font-bold font-heading mb-2">Welcome back, Sarah!</h1>
              <p className="text-muted-foreground mb-4">
                Stay updated with your job search and professional network.
              </p>
              <div className="flex gap-3">
                <Link to="/marketplace">
                  <Button>
                    <Search className="h-4 w-4 mr-2" />
                    Browse Jobs
                  </Button>
                </Link>
                <Link to="/profile">
                  <Button variant="outline">View Profile</Button>
                </Link>
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold font-heading mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex gap-4 pb-4 border-b border-border last:border-0 last:pb-0"
                  >
                    <div className="shrink-0">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {activity.company} • {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">12</div>
                <div className="text-sm text-muted-foreground">Applications</div>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">45</div>
                <div className="text-sm text-muted-foreground">Profile Views</div>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">8</div>
                <div className="text-sm text-muted-foreground">Saved Jobs</div>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Suggested Jobs */}
            <Card className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-sm font-heading">Recommended for You</h3>
              </div>
              <div className="space-y-3">
                {suggestedJobs.map((job, index) => (
                  <Link
                    key={index}
                    to="/marketplace"
                    className="block p-3 rounded hover:bg-secondary transition-colors"
                  >
                    <h4 className="text-sm font-medium text-foreground mb-1">
                      {job.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-1">{job.company}</p>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{job.location}</span>
                      <span className="font-medium text-foreground">{job.salary}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </Card>

            {/* Network Highlights */}
            <Card className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <Users className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-sm font-heading">Your Network</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Connections</span>
                  <span className="font-medium text-foreground">342</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Following</span>
                  <span className="font-medium text-foreground">89</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Followers</span>
                  <span className="font-medium text-foreground">156</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                Grow Your Network
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

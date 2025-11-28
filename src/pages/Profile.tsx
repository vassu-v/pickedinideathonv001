import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Mail, Phone, Globe, Award, Briefcase } from "lucide-react";

const Profile = () => {
  const services = [
    { title: "Full-Stack Web Development", price: "$80/hour" },
    { title: "React & TypeScript Consulting", price: "$100/hour" },
    { title: "API Design & Integration", price: "$90/hour" },
  ];

  const workHistory = [
    {
      role: "Senior Full-Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2020 - Present",
      description: "Leading development of enterprise web applications using React, Node.js, and PostgreSQL.",
    },
    {
      role: "Frontend Developer",
      company: "Digital Agency Co.",
      period: "2018 - 2020",
      description: "Built responsive websites and web applications for various clients using modern frameworks.",
    },
    {
      role: "Junior Developer",
      company: "StartUp Labs",
      period: "2016 - 2018",
      description: "Contributed to multiple projects, focusing on frontend development and UI implementation.",
    },
  ];

  const reviews = [
    {
      author: "John D.",
      rating: 5,
      date: "2 weeks ago",
      text: "Exceptional work! Sarah delivered a complex web application ahead of schedule and exceeded all expectations.",
    },
    {
      author: "Maria S.",
      rating: 5,
      date: "1 month ago",
      text: "Highly professional and skilled developer. Great communication throughout the project.",
    },
    {
      author: "David L.",
      rating: 4,
      date: "2 months ago",
      text: "Very knowledgeable and helpful. Would definitely work with again.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-4">
        {/* Profile Header */}
        <Card className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <Avatar className="h-40 w-40">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="Sarah Kim" />
              <AvatarFallback>SK</AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h1 className="text-3xl font-bold font-heading text-foreground mb-1">
                    Sarah Kim
                    <span className="ml-2 text-success text-2xl">✓</span>
                  </h1>
                  <p className="text-lg text-muted-foreground mb-3">
                    Senior Full-Stack Developer & Technical Consultant
                  </p>
                </div>
                <Button>Contact</Button>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium text-foreground">4.9</span>
                  <span>(127 reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  <span>Top Rated Provider</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker"].map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* About Section */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold font-heading mb-4">About</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Full-stack developer with 8+ years of experience building scalable web applications. 
            Specialized in React, TypeScript, and Node.js. I help businesses transform their ideas 
            into robust, user-friendly applications.
          </p>
          <p className="text-foreground leading-relaxed">
            My approach combines technical expertise with strong communication skills to ensure 
            projects are delivered on time and exceed client expectations. I'm passionate about 
            clean code, best practices, and creating solutions that drive real business value.
          </p>
        </Card>

        {/* Services Offered */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold font-heading mb-4">Services Offered</h2>
          <div className="space-y-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded border border-border hover:border-primary/50 transition-colors"
              >
                <div>
                  <h3 className="font-medium text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">Professional service</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-primary">{service.price}</p>
                  <Button size="sm" variant="outline" className="mt-2">
                    Book Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Work History */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold font-heading mb-4">Work History</h2>
          <div className="space-y-6">
            {workHistory.map((job, index) => (
              <div key={index} className="flex gap-4">
                <div className="shrink-0">
                  <div className="h-12 w-12 rounded bg-secondary flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{job.role}</h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    {job.company} • {job.period}
                  </p>
                  <p className="text-sm text-foreground">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Client Reviews */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold font-heading mb-4">Client Reviews</h2>
          <div className="space-y-4">
            {reviews.map((review, index) => (
              <div key={index} className="pb-4 border-b border-border last:border-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${review.author}`} />
                      <AvatarFallback>{review.author[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-foreground">{review.author}</p>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < review.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">{review.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-foreground pl-13">{review.text}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Contact Information */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold font-heading mb-4">Contact Information</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span className="text-foreground">sarah.kim@email.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span className="text-foreground">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <a href="#" className="text-primary hover:underline">
                sarahkim.dev
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Profile;

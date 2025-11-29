import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { MapPin, Pencil, Plus, Briefcase, GraduationCap } from "lucide-react";
import { ProfileEditor } from "@/components/ProfileEditor";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  
  const [profileData, setProfileData] = useState({
    name: "Shoryavardhaan Gupta",
    headline: "Senior Full-Stack Developer & Technical Consultant",
    location: "Kolkata, India",
    about: "Full-stack developer with 8+ years of experience building scalable web applications. Specialized in React, TypeScript, and Node.js. Passionate about creating robust, user-friendly applications and mentoring junior developers.",
    experience: [
      {
        role: "Senior Full-Stack Developer",
        company: "Tech Solutions Inc.",
        period: "2020 - Present",
        location: "San Francisco, CA",
        description: "Leading development of enterprise web applications using React, Node.js, and PostgreSQL. Managing a team of 5 developers.",
      },
      {
        role: "Frontend Developer",
        company: "Digital Agency Co.",
        period: "2018 - 2020",
        location: "Remote",
        description: "Built responsive websites and web applications for various clients using modern frameworks and best practices.",
      },
      {
        role: "Junior Developer",
        company: "StartUp Labs",
        period: "2016 - 2018",
        location: "New York, NY",
        description: "Contributed to multiple projects, focusing on frontend development and UI implementation.",
      },
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        school: "Stanford University",
        period: "2012 - 2016",
      },
      {
        degree: "Full-Stack Web Development Bootcamp",
        school: "General Assembly",
        period: "2016",
      },
    ],
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Python",
      "GraphQL",
      "MongoDB",
      "CI/CD",
      "Kubernetes",
      "System Design",
    ],
  });

  const handleSaveProfile = (data: any) => {
    setProfileData(data);
    setIsEditing(false);
    toast({
      title: "Profile updated",
      description: "Your changes have been saved successfully.",
    });
  };

  if (isEditing) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold font-heading">Edit Profile</h1>
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
          </div>
          <ProfileEditor
            name={profileData.name}
            headline={profileData.headline}
            location={profileData.location}
            about={profileData.about}
            experience={profileData.experience}
            education={profileData.education}
            skills={profileData.skills}
            onSave={handleSaveProfile}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1 space-y-4">
            {/* Profile Header */}
            <Card className="p-6">
              <div className="flex gap-6">
                <div className="relative">
                  <Avatar className="h-32 w-32">
                    <AvatarImage src="/WhatsApp Image 2025-11-29 at 11.51.07 AM.jpeg" alt={profileData.name} />
                    <AvatarFallback>{profileData.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full"
                    onClick={() => setIsEditing(true)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h1 className="text-2xl font-bold font-heading text-foreground">
                          {profileData.name}
                        </h1>
                        <Button size="icon" variant="ghost" className="h-6 w-6" onClick={() => setIsEditing(true)}>
                          <Pencil className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-base text-foreground">
                          {profileData.headline}
                        </p>
                        <Button size="icon" variant="ghost" className="h-6 w-6" onClick={() => setIsEditing(true)}>
                          <Pencil className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4" />
                    <span>{profileData.location}</span>
                    <Button size="icon" variant="ghost" className="h-6 w-6" onClick={() => setIsEditing(true)}>
                      <Pencil className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* About Section */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold font-heading">About</h2>
                <Button size="icon" variant="ghost" onClick={() => setIsEditing(true)}>
                  <Pencil className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-foreground leading-relaxed">
                {profileData.about}
              </p>
            </Card>

            {/* Experience Section */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold font-heading">Experience</h2>
                <Button size="icon" variant="ghost" onClick={() => setIsEditing(true)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-6">
                {profileData.experience.map((job, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="shrink-0">
                      <div className="h-12 w-12 rounded bg-secondary flex items-center justify-center">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-foreground">{job.role}</h3>
                          <p className="text-sm text-foreground mb-1">{job.company}</p>
                          <p className="text-sm text-muted-foreground mb-1">
                            {job.period} • {job.location}
                          </p>
                          <p className="text-sm text-foreground">{job.description}</p>
                        </div>
                        <Button size="icon" variant="ghost" className="opacity-0 group-hover:opacity-100" onClick={() => setIsEditing(true)}>
                          <Pencil className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Education Section */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold font-heading">Education</h2>
                <Button size="icon" variant="ghost" onClick={() => setIsEditing(true)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-6">
                {profileData.education.map((edu, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="shrink-0">
                      <div className="h-12 w-12 rounded bg-secondary flex items-center justify-center">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                          <p className="text-sm text-foreground mb-1">{edu.school}</p>
                          <p className="text-sm text-muted-foreground">{edu.period}</p>
                        </div>
                        <Button size="icon" variant="ghost" className="opacity-0 group-hover:opacity-100" onClick={() => setIsEditing(true)}>
                          <Pencil className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Skills Section */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold font-heading">Skills</h2>
                <Button size="icon" variant="ghost" onClick={() => setIsEditing(true)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {profileData.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <aside className="w-80 space-y-4">
            {/* Open to Work */}
            <Card className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Label htmlFor="open-to-work" className="font-semibold text-sm">
                  Open to Work
                </Label>
                <Switch id="open-to-work" defaultChecked />
              </div>
              <p className="text-xs text-muted-foreground">
                Show recruiters you're open to new opportunities
              </p>
            </Card>

            {/* Profile Strength */}
            <Card className="p-4">
              <h3 className="font-semibold text-sm mb-3">Profile Strength</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Expert</span>
                  <span className="font-medium text-foreground">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div className="mt-3 space-y-2 text-xs">
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-success mt-1.5" />
                  <span className="text-muted-foreground">Add profile photo</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-success mt-1.5" />
                  <span className="text-muted-foreground">Add work experience</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-border mt-1.5" />
                  <span className="text-muted-foreground">Add 3+ skills</span>
                </div>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Profile;

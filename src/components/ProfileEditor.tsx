import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Briefcase, GraduationCap, Plus, X, Check } from "lucide-react";

interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
}

interface Education {
  degree: string;
  school: string;
  period: string;
}

interface ProfileEditorProps {
  name: string;
  headline: string;
  location: string;
  about: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
  onSave: (data: any) => void;
}

export const ProfileEditor = ({
  name: initialName,
  headline: initialHeadline,
  location: initialLocation,
  about: initialAbout,
  experience: initialExperience,
  education: initialEducation,
  skills: initialSkills,
  onSave,
}: ProfileEditorProps) => {
  const [name, setName] = useState(initialName);
  const [headline, setHeadline] = useState(initialHeadline);
  const [location, setLocation] = useState(initialLocation);
  const [about, setAbout] = useState(initialAbout);
  const [experience, setExperience] = useState<Experience[]>(initialExperience);
  const [education, setEducation] = useState<Education[]>(initialEducation);
  const [skills, setSkills] = useState<string[]>(initialSkills);
  const [newSkill, setNewSkill] = useState("");

  const [editingExpIndex, setEditingExpIndex] = useState<number | null>(null);
  const [editingEduIndex, setEditingEduIndex] = useState<number | null>(null);

  const handleAddExperience = () => {
    setExperience([
      ...experience,
      { role: "", company: "", period: "", location: "", description: "" },
    ]);
    setEditingExpIndex(experience.length);
  };

  const handleUpdateExperience = (index: number, field: keyof Experience, value: string) => {
    const updated = [...experience];
    updated[index] = { ...updated[index], [field]: value };
    setExperience(updated);
  };

  const handleDeleteExperience = (index: number) => {
    setExperience(experience.filter((_, i) => i !== index));
  };

  const handleAddEducation = () => {
    setEducation([...education, { degree: "", school: "", period: "" }]);
    setEditingEduIndex(education.length);
  };

  const handleUpdateEducation = (index: number, field: keyof Education, value: string) => {
    const updated = [...education];
    updated[index] = { ...updated[index], [field]: value };
    setEducation(updated);
  };

  const handleDeleteEducation = (index: number) => {
    setEducation(education.filter((_, i) => i !== index));
  };

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const handleDeleteSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    onSave({ name, headline, location, about, experience, education, skills });
  };

  return (
    <div className="space-y-4">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="headline">Headline</Label>
            <Input id="headline" value={headline} onChange={(e) => setHeadline(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">About</h3>
        <Textarea
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          rows={4}
          className="w-full"
        />
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Experience</h3>
          <Button size="sm" onClick={handleAddExperience}>
            <Plus className="h-4 w-4 mr-1" /> Add
          </Button>
        </div>
        <div className="space-y-4">
          {experience.map((exp, index) => (
            <div key={index} className="border rounded-lg p-4">
              {editingExpIndex === index ? (
                <div className="space-y-3">
                  <Input
                    placeholder="Role"
                    value={exp.role}
                    onChange={(e) => handleUpdateExperience(index, "role", e.target.value)}
                  />
                  <Input
                    placeholder="Company"
                    value={exp.company}
                    onChange={(e) => handleUpdateExperience(index, "company", e.target.value)}
                  />
                  <Input
                    placeholder="Period (e.g., 2020 - Present)"
                    value={exp.period}
                    onChange={(e) => handleUpdateExperience(index, "period", e.target.value)}
                  />
                  <Input
                    placeholder="Location"
                    value={exp.location}
                    onChange={(e) => handleUpdateExperience(index, "location", e.target.value)}
                  />
                  <Textarea
                    placeholder="Description"
                    value={exp.description}
                    onChange={(e) => handleUpdateExperience(index, "description", e.target.value)}
                    rows={3}
                  />
                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => setEditingExpIndex(null)}>
                      <Check className="h-4 w-4 mr-1" /> Done
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDeleteExperience(index)}
                    >
                      <X className="h-4 w-4 mr-1" /> Delete
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="h-12 w-12 rounded bg-secondary flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{exp.role || "Untitled Role"}</h4>
                    <p className="text-sm text-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">
                      {exp.period} • {exp.location}
                    </p>
                    <p className="text-sm text-foreground mt-1">{exp.description}</p>
                  </div>
                  <Button size="sm" variant="ghost" onClick={() => setEditingExpIndex(index)}>
                    Edit
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Education</h3>
          <Button size="sm" onClick={handleAddEducation}>
            <Plus className="h-4 w-4 mr-1" /> Add
          </Button>
        </div>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="border rounded-lg p-4">
              {editingEduIndex === index ? (
                <div className="space-y-3">
                  <Input
                    placeholder="Degree"
                    value={edu.degree}
                    onChange={(e) => handleUpdateEducation(index, "degree", e.target.value)}
                  />
                  <Input
                    placeholder="School"
                    value={edu.school}
                    onChange={(e) => handleUpdateEducation(index, "school", e.target.value)}
                  />
                  <Input
                    placeholder="Period (e.g., 2012 - 2016)"
                    value={edu.period}
                    onChange={(e) => handleUpdateEducation(index, "period", e.target.value)}
                  />
                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => setEditingEduIndex(null)}>
                      <Check className="h-4 w-4 mr-1" /> Done
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDeleteEducation(index)}
                    >
                      <X className="h-4 w-4 mr-1" /> Delete
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="h-12 w-12 rounded bg-secondary flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{edu.degree || "Untitled Degree"}</h4>
                    <p className="text-sm text-foreground">{edu.school}</p>
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                  </div>
                  <Button size="sm" variant="ghost" onClick={() => setEditingEduIndex(index)}>
                    Edit
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Skills</h3>
        </div>
        <div className="flex gap-2 mb-4">
          <Input
            placeholder="Add a skill"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleAddSkill()}
          />
          <Button onClick={handleAddSkill}>Add</Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-sm"
            >
              {skill}
              <button
                onClick={() => handleDeleteSkill(index)}
                className="ml-1 hover:text-destructive"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      </Card>

      <div className="flex justify-end">
        <Button size="lg" onClick={handleSave}>
          Save All Changes
        </Button>
      </div>
    </div>
  );
};

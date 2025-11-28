import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const FilterSidebar = () => {
  const jobTypes = [
    "Full-time",
    "Part-time",
    "Contract",
    "Internship",
  ];

  const experienceLevels = [
    "Entry Level",
    "Mid-Senior Level",
    "Director",
    "Executive",
  ];

  const workLocations = [
    "Remote",
    "On-site",
    "Hybrid",
  ];

  const industries = [
    "Technology",
    "Finance",
    "Healthcare",
    "Education",
    "Retail",
    "Manufacturing",
  ];

  return (
    <aside className="w-64 space-y-4">
      <Card className="p-4">
        <h3 className="font-semibold text-sm mb-4 font-heading">Job Type</h3>
        <div className="space-y-3">
          {jobTypes.map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox id={type} />
              <Label htmlFor={type} className="text-sm font-normal cursor-pointer">
                {type}
              </Label>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="font-semibold text-sm mb-4 font-heading">Experience Level</h3>
        <div className="space-y-3">
          {experienceLevels.map((level) => (
            <div key={level} className="flex items-center space-x-2">
              <Checkbox id={level} />
              <Label htmlFor={level} className="text-sm font-normal cursor-pointer">
                {level}
              </Label>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="font-semibold text-sm mb-4 font-heading">Work Location</h3>
        <div className="space-y-3">
          {workLocations.map((location) => (
            <div key={location} className="flex items-center space-x-2">
              <Checkbox id={location} />
              <Label htmlFor={location} className="text-sm font-normal cursor-pointer">
                {location}
              </Label>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="font-semibold text-sm mb-4 font-heading">Industry</h3>
        <div className="space-y-3">
          {industries.map((industry) => (
            <div key={industry} className="flex items-center space-x-2">
              <Checkbox id={industry} />
              <Label htmlFor={industry} className="text-sm font-normal cursor-pointer">
                {industry}
              </Label>
            </div>
          ))}
        </div>
      </Card>
    </aside>
  );
};

export default FilterSidebar;

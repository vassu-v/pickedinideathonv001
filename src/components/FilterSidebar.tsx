import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const FilterSidebar = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const categories = [
    "Web Development",
    "Mobile Development",
    "UI/UX Design",
    "Data Science",
    "Digital Marketing",
    "Writing & Translation",
  ];

  const experienceLevels = ["Entry Level", "Intermediate", "Expert"];

  const locations = ["Remote", "New York, NY", "San Francisco, CA", "London, UK", "Berlin, Germany"];

  return (
    <aside className="w-64 space-y-4">
      <Card className="p-4">
        <h3 className="font-semibold text-sm mb-4 font-heading">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox id={category} />
              <Label htmlFor={category} className="text-sm font-normal cursor-pointer">
                {category}
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
        <h3 className="font-semibold text-sm mb-4 font-heading">Price Range</h3>
        <div className="space-y-4">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={5000}
            step={50}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="font-semibold text-sm mb-4 font-heading">Location</h3>
        <div className="space-y-3">
          {locations.map((location) => (
            <div key={location} className="flex items-center space-x-2">
              <Checkbox id={location} />
              <Label htmlFor={location} className="text-sm font-normal cursor-pointer">
                {location}
              </Label>
            </div>
          ))}
        </div>
      </Card>
    </aside>
  );
};

export default FilterSidebar;

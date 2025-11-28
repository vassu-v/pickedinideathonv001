import { Briefcase, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: Briefcase, label: "Jobs", path: "/" },
  ];

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="text-primary font-bold text-xl font-heading">
            PickedIn
          </Link>

          {/* Navigation Items */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex flex-col items-center justify-center px-6 py-2 text-xs font-medium transition-colors min-w-[70px]",
                    isActive
                      ? "text-foreground border-b-2 border-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Icon className="h-5 w-5 mb-1" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            
            {/* Profile */}
            <Link
              to="/profile"
              className={cn(
                "flex flex-col items-center justify-center px-6 py-2 text-xs font-medium transition-colors min-w-[70px]",
                location.pathname === "/profile"
                  ? "text-foreground border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Avatar className="h-6 w-6 mb-1">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" />
                <AvatarFallback>SK</AvatarFallback>
              </Avatar>
              <span>Me</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

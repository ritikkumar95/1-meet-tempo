import { Link, useLocation } from "react-router-dom";
import { Search, Heart, Map, MessageSquare, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { SearchBar } from "@/design-system/components/SearchBar";

export function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header
      className={cn(
        "sticky top-0 z-40 bg-paper/90 backdrop-blur-md border-b border-stone-light/60",
        "transition-shadow duration-200"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <span className="font-display italic text-2xl font-light tracking-tight text-terracotta">
              havn
            </span>
          </Link>

          {/* Compact search — hidden on home */}
          {!isHome && (
            <div className="flex-1 max-w-md hidden sm:block">
              <SearchBar compact />
            </div>
          )}

          {/* Nav actions */}
          <nav className="flex items-center gap-1">
            <NavItem to="/search" icon={<Search size={18} />} label="Explore" />
            <NavItem to="/wishlists" icon={<Heart size={18} />} label="Wishlists" />
            <NavItem to="/trips" icon={<Map size={18} />} label="Trips" />
            <NavItem to="/messages" icon={<MessageSquare size={18} />} label="Messages" />
            <NavItem to="/profile" icon={<User size={18} />} label="Profile" />
          </nav>
        </div>
      </div>
    </header>
  );
}

function NavItem({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) {
  const location = useLocation();
  const active = location.pathname.startsWith(to);

  return (
    <Link
      to={to}
      className={cn(
        "flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl text-xs font-medium transition-colors",
        active
          ? "text-terracotta"
          : "text-stone hover:text-ink hover:bg-paper-dark"
      )}
    >
      {icon}
      <span className="hidden sm:block">{label}</span>
    </Link>
  );
}

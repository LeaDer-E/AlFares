import { useState } from "react";
import { Menu, X, Users, HandHelping, GitCompare, CalendarCheck, Sparkles, Target } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { id: "about", label: "من نحن", icon: Users },
  { id: "help", label: "نساعدك في", icon: HandHelping },
  { id: "compare", label: "قبل / بعد", icon: GitCompare },
  { id: "register", label: "سجّل بياناتك", icon: Sparkles, cta: true },
  { id: "after", label: "ما بعد المعرض", icon: CalendarCheck },
  { id: "evaluation", label: "التقييم والتوجيه المهني", icon: Target },
];

interface HeaderProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const Header = ({ activeTab, onTabChange }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tabId: string) => {
    onTabChange(tabId);
    setMobileMenuOpen(false);
    // Scroll to tabs section
    document.getElementById('tabs-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-card shadow-soft sticky top-0 z-50 border-b border-border/50">
      <div className="container py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <img 
            src={logo} 
            alt="الفارس خبراء المنصات" 
            className="h-12 md:h-14 object-contain"
          />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-bold text-sm transition-all duration-200 ${
                  item.cta
                    ? "text-white shadow-lg hover:scale-[1.03]"
                    : isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
                style={item.cta ? { 
                  background: 'linear-gradient(90deg, #1e40af 0%, #2563eb 50%, #1e40af 100%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 3s ease-in-out infinite'
                } : {}}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-secondary text-foreground"
            aria-label="القائمة"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-2 border-t border-border/50 pt-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                      item.cta
                        ? "text-white shadow-lg"
                        : isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                    style={item.cta ? { 
                      background: 'linear-gradient(90deg, #1e40af 0%, #2563eb 50%, #1e40af 100%)',
                      backgroundSize: '200% 100%',
                      animation: 'shimmer 3s ease-in-out infinite'
                    } : {}}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

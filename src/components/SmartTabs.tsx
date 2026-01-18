import { 
  Users, 
  HandHelping, 
  GitCompare, 
  CalendarCheck,
  Sparkles,
  Target
} from "lucide-react";
import TabAboutUs from "./tabs/TabAboutUs";
import TabWeHelpYou from "./tabs/TabWeHelpYou";
import TabBeforeAfter from "./tabs/TabBeforeAfter";
import TabRegister from "./tabs/TabRegister";
import TabAfterExhibition from "./tabs/TabAfterExhibition";
import TabEvaluationGuidance from "./tabs/TabEvaluationGuidance";

const tabs = [
  { id: "about", label: "من نحن", icon: Users },
  { id: "help", label: "نساعدك في", icon: HandHelping },
  { id: "compare", label: "قبل / بعد", icon: GitCompare },
  { id: "register", label: "سجّل بياناتك", icon: Sparkles, cta: true },
  { id: "after", label: "ما بعد المعرض", icon: CalendarCheck },
  { id: "evaluation", label: "التقييم والتوجيه المهني", icon: Target },
];

interface SmartTabsProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const SmartTabs = ({ activeTab, onTabChange }: SmartTabsProps) => {
  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <TabAboutUs />;
      case "help":
        return <TabWeHelpYou />;
      case "compare":
        return <TabBeforeAfter />;
      case "register":
        return <TabRegister />;
      case "after":
        return <TabAfterExhibition />;
      case "evaluation":
        return <TabEvaluationGuidance />;
      default:
        return <TabAboutUs />;
    }
  };

  return (
    <section id="tabs-section" className="container py-6 md:py-8">
      {/* Mobile Tabs Navigation - Only visible on mobile */}
      <nav className="lg:hidden flex gap-2 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm whitespace-nowrap transition-all duration-300 flex-shrink-0 border-2 ${
                tab.cta
                  ? "text-white border-blue-600 shadow-lg shadow-blue-600/50 hover:scale-[1.05]"
                  : isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                    : "bg-card text-muted-foreground border-border/50 hover:bg-accent hover:text-accent-foreground hover:border-primary/30"
              }`}
              style={tab.cta ? { 
                background: 'linear-gradient(90deg, #1e40af 0%, #3b82f6 50%, #1e40af 100%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 3s ease-in-out infinite'
              } : {}}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Tab Content */}
      <div className="animate-fade-in" key={activeTab}>
        {renderContent()}
      </div>
    </section>
  );
};

export default SmartTabs;

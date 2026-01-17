import { useState } from "react";
import Header from "@/components/Header";
import SmartTabs from "@/components/SmartTabs";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1">
        <SmartTabs activeTab={activeTab} onTabChange={setActiveTab} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

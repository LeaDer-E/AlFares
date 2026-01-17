import { CheckCircle, Target, Zap, FileSearch, Clock, Lightbulb } from "lucide-react";

const services = [
  { text: "تحليل توعوي للسيرة الذاتية", icon: FileSearch },
  { text: "كشف الأخطاء الشائعة التي تقلل فرص الترشيح", icon: Zap },
  { text: "توجيه عملي واحد قابل للتطبيق فورًا", icon: Lightbulb },
  { text: "تبسيط فهم أنظمة الفرز الآلي (ATS)", icon: Clock },
  { text: "مساعدتك على تقديم نفسك مهنيًا خلال دقيقة", icon: Target },
];

const TabWeHelpYou = () => {
  return (
    <div className="section-card space-y-8">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="h-1 w-12 bg-primary rounded-full"></div>
          <span className="text-primary font-semibold text-sm">خدماتنا</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          نساعدك في
        </h2>
        <p className="text-muted-foreground text-lg">
          خلال المعرض وما بعده نركّز على:
        </p>
      </div>

      <ul className="space-y-4">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <li
              key={index}
              className="group flex items-start gap-4 bg-gradient-to-l from-secondary/30 to-secondary/60 hover:from-primary/5 hover:to-primary/10 rounded-2xl p-5 transition-all duration-300 border border-transparent hover:border-primary/20"
            >
              <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 pt-1">
                <span className="text-foreground font-semibold text-lg leading-relaxed">{service.text}</span>
              </div>
              <CheckCircle className="w-6 h-6 text-primary/40 group-hover:text-primary mt-1 transition-colors flex-shrink-0" />
            </li>
          );
        })}
      </ul>

      <div className="bg-gradient-to-l from-primary/10 to-primary/5 rounded-2xl p-6 flex items-center gap-4 border border-primary/20">
        <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30">
          <Target className="w-7 h-7 text-primary-foreground" />
        </div>
        <div>
          <p className="font-bold text-foreground text-lg">الهدف النهائي</p>
          <p className="text-muted-foreground">
            <span className="text-primary font-semibold">وعي مهني</span> يقود إلى <span className="text-primary font-semibold">قرار صحيح</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TabWeHelpYou;

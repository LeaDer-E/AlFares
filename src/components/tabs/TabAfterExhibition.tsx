import { CheckCircle, AlertCircle, FileCheck, MessageSquare, ArrowUpRight, Heart } from "lucide-react";

const steps = [
  { text: "مراجعة بياناتك والملفات المرفقة (إن وُجدت)", icon: FileCheck },
  { text: "التواصل معك بتوجيه مهني مناسب لحالتك", icon: MessageSquare },
  { text: "اقتراح الخطوة التالية الأنسب لك (إن رغبت)", icon: ArrowUpRight },
];

const TabAfterExhibition = () => {
  return (
    <div className="section-card space-y-8">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="h-1 w-12 bg-primary rounded-full"></div>
          <span className="text-primary font-semibold text-sm">الخطوات القادمة</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          ما بعد المعرض
        </h2>
        <p className="text-muted-foreground text-lg">
          بعد المعرض سنقوم بـ:
        </p>
      </div>

      <div className="space-y-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={index}
              className="group flex items-start gap-4 bg-gradient-to-l from-secondary/30 to-secondary/60 hover:from-primary/5 hover:to-primary/10 rounded-2xl p-5 transition-all duration-300 border border-transparent hover:border-primary/20"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg shadow-primary/20">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute top-14 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-primary/20 hidden md:block"></div>
                )}
              </div>
              <div className="flex-1 pt-1">
                <span className="text-foreground font-semibold text-lg leading-relaxed">{step.text}</span>
              </div>
              <div className="w-10 h-10 bg-primary/10 group-hover:bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300">
                <Icon className="w-5 h-5 text-primary" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Important Notes */}
      <div className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl p-6 space-y-4 border border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-slate-200 rounded-xl flex items-center justify-center">
            <AlertCircle className="w-5 h-5 text-slate-600" />
          </div>
          <span className="font-bold text-foreground text-lg">ملاحظة هامة</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-white rounded-xl p-4 text-center border border-slate-100">
            <span className="text-2xl mb-2 block">🔕</span>
            <p className="font-semibold text-foreground text-sm">بدون إزعاج</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center border border-slate-100">
            <span className="text-2xl mb-2 block">🤝</span>
            <p className="font-semibold text-foreground text-sm">بدون التزام</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center border border-slate-100">
            <span className="text-2xl mb-2 block">📋</span>
            <p className="font-semibold text-foreground text-sm">بدون وعود توظيف</p>
          </div>
        </div>
      </div>

      {/* Success Message Preview */}
      <div className="bg-gradient-to-l from-primary/10 to-primary/5 rounded-2xl p-6 border-2 border-primary/20">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
            <CheckCircle className="w-7 h-7 text-primary-foreground" />
          </div>
          <div className="space-y-2">
            <p className="font-bold text-foreground text-xl">شكرًا لتسجيلك!</p>
            <p className="text-muted-foreground leading-relaxed">
              تم استلام بياناتك بنجاح وسيتم التواصل معك بعد المعرض بتوجيه مهني مناسب لحالتك.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabAfterExhibition;

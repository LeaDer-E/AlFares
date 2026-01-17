import { Sparkles, ArrowLeft, X, Check } from "lucide-react";

const comparisons = [
  {
    before: "مسؤول عن مهام إدارية متعددة ومتابعة الأعمال اليومية.",
    after: "إدارة ومتابعة العمليات الإدارية اليومية، مع تحسين سير العمل وتقليل التأخير بنسبة 20%.",
  },
  {
    before: "مسؤول عن مهام إدارية متعددة.",
    after: "إدارة المهام الإدارية اليومية وتنظيم سير العمل بما يضمن إنجاز المعاملات بدقة وفي الوقت المحدد.",
  },
  {
    before: "خبرة في خدمة العملاء.",
    after: "تحسين تجربة العميل، ومعالجة الاستفسارات بكفاءة، وتحقيق رضا العملاء ضمن بيئة عمل سريعة.",
  },
  {
    before: "المشاركة في إعداد التقارير.",
    after: "إعداد ومراجعة التقارير الدورية وتحليل البيانات الأساسية لدعم اتخاذ القرار.",
  },
  {
    before: "التعامل مع العملاء بشكل جيد.",
    after: "التعامل المباشر مع العملاء باحترافية، ومعالجة الاستفسارات والملاحظات وفق إجراءات العمل المعتمدة.",
  },
  {
    before: "المساعدة في الأعمال اليومية.",
    after: "دعم العمليات التشغيلية اليومية والتنسيق مع الفرق ذات العلاقة لضمان استمرارية العمل بسلاسة.",
  },
];

const exampleLabels = [
  "الأول",
  "الثاني",
  "الثالث",
  "الرابع",
  "الخامس",
  "السادس",
];

const TabBeforeAfter = () => {
  return (
    <div className="section-card space-y-8">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="h-1 w-12 bg-primary rounded-full"></div>
          <span className="text-primary font-semibold text-sm">أمثلة عملية</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          قبل / بعد
        </h2>
        <p className="text-muted-foreground text-lg">
          شاهد الفرق في تحسين صياغة السيرة الذاتية
        </p>
      </div>

      <div className="space-y-8">
        {comparisons.map((item, index) => (
          <div key={index} className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </span>
              <h3 className="font-bold text-foreground">
                المثال {exampleLabels[index] ?? index + 1}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Before Card */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border-2 border-primary/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <X className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="font-bold text-primary text-sm uppercase tracking-wider">قبل</span>
                  </div>
                  <p className="text-foreground font-medium leading-relaxed">{item.before}</p>
                </div>
              </div>

              {/* Arrow for desktop */}
              <div className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
                <ArrowLeft className="w-6 h-6 text-primary" />
              </div>
              
              {/* After Card */}
              <div className="bg-gradient-to-br from-slate-300 to-slate-50 rounded-2xl p-6 border-2 border-slate-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-slate-200/50 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-slate-300 rounded-lg flex items-center justify-center">
                      <Check className="w-4 h-4 text-slate-600" />
                    </div>
                    <span className="font-bold text-slate-600 text-sm uppercase tracking-wider">بعد</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{item.after}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-l from-accent to-accent/50 rounded-2xl p-6 flex items-center gap-4 border border-primary/20">
        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
          <Sparkles className="w-7 h-7 text-primary" />
        </div>
        <div>
          <p className="font-bold text-foreground text-lg">النتيجة</p>
          <p className="text-muted-foreground">
            الفرق في <span className="text-primary font-semibold">الصياغة</span>… لا في عدد الأسطر
          </p>
        </div>
      </div>
    </div>
  );
};

export default TabBeforeAfter;

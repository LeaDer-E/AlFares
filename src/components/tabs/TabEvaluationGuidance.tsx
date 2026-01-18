import { Target, FileText, Linkedin, Users, CheckCircle, Clock, AlertTriangle } from "lucide-react";

const TabEvaluationGuidance = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          الأثر المهني خلال المعرض
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          ضمن إطار توعوي مهني منظّم، تقدّم منصة الفارس خدمات إرشادية مجانية خلال أيام المعرض، وفق طاقة استيعابية محددة تضمن جودة التوجيه:
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* CV Review */}
        <div className="bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-card-hover transition-all duration-300">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-2">
                مراجعة السير الذاتية (توعوية سريعة)
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-primary" />
                  <span className="font-medium">المستهدف: 30–50 سيرة ذاتية</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="font-medium">مدة الجلسة: 5–7 دقائق لكل زائر</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">المخرجات:</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">ملاحظة مهنية مباشرة</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">تحديد خطأ جوهري مؤثر على فرص الترشيح</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">توجيه عملي واحد قابل للتطبيق فورًا</span>
              </li>
            </ul>
          </div>

          <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-amber-800">
                الخدمة إرشادية فقط، بدون تعديل مباشر أو وعود توظيف.
              </p>
            </div>
          </div>
        </div>

        {/* LinkedIn Analysis */}
        <div className="bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-card-hover transition-all duration-300">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Linkedin className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-2">
                تحليل مبدئي لحسابات LinkedIn
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-primary" />
                  <span className="font-medium">المستهدف: 10–20 حسابًا</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">يشمل:</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">تقييم العنوان المهني (Headline)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">ملاحظة على الملخص (About)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">توجيه لتحسين الظهور أمام مسؤولي التوظيف</span>
              </li>
            </ul>
          </div>

          <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-amber-800">
                بدون تنفيذ مباشر داخل المعرض.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* General Guidance */}
      <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <Users className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              توجيه مهني عام للزوار
            </h3>
            <p className="text-muted-foreground">
              إرشادات شاملة لتعزيز فرصكم المهنية
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-sm font-bold text-primary">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">شرح مبسّط لآلية فرز السير الذاتية</h4>
                <p className="text-sm text-muted-foreground">عبر أنظمة ATS</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-sm font-bold text-primary">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">إرشاد مختصر لتقديم النفس مهنيًا</h4>
                <p className="text-sm text-muted-foreground">خلال 60 ثانية</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-sm font-bold text-primary">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">فحص سريع لعرض الخبرات الوظيفية</h4>
                <p className="text-sm text-muted-foreground">وضوح المسمّى – ترتيب الخبرات – تحويل المهام إلى إنجازات</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Follow-up */}
      <div className="bg-card rounded-2xl p-6 border border-border shadow-card">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-6 h-6 text-green-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground mb-2">
              المتابعة ما بعد المعرض
            </h3>
            <p className="text-muted-foreground mb-4">
              نموذج تسجيل للراغبين بالمتابعة والتوجيه اللاحق
            </p>
          </div>
        </div>
      </div>

      {/* Note */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-amber-900 mb-2">ملاحظة تنظيمية:</h4>
            <p className="text-amber-800 leading-relaxed">
              جميع خدمات المراجعة المقدّمة خلال المعرض توعوية مجانية، تركّز على رفع الوعي المهني وفهم متطلبات سوق العمل، دون ضغط تسويقي أو تنفيذ مباشر.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabEvaluationGuidance;
import { ExternalLink, Clock, Shield, Zap } from "lucide-react";

const TabRegister = () => {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdZXZ_NaKoGNIckAXoC8ASz_3ZHR3bZBSZQk_IFejGy26H4wg/viewform?usp=publish-editor"; // Replace with actual Google Form URL

  return (
    <div className="section-card space-y-8">
      <div className="space-y-3 text-center">
        <div className="flex items-center justify-center gap-2">
          <div className="h-1 w-12 bg-primary rounded-full"></div>
          <span className="text-primary font-semibold text-sm">خطوة واحدة فقط</span>
          <div className="h-1 w-12 bg-primary rounded-full"></div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          سجّل بياناتك
        </h2>
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>(أقل من دقيقة)</span>
        </div>
      </div>

      <div className="bg-gradient-to-b from-secondary/50 to-secondary/30 rounded-3xl p-8 text-center space-y-6">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
          <ExternalLink className="w-10 h-10 text-primary" />
        </div>
        
        <p className="text-foreground/80 leading-relaxed max-w-md mx-auto text-lg">
          سجّل بياناتك الآن ليتم التواصل معك بعد المعرض بتوجيه مهني مناسب لحالتك.
        </p>

        <a
          href={googleFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gradient-to-l from-primary to-primary/90 text-primary-foreground font-bold py-5 px-10 rounded-2xl shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-lg"
        >
          <span>سجّل بياناتك الآن</span>
          <ExternalLink className="w-5 h-5" />
        </a>

        <p className="text-sm text-muted-foreground">
          سيتم فتح النموذج في صفحة جديدة
        </p>
      </div>

      {/* Trust Indicators */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-secondary/30 rounded-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm">بياناتك آمنة</p>
            <p className="text-xs text-muted-foreground">لا نشاركها مع أحد</p>
          </div>
        </div>
        <div className="bg-secondary/30 rounded-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm">استجابة سريعة</p>
            <p className="text-xs text-muted-foreground">نتواصل معك قريباً</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabRegister;

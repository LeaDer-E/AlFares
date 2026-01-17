import { useState } from "react";
import { Clock, ChevronLeft, ChevronRight, Award, Target, Users } from "lucide-react";
import slide1 from "@/assets/slide-1.jpg";
import slide2 from "@/assets/slide-2.jpg";
import slide3 from "@/assets/slide-3.jpg";
import slide4 from "@/assets/slide-4.jpg";
import slide5 from "@/assets/slide-5.jpg";
import slide6 from "@/assets/slide-6.jpg";


const slides = [slide1, slide2, slide3, slide4, slide5, slide6];

const TabAboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-6">
      {/* Presentation Slider */}
      <div className="relative rounded-2xl overflow-hidden shadow-card">
        <div className="relative aspect-[16/9] md:aspect-[21/9]">
          <img
            src={slides[currentIndex]}
            alt={`عرض ${currentIndex + 1}`}
            className="w-full h-full object-contain  transition-all duration-500"
          />
          
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-card/50 hover:bg-card/50 text-foreground p-2.5 rounded-full shadow-lg transition-all hover:scale-105"
            aria-label="الصورة السابقة"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-card/50 hover:bg-card/50 text-foreground p-2.5 rounded-full shadow-lg transition-all hover:scale-105"
            aria-label="الصورة التالية"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-card/80 backdrop-blur-sm px-3 py-2 rounded-full">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-primary w-6" 
                    : "bg-foreground/30 w-2 hover:bg-foreground/50"
                }`}
                aria-label={`انتقل إلى الصورة ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="section-card space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-1 w-12 bg-primary rounded-full"></div>
            <span className="text-primary font-semibold text-sm">تعرّف علينا</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
            الفارس | خبراء المنصات للتمكين المهني
          </h1>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Clock className="w-4 h-4" />
            <span>وقت القراءة: أقل من 30 ثانية</span>
          </div>
        </div>

        <div className="space-y-4 text-foreground/90 leading-relaxed text-base md:text-lg">
          <p>
            نساعدك تفهم مسارك المهني بشكل أوضح،
            <br />
            ونحلّل سيرتك الذاتية وحضورك المهني بوعي،
            <br />
            لتظهر بالشكل الصحيح أمام جهات التوظيف في السوق السعودي والخليجي.
          </p>

          <div className="bg-gradient-to-l from-primary/5 to-primary/10 rounded-2xl p-6 border-r-4 border-primary">
            <p className="font-medium text-foreground text-lg">
              نحن لا نعدك بوظيفة،
              <br />
              لكن نساعدك تبني ملفًا مهنيًا <span className="text-primary font-bold">أقوى</span>، <span className="text-primary font-bold">أوضح</span>، وأكثر <span className="text-primary font-bold">احترافية</span>.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          <div className="bg-secondary/50 rounded-xl p-4 text-center space-y-2">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-foreground">خبرة معتمدة</h3>
            <p className="text-sm text-muted-foreground">أكثر من عشرة سنوات في إنشاء وتحسين السير الذاتيه</p>
          </div>
          <div className="bg-secondary/50 rounded-xl p-4 text-center space-y-2">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-foreground">تركيز مهني</h3>
            <p className="text-sm text-muted-foreground">توجيه دقيق ومخصص</p>
          </div>
          <div className="bg-secondary/50 rounded-xl p-4 text-center space-y-2">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-foreground">للأفراد والشركات</h3>
            <p className="text-sm text-muted-foreground">حلول شاملة للجميع</p>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4 border-t border-border/50">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <span className="text-lg">💡</span>
            <span>تابع التبويبات للتعرف على خدماتنا أكثر</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TabAboutUs;

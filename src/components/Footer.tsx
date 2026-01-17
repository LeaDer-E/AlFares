import { Phone, Mail, FileText, Receipt, MapPin, Shield, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";
import vat from "@/assets/vat.png";
import bc from "@/assets/bc.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-secondary/50 to-secondary mt-12 relative overflow-hidden border-t border-border">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/60 to-primary"></div>
      <div className="absolute top-20 -right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <img 
                src={logo} 
                alt="الفارس خبراء المنصات" 
                className="h-16 md:h-20 object-contain"
              />
              <h3 className="text-2xl font-bold text-foreground">
                الفارس خبراء المنصات
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-base max-w-lg">
              منصة الفارس منصة معتمدة من مركز الأعمال السعودي ومتخصصون في تقديم الخدمات المهنية الاحترافية منذ أكثر من عشرة سنوات في عدة تخصصات ومجالات للأفراد والشركات.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border shadow-sm">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground font-medium">معتمد رسمياً</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border shadow-sm">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground font-medium">+10 سنوات خبرة</span>
              </div>
            </div>
          </div>

          {/* Registration Info */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <FileText className="w-4 h-4 text-primary" />
              </div>
              البيانات الرسمية
            </h4>
            <div className="space-y-4">
              <div className="group bg-card hover:bg-accent rounded-xl p-4 border borderborder hover:border-primary/30 transition-all duration-300 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                    {/* <FileText className="w-5 h-5 text-primary" /> */}
                    <img
                      src={bc}
                      alt="BC"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block mb-1">السجل التجاري</span>
                    <span className="font-bold text-lg text-foreground tracking-wider" dir="ltr">1009104244</span>
                  </div>
                </div>
              </div>
              <div className="group bg-card hover:bg-accent rounded-xl p-4 border border-border hover:border-primary/30 transition-all duration-300 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                    {/* <Receipt className="w-5 h-5 text-primary" /> */}
                    <img
                      src={vat}
                      alt="VAT"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block mb-1">الرقم الضريبي</span>
                    <span className="font-bold text-foreground tracking-wider text-sm" dir="ltr">310752934300003</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              تواصل معنا
            </h4>
            <div className="space-y-3">
              <a 
                href="https://wa.me/966509802664" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-gradient-to-l from-green-50 to-green-100/50 hover:from-green-100 hover:to-green-50 rounded-xl p-4 border border-green-200 hover:border-green-300 transition-all duration-300 shadow-sm"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20 group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-green-700 block mb-1 font-medium">واتساب</span>
                  <span className="font-semibold text-foreground" dir="ltr">+966 509 802 664</span>
                </div>
              </a>
              
              <a 
                href="tel:+966509802664"
                className="group flex items-center gap-4 bg-card hover:bg-accent rounded-xl p-4 border border-border hover:border-primary/30 transition-all duration-300 shadow-sm"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block mb-1">اتصل بنا</span>
                  <span className="font-semibold text-foreground" dir="ltr">+966 509 802 664</span>
                </div>
              </a>
              
              <a 
                href="mailto:team.alfaris@gmail.com"
                className="group flex items-center gap-4 bg-card hover:bg-accent rounded-xl p-4 border border-border hover:border-primary/30 transition-all duration-300 shadow-sm"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block mb-1">البريد الإلكتروني</span>
                  <span className="font-semibold text-foreground text-sm">team.alfaris@gmail.com</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} الفارس خبراء المنصات. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4" />
              <span>المملكة العربية السعودية</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

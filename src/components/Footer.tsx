import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center font-heading font-bold text-primary-foreground text-lg">
                GI
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-foreground">Great India</span>
                <span className="block text-xs text-muted-foreground tracking-widest uppercase">Elevator</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium elevator solutions engineered for safety, reliability, and long-term performance across Delhi NCR.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {["About", "Services", "Lift Types", "Brands", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+918826866830" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" /> +91-8826866830
              </a>
              <a href="mailto:support@greatindiaelevator.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" /> support@greatindiaelevator.com
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Office No-1051, Vaishali, Sector-3F, Ghaziabad, UP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Great India Elevator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

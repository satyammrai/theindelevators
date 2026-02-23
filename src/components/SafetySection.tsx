import { ShieldCheck, BadgeCheck, HardHat, HeartHandshake } from "lucide-react";
import safetyImage from "@/assets/safety-elevator.jpg";

const features = [
  { icon: ShieldCheck, title: "International Safety Codes", desc: "Compliant with IS/EN 81 and global elevator safety standards." },
  { icon: BadgeCheck, title: "Rigorous Quality Checks", desc: "Multi-stage inspection protocols at every phase of installation." },
  { icon: HardHat, title: "Highly Trained Engineers", desc: "Certified professionals with factory-level training credentials." },
  { icon: HeartHandshake, title: "Reliable Experience", desc: "Secure, comfortable, and dependable vertical transportation." },
];

const SafetySection = () => {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={safetyImage} alt="Elevator safety inspection" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="relative z-10 container mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-medium text-accent tracking-widest uppercase">Trust & Compliance</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 text-foreground">
            Safety & <span className="gradient-text">Quality</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="glass-card p-8 text-center hover:border-accent/30 transition-all duration-300">
              <div className="w-14 h-14 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-5">
                <f.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetySection;

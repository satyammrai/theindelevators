import { ChevronDown, Phone } from "lucide-react";
import heroImage from "@/assets/hero-elevator.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium glass elevator in modern high-rise building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <span className="text-xs font-medium text-primary tracking-widest uppercase">
            Premium Elevator Solutions — Delhi NCR
          </span>
        </div>

        <h1
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-foreground animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Engineering Vertical Mobility{" "}
          <span className="gradient-text">With Precision & Trust</span>
        </h1>

        <p
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          Premium Elevator Installation, Repair, Modernization & AMC Services Across Delhi NCR
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <a href="#contact" className="glow-button animate-pulse-glow text-base">
            Enquiry Now
          </a>
          <a
            href="tel:+918826866830"
            className="flex items-center gap-2 px-8 py-4 rounded-md border border-border/60 text-foreground font-heading font-semibold tracking-wide hover:border-primary/40 hover:bg-secondary/50 transition-all duration-300"
          >
            <Phone className="w-5 h-5 text-primary" />
            Call +91-8826866830
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-scroll-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
};

export default HeroSection;

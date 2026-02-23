import AnimatedCounter from "./AnimatedCounter";
import aboutImage from "@/assets/about-elevator.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-medium text-primary tracking-widest uppercase">Who We Are</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 text-foreground">
            A Legacy of <span className="gradient-text">Engineering Excellence</span>
          </h2>
        </div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={aboutImage}
              alt="Great India Elevator engineering team"
              className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Great India Elevator stands as a premier name in the vertical transportation industry,
              delivering international-grade elevator solutions across Delhi NCR. Our commitment to
              excellence is built upon decades of engineering expertise, European technical collaborations,
              and an unwavering focus on safety and reliability.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a dedicated R&D division, state-of-the-art in-house testing infrastructure, and a
              team of highly certified engineers, we deliver solutions that meet the most stringent
              international quality standards. From high-rise residential towers to hospitals and
              commercial complexes — we engineer vertical mobility that our clients trust for decades.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["International Standards", "European Tie-ups", "In-house R&D", "24/7 Support"].map((tag) => (
                <span key={tag} className="px-4 py-1.5 rounded-full text-xs font-medium border border-border/60 text-muted-foreground bg-secondary/50">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 glass-card p-8 md:p-12">
          <AnimatedCounter end={5325} label="Hours of Work" />
          <AnimatedCounter end={160} label="Satisfied Clients" />
          <AnimatedCounter end={530} label="Projects Completed" />
          <AnimatedCounter end={49} label="Awards Won" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

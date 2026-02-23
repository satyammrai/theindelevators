import { Wrench, Settings, RefreshCw, FileCheck, Trash2, Package } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Elevator Installation",
    description: "End-to-end installation of passenger, freight, and specialized elevators with precision engineering and international safety compliance.",
  },
  {
    icon: Wrench,
    title: "Elevator Repair",
    description: "24/7 emergency repair services with rapid response teams. Expert diagnostics and certified replacement components.",
    badge: "24/7 Emergency",
  },
  {
    icon: RefreshCw,
    title: "Elevator Modernization",
    description: "Upgrade aging elevator systems with cutting-edge technology, improved energy efficiency, and modern safety features.",
  },
  {
    icon: FileCheck,
    title: "Annual Maintenance (AMC)",
    description: "Comprehensive maintenance contracts ensuring peak performance, regulatory compliance, and extended equipment lifespan.",
  },
  {
    icon: Trash2,
    title: "Lift Dismantling",
    description: "Professional dismantling and removal services executed safely and efficiently with complete site restoration.",
  },
  {
    icon: Package,
    title: "Spare Parts & Replacement",
    description: "Genuine OEM spare parts and components for all major elevator brands with warranty-backed installation.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-charcoal">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-medium text-primary tracking-widest uppercase">What We Do</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 text-foreground">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Comprehensive elevator solutions engineered for safety, reliability, and long-term performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="service-card group">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              {service.badge && (
                <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold bg-accent/15 text-accent">
                  {service.badge}
                </span>
              )}
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

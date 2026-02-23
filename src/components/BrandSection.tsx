const brands = [
  { name: "KONE", services: "AMC, Repair & Modernization" },
  { name: "OTIS", services: "AMC, Repair & Modernization" },
  { name: "SCHINDLER", services: "AMC, Repair & Modernization" },
  { name: "JOHNSON", services: "AMC, Repair & Modernization" },
  { name: "ALL BRANDS", services: "Local Lift Brand Support" },
];

const BrandSection = () => {
  return (
    <section id="brands" className="section-padding bg-charcoal">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-medium text-accent tracking-widest uppercase">OEM Partnerships</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 text-foreground">
            Brand & <span className="gradient-text">OEM Support</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Authorized service capabilities for the world's leading elevator manufacturers.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {brands.map((brand) => (
            <div key={brand.name} className="brand-card py-10">
              <span className="font-heading text-2xl font-bold text-foreground tracking-wider">
                {brand.name}
              </span>
              <span className="text-xs text-muted-foreground mt-3 leading-relaxed">
                {brand.services}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;

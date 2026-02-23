import passengerLift from "@/assets/passenger-lift.jpg";
import hospitalLift from "@/assets/hospital-lift.jpg";
import freightLift from "@/assets/freight-lift.jpg";
import dumbwaiterLift from "@/assets/dumbwaiter-lift.jpg";
import commercialLift from "@/assets/commercial-lift.jpg";

const liftTypes = [
  { title: "Passenger Lifts", subtitle: "Residential & Commercial", image: passengerLift },
  { title: "Hospital Lifts", subtitle: "Medical-Grade Precision", image: hospitalLift },
  { title: "Freight Lifts", subtitle: "Heavy-Duty Industrial", image: freightLift },
  { title: "Dumbwaiter Lifts", subtitle: "Compact Service Lifts", image: dumbwaiterLift },
  { title: "Commercial Elevators", subtitle: "Enterprise Solutions", image: commercialLift },
];

const LiftTypesSection = () => {
  return (
    <section id="lift-types" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-medium text-primary tracking-widest uppercase">Our Portfolio</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 text-foreground">
            Lift <span className="gradient-text">Types</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {liftTypes.map((lift) => (
            <div key={lift.title} className="lift-card aspect-[3/4]">
              <img
                src={lift.image}
                alt={lift.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="lift-card-overlay flex flex-col justify-end p-4 md:p-6">
                <h3 className="font-heading text-base md:text-lg font-semibold text-foreground">
                  {lift.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">{lift.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiftTypesSection;

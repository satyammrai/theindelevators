import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Very good and prompt service. Knowledgeable and professional staff. Highly recommended for elevator maintenance.",
    name: "Vikas Agarwal",
    role: "Property Developer",
  },
  {
    quote: "Best elevator repair service in the city. Fast response time and excellent technical expertise.",
    name: "Pankaj Sharma",
    role: "Facility Manager",
  },
  {
    quote: "Outstanding AMC service with regular preventive maintenance. Our elevators have never performed better.",
    name: "Rajesh Mehta",
    role: "Hotel Operations Director",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl text-center">
        <span className="text-xs font-medium text-primary tracking-widest uppercase">Client Voices</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-12 text-foreground">
          What Our <span className="gradient-text">Clients Say</span>
        </h2>

        <div className="glass-card p-10 md:p-14 relative">
          <Quote className="w-10 h-10 text-primary/30 mx-auto mb-6" />
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
            "{testimonials[current].quote}"
          </p>
          <p className="font-heading font-semibold text-foreground">{testimonials[current].name}</p>
          <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

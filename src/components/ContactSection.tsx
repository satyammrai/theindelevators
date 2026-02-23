import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-charcoal">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-medium text-primary tracking-widest uppercase">Get In Touch</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 text-foreground">
            Contact & <span className="gradient-text">Enquiry</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div className="glass-card p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/15 flex items-center justify-center mb-4">
                  <Send className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Thank You!</h3>
                <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-md bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-md bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    required
                    maxLength={15}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-md bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="+91-XXXXXXXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea
                    required
                    maxLength={1000}
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-md bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>
                <button type="submit" className="glow-button w-full text-base">
                  Request a Call Back
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8 lg:py-8">
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                Let's Build Something <span className="gradient-text">Exceptional</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you need a new elevator installation, emergency repair, or a comprehensive AMC plan — our team of certified engineers is ready to deliver.
              </p>
            </div>

            <div className="space-y-5">
              <a href="tel:+918826866830" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground">+91-8826866830</p>
                </div>
              </a>

              <a href="mailto:support@greatindiaelevator.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">support@greatindiaelevator.com</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Office</p>
                  <p className="font-medium text-foreground">
                    Office No-1051, Vaishali, Sector-3F,<br />Ghaziabad, Uttar Pradesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

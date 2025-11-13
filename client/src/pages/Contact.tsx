import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-light mb-4" data-testid="text-contact-title">
            Get In Touch
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-subtitle">
            Let's discuss your vision and create something extraordinary together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="p-8">
              <h2 className="text-2xl font-heading font-medium mb-6" data-testid="text-form-title">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    data-testid="input-phone"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    data-testid="textarea-message"
                  />
                </div>
                <Button type="submit" className="w-full" data-testid="button-submit">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="p-8">
              <h2 className="text-2xl font-heading font-medium mb-6" data-testid="text-contact-info-title">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Address</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-address">
                      A1/102, Raunak Park, Kokani Pada,<br />
                      Pokhran Road no. 2,<br />
                      Thane (W) 400610, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <a
                      href="mailto:studio@arunkumarlandscapes.com"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-email"
                    >
                      studio@arunkumarlandscapes.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <div className="space-y-1">
                      <a
                        href="tel:+912221732039"
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                        data-testid="link-phone-1"
                      >
                        +91 22 2173 2039
                      </a>
                      <a
                        href="tel:+918591073332"
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                        data-testid="link-phone-2"
                      >
                        +91 85910 73332
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="aspect-video overflow-hidden rounded-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.0!2d72.9!3d19.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEyJzAwLjAiTiA3MsKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-testid="map-embed"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

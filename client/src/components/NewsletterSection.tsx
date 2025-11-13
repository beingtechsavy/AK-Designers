import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail("");
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" data-testid="section-newsletter">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-light mb-4" data-testid="text-newsletter-title">
          Stay Updated
        </h2>
        <p className="text-muted-foreground mb-8" data-testid="text-newsletter-description">
          Stay updated with our architectural journeys and latest projects
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
            data-testid="input-newsletter-email"
          />
          <Button type="submit" data-testid="button-newsletter-subscribe">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}

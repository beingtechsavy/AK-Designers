import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t mt-20" data-testid="footer-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6" data-testid="text-footer-brand">
              Arun Kumar Landscapes
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Creating nature-inspired landscapes and timeless spatial experiences for over 40 years.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-medium mb-6" data-testid="text-footer-links-title">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid={`link-footer-${link.label.toLowerCase().replace(' ', '-')}`}>
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-medium mb-6" data-testid="text-footer-services-title">Services</h4>
            <ul className="space-y-3">
              {[
                "Landscape Design",
                "Architecture",
                "Resorts & Hospitality",
                "Zoological Parks",
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-medium mb-6" data-testid="text-footer-contact-title">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed" data-testid="text-footer-address">
                  A1/102, Raunak Park, Kokani Pada,<br />
                  Pokhran Road no. 2,<br />
                  Thane (W) 400610
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <a
                  href="mailto:studio@arunkumarlandscapes.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-email"
                >
                  studio@arunkumarlandscapes.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+912221732039"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid="link-footer-phone-1"
                  >
                    +91 22 2173 2039
                  </a>
                  <a
                    href="tel:+918591073332"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid="link-footer-phone-2"
                  >
                    +91 85910 73332
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
            © {currentYear} Arun Kumar Landscapes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

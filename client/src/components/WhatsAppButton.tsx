import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatsAppButton() {
  const phoneNumber = "918591073332";
  const message = "Hello, I would like to inquire about your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50"
      data-testid="link-whatsapp"
    >
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-primary hover:bg-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        data-testid="button-whatsapp"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </a>
  );
}

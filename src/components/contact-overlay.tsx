import { Button } from "./ui/button";
import { X } from "lucide-react";
import { useState } from "react";

interface ContactOverlayProps {
  onClose: () => void;
}

export function ContactOverlay({ onClose }: ContactOverlayProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    message: "",
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl border bg-background shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-foreground/20" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-foreground/20" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-foreground/20" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-foreground/20" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 rounded-full p-1 sm:p-1.5 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
        >
          <X className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Left side - Info */}
          <div className="bg-muted/40 p-4 sm:p-6 md:p-10 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              Book a Call
            </h2>
            <p className="mt-3 sm:mt-4 text-muted-foreground text-xs sm:text-sm leading-relaxed">
              Schedule a consultation with our team. Choose your preferred date
              and time, and we'll get back to you to confirm the appointment.
            </p>
          </div>

          {/* Right side - Form */}
          <div className="border-t md:border-t-0 md:border-l bg-white p-4 sm:p-6 md:p-10 flex flex-col justify-center">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onClose();
              }}
              className="space-y-2.5 sm:space-y-3 md:space-y-4"
            >
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full h-9 sm:h-10 rounded-lg border bg-background px-3 sm:px-4 py-2 sm:py-2.5 text-base outline-none focus:border-muted-foreground transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full h-9 sm:h-10 rounded-lg border bg-background px-3 sm:px-4 py-2 sm:py-2.5 text-base outline-none focus:border-muted-foreground transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-1.5">
                  Phone
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full h-9 sm:h-10 rounded-lg border bg-background px-3 sm:px-4 py-2 sm:py-2.5 text-base outline-none focus:border-muted-foreground transition-colors"
                  placeholder="+49 123 456789"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-1.5">
                  Preferred Date & Time
                </label>
                <input
                  type="datetime-local"
                  value={form.preferredDate}
                  onChange={(e) =>
                    setForm({ ...form, preferredDate: e.target.value })
                  }
                  className="w-full h-9 sm:h-10 rounded-lg border bg-background px-3 sm:px-4 py-2 sm:py-2.5 text-base outline-none focus:border-muted-foreground transition-colors"
                  min={new Date().toISOString().slice(0, 16)}
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-1.5 text-muted-foreground">
                  Message{" "}
                  <span className="text-[10px] sm:text-xs">(optional)</span>
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  rows={2}
                  className="w-full rounded-lg border bg-background px-3 sm:px-4 py-2 text-base outline-none focus:border-muted-foreground transition-colors resize-none"
                  placeholder="What would you like to discuss?"
                />
              </div>
              <Button type="submit" className="w-full h-9 sm:h-10 md:h-11">
                Book Call
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

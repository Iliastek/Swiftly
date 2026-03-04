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
          className="absolute top-4 right-4 z-10 rounded-full p-1.5 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Left side - Info */}
          <div className="bg-muted/40 p-8 md:p-10 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Get in touch
            </h2>
            <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
              If you have any questions regarding our Services or need help,
              please fill out the form here. We do our best to respond within 1
              business day.
            </p>
          </div>

          {/* Right side - Form */}
          <div className="border-t md:border-t-0 md:border-l bg-white p-8 md:p-10 flex flex-col justify-center">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onClose();
              }}
              className="space-y-5"
            >
              <div>
                <label className="block text-sm font-medium mb-1.5">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm outline-none focus:border-muted-foreground transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm outline-none focus:border-muted-foreground transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Phone
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm outline-none focus:border-muted-foreground transition-colors"
                  placeholder="+49 123 456789"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => {
                    setForm({ ...form, message: e.target.value });
                    e.target.style.height = "auto";
                    e.target.style.height = `${Math.min(e.target.scrollHeight, window.innerHeight * 0.3)}px`;
                  }}
                  rows={2}
                  className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm outline-none focus:border-muted-foreground transition-colors resize-none overflow-y-auto"
                  style={{ maxHeight: "30vh" }}
                  placeholder="How can we help you?"
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

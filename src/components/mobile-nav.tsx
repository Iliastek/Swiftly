import { useMediaQuery } from "../hooks/use-media-query";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "../lib/utils";
import { MenuIcon, XIcon } from "lucide-react";
import React from "react";
import { createPortal } from "react-dom";
import { navLinks } from "./header";
import { useNavigate, useLocation } from "react-router-dom";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const { isMobile } = useMediaQuery();
  const navigate = useNavigate();
  const location = useLocation();

  // 🚫 Disable body scroll when open
  React.useEffect(() => {
    if (open && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Cleanup on unmount too
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, isMobile]);

  const handleButtonNavClick = (path: string) => {
    navigate(path);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    // Check if it's an anchor link (starts with /#)
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");

      // Close the menu first
      setOpen(false);

      // If we're not on the home page, navigate there first
      if (location.pathname !== "/") {
        navigate("/");
        // Wait for navigation, then scroll
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        // Already on home page, just scroll
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    } else {
      // For regular links, just close the menu
      setOpen(false);
    }
  };

  return (
    <>
      <Button
        aria-controls="mobile-menu"
        aria-expanded={open}
        aria-label="Toggle menu"
        className="md:hidden"
        onClick={() => setOpen(!open)}
        size="icon"
        variant="outline"
      >
        {open ? (
          <XIcon className="size-4.5" />
        ) : (
          <MenuIcon className="size-4.5" />
        )}
      </Button>
      {open &&
        createPortal(
          <div
            className={cn(
              "bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50",
              "fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-t md:hidden",
            )}
            id="mobile-menu"
          >
            <div
              className={cn(
                "data-[slot=open]:zoom-in-97 ease-out data-[slot=open]:animate-in",
                "size-full p-4",
              )}
              data-slot={open ? "open" : "closed"}
            >
              <div className="grid gap-y-2">
                {navLinks.map((link) => (
                  <a
                    className={buttonVariants({
                      variant: "ghost",
                      className: "justify-start",
                    })}
                    href={link.href}
                    key={link.label}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-12 flex flex-col gap-2">
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => handleButtonNavClick("/Login")}
                >
                  Sign In
                </Button>
                <Button
                  className="w-full"
                  onClick={() => handleButtonNavClick("/register")}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

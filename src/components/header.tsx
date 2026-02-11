"use client";
import { useScroll } from "../hooks/use-scroll";
import { Logo } from "./logo";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "../lib/utils";
import { MobileNav } from "./mobile-nav";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

export const navLinks = [
  {
    label: "Features",
    href: "/#features",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "About",
    href: "/about",
  },
];

export function Header() {
  const scrolled = useScroll(10);
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    // Initialize from localStorage to prevent flash
    const cached = localStorage.getItem("isLoggedIn");
    return cached === "true";
  });

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      const loggedIn = !!user;
      setIsLoggedIn(loggedIn);
      if (loggedIn) {
        localStorage.setItem("isLoggedIn", "true");
      } else {
        localStorage.removeItem("isLoggedIn");
      }
    };
    checkAuth();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      const loggedIn = !!session;
      setIsLoggedIn(loggedIn);
      if (loggedIn) {
        localStorage.setItem("isLoggedIn", "true");
      } else {
        localStorage.removeItem("isLoggedIn");
      }
    });

    return () => subscription.unsubscribe();
  }, []);

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

      // If we're not on the home page, navigate there first
      if (location.pathname !== "/") {
        navigate("/");
        // Wait for navigation, then scroll
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        // Already on home page, just scroll
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 mx-auto w-full max-w-screen-2xl border-transparent border-b md:rounded-md md:border md:transition-all md:ease-out",
        {
          "border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50 md:top-2 md:max-w-7xl md:shadow":
            scrolled,
        },
      )}
    >
      <nav
        className={cn(
          "flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out",
          {
            "md:px-2": scrolled,
          },
        )}
      >
        <Link className="rounded-md p-2" to="/">
          <Logo className="h-7" />
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link, i) => (
            <Link
              className={buttonVariants({ variant: "ghost" })}
              to={link.href}
              key={i}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </Link>
          ))}
          {isLoggedIn ? (
            <Button onClick={() => handleButtonNavClick("/dashboard")}>
              Dashboard
            </Button>
          ) : (
            <>
              <Button
                onClick={() => handleButtonNavClick("/login")}
                variant="outline"
              >
                Sign In
              </Button>
              <Button onClick={() => handleButtonNavClick("/register")}>
                Get Started
              </Button>
            </>
          )}
        </div>
        <MobileNav />
      </nav>
    </header>
  );
}

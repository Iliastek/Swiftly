"use client";
import { Logo } from "../components/logo";
import { InstagramIcon, LinkedinIcon, YoutubeIcon } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type React from "react";
import type { ComponentProps, ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";

type FooterLink = {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
};

type FooterSection = {
  label: string;
  links: FooterLink[];
};

const footerLinks: FooterSection[] = [
  {
    label: "Product",
    links: [
      { title: "Features", href: "/#features" },
      { title: "Pricing", href: "/pricing" },
      { title: "Testimonials", href: "/#testimonials" },
    ],
  },
  {
    label: "Company",
    links: [
      { title: "About Us", href: "/about" },
      { title: "Privacy Policy", href: "/privacy-policy" },
      { title: "Terms of Services", href: "/terms-of-service" },
    ],
  },
  {
    label: "Social Links",
    links: [
      { title: "Instagram", href: "#", icon: InstagramIcon },
      { title: "Youtube", href: "#", icon: YoutubeIcon },
      { title: "LinkedIn", href: "#", icon: LinkedinIcon },
    ],
  },
];

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");

      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative mx-auto flex w-full max-w-[1400px] flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-4 py-8 md:rounded-t-6xl md:px-8 md:py-10">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute top-0 right-1/2 left-1/2 h-px w-1/3 rounded-full bg-foreground/20 blur" />

      <div className="grid w-full gap-8 md:gap-10 xl:grid-cols-3 xl:gap-12">
        <AnimatedContainer className="flex flex-col items-center space-y-3 md:space-y-4 xl:items-start">
          <Logo className="h-16 md:h-20" />
          <p className="mt-4 text-center text-muted-foreground text-xs md:text-sm md:mt-0 xl:text-left">
            &copy; {new Date().getFullYear()} Swiftly, All rights reserved
          </p>
        </AnimatedContainer>

        <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:mt-8 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer delay={0.1 + index * 0.1} key={section.label}>
              <div className="mb-6 flex flex-col items-center md:mb-0 md:items-start">
                <h3 className="font-semibold text-center text-foreground text-xs md:text-left md:text-sm">
                  {section.label}
                </h3>
                <ul className="mt-3 flex flex-col items-center space-y-2 text-muted-foreground text-xs md:items-start md:text-sm md:mt-4">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        className="inline-flex items-center transition-all duration-300 hover:text-foreground cursor-pointer"
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        key={`${section.label}-${link.title}`}
                      >
                        {link.icon && (
                          <link.icon className="me-1 size-3.5 md:size-4" />
                        )}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>["className"];
  children: ReactNode;
};

function AnimatedContainer({
  className,
  delay = 0.1,
  children,
}: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      transition={{ delay, duration: 0.8 }}
      viewport={{ once: true }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
    >
      {children}
    </motion.div>
  );
}

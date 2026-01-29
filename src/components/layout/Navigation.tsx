"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Itinerary", href: "#itinerary" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-accent-navy/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative">
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold text-accent-navy">
                  Yiwu Business Study Trip
                </span>
                <span className="text-[13px] lg:text-[14px] leading-[1.5] tracking-[0.015em] text-accent-navy/70 font-normal mt-0.5">
                  by <span className="font-semibold text-accent-orange">CEL</span> × <span className="font-semibold text-accent-orange">IMB NYU Shanghai</span>, 09/2025
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[14px] lg:text-[15px] leading-[1.5] tracking-[0.01em] font-medium text-accent-navy/70 hover:text-accent-orange transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="px-6 py-2.5 bg-accent-orange text-white text-[14px] lg:text-[15px] leading-[1.5] tracking-[0.01em] font-medium rounded-full hover:bg-accent-orange/90 transition-all duration-200 hover:scale-105 inline-block"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-accent-navy"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-accent-navy/5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-[16px] lg:text-[17px] leading-[1.5] tracking-[0.01em] font-medium text-accent-navy/70 hover:text-accent-orange transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="block w-full mt-4 px-6 py-2.5 bg-accent-orange text-center text-white text-[14px] lg:text-[15px] leading-[1.5] tracking-[0.01em] font-medium rounded-full hover:bg-accent-orange/90 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}


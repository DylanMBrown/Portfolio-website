"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-ochre/30">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Logo size="sm" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          <div className="flex items-center gap-2 text-cream/60 text-xs font-mono">
            <kbd className="px-2 py-1 bg-charcoal border border-cream/20 rounded">
              ⌘K
            </kbd>
            <span>Open command</span>
          </div>
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-cream/80 hover:text-ochre transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Filter Toggle */}
        <button
          className="md:hidden text-cream hover:text-ochre transition-colors p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-ochre/30 overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg text-cream/90 hover:text-ochre py-2 px-4 rounded-lg hover:bg-white/5 transition-all text-center font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex justify-center text-cream/60 text-sm font-mono">
                <div className="flex items-center gap-2">
                  <span>TAP</span>
                  <kbd className="px-2 py-1 bg-charcoal border border-cream/20 rounded">
                    CMD+K
                  </kbd>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

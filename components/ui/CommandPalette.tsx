"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Clipboard,
  ExternalLink,
  Github,
  Mail,
  Monitor,
  Palette,
  FileText,
  Download,
} from "lucide-react";
import type { SocialLink } from "@/types";
import { socialLinks } from "@/lib/personal";

interface Command {
  id: string;
  label: string;
  shortcut: string;
  icon: React.ReactNode;
  action: () => void;
}

export function CommandPalette() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("Dylan.Brown127@tafensw.edu.au");
    setIsOpen(false);
  };

  const commands: Command[] = [
    {
      id: "projects",
      label: "> Go to Projects",
      shortcut: "⌘P",
      icon: <Monitor className="w-4 h-4" />,
      action: () => {
        router.push("/projects");
        setIsOpen(false);
      },
    },
    {
      id: "about",
      label: "> About Me",
      shortcut: "⌘A",
      icon: <FileText className="w-4 h-4" />,
      action: () => {
        router.push("/about");
        setIsOpen(false);
      },
    },
    {
      id: "contact",
      label: "> Contact",
      shortcut: "⌘C",
      icon: <Mail className="w-4 h-4" />,
      action: () => {
        router.push("/contact");
        setIsOpen(false);
      },
    },
    {
      id: "github",
      label: "> View Source",
      shortcut: "⌘G",
      icon: <Github className="w-4 h-4" />,
      action: () => {
        window.open("https://github.com/dylanbrown127", "_blank");
        setIsOpen(false);
      },
    },
    {
      id: "linkedin",
      label: "> LinkedIn",
      shortcut: "⌘L",
      icon: <ExternalLink className="w-4 h-4" />,
      action: () => {
        window.open("https://linkedin.com/in/dylan-brown-127", "_blank");
        setIsOpen(false);
      },
    },
    {
      id: "email",
      label: "> Copy Email",
      shortcut: "⌘E",
      icon: <Clipboard className="w-4 h-4" />,
      action: handleCopyEmail,
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="command-overlay"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="command-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              type="text"
              placeholder="Type a command..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="command-input"
              autoFocus
            />
            <div className="max-h-80 overflow-y-auto">
              {filteredCommands.map((cmd) => (
                <button
                  key={cmd.id}
                  className="command-item"
                  onClick={cmd.action}
                >
                  <span className="command-label">
                    <span className="command-icon mr-2">{cmd.icon}</span>
                    {cmd.label}
                  </span>
                  <kbd>{cmd.shortcut}</kbd>
                </button>
              ))}
              {filteredCommands.length === 0 && (
                <div className="py-4 text-center text-cream/60">
                  No commands found matching &quot;{search}&quot;
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

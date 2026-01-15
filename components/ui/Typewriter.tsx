"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
  words: string[];
  cursor?: boolean;
  speed?: number;
  delay?: number;
}

export function Typewriter({
  words,
  cursor = true,
  speed = 100,
  delay = 2000,
}: TypewriterProps) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];

    if (isDeleting) {
      if (charIndex > 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
        setCharIndex(0);
      } else {
        const timeout = setTimeout(() => {
          setText(currentWord.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, speed / 2);
        return () => clearTimeout(timeout);
      }
    } else {
      if (charIndex < currentWord.length) {
        const timeout = setTimeout(() => {
          setText(currentWord.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delay);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, index, words, speed, delay, isDeleting]);

  return (
    <span>
      {text}
      {cursor && <span className="typewriter-cursor">|</span>}
    </span>
  );
}

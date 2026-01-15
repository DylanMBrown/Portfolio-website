"use client";

import { useState, useEffect, useRef } from "react";

interface TerminalProps {
  title?: string;
  className?: string;
}

interface TerminalLine {
  input: string;
  output?: string;
  type?: "success" | "info" | "error";
}

export function Terminal({
  title = "bash — zsh",
  className = "",
}: TerminalProps) {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const welcomeLines: TerminalLine[] = [
      {
        input: "cat intro.txt",
        output: "Dylan Brown — Web Developer & IT Specialist",
        type: "success",
      },
      {
        input: "npm install --save-dev creativity",
        output: "✓ Added creativity@1.0.0",
        type: "success",
      },
      {
        input: "./build.sh",
        output: "✓ Portfolio compiled successfully",
        type: "success",
      },
      {
        input: "git status",
        output: "On branch main — 24 commits, 3 projects",
        type: "info",
      },
      {
        input: "cat skills.json",
        output:
          '{\n  "frontend": ["React", "Next.js", "TypeScript"],\n  "backend": ["Node.js", "Python"],\n  "tools": ["Git", "Docker"]\n}',
        type: "info",
      },
    ];

    let lineIndex = 0;
    const interval = setInterval(() => {
      if (lineIndex < welcomeLines.length) {
        setLines((prev) => [...prev, welcomeLines[lineIndex]]);
        lineIndex++;
      } else {
        clearInterval(interval);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot-red"></span>
          <span className="dot-yellow"></span>
          <span className="dot-green"></span>
        </div>
        <span className="terminal-title">{title}</span>
      </div>
      <div className="terminal-content" ref={terminalRef}>
        {lines.map((line, i) => (
          <div key={i} className="terminal-line">
            <span className="prompt">dylan@portfolio:~$</span>
            <span className="input">{line.input}</span>
            {line.output && (
              <pre
                className={`output ${line.type === "success"
                    ? "text-syntax-green"
                    : line.type === "error"
                      ? "text-syntax-pink"
                      : "text-syntax-gray"
                  }`}
              >
                {line.output}
              </pre>
            )}
          </div>
        ))}
        <div className="terminal-line active">
          <span className="prompt">dylan@portfolio:~$</span>
          <input
            className="input-input"
            value={currentLine}
            onChange={(e) => setCurrentLine(e.target.value)}
            placeholder="Type a command..."
          />
        </div>
      </div>
    </div>
  );
}

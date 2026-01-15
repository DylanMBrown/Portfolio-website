"use client";

import { useState } from "react";

interface Skill {
  name: string;
  level: number;
  icon?: string;
  category: "frontend" | "backend" | "ai" | "tools";
}

interface CategoryData {
  color: string;
  skills: Skill[];
}

type CategorySkills = Record<string, CategoryData>;
type CategoryKey = "frontend" | "backend" | "ai" | "tools";

export function SkillsMatrix() {
  const [activeTab, setActiveTab] = useState<CategoryKey>("frontend");

  const skillsMatrix: CategorySkills = {
    frontend: {
      color: "text-syntax-blue",
      skills: [
        { name: "React", level: 90, icon: "⚛️", category: "frontend" },
        { name: "Next.js", level: 85, icon: "▲", category: "frontend" },
        { name: "TypeScript", level: 88, icon: "📘", category: "frontend" },
        { name: "Tailwind CSS", level: 92, icon: "🎨", category: "frontend" },
        { name: "Framer Motion", level: 78, icon: "🎬", category: "frontend" },
      ],
    },
    backend: {
      color: "text-syntax-green",
      skills: [
        { name: "Node.js", level: 82, icon: "🟢", category: "backend" },
        { name: "Python", level: 75, icon: "🐍", category: "backend" },
        { name: "PostgreSQL", level: 78, icon: "🐘", category: "backend" },
        { name: "Express", level: 80, icon: "⚡", category: "backend" },
      ],
    },
    ai: {
      color: "text-syntax-purple",
      skills: [
        { name: "OpenAI API", level: 70, icon: "🤖", category: "ai" },
        { name: "LangChain", level: 65, icon: "🦜", category: "ai" },
        { name: "Vector DB", level: 60, icon: "📊", category: "ai" },
      ],
    },
    tools: {
      color: "text-syntax-orange",
      skills: [
        { name: "Git", level: 90, icon: "📦", category: "tools" },
        { name: "Docker", level: 72, icon: "🐳", category: "tools" },
        { name: "AWS", level: 68, icon: "☁️", category: "tools" },
        { name: "Linux", level: 75, icon: "🐧", category: "tools" },
      ],
    },
  };

  const categoryLabels: Record<CategoryKey, string> = {
    frontend: "Frontend",
    backend: "Backend",
    ai: "AI/ML",
    tools: "Tools",
  };

  return (
    <div className="skills-matrix">
      <div className="skills-tabs">
        {(Object.keys(skillsMatrix) as CategoryKey[]).map((tab) => (
          <button
            key={tab}
            className={`skill-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {categoryLabels[tab]}
          </button>
        ))}
      </div>
      <div className="skills-content">
        <div className="code-block">
          <pre>
            <code className="text-syntax-gray">{`const skills = {`}</code>
          </pre>
          {skillsMatrix[activeTab].skills.map((skill, i) => (
            <div key={skill.name} className="skill-row">
              <span className="text-syntax-cyan"> {`"${skill.name}"`}</span>
              <span className="text-syntax-pink">:</span>
              <span className={`skill-level ${skillsMatrix[activeTab].color}`}>
                {skill.level}%
              </span>
              <div className="progress-bar">
                <div
                  className={`progress-fill ${skillsMatrix[activeTab].color}`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              {skill.icon && <span className="skill-icon">{skill.icon}</span>}
              <span className="text-syntax-gray">
                {i < skillsMatrix[activeTab].skills.length - 1 ? "," : ""}
              </span>
            </div>
          ))}
          <pre>
            <code className="text-syntax-gray">{`}`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

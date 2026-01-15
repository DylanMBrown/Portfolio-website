"use client";

import { Award } from "lucide-react";

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  xp?: number;
}

export function Achievements() {
  const achievements: Achievement[] = [
    {
      id: "first-commit",
      name: "Baby Steps",
      description: "First commit pushed",
      icon: "👶",
      unlocked: true,
      xp: 50,
    },
    {
      id: "10-projects",
      name: "Project Master",
      description: "10+ projects completed",
      icon: "🚀",
      unlocked: true,
      xp: 200,
    },
    {
      id: "full-stack",
      name: "Full Stack",
      description: "Deployed full-stack application",
      icon: "🔄",
      unlocked: true,
      xp: 150,
    },
    {
      id: "ai-built",
      name: "AI Pioneer",
      description: "Built AI/LLM project",
      icon: "🤖",
      unlocked: true,
      xp: 300,
    },
    {
      id: "first-star",
      name: "Star Catcher",
      description: "Received first GitHub star",
      icon: "⭐",
      unlocked: true,
      xp: 100,
    },
    {
      id: "maintainer",
      name: "Maintainer",
      description: "5000+ package downloads",
      icon: "📦",
      unlocked: false,
      xp: 500,
    },
    {
      id: "speaker",
      name: "Tech Speaker",
      description: "Spoken at tech conference",
      icon: "🎤",
      unlocked: false,
      xp: 400,
    },
    {
      id: "open-source",
      name: "Open Source Hero",
      description: "1000+ GitHub followers",
      icon: "🦸",
      unlocked: false,
      xp: 600,
    },
  ];

  const unlockedCount = achievements.filter((a) => a.unlocked).length;
  const totalXP = achievements
    .filter((a) => a.unlocked)
    .reduce((sum, a) => sum + (a.xp || 0), 0);

  return (
    <div className="achievements-section">
      <div className="achievements-header">
        <h2 className="text-2xl font-bold text-cream mb-2">Achievements</h2>
        <div className="achievements-stats">
          <span className="stat-badge">
            {unlockedCount} / {achievements.length} Unlocked
          </span>
          <span className="xp-badge">+{totalXP} XP Earned</span>
        </div>
      </div>
      <div className="achievements-grid">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`achievement-card ${achievement.unlocked ? "unlocked" : "locked"}`}
          >
            <div className="achievement-icon-wrapper">
              <span className="achievement-icon">{achievement.icon}</span>
              {!achievement.unlocked && <div className="lock-overlay">🔒</div>}
            </div>
            <div className="achievement-info">
              <h4 className="achievement-name">{achievement.name}</h4>
              <p className="achievement-desc">{achievement.description}</p>
              {achievement.unlocked && (
                <span className="achievement-xp font-mono text-xs">
                  +{achievement.xp} XP
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

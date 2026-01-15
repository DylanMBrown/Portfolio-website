"use client";

import { useState, useEffect } from "react";
import { Github, Code, Award, Zap } from "lucide-react";

interface StatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

function Stat({ value, label, icon }: StatProps) {
  return (
    <div className="stat">
      <span className="stat-icon">{icon}</span>
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export function PlayerStats() {
  const [xp, setXp] = useState(2450);
  const [level, setLevel] = useState(7);
  const [maxXp, setMaxXp] = useState(3800);

  useEffect(() => {
    const interval = setInterval(() => {
      if (xp < maxXp) {
        setXp((prev) => prev + 1);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [xp, maxXp]);

  const xpPercentage = (xp / maxXp) * 100;

  return (
    <div className="player-card">
      <div className="player-header">
        <div className="player-avatar">
          <Code className="w-8 h-8 text-cream" />
        </div>
        <div className="player-info">
          <h3 className="text-lg font-bold text-cream">Dylan Brown</h3>
          <span className="player-level text-sm font-mono">
            Level {level} Developer
          </span>
        </div>
      </div>
      <div className="xp-bar">
        <div className="xp-fill" style={{ width: `${xpPercentage}%` }}>
          <span className="xp-text font-mono text-xs">
            {xp.toLocaleString()} / {maxXp.toLocaleString()} XP
          </span>
        </div>
      </div>
      <div className="stats-grid">
        <Stat value="24" label="Projects" icon={<Zap className="w-5 h-5" />} />
        <Stat
          value="847"
          label="Commits"
          icon={<Github className="w-5 h-5" />}
        />
        <Stat
          value="12"
          label="Achievements"
          icon={<Award className="w-5 h-5" />}
        />
      </div>
    </div>
  );
}

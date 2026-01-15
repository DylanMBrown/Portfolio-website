import type { Skill, TechCategory } from "@/types";

interface SkillsSectionProps {
  skills: Skill[];
}

const categoryNames: Record<TechCategory, string> = {
  frontend: "Frontend",
  backend: "Backend",
  devops: "DevOps",
  tools: "Tools",
  other: "Other",
};

const categoryOrder: TechCategory[] = [
  "frontend",
  "backend",
  "devops",
  "tools",
  "other",
];

export function SkillsSection({ skills }: SkillsSectionProps) {
  const groupedSkills = categoryOrder.reduce(
    (acc, category) => {
      acc[category] = skills.filter((skill) => skill.category === category);
      return acc;
    },
    {} as Record<TechCategory, Skill[]>,
  );

  return (
    <div className="space-y-8">
      {categoryOrder.map((category) => {
        const categorySkills = groupedSkills[category];
        if (categorySkills.length === 0) return null;

        return (
          <div key={category}>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {categoryNames[category]}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categorySkills.map((skill) => (
                <div
                  key={skill.id}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-900 dark:text-white font-medium">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.proficiency}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

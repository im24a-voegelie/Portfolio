'use client';

import { motion } from 'framer-motion';

export default function SkillsSlider({ skills }) {
  const SkillItem = ({ skill, delay }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
          {skill.name}
        </span>
        <span className="text-xs font-semibold text-violet-600 dark:text-violet-400">
          {skill.level}%
        </span>
      </div>
      <div className="h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ delay: delay + 0.2, duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-violet-600 to-violet-500 dark:from-violet-500 dark:to-violet-400 rounded-full"
        />
      </div>
    </motion.div>
  );

  return (
    <div className="space-y-6">
      {skills.map((skillGroup, groupIdx) => (
        <div key={groupIdx} className="space-y-4">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            {skillGroup.category}
          </h3>
          <div className="space-y-4 pl-2">
            {skillGroup.items.map((skill, skillIdx) => (
              <SkillItem
                key={skillIdx}
                skill={skill}
                delay={groupIdx * 0.1 + skillIdx * 0.05}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

'use client';

import { 
  FiCode,
  FiDatabase,
  FiUsers,
  FiTarget 
} from 'react-icons/fi';
import { 
  SiPython, 
  SiJavascript,
  SiMysql, 
  SiMongodb,
  SiHtml5
} from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';

export default function SkillsWithIcons() {
  const skills = [
    {
      category: 'Programmiersprachen',
      icon: FiCode,
      items: [
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' }
      ]
    },
    {
      category: 'Webentwicklung',
      icon: null,
      items: [
        { name: 'HTML', icon: SiHtml5, color: '#E34C26' },
        { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' }
      ]
    },
    {
      category: 'Datenbanken',
      icon: FiDatabase,
      items: [
        { name: 'MySQL', icon: SiMysql, color: '#00758F' },
        { name: 'MongoDB', icon: SiMongodb, color: '#13AA52' }
      ]
    },
    {
      category: 'Stärken',
      icon: FiTarget,
      items: [
        { name: 'Teamfähigkeit' },
        { name: 'Problemlösung' },
        { name: 'Weiterentwicklung' }
      ]
    }
  ];

  return (
    <div className="space-y-4 rounded-xl border border-violet-300 bg-gradient-to-br from-white to-violet-50 p-5 text-sm shadow-sm dark:border-violet-800 dark:bg-gradient-to-br dark:from-violet-950/40 dark:to-violet-900/20">
      {skills.map((skill) => (
        <div key={skill.category}>
          <h3 className="font-medium text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
            {skill.icon && <skill.icon size={16} className="text-violet-600 dark:text-violet-400" />}
            {skill.category}
          </h3>
          {skill.items.some(item => item.icon) ? (
            <div className="mt-2 flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-1.5 px-2 py-1.5 rounded-md bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800"
                >
                  {item.icon && (
                    <item.icon 
                      size={16} 
                      style={{ color: item.color }}
                      title={item.name}
                    />
                  )}
                  <span className="text-xs text-zinc-700 dark:text-zinc-300">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-1 text-zinc-700 dark:text-zinc-300">
              {skill.items.map(item => item.name).join(', ')}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

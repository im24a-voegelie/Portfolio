'use client';

import { ScrollFadeIn, StaggerContainer, StaggerChild } from "@/components/animations/ScrollFadeIn";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import Card, { CardContent, CardHeader } from "@/components/ui/card";
import SkillsCarousel from "@/components/SkillsCarousel";
import { useTranslation } from "@/components/LanguageProvider";

export default function AboutPage() {
  const { t } = useTranslation();

  const skills = [
    {
      category: t.skillLabels.programming,
      items: [
        { name: "Python" },
        { name: "JavaScript" },
        { name: "Java" },
      ],
    },
    {
      category: t.skillLabels.web,
      items: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "React" },
        { name: "Next.js" },
        { name: "Tailwind CSS" },
      ],
    },
    {
      category: t.skillLabels.db,
      items: [
        { name: "MySQL" },
        { name: "MongoDB" },
      ],
    },
    {
      category: t.skillLabels.tools,
      items: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "VS Code" },
        { name: "Windows" },
      ],
    },
  ];

  const milestones = t.about.milestones;

  return (
    <div className="flex min-h-screen justify-center">
      <main className="w-full max-w-4xl px-6 py-12 sm:px-10 sm:py-16">
        {/* Hero */}
        <ScrollFadeIn direction="down" duration={0.8}>
          <section className="mb-16">
            <h1 className="text-hero-md bg-gradient-to-r from-violet-900 to-violet-700 dark:from-violet-400 dark:to-violet-600 bg-clip-text text-transparent">
              {t.about.heroTitle}
            </h1>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-lg">
              {t.about.heroSubtitle}
            </p>
          </section>
        </ScrollFadeIn>

        <div className="space-y-12">
          {/* Personal Story */}
          <ScrollFadeIn delay={0.1}>
            <section>
              <h2 className="text-section-md text-zinc-900 dark:text-zinc-50 flex items-center gap-3 mb-6">
                <span className="inline-block w-1 h-8 bg-gradient-to-b from-violet-900 to-violet-700 rounded-full"></span>
                {t.about.storyHeading}
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
                    {t.about.storyParagraphs.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>
          </ScrollFadeIn>

          {/* Skills */}
          <ScrollFadeIn delay={0.2}>
            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 flex items-center gap-3 mb-6">
                <span className="inline-block w-1 h-8 bg-gradient-to-b from-violet-900 to-violet-700 rounded-full"></span>
                {t.about.skillsHeading}
              </h2>
              <SkillsCarousel skills={skills} />
            </section>
          </ScrollFadeIn>

          {/* Strengths */}
          <ScrollFadeIn delay={0.3}>
            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 flex items-center gap-3 mb-6">
                <span className="inline-block w-1 h-8 bg-gradient-to-b from-violet-900 to-violet-700 rounded-full"></span>
                {t.about.strengthsHeading}
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {t.about.strengths.map((strength, idx) => (
                      <div key={idx}>
                        <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                          {strength.title}
                        </h3>
                        <p className="text-sm text-zinc-700 dark:text-zinc-300">
                          {strength.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>
          </ScrollFadeIn>

          {/* Journey Timeline */}
          <ScrollFadeIn delay={0.4}>
            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 flex items-center gap-3 mb-6">
                <span className="inline-block w-1 h-8 bg-gradient-to-b from-violet-900 to-violet-700 rounded-full"></span>
                {t.about.journeyHeading}
              </h2>
              <div className="space-y-6">
                <StaggerContainer delay={0.5}>
                  {milestones.map((milestone, idx) => (
                    <StaggerChild key={idx}>
                      <AnimatedCard delay={idx * 0.1}>
                        <div className="flex gap-6">
                          <div className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center text-white font-bold flex-shrink-0">
                              {milestone.year.slice(-2)}
                            </div>
                            {idx < milestones.length - 1 && (
                              <div className="w-1 h-16 bg-gradient-to-b from-violet-500 to-transparent mt-2"></div>
                            )}
                          </div>
                          <div className="pb-6">
                            <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-50">
                              {milestone.title}
                            </h3>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                              {milestone.year}
                            </p>
                            <p className="text-zinc-700 dark:text-zinc-300 mt-2">
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                      </AnimatedCard>
                    </StaggerChild>
                  ))}
                </StaggerContainer>
              </div>
            </section>
          </ScrollFadeIn>

          {/* Contact */}
          <ScrollFadeIn delay={0.6}>
            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 flex items-center gap-3 mb-6">
                <span className="inline-block w-1 h-8 bg-gradient-to-b from-violet-900 to-violet-700 rounded-full"></span>
                {t.about.contactHeading}
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-zinc-700 dark:text-zinc-300 mb-6">
                    {t.about.contactIntro}
                  </p>
                  <div className="flex flex-col gap-3">
                    <a
                      href="mailto:ennio.voegeli@gmx.ch"
                      className="inline-flex items-center gap-3 px-4 py-3 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                    >
                      <span className="text-lg">✉️</span>
                      <div>
                        <p className="font-medium text-zinc-900 dark:text-zinc-50">{t.about.emailLabel}</p>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">ennio.voegeli@gmx.ch</p>
                      </div>
                    </a>
                    <a
                      href="https://github.com/im24a-voegelie"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-4 py-3 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                    >
                      <span className="text-lg">GitHub</span>
                      <div>
                        <p className="font-medium text-zinc-900 dark:text-zinc-50">{t.about.githubLabel}</p>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">@im24a-voegelie</p>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </section>
          </ScrollFadeIn>
        </div>
      </main>
    </div>
  );
}

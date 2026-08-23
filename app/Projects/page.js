'use client';

import Link from 'next/link';
import Card, { CardHeader } from "@/components/ui/card";
import Button from "@/components/ui/button";
import Badge from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { ScrollFadeIn, StaggerContainer, StaggerChild } from "@/components/animations/ScrollFadeIn";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { useTranslation } from "@/components/LanguageProvider";

export default function ProjectsPage() {
  const { t, language } = useTranslation();

  return (
    <div className="flex min-h-screen justify-center">
      <main className="w-full max-w-4xl px-6 py-12 sm:px-10 sm:py-16">
        {/* Header */}
        <ScrollFadeIn direction="down" duration={0.8} className="mb-12">
          <header>
            <h1 className="text-hero-md bg-gradient-to-r from-violet-900 to-violet-700 dark:from-violet-400 dark:to-violet-600 bg-clip-text text-transparent">
              {t.projectsPage.heading}
            </h1>
            <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400 text-lg">
              {t.projectsPage.subtitle}
            </p>
          </header>
        </ScrollFadeIn>

        {/* Projects Grid */}
        <StaggerContainer delay={0.2}>
          <div className="grid gap-6 md:grid-cols-1">
            {projects.length > 0 ? (
              projects.map((project, idx) => (
                <StaggerChild key={project.id}>
                  <AnimatedCard delay={idx * 0.1}>
                    <Link href={`/Projects/${project.id}`}>
                      <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                          <div className="flex items-center justify-between gap-4">
                            <div>
                              <h2 className="text-subsection text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
                                {project.title[language]}
                                {project.wip && <Badge variant="warning">{t.wipBadge}</Badge>}
                              </h2>
                              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                                <span className="inline-block mr-2 w-2 h-2 bg-gradient-to-r from-violet-900 to-violet-700 rounded-full"></span>
                                {project.type[language]}
                              </p>
                              <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-2">
                                {project.description[language]}
                              </p>
                            </div>
                            <span className="text-2xl flex-shrink-0">→</span>
                          </div>
                        </CardHeader>
                      </Card>
                    </Link>
                  </AnimatedCard>
                </StaggerChild>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  {t.projectsPage.empty}
                </p>
              </div>
            )}
          </div>
        </StaggerContainer>

        {/* CTA */}
        <ScrollFadeIn delay={0.5} className="mt-16 pt-12 border-t border-zinc-200 dark:border-zinc-800">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
              {t.projectsPage.ctaHeading}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-md mx-auto">
              {t.projectsPage.ctaSubtitle}
            </p>
            <Link href="/about">
              <Button variant="primary">{t.projectsPage.ctaButton}</Button>
            </Link>
          </div>
        </ScrollFadeIn>
      </main>
    </div>
  );
}

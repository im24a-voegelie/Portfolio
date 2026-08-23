'use client';

import { useState } from 'react';
import Link from "next/link";
import Card, { CardHeader, CardContent } from "@/components/ui/card";
import Button from "@/components/ui/button";
import { ScrollFadeIn, StaggerContainer, StaggerChild } from "@/components/animations/ScrollFadeIn";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { SnakeGame } from "@/components/games/SnakeGame";
import Modal from "@/components/ui/modal";
import SkillsWithIcons from "@/components/SkillsWithIcons";
import { useTranslation } from "@/components/LanguageProvider";
import { projects } from "@/data/projects";

const featuredProject = projects.find((project) => project.id === 4);

export default function Home() {
  const [showGame, setShowGame] = useState(false);
  const { t, language } = useTranslation();

  return (
    <div className="flex min-h-screen justify-center">
      <main className="w-full max-w-4xl px-6 py-12 sm:px-10 sm:py-16">
        {/* Hero */}
        <ScrollFadeIn direction="down" duration={0.8} className="mb-12">
          <section className="flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                {t.home.badge}
              </p>
              <h1 className="mt-3 text-hero-lg bg-gradient-to-r from-violet-900 to-violet-700 dark:from-violet-400 dark:to-violet-600 bg-clip-text text-transparent">
                {t.home.name}
              </h1>
              <p className="mt-3 max-w-xl text-zinc-600 dark:text-zinc-400">
                {t.home.tagline}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <Link href="#projekte">
                  <Button variant="primary" size="md">
                    {t.home.viewProjects}
                  </Button>
                </Link>
                <Link href="#ueber-mich">
                  <Button variant="secondary" size="md">
                    {t.home.aboutMe}
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
          {/* Über mich + Projekte */}
          <div className="space-y-8">
            {/* Projekte (Preview) */}
            <ScrollFadeIn delay={0.3} className="w-full">
              <section id="projekte" className="pt-2">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h2 className="text-section-lg text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
                    <span className="inline-block w-1 h-6 bg-gradient-to-b from-violet-900 to-violet-700 rounded-full"></span>
                    {t.home.projectsHeading}
                  </h2>
                  <Link
                    href="/Projects"
                    className="text-sm font-medium text-violet-900 underline-offset-4 hover:text-violet-800 hover:underline dark:text-violet-400 dark:hover:text-violet-300 transition-colors"
                  >
                    {t.home.allProjects}
                  </Link>
                </div>

                <AnimatedCard>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <Link href={`/Projects/${featuredProject.id}`}>
                      <CardHeader className="cursor-pointer">
                        <div className="flex flex-col gap-1">
                          <h3 className="text-subsection text-zinc-900 dark:text-zinc-50">
                            {featuredProject.title[language]}
                          </h3>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            {featuredProject.description[language]}
                          </p>
                        </div>
                      </CardHeader>
                    </Link>
                    <CardContent className="pt-0 flex flex-wrap gap-3">
                      {featuredProject.links.github && (
                        <a
                          href={featuredProject.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg transition-colors text-center text-sm font-medium"
                        >
                          {t.projectDetail.githubRepo}
                        </a>
                      )}
                      {featuredProject.links.demo && (
                        <a
                          href={featuredProject.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors text-center text-sm font-medium"
                        >
                          {t.projectDetail.demo}
                        </a>
                      )}
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </section>
            </ScrollFadeIn>
          </div>

          {/* Skills / Meta */}
          <ScrollFadeIn delay={0.4} direction="right" className="w-full">
            <aside className="space-y-6">
              <section>
                <h2 className="text-section-md text-violet-900 dark:text-violet-400">
                  {t.home.skillsHeading}
                </h2>
                <SkillsWithIcons />
              </section>
            </aside>
          </ScrollFadeIn>
        </div>

        {/* Game Modal */}
        {showGame && (
          <Modal onClose={() => setShowGame(false)}>
            <SnakeGame onClose={() => setShowGame(false)} />
          </Modal>
        )}
      </main>
    </div>
  );
}

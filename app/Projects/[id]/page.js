'use client';

import Link from 'next/link';
import { projects } from '@/data/projects';
import { ScrollFadeIn, StaggerContainer, StaggerChild } from '@/components/animations/ScrollFadeIn';
import Button from '@/components/ui/button';
import Card, { CardContent, CardHeader } from '@/components/ui/card';
import Badge from '@/components/ui/badge';

export default function ProjectPage({ params }) {
  const { id } = params;
  const projectId = parseInt(id, 10);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="flex min-h-screen justify-center items-center">
        <main className="w-full max-w-4xl px-6 py-12 text-center">
          <h1 className="text-section-lg text-zinc-900 dark:text-zinc-50 mb-4">
            Projekt nicht gefunden
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            Das gesuchte Projekt existiert leider nicht.
          </p>
          <Link href="/Projects">
            <Button variant="primary">Zurück zu allen Projekten</Button>
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen justify-center">
      <main className="w-full max-w-4xl px-6 py-12 sm:px-10 sm:py-16">
        {/* Back Button */}
        <ScrollFadeIn direction="left" duration={0.6} className="mb-8">
          <Link href="/Projects" className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 transition-colors">
            ← Zurück zu Projekten
          </Link>
        </ScrollFadeIn>

        {/* Hero Section */}
        <ScrollFadeIn direction="down" duration={0.8} className="mb-12">
          <section>
            <div className="mb-4">
              <Badge variant="primary">{project.type}</Badge>
            </div>
            <h1 className="text-hero-md bg-gradient-to-r from-violet-900 to-violet-700 dark:from-violet-400 dark:to-violet-600 bg-clip-text text-transparent mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>
          </section>
        </ScrollFadeIn>

        <div className="grid gap-8 lg:grid-cols-3 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Full Description */}
            <ScrollFadeIn delay={0.2}>
              <section>
                <h2 className="text-section-md text-zinc-900 dark:text-zinc-50 flex items-center gap-3 mb-4">
                  <span className="inline-block w-1 h-8 bg-gradient-to-b from-violet-900 to-violet-700 rounded-full"></span>
                  Projekt Details
                </h2>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                      {project.fullDescription}
                    </p>
                  </CardContent>
                </Card>
              </section>
            </ScrollFadeIn>

            {/* Learnings */}
            <ScrollFadeIn delay={0.3}>
              <section>
                <h2 className="text-section-md text-zinc-900 dark:text-zinc-50 flex items-center gap-3 mb-4">
                  <span className="inline-block w-1 h-8 bg-gradient-to-b from-violet-900 to-violet-700 rounded-full"></span>
                  Meine Lernerfahrungen
                </h2>
                <StaggerContainer delay={0.4}>
                  <div className="space-y-3">
                    {project.learnings.map((learning, idx) => (
                      <StaggerChild key={idx}>
                        <Card>
                          <CardContent className="pt-4">
                            <div className="flex gap-3">
                              <span className="text-violet-500 font-bold flex-shrink-0 text-lg">
                                ✓
                              </span>
                              <p className="text-zinc-700 dark:text-zinc-300">
                                {learning}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </StaggerChild>
                    ))}
                  </div>
                </StaggerContainer>
              </section>
            </ScrollFadeIn>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <ScrollFadeIn delay={0.4} direction="right">
              <section>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-4 flex items-center gap-2">
                  <span className="inline-block w-1 h-6 bg-gradient-to-b from-violet-900 to-violet-700 rounded-full"></span>
                  Technologien
                </h3>
                <Card>
                  <CardContent className="pt-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>
            </ScrollFadeIn>

            {/* Links */}
            <ScrollFadeIn delay={0.5} direction="right">
              <section>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-4 flex items-center gap-2">
                  <span className="inline-block w-1 h-6 bg-gradient-to-b from-violet-900 to-violet-700 rounded-full"></span>
                  Links
                </h3>
                <Card>
                  <CardContent className="pt-4 space-y-2">
                    {project.links.github ? (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg transition-colors text-center text-sm font-medium"
                      >
                        GitHub Repository
                      </a>
                    ) : (
                      <div className="px-4 py-2 bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 rounded-lg text-center text-sm font-medium opacity-50">
                        GitHub Link nicht verfügbar
                      </div>
                    )}
                    {project.links.demo ? (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors text-center text-sm font-medium"
                      >
                        Live Demo
                      </a>
                    ) : (
                      <div className="px-4 py-2 bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 rounded-lg text-center text-sm font-medium opacity-50">
                        Demo nicht verfügbar
                      </div>
                    )}
                  </CardContent>
                </Card>
              </section>
            </ScrollFadeIn>
          </div>
        </div>

        {/* CTA */}
        <ScrollFadeIn delay={0.6}>
          <section className="bg-gradient-to-r from-violet-900/10 to-violet-700/10 dark:from-violet-900/30 dark:to-violet-700/30 border border-violet-200 dark:border-violet-800 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
              Interessiert an meiner Arbeit?
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              Sieh dir alle meine Projekte an oder erfahre mehr über mich.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/Projects">
                <Button variant="primary">Alle Projekte</Button>
              </Link>
              <Link href="/about">
                <Button variant="secondary">Über mich</Button>
              </Link>
            </div>
          </section>
        </ScrollFadeIn>
      </main>
    </div>
  );
}

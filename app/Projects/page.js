'use client';

import Link from 'next/link';
import Card, { CardContent, CardHeader } from "@/components/ui/card";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import { projects } from "@/data/projects";
import { ScrollFadeIn, StaggerContainer, StaggerChild } from "@/components/animations/ScrollFadeIn";
import { AnimatedCard } from "@/components/ui/AnimatedCard";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen justify-center">
      <main className="w-full max-w-4xl px-6 py-12 sm:px-10 sm:py-16">
        {/* Header */}
        <ScrollFadeIn direction="down" duration={0.8} className="mb-12">
          <header>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-violet-900 to-violet-700 dark:from-violet-400 dark:to-violet-600 bg-clip-text text-transparent">
              Projekte
            </h1>
            <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400 text-lg">
              Eine Auswahl meiner bisherigen Arbeiten mit Fokus auf Webentwicklung
              und praxisnahe Softwareprojekte. Klicke auf ein Projekt um mehr zu erfahren.
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
                          <div className="flex flex-col gap-3">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                  {project.title}
                                </h2>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                                  <span className="inline-block mr-2 w-2 h-2 bg-gradient-to-r from-violet-900 to-violet-700 rounded-full"></span>
                                  {project.type}
                                </p>
                              </div>
                              <span className="text-2xl">→</span>
                            </div>
                            <p className="text-sm text-zinc-600 dark:text-zinc-300">
                              {project.description}
                            </p>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-4">
                            {project.fullDescription}
                          </p>

                          {/* Technologies */}
                          {project.technologies && project.technologies.length > 0 && (
                            <div className="mb-4">
                              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2">
                                Technologien
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, index) => (
                                  <Badge key={index} variant="secondary">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Learnings */}
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2">
                              Wichtige Lernerfahrungen
                            </p>
                            <ul className="list-disc space-y-1 pl-5 text-xs text-zinc-700 dark:text-zinc-300">
                              {project.learnings.slice(0, 2).map((learning, index) => (
                                <li key={index}>{learning}</li>
                              ))}
                              {project.learnings.length > 2 && (
                                <li className="text-violet-600 dark:text-violet-400">
                                  +{project.learnings.length - 2} weitere
                                </li>
                              )}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </AnimatedCard>
                </StaggerChild>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  Keine Projekte verfügbar. Bald mehrere hinzufügen!
                </p>
              </div>
            )}
          </div>
        </StaggerContainer>

        {/* CTA */}
        <ScrollFadeIn delay={0.5} className="mt-16 pt-12 border-t border-zinc-200 dark:border-zinc-800">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
              Möchte mehr über mich erfahren?
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-md mx-auto">
              Sieh dir mein Profil an, um mehr über meine Fähigkeiten und Leidenschaft für Softwareentwicklung zu erfahren.
            </p>
            <Link href="/about">
              <Button variant="primary">Über mich</Button>
            </Link>
          </div>
        </ScrollFadeIn>
      </main>
    </div>
  );
}

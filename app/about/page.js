'use client';

import { ScrollFadeIn, StaggerContainer, StaggerChild } from "@/components/animations/ScrollFadeIn";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import Card, { CardContent, CardHeader } from "@/components/ui/card";

export default function AboutPage() {
  const skills = [
    {
      category: "Programmiersprachen",
      items: ["Python", "JavaScript", "Java"],
    },
    {
      category: "Webentwicklung",
      items: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS"],
    },
    {
      category: "Datenbanken",
      items: ["MySQL", "MongoDB", "Firebase"],
    },
    {
      category: "Tools & Plattformen",
      items: ["Git", "GitHub", "VS Code", "Linux", "Windows"],
    },
  ];

  const milestones = [
    {
      year: "2024",
      title: "Informatik Mittelschule",
      description: "Beginn der Ausbildung zum Applikationsentwickler an der Kantonsschule Hottingen",
    },
    {
      year: "2024",
      title: "Hackathon - IMS Grades",
      description: "Entwicklung einer Webapplikation zur Notenberechnung und -anzeige",
    },
    {
      year: "2025",
      title: "Kontinuierliche Weiterentwicklung",
      description: "Vertiefung von React, Next.js und erweiterte JavaScript-Konzepte",
    },
  ];

  return (
    <div className="flex min-h-screen justify-center">
      <main className="w-full max-w-4xl px-6 py-12 sm:px-10 sm:py-16">
        {/* Hero */}
        <ScrollFadeIn direction="down" duration={0.8}>
          <section className="mb-16">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight bg-gradient-to-r from-violet-900 to-violet-700 dark:from-violet-400 dark:to-violet-600 bg-clip-text text-transparent">
              Über mich
            </h1>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-lg">
              Lerne mehr über Ennio Vögeli, einen 17-jährigen Informatik-Schüler mit Leidenschaft für Softwareentwicklung und Innovation.
            </p>
          </section>
        </ScrollFadeIn>

        <div className="space-y-12">
          {/* Personal Story */}
          <ScrollFadeIn delay={0.1}>
            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 flex items-center gap-3 mb-6">
                <span className="inline-block w-1 h-8 bg-gradient-to-b from-violet-900 to-violet-700 rounded-full"></span>
                Meine Geschichte
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
                    <p>
                      Mein Name ist Ennio Vögeli und ich bin 17 Jahre alt. Seit meiner Kindheit habe ich eine tiefe Faszination für Technologie und Informatik. Mein Vater arbeitet ebenfalls in diesem Bereich, was meinen Weg geprägt hat und mich inspiriert, mein bestes zu geben.
                    </p>
                    <p>
                      Aktuell besuche ich die Informatik Mittelschule an der Kantonsschule Hottingen, eine spezialisierte Ausbildung zum Applikationsentwickler. In dieser Zeit entwickle ich nicht nur technische Fähigkeiten, sondern lerne auch wichtige Soft Skills wie Teamfähigkeit, Problemlösungsfähigkeiten und Hartnäckigkeit.
                    </p>
                    <p>
                      Was mich besonders motiviert, ist die Möglichkeit, mit Code reale Probleme zu lösen. Ich liebe es, an Projekten zu arbeiten, bei denen ich neueste Technologien einsetzen und meine Kreativität ausleben kann. Gleichzeitig bin ich ein Verfechter von sauberem, wartbarem Code und Best Practices in der Softwareentwicklung.
                    </p>
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
                Fähigkeiten & Kenntnisse
              </h2>
              <StaggerContainer delay={0.3}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {skills.map((skillGroup, idx) => (
                    <StaggerChild key={idx}>
                      <AnimatedCard delay={idx * 0.1}>
                        <Card>
                          <CardHeader>
                            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                              {skillGroup.category}
                            </h3>
                          </CardHeader>
                          <CardContent>
                            <div className="flex flex-wrap gap-2">
                              {skillGroup.items.map((skill, skillIdx) => (
                                <span
                                  key={skillIdx}
                                  className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-900 dark:text-violet-300 rounded-full text-sm font-medium"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </AnimatedCard>
                    </StaggerChild>
                  ))}
                </div>
              </StaggerContainer>
            </section>
          </ScrollFadeIn>

          {/* Strengths */}
          <ScrollFadeIn delay={0.3}>
            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 flex items-center gap-3 mb-6">
                <span className="inline-block w-1 h-8 bg-gradient-to-b from-violet-900 to-violet-700 rounded-full"></span>
                Meine Stärken
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                        🎯 Fokussiert & Zielorientiert
                      </h3>
                      <p className="text-sm text-zinc-700 dark:text-zinc-300">
                        Ich setze mir klare Ziele und arbeite systematisch daran, diese zu erreichen.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                        🤝 Teamfähig
                      </h3>
                      <p className="text-sm text-zinc-700 dark:text-zinc-300">
                        Gute Kommunikation und Zusammenarbeit sind für erfolgreiche Projekte essentiell.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                        💪 Hartnäckigkeit
                      </h3>
                      <p className="text-sm text-zinc-700 dark:text-zinc-300">
                        Bei Herausforderungen gebe ich nicht auf, sondern suche nach kreativen Lösungen.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                        📚 Lernbereitschaft
                      </h3>
                      <p className="text-sm text-zinc-700 dark:text-zinc-300">
                        Die Tech-Welt entwickelt sich schnell. Ich liebe es, Neues zu lernen.
                      </p>
                    </div>
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
                Mein Weg
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
        </div>
      </main>
    </div>
  );
}

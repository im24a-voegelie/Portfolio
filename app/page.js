'use client';

import { useState } from 'react';
import Link from "next/link";
import Card, { CardContent, CardHeader } from "@/components/ui/card";
import Button from "@/components/ui/button";
import { ScrollFadeIn, StaggerContainer, StaggerChild } from "@/components/animations/ScrollFadeIn";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { SnakeGame } from "@/components/games/SnakeGame";
import Modal from "@/components/ui/modal";

export default function Home() {
  const [showGame, setShowGame] = useState(false);

  return (
    <div className="flex min-h-screen justify-center">
      <main className="w-full max-w-4xl px-6 py-12 sm:px-10 sm:py-16">
        {/* Hero */}
        <ScrollFadeIn direction="down" duration={0.8} className="mb-12">
          <section className="flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                Portfolio
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight bg-gradient-to-r from-violet-900 to-violet-700 dark:from-violet-400 dark:to-violet-600 bg-clip-text text-transparent sm:text-4xl">
                Ennio Vögeli
              </h1>
              <p className="mt-3 max-w-xl text-zinc-600 dark:text-zinc-400">
                17-jähriger Schüler der Informatik Mittelschule an der
                Kantonsschule Hottingen – mit grosser Begeisterung für
                Softwareentwicklung, sauberen Code und das Lösen realer Probleme.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <Link href="#projekte">
                  <Button variant="primary" size="md">
                    Projekte ansehen
                  </Button>
                </Link>
                <Link href="#ueber-mich">
                  <Button variant="secondary" size="md">
                    Über mich
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
                  <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
                    <span className="inline-block w-1 h-6 bg-gradient-to-b from-violet-900 to-violet-700 rounded-full"></span>
                    Projekte
                  </h2>
                  <Link
                    href="/Projects"
                    className="text-sm font-medium text-violet-900 underline-offset-4 hover:text-violet-800 hover:underline dark:text-violet-400 dark:hover:text-violet-300 transition-colors"
                  >
                    Alle Projekte
                  </Link>
                </div>

                <AnimatedCard>
                  <Card>
                    <CardHeader>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                          IMS Grades – Notenrechnungs- und Anzeige-Webseite
                        </h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                          Webapplikation zur Berechnung und übersichtlichen Anzeige
                          von Schulnoten.
                        </p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-zinc-700 dark:text-zinc-300">
                        Dieses Projekt habe ich gemeinsam mit zwei Kameraden im
                        Rahmen eines Hackathons entwickelt. Ziel war es, eine
                        Webapplikation zu erstellen, mit der Schulnoten berechnet
                        und übersichtlich dargestellt werden können.
                      </p>
                      <p className="mt-3 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        Meine Lernerfahrungen:
                      </p>
                      <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                        <li>Effektive Kommunikation im Team</li>
                        <li>Planung und Umsetzung einer vollständigen Webapplikation</li>
                        <li>Zusammenarbeit unter Zeitdruck</li>
                        <li>
                          Anwendung meiner technischen Kenntnisse in einem
                          praxisnahen Projekt
                        </li>
                      </ul>
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
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-900 dark:text-violet-400">
                  Fähigkeiten &amp; Kompetenzen
                </h2>
                <div className="mt-4 space-y-4 rounded-xl border border-violet-300 bg-gradient-to-br from-white to-violet-50 p-5 text-sm shadow-sm dark:border-violet-800 dark:bg-gradient-to-br dark:from-violet-950/40 dark:to-violet-900/20">
                  <div>
                    <h3 className="font-medium text-zinc-900 dark:text-zinc-50">
                      Programmiersprachen
                    </h3>
                    <p className="mt-1 text-zinc-700 dark:text-zinc-300">
                      Python, JavaScript
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-900 dark:text-zinc-50">
                      Webentwicklung
                    </h3>
                    <p className="mt-1 text-zinc-700 dark:text-zinc-300">
                      HTML, CSS
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-900 dark:text-zinc-50">
                      Datenbanken
                    </h3>
                    <p className="mt-1 text-zinc-700 dark:text-zinc-300">
                      MySQL, MongoDB
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-900 dark:text-zinc-50">
                      Stärken
                    </h3>
                    <p className="mt-1 text-zinc-700 dark:text-zinc-300">
                      Teamfähigkeit, Hartnäckigkeit bei der Problemlösung,
                      Bereitschaft zur kontinuierlichen Weiterentwicklung.
                    </p>
                  </div>
                </div>
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

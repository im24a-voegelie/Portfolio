import Card, { CardContent, CardHeader } from "@/components/ui/card";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen justify-center">
      <main className="w-full max-w-4xl px-6 py-12 sm:px-10 sm:py-16">
        <header className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 flex items-center gap-3">
            <span className="inline-block w-1.5 h-8 bg-gradient-to-b from-violet-900 to-violet-700 rounded-full"></span>
            Projekte
          </h1>
          <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
            Eine Auswahl meiner bisherigen Arbeiten mit Fokus auf Webentwicklung
            und praxisnahe Softwareprojekte.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-1">
          {projects.map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <div className="flex flex-col gap-1">
                  <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                    {project.title}
                  </h2>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    <span className="inline-block mr-2 w-2 h-2 bg-gradient-to-r from-violet-900 to-violet-700 rounded-full"></span>
                    {project.type} · {project.description}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">
                  {project.fullDescription}
                </p>
                <div className="mt-4">
                  <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    Meine Rolle &amp; Lernerfahrungen:
                  </p>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                    {project.learnings.map((learning, index) => (
                      <li key={index}>{learning}</li>
                    ))}
                  </ul>
                </div>
                {project.technologies && project.technologies.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      Technologien:
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="rounded-md bg-gradient-to-r from-violet-200 to-violet-100 px-2 py-1 text-xs text-violet-900 dark:from-violet-900 dark:to-violet-800 dark:text-violet-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import { GitHubIcon } from '@/components/icons/SocialIcons'

const projects = [
  {
    title: 'MSU Fourpoint',
    description:
      "Rebuilt and significantly optimized MSU's academic system with a dual-backend architecture. Redesigned data exchange using a comprehensive GraphQL schema enabling seamless real-time communication between Python and TypeScript backends.",
    tags: ['Python', 'TypeScript', 'GraphQL'],
    github: null,
    live: null,
  },
  {
    title: 'On the Rise MSU',
    role: 'Front-End Team Lead',
    description:
      'Spearheaded web development of a full-stack community service application. Led Agile sprints, enforced engineering best practices, and collaborated closely with clients to deliver a platform providing internship experience to students.',
    tags: ['Next.js', 'TypeScript', 'FastAPI', 'Python'],
    github: null,
    live: null,
  },
  {
    title: 'Animation Application',
    description:
      'Cartoon animation software built with C++ and wxWidgets. Implemented advanced animation features with a focus on intuitive user interface design, using object-oriented programming for flexibility and maintainability.',
    tags: ['C++', 'wxWidgets', 'OOP'],
    github: null,
    live: null,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="text-primary text-sm font-medium mb-2 tracking-widest uppercase">Work</p>
          <h2 className="text-4xl font-bold text-foreground">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Card
              key={i}
              className="bg-card border-border hover:border-primary/30 transition-all hover:-translate-y-1 group flex flex-col"
            >
              <CardContent className="p-6 flex flex-col flex-1">
                <div className="flex-1">
                  <div className="mb-3">
                    <h3 className="font-semibold text-foreground text-base group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.role && (
                      <p className="text-xs text-primary/70 mt-0.5">{project.role}</p>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs font-normal bg-secondary text-muted-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {(project.github || project.live) && (
                    <div className="flex gap-2">
                      {project.github && (
                        <Button asChild variant="ghost" size="sm" className="h-7 px-2 text-xs text-muted-foreground hover:text-foreground">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <GitHubIcon size={13} />
                            <span className="ml-1">Code</span>
                          </a>
                        </Button>
                      )}
                      {project.live && (
                        <Button asChild variant="ghost" size="sm" className="h-7 px-2 text-xs text-muted-foreground hover:text-foreground">
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={13} className="mr-1" /> Live
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

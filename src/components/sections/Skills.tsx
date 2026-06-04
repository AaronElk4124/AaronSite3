import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const skillGroups = [
  {
    id: 'languages',
    label: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'C#', 'C++', 'C', 'Java', 'HTML', 'CSS', 'MATLAB', 'Verilog'],
  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    skills: ['React.js', 'Next.js', 'Node.js', 'FastAPI', 'Theme UI'],
  },
  {
    id: 'tools',
    label: 'Tools & Cloud',
    skills: ['Git', 'Azure DevOps', 'GitHub Actions', 'Azure Pipelines', 'Azure Function Apps', 'Google Cloud Platform', 'Firebase', 'MongoDB', 'Vercel'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="text-primary text-sm font-medium mb-2 tracking-widest uppercase">Expertise</p>
          <h2 className="text-4xl font-bold text-foreground">Skills</h2>
        </div>

        <Tabs defaultValue="languages">
          <TabsList className="bg-muted/50 border border-border mb-10 h-auto p-1 gap-1">
            {skillGroups.map((group) => (
              <TabsTrigger
                key={group.id}
                value={group.id}
                className="text-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm text-muted-foreground"
              >
                {group.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillGroups.map((group) => (
            <TabsContent key={group.id} value={group.id} className="mt-0">
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="border-border text-foreground text-sm font-normal py-1.5 px-3 hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer I",
    company: "Little Caesar's",
    location: "Detroit, MI",
    period: "Jan 2025 – Present",
    bullets: [
      "Led full-stack enhancements to the Fundraising platform using React.js, TypeScript, and C#, improving user workflows and overall platform performance.",
      "Directed development of careersatilitchcompanies.com, transforming it into a scalable full-stack job search platform using MongoDB, Azure Functions, and advanced multi-criteria filtering — set up deployment pipelines and stream processors for real-time job listings.",
      "Designed and maintained automated testing pipelines to ensure robust feature delivery across multiple environments.",
    ],
    tags: ["React.js", "TypeScript", "C#", "MongoDB", "Azure Functions", "Next.js"],
  },
  {
    title: "Software Engineering Intern",
    company: "Little Caesar's",
    location: "Detroit, MI",
    period: "Jun 2023 – Jan 2025",
    bullets: [
      "Collaborated as a key member of a front-end Agile team, delivering high-quality production code across multiple release cycles.",
      "Utilized React.js and Theme UI to modernize the Fundraising platform, enhancing user experience.",
      "Implemented account notifications and creation features using C#, and deployed the Ilitch Careers site with Next.js at careersatilitchcompanies.com.",
    ],
    tags: ["React.js", "Theme UI", "C#", "Next.js", "Agile"],
  },
  {
    title: "CSE 331 Teaching Assistant",
    company: "Michigan State University",
    location: "East Lansing, MI",
    period: "Dec 2023 – May 2025",
    bullets: [
      "Led the creation of Python-based, real-world project assessments for Data Structures and Algorithms.",
      "Facilitated hands-on workshops to help students grasp Object-Oriented Programming and complex programming concepts.",
      "Developed a comprehensive suite of automated unit tests for student projects to ensure functionality.",
    ],
    tags: ["Python", "Data Structures", "Algorithms", "Unit Testing"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="text-primary text-sm font-medium mb-2 tracking-widest uppercase">
            Career
          </p>
          <h2 className="text-4xl font-bold text-foreground">Experience</h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-3 bottom-3 w-px bg-border hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="md:grid md:grid-cols-[200px_1fr] md:gap-10">
                <div className="hidden md:flex flex-col items-end pt-1 pr-10 relative">
                  <div className="absolute right-[-5px] top-2 w-2.5 h-2.5 rounded-full border-2 border-primary bg-background" />
                  <p className="text-sm text-muted-foreground text-right leading-tight">
                    {exp.period}
                  </p>
                  <p className="text-xs text-muted-foreground/50 mt-1 flex items-center gap-1">
                    <MapPin size={10} />
                    {exp.location}
                  </p>
                </div>

                <Card className="bg-card border-border hover:border-primary/30 transition-colors group">
                  <CardHeader className="pb-3">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <CardTitle className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-primary text-sm mt-0.5">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <p className="text-xs text-muted-foreground md:hidden">
                        {exp.period}
                      </p>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <ul className="space-y-2.5 mb-5">
                      {exp.bullets.map((bullet, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex gap-3">
                          <span className="text-primary/60 mt-1 flex-shrink-0 text-xs">▸</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs font-normal bg-secondary text-muted-foreground border-0"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

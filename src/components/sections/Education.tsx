import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "Johns Hopkins University",
    degree: "Master of Science, Computer Science",
    period: "Fall 2025 – Present",
    location: "Baltimore, MD",
    details: [],
    highlight: "In Progress",
  },
  {
    school: "Michigan State University",
    degree: "Bachelor of Science, Computer Engineering",
    period: "Aug 2021 – May 2025",
    location: "East Lansing, MI",
    details: [
      "Concentration in Smart Systems",
      "GPA: 4.0 / 4.0",
      "Phi Kappa Phi Honor Society Member",
    ],
    highlight: "GPA 4.0",
  },
];

export function Education() {
  return (
    <section id="education" className="py-28 px-6 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="text-primary text-sm font-medium mb-2 tracking-widest uppercase">
            Academic
          </p>
          <h2 className="text-4xl font-bold text-foreground">Education</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <Card
              key={i}
              className="bg-card border-border hover:border-primary/30 transition-colors group relative overflow-hidden"
            >
              <div className="h-0.5 w-full bg-gradient-to-r from-primary/60 via-primary/20 to-transparent" />

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <GraduationCap size={20} />
                  </div>
                  <Badge
                    variant="outline"
                    className="text-xs border-primary/30 text-primary font-normal"
                  >
                    {edu.highlight}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                  {edu.school}
                </CardTitle>
                <CardDescription className="text-sm">
                  {edu.degree}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground/50 text-xs mb-4">
                  {edu.period} · {edu.location}
                </p>

                {edu.details.length > 0 && (
                  <ul className="space-y-1.5">
                    {edu.details.map((d, j) => (
                      <li key={j} className="text-xs text-muted-foreground flex gap-2">
                        <span className="text-primary/50 mt-0.5">▸</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

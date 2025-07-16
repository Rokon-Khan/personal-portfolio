import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code2, Database, Server, Settings } from "lucide-react";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 92 },
      ],
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        { name: "Node.js", level: 93 },
        { name: "Express.js", level: 90 },
        { name: "REST APIs", level: 95 },
        { name: "GraphQL", level: 85 },
      ],
    },
    {
      title: "Database & Cloud",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "Mongoose", level: 88 },
        { name: "PostgreSQL", level: 82 },
        { name: "AWS", level: 78 },
      ],
    },
    {
      title: "Tools & Others",
      icon: Settings,
      skills: [
        { name: "Git/GitHub", level: 92 },
        { name: "Docker", level: 80 },
        { name: "Jest/Testing", level: 85 },
        { name: "CI/CD", level: 75 },
      ],
    },
  ];

  const quickSkills = [
    { name: "React", icon: "⚛️", level: 95 },
    { name: "Node.js", icon: "🟢", level: 93 },
    { name: "MongoDB", icon: "🍃", level: 90 },
    { name: "TypeScript", icon: "🔷", level: 88 },
    { name: "Next.js", icon: "▲", level: 90 },
    { name: "Express", icon: "🚀", level: 90 },
    { name: "AWS", icon: "☁️", level: 78 },
    { name: "Docker", icon: "🐳", level: 80 },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here's a comprehensive overview of my technical skills and the
            technologies I work with daily.
          </p>
        </div>

        {/* Quick Skills Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Core Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {quickSkills.map((skill) => (
              <Card
                key={skill.name}
                className="card-gradient border-border/50 hover-glow group text-center"
              >
                <CardContent className="p-4">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <h4 className="font-medium text-sm mb-2">{skill.name}</h4>
                  <div className="text-xs text-primary font-semibold">
                    {skill.level}%
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Detailed Skills */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="card-gradient border-border/50 hover-glow"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-primary font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2 bg-muted" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="card-gradient border-border/50 p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-2xl font-bold text-primary mb-2">4+</h4>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-primary mb-2">50+</h4>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-primary mb-2">20+</h4>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

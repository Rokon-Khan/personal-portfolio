import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Server, Smartphone } from "lucide-react";

export const AboutSection = () => {
  const skills = [
    {
      category: "Frontend",
      icon: Code2,
      techs: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Backend",
      icon: Server,
      techs: ["Node.js", "Express.js", "REST APIs", "GraphQL"],
    },
    {
      category: "Database",
      icon: Database,
      techs: ["MongoDB", "Mongoose", "PostgreSQL", "Redis"],
    },
    {
      category: "Mobile",
      icon: Smartphone,
      techs: ["React Native", "Expo", "PWA", "Responsive Design"],
    },
  ];

  const timeline = [
    {
      year: "2024",
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      description:
        "Lead developer for enterprise web applications serving 100k+ users",
    },
    {
      year: "2022",
      title: "Full Stack Developer",
      company: "StartupXYZ",
      description:
        "Built scalable e-commerce platform from scratch using MERN stack",
    },
    {
      year: "2020",
      title: "Frontend Developer",
      company: "WebAgency Pro",
      description:
        "Developed responsive websites and web applications for various clients",
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A passionate full-stack developer with 1+ years of experience
            building modern web applications. I love turning complex problems
            into simple, beautiful, and intuitive solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Bio & Skills */}
          <div className="space-y-8">
            <div className="card-gradient p-8 rounded-xl border border-border/50">
              <h3 className="text-2xl font-semibold mb-6">My Expertise</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {skills.map((skill) => (
                  <div key={skill.category} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <skill.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-medium">{skill.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.techs.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Experience</h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <Card
                  key={index}
                  className="card-gradient border-border/50 hover-glow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-sm font-semibold text-primary bg-primary/20 px-3 py-1 rounded-full">
                        {item.year}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg">{item.title}</h4>
                        <p className="text-primary font-medium mb-2">
                          {item.company}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

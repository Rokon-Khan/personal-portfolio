import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart3,
  Calendar,
  ExternalLink,
  Github,
  MessageSquare,
  ShoppingCart,
  Users,
  Zap,
} from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      icon: ShoppingCart,
      techs: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      codeUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Team Collaboration App",
      description:
        "Real-time team collaboration platform with chat, file sharing, and project management features.",
      icon: Users,
      techs: ["Next.js", "Socket.io", "PostgreSQL", "Redis"],
      liveUrl: "#",
      codeUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description:
        "Interactive data visualization dashboard with real-time analytics and reporting capabilities.",
      icon: BarChart3,
      techs: ["React", "D3.js", "Express", "MongoDB"],
      liveUrl: "#",
      codeUrl: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Chat Application",
      description:
        "Real-time messaging app with group chats, file sharing, and voice/video calling features.",
      icon: MessageSquare,
      techs: ["React Native", "Node.js", "Socket.io", "AWS"],
      liveUrl: "#",
      codeUrl: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Event Management System",
      description:
        "Complete event management platform with booking, payments, and attendee management.",
      icon: Calendar,
      techs: ["Next.js", "TypeScript", "Prisma", "Stripe"],
      liveUrl: "#",
      codeUrl: "#",
      featured: false,
    },
    {
      id: 6,
      title: "API Gateway Service",
      description:
        "Microservices API gateway with rate limiting, authentication, and monitoring capabilities.",
      icon: Zap,
      techs: ["Node.js", "Express", "Docker", "Redis"],
      liveUrl: "#",
      codeUrl: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience in building modern web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`card-gradient border-border/50 hover-glow group ${
                project.featured ? "lg:col-span-1 md:col-span-1" : ""
              }`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  {project.featured && (
                    <Badge
                      variant="default"
                      className="bg-accent text-accent-foreground"
                    >
                      Featured
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button size="sm" className="flex-1 hover-glow">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 glass-effect hover-glow"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Rokon-Khan?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="glass-effect hover-glow"
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

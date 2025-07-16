import heroProfile from "@/assets/Rokon.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Github, Linkedin, Mail } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden pt-20"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in">
            <div className="space-y-4">
              <Badge variant="secondary" className="glass-effect">
                Available for Hire
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Hi, I'm <span className="gradient-text">Md Rokonuzzaman</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
                Full Stack JavaScript Developer
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg">
                I build fast, scalable, and modern web applications using
                cutting-edge technologies. Passionate about creating exceptional
                user experiences and robust backend systems.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 fade-in stagger-1">
              {["React.js", "Next.js", "Node.js", "MongoDB", "TypeScript"].map(
                (tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="glass-effect hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </Badge>
                )
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 fade-in stagger-2">
              <a
                href="https://drive.google.com/file/d/1rQ_6rfoQ9TPNoJwIYvb_Ypem3gu3X1sQ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Button size="lg" className="hover-glow group">
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download Resume
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                className="glass-effect hover-glow"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 fade-in stagger-3">
              <Button variant="ghost" size="icon" className="hover-glow">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-glow">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-glow">
                <ExternalLink className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end fade-in stagger-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img
                src={heroProfile}
                alt="Alex Johnson - Full Stack Developer"
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-border/50 shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

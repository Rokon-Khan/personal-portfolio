import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Download, Menu } from "lucide-react";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const navItems = [
    { label: "Home", href: "#home", section: "home" },
    { label: "About", href: "#about", section: "about" },
    { label: "Projects", href: "#projects", section: "projects" },
    { label: "Skills", href: "#skills", section: "skills" },
    { label: "Testimonials", href: "#testimonials", section: "testimonials" },
    { label: "Contact", href: "#contact", section: "contact" },
  ];

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        id: item.section,
        element: document.getElementById(item.section),
      }));

      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (section.element) {
          const offsetTop = section.element.offsetTop;
          const offsetBottom = offsetTop + section.element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollToSection = (href: string) => {
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-effect border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="text-xl md:text-2xl font-bold hover:scale-105 transition-transform"
          >
            &lt; Rokon <span className="gradient-text">Dev /&gt;</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.section}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`text-sm font-medium transition-colors hover:text-primary relative ${
                  activeSection === item.section
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
                {activeSection === item.section && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
                )}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button size="sm" className="hover-glow">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] card-gradient border-border/50"
            >
              <div className="flex flex-col space-y-6 mt-8">
                {/* Mobile Logo */}
                <div className="text-xl font-bold text-center pb-4 border-b border-border/30">
                  Alex <span className="gradient-text">Johnson</span>
                </div>

                {/* Mobile Navigation */}
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <a
                      key={item.section}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }}
                      className={`text-lg font-medium transition-colors hover:text-primary py-2 px-4 rounded-lg ${
                        activeSection === item.section
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:bg-muted/20"
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="pt-4 border-t border-border/30">
                  <a
                    href="https://drive.google.com/file/d/1rQ_6rfoQ9TPNoJwIYvb_Ypem3gu3X1sQ/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Button size="lg" className="w-full hover-glow">
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </Button>
                  </a>
                </div>

                {/* Mobile Contact Info */}
                <div className="pt-4 text-center space-y-2">
                  <p className="text-sm text-muted-foreground">
                    alex.johnson@email.com
                  </p>
                  <p className="text-sm text-muted-foreground">
                    +1 (555) 123-4567
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 text-accent rounded-full text-xs">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    Available for projects
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

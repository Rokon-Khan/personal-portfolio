import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Product Manager",
      company: "TechCorp Solutions",
      avatar: "SC",
      rating: 5,
      text: "Alex delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise exceeded our expectations. The project was completed on time and within budget.",
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      role: "CTO",
      company: "StartupXYZ",
      avatar: "MR",
      rating: 5,
      text: "Working with Alex was a game-changer for our startup. He built our entire backend infrastructure from scratch and it has been running flawlessly for over a year now.",
    },
    {
      id: 3,
      name: "Emily Johnson",
      role: "Lead Designer",
      company: "Creative Agency",
      avatar: "EJ",
      rating: 5,
      text: "Alex has an incredible ability to translate designs into pixel-perfect, responsive websites. His React skills are top-notch and he's a pleasure to collaborate with.",
    },
    {
      id: 4,
      name: "David Park",
      role: "Founder",
      company: "InnovateNow",
      avatar: "DP",
      rating: 5,
      text: "I highly recommend Alex for any full-stack development project. His knowledge of modern technologies and best practices helped us scale our platform efficiently.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my clients and
            colleagues have to say about working with me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`card-gradient border-border/50 hover-glow ${
                index === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border-2 border-primary/20">
                    <AvatarFallback className="bg-primary/20 text-primary font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <h4 className="text-3xl font-bold text-primary">100%</h4>
              <p className="text-sm text-muted-foreground">
                Client Satisfaction
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-3xl font-bold text-primary">50+</h4>
              <p className="text-sm text-muted-foreground">
                Projects Delivered
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-3xl font-bold text-primary">4.9</h4>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-3xl font-bold text-primary">98%</h4>
              <p className="text-sm text-muted-foreground">On-Time Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

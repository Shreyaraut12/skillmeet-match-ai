import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Target, Zap, Star, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const [selectedRole, setSelectedRole] = useState<"student" | "startup" | null>(null);

  const features = [
    {
      icon: Target,
      title: "Smart Matching",
      description: "AI-powered algorithm matches students with perfect opportunities based on skills and interests"
    },
    {
      icon: Users,
      title: "Quality Connections", 
      description: "Connect with verified startups and talented students in your field"
    },
    {
      icon: Zap,
      title: "Instant Applications",
      description: "One-click applications with automatic profile matching and compatibility scores"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CS Student at MIT",
      content: "Found my perfect internship in just 2 days. The matching algorithm is incredible!",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder, TechFlow",
      content: "Finally, a platform that understands what startups actually need from talent.",
      rating: 5
    }
  ];

  const stats = [
    { number: "2,500+", label: "Active Students" },
    { number: "150+", label: "Partner Startups" },
    { number: "85%", label: "Match Success Rate" },
    { number: "48hrs", label: "Avg. Match Time" }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Navigation */}
      <nav className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold">SkillMeet</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How it Works</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="ghost">Sign In</Button>
            <Button variant="gradient">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-hero border-primary/20" variant="outline">
              🚀 Now live with 150+ startups
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-fade-in">
              Where Talent Meets Opportunity
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
              The intelligent platform connecting ambitious students with innovative startups through AI-powered matching
            </p>
            
            {/* Role Selection */}
            <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto mb-8 animate-scale-in">
              <Button 
                variant={selectedRole === "student" ? "gradient" : "hero"} 
                size="lg"
                onClick={() => setSelectedRole("student")}
                className="flex-1"
              >
                I'm a Student
              </Button>
              <Button 
                variant={selectedRole === "startup" ? "gradient" : "hero"} 
                size="lg"
                onClick={() => setSelectedRole("startup")}
                className="flex-1"
              >
                I'm a Startup
              </Button>
            </div>

            {selectedRole && (
              <div className="animate-fade-in">
                <Button variant="gradient" size="xl" className="shadow-glow">
                  {selectedRole === "student" ? "Find Opportunities" : "Find Talent"}
                  <ArrowRight className="ml-2" />
                </Button>
              </div>
            )}

            <div className="mt-12 relative">
              <img 
                src={heroImage} 
                alt="Students and startups collaborating" 
                className="rounded-2xl shadow-elevated mx-auto max-w-4xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose SkillMeet?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We've reimagined how students and startups connect, making it smarter, faster, and more meaningful
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How SkillMeet Works</h2>
            <p className="text-xl text-muted-foreground">Simple steps to your perfect match</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-semibold mb-4">Create Your Profile</h3>
              <p className="text-muted-foreground">Share your skills, interests, and what you're looking for</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl font-semibold mb-4">Get Matched</h3>
              <p className="text-muted-foreground">Our AI finds your perfect opportunities or candidates</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-semibold mb-4">Connect & Grow</h3>
              <p className="text-muted-foreground">Start building amazing things together</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Community Says</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Find Your Match?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students and startups already building the future together
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <Button variant="gradient" size="xl" className="flex-1">
              Join as Student
            </Button>
            <Button variant="hero" size="xl" className="flex-1">
              Join as Startup
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-muted/30 border-t">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-xl font-bold">SkillMeet</span>
              </div>
              <p className="text-muted-foreground">Connecting talent with opportunity through intelligent matching.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>For Students</div>
                <div>For Startups</div>
                <div>How it Works</div>
                <div>Pricing</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>Help Center</div>
                <div>Blog</div>
                <div>Success Stories</div>
                <div>Contact</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                  <Github className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                  <Mail className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 SkillMeet. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

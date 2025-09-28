"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useTranslations, useFormatter } from "next-intl";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const t = useTranslations("home");
  const f = useFormatter();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div
            className={`space-y-8 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-balance">
                <span className="text-foreground">MasterMao</span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-primary font-medium">
                {t("role")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {t("intro")}
              </p>
            </div>

            {/* Social links */}
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>

            <Button
              onClick={scrollToAbout}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
            >
              {t("ctaLearnMore")}
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right side - Visual element */}
          <div
            className={`relative ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            } delay-300`}
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Floating code blocks */}
              <div className="absolute top-0 right-0 bg-card border border-border rounded-lg p-4 shadow-lg animate-float">
                <div className="font-mono text-sm text-muted-foreground">
                  <div className="text-accent">const</div>
                  <div className="text-foreground">developer = {"{"}</div>
                  <div className="ml-4 text-primary">name: 'MasterMao',</div>
                  <div className="ml-4 text-primary">
                    skills: ['React', 'Next.js']
                  </div>
                  <div className="text-foreground">{"}"}</div>
                </div>
              </div>

              <div
                className="absolute bottom-0 left-0 bg-card border border-border rounded-lg p-4 shadow-lg animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="font-mono text-sm text-muted-foreground">
                  <div className="text-accent">
                    {"<"}
                    <span className="text-primary">Portfolio</span> {">"}
                  </div>
                  <div className="ml-4 text-foreground">{t("tagline")}</div>
                  <div className="text-accent">
                    {"</"}
                    <span className="text-primary">Portfolio</span>
                    {">"}
                  </div>
                </div>
              </div>

              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-card border border-border rounded-lg p-6 shadow-lg animate-float"
                style={{ animationDelay: "2s" }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {f.number(2)}+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t("stats.activeProjects")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}

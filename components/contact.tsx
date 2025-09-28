"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Github, Linkedin } from "lucide-react";

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("contact");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const contactMethods = [
    {
      icon: Mail,
      title: "邮箱联系",
      description: "有项目合作或技术交流需求？",
      action: "发送邮件",
      href: "mailto:support@mastermao.com",
    },
    {
      icon: MessageCircle,
      title: "即时沟通",
      description: "想要快速讨论想法或问题？",
      action: "开始对话",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/mtian999" },
    // { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:support@mastermao.com" },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            联系我
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            如果你有有趣的项目想法，或者想要讨论技术问题，我很乐意与你交流。
            让我们一起创造些令人兴奋的东西吧！
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card
              key={method.title}
              className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                    <method.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {method.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {method.description}
                </p>
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                >
                  <a href={method.href}>{method.action}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className={`text-center ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "400ms" }}
        >
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              关注我的动态
            </h3>
            <p className="text-muted-foreground">
              在社交媒体上关注我，获取最新的项目更新和技术分享
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="outline"
                size="icon"
                className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
                asChild
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.label}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>

        <div
          className={`mt-16 text-center border-t border-border pt-8 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "600ms" }}
        >
          <p className="text-muted-foreground">
            © 2025 MasterMao. 用心构建每一个项目。
          </p>
        </div>
      </div>
    </section>
  );
}

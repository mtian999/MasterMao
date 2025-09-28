"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap, Users } from "lucide-react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const skills = [
    {
      icon: Code,
      title: "前端开发",
      description: "精通React、Next.js、TypeScript等现代前端技术栈，构建响应式和交互式用户界面。",
    },
    {
      icon: Zap,
      title: "后端架构",
      description: "熟悉Node.js、数据库设计和API开发，构建高性能的服务端应用。",
    },
    {
      icon: Palette,
      title: "UI/UX设计",
      description: "注重用户体验设计，使用现代设计系统创造美观且易用的界面。",
    },
    {
      icon: Users,
      title: "团队协作",
      description: "具备良好的沟通能力和团队合作精神，能够高效完成项目交付。",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">关于我</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            我是一名充满热情的全栈开发者，专注于创建现代化的Web应用程序。
            我相信技术的力量能够改变世界，并致力于通过代码创造有意义的数字体验。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <Card
              key={skill.title}
              className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{skill.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className={`mt-16 text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "600ms" }}
        >
          <div className="inline-flex items-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>React</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Next.js</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>TypeScript</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

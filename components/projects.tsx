"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
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

    const element = document.getElementById("projects")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "MasterMao Tools",
      description: "一个功能丰富的在线工具集合平台，提供各种实用的开发和日常工具，帮助用户提高工作效率。",
      url: "https://tool.mastermao.com/",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      featured: true,
    },
    {
      title: "Top4AI",
      description: "专注于AI工具和资源的发现平台，为用户提供最新、最优质的人工智能工具推荐和评测。",
      url: "https://top4ai.com/",
      tags: ["Next.js", "AI", "Database", "API"],
      featured: true,
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">我的项目</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            以下是我正在开发和维护的一些项目，每个项目都体现了我对技术的热情和对用户体验的追求。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                project.featured ? "ring-2 ring-primary/20" : ""
              } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  {project.featured && (
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      活跃项目
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 pt-4">
                  <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      访问网站
                    </a>
                  </Button>
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className={`mt-16 text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "600ms" }}
        >
          <p className="text-muted-foreground mb-6">更多项目正在开发中，敬请期待...</p>
          <Button
            variant="outline"
            className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
          >
            查看更多项目
          </Button>
        </div>
      </div>
    </section>
  )
}

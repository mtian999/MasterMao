"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-mono text-xl font-bold text-primary">MasterMao</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["about", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 capitalize"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["about", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 capitalize w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

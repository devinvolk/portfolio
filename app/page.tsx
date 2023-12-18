"use client"

import About from "@/components/About"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"


export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}

"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Cloud, Server, Shield, Cpu, Database } from "lucide-react"

const sponsors = [
  { name: "Cloud Partner", icon: Cloud },
  { name: "Tech Solutions", icon: Server },
  { name: "Security Pro", icon: Shield },
  { name: "Data Systems", icon: Database },
  { name: "AI Innovations", icon: Cpu },
]

export function SponsorsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-muted/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Our <span className="text-aws-orange">Sponsors</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Thank you to our amazing partners
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-24 h-24 sm:w-32 sm:h-32 bg-card rounded-2xl border border-border flex flex-col items-center justify-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <sponsor.icon className="w-10 h-10 sm:w-12 sm:h-12 text-muted-foreground group-hover:text-aws-orange transition-colors" />
                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                  {sponsor.name}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

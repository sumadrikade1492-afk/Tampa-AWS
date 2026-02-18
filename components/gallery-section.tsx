"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Camera } from "lucide-react"

const galleryImages = [
  { id: 1, alt: "Tech presentation at Tampa AWS Meetup" },
  { id: 2, alt: "Networking session with cloud professionals" },
  { id: 3, alt: "Hands-on workshop with AWS services" },
  { id: 4, alt: "Community gathering at tech hub" },
  { id: 5, alt: "Speaker presenting on cloud architecture" },
  { id: 6, alt: "Team building and collaboration" },
]

export function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="gallery" className="py-24 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Event <span className="text-aws-orange">Gallery</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Highlights from our past meetups and events
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-gradient-to-br from-aws-navy to-aws-navy/80 flex items-center justify-center"
              >
                <div className="text-center p-4">
                  <Camera className="w-10 h-10 text-white/30 mx-auto mb-2" />
                  <p className="text-white/50 text-sm">{image.alt}</p>
                </div>
              </motion.div>
              <div className="absolute inset-0 bg-aws-orange/0 group-hover:bg-aws-orange/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

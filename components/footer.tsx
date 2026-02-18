"use client"

import { motion } from "framer-motion"
import { Cloud, Twitter, Linkedin, Github, Youtube } from "lucide-react"

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-aws-navy border-t border-white/10 py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Cloud className="h-8 w-8 text-aws-orange" />
            <span className="font-bold text-lg text-white">Tampa AWS Meetup</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-aws-orange transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-white" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Tampa AWS Meetup. All rights reserved.
            </p>
            <p className="text-white/30 text-xs mt-2">
              Built with passion for the AWS community
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

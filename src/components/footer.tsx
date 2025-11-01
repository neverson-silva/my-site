"use client";

import { motion } from "framer-motion";
import { Github, Heart, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-gradient mb-2">nbs.dev</h3>
            <p className="text-muted-foreground text-sm">
              Desenvolvedor Fullstack Sênior
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex gap-4"
          >
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary hover:bg-primary/10"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/neverson-bento-da-silva-8a31a813b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary hover:bg-primary/10"
              asChild
            >
              <a
                href="https://github.com/neverson-silva"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary hover:bg-primary/10"
              asChild
            >
              <a href="mailto:neversonbs@gmail.com" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

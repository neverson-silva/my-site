"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const profileImage = process.env.NEXT_PUBLIC_PROFILE_URL;
export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-4"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary/20 animate-glow-pulse" />
              <img
                src={profileImage as any}
                alt="Neverson Bento da Silva"
                className="relative w-full h-full rounded-full object-cover border-4 border-primary/30"
              />
            </div>
          </motion.div>

          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                Olá
                <motion.span
                  className="inline-block ml-4"
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                  transition={{
                    duration: 1.5,
                    delay: 1,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >
                  👋
                </motion.span>
              </h1>
              <h2 className="text-3xl lg:text-4xl text-gradient font-bold mb-6">
                Sou Neverson Silva
              </h2>
            </motion.div>

            <motion.div
              className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <pre className="text-left text-sm lg:text-base text-muted-foreground">
                <code>
                  {`//Desenvolvedor Full Stack
const profile = {
  nome: "Neverson Bento da Silva",
  cargo: "SR Software Engineer",
  empresa: "Trinus.Co",
  experiencia: "7+ anos",
  segmentos: ["Educação Ensino Superior", "Logística", "Meios de Pagamento", "Banking"],
  stack: ["Node.js", "NestJS", "Java", "Spring Boot",, "React", "Next.js"]
}`}
                </code>
              </pre>
            </motion.div>

            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Com mais de 7 anos de experiência, atuo como desenvolvedor full
              stack especializado em soluções financeiras, sistemas de
              pagamentos e arquitetura BaaS (Banking as a Service).
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Button size="lg" className="glow-cyan" asChild>
                <a href="#projects">Ver Projetos</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Entrar em Contato</a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/neverson-bento-da-silva-8a31a813b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary"
                asChild
              >
                <a
                  href="https://github.com/neverson-silva"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary"
                asChild
              >
                <a href="mailto:neversonbs@gmail.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

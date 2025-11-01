"use client";

import { motion } from "framer-motion";
import {
  Blocks,
  Box,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Laptop,
  Server,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Frontend",
    icon: Laptop,
    skills: [
      "React / Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5 / CSS3",
      "Tailwind CSS",
      "React Native",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Node.js",
      "NestJS",
      "Java",
      "Spring Boot",
      "Express.js",
      "REST APIs",
      "Kotlin",
      "Quarkus",
    ],
  },
  {
    title: "Bando de Dados",
    icon: Database,
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Oracle PLSQL",
      "SQL Server",
      "Prisma",
      "TypeORM",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: ["Docker", "AWS", "Azure", "CI/CD", "GitLab Pipeline"],
  },
  {
    title: "Arquitetura",
    icon: Blocks,
    skills: ["Clean Architecture", "DDD", "Event-Driven", "RESTful API"],
  },
  {
    title: "Ferramentas e Metodologias",
    icon: Box,
    skills: [
      "Git",
      "Scrum",
      "Kanban",
      "TDD",
      "Clean Code",
      "Code Review",
      "Jira",
      "Figma",
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Habilidades & <span className="text-gradient">Tecnologias</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ferramentas e tecnologias que domino para criar soluções completas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-smooth group h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          duration: 0.4,
                        }}
                        className="flex items-center gap-2 text-sm"
                      >
                        <Code2 className="w-3 h-3 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground hover:text-foreground transition-smooth">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 inline-block">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 flex-wrap justify-center">
                <GitBranch className="w-8 h-8 text-primary" />
                <div className="text-left">
                  <p className="text-lg font-semibold mb-1">
                    Sempre aprendendo e evoluindo
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Atualmente explorando novas abordagens em front-end,
                    back-end e inteligência artificial
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

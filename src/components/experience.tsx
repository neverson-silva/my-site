"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    period: "2024 - Atual",
    company: "Trinus.Co",
    role: "Sr. Software Engineer",
    description:
      "Atuação focada no desenvolvimento e sustentação de integrações complexas com serviços financeiros, incluindo soluções de pagamento, onboarding digital, internet banking e canais de atendimento. Trabalho com arquiteturas orientadas a eventos, APIs seguras e escaláveis, garantindo a disponibilidade e conformidade regulatória das plataformas.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Keycloak",
      "Azure",
      "AWS",
      "PostgreSQL",
      "Clean Architecture",
      "Event Driven Architecture",
      "DDD",
      "SQL Server",
    ],
  },
  {
    period: "2021 - 2024",
    company: "Sotran",
    role: "Engenheiro de Software PL",
    description: `
      Como desenvolvedor Fullstack em uma squad de Pagamentos, foquei na construção de interfaces e soluções voltadas para produtos financeiros, incluindo contas digitais, gestão de cartões, pagamento de fretes e tags de pedágio. Atuei em diversos projetos de integração com Banking as a Service (Dock), priorizando a criação de interfaces responsivas para o Backoffice financeiro da empresa em React.js, garantindo uma experiência intuitiva e eficiente para os usuários.

      Principais atividades e tecnologias:

      Desenvolvimento de interfaces de backoffice financeiro em React.js, com foco em usabilidade e responsividade.
      Implementação de integrações com sistemas bancários e serviços financeiros utilizando Node.js e Kotlin, e monitoramento de aplicações em Azure.
      `,
    technologies: [
      "Java",
      "Node.js",
      "React",
      "Nest.js",
      "Spring Boot",
      "SQL Server",
      "SpringBoot",
      "PostgreSQL",
      "GitLab CI/CD",
      "GCP",
    ],
  },
  {
    period: "2020 - 2021",
    company: "Analista e Desenvolvedor de Sistemas Pleno",
    role: "Tata Consultancy Service",
    description:
      "Análise, Desenvolvimento e manutenção de sistemas da área de Petróleo e Gás.",
    technologies: [
      "Java",
      "JSF",
      "JSP",
      "Jasper Reports",
      "Hibernate",
      "HTML",
      "CSS e Javascript",
      "Maven",
      "RichFaces",
      "WebLogic",
      "Jira",
    ],
  },
  {
    period: "2016 - 2020",
    company: "Cogna Educação",
    role: "Analista de Sistemas Júnior",
    description: `Desenvolvimento de soluções para educação na Kroton Educacional.

Atuação na manutenção e desenvolvimento de novas funcionalidades em sistemas administrativos em Grails e Groovy e Portal do Aluno EAD construindo serviços nas tecnologias Nest.js(Node.js) e Spring Boot para integração ao novo portal construído com as tecnologias ServiceNow e Angular.`,
    technologies: [
      "Java",
      "Spring Boot",
      "JUnit",
      "Groovy e Grails",
      "PL/SQL",
      "Node.js",
      "Typescript",
      "Nest.js",
      "Jest",
      "Docker",
      "Kubernetes",
      "Azure DevOps",
      "Jenkins",
      "GitFlow",
      "Scrum",
      "Angular",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Experiência <span className="text-gradient">Profissional</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Minha trajetória de crescimento e evolução na área de tecnologia
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-smooth group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                          <Briefcase className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-1">
                            {exp.role}
                          </h3>
                          <p className="text-primary font-semibold mb-2">
                            {exp.company}
                          </p>
                          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-primary/10 text-primary hover:bg-primary/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:block relative">
                  <div className="w-4 h-4 rounded-full bg-primary glow-cyan" />
                </div>

                {/* Spacer */}
                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

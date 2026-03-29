"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export const Experience = () => {
  const t = useTranslations("Experience");

  const experiences = [
    {
      period: t("exp1_time"),
      company: t("exp1_co"),
      role: t("exp1_role"),
      description: t("exp1_desc"),
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
      period: t("exp2_time"),
      company: t("exp2_co"),
      role: t("exp2_role"),
      description: t("exp2_desc"),
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
      period: t("exp3_time"),
      company: t("exp3_co"),
      role: t("exp3_role"),
      description: t("exp3_desc"),
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
      period: t("exp4_time"),
      company: t("exp4_co"),
      role: t("exp4_role"),
      description: t("exp4_desc"),
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
            {t("title1")} <span className="text-gradient">{t("title2")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("subtitle")}
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

                      <p className="text-muted-foreground mb-4 whitespace-pre-wrap">
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


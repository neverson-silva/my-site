"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Code2,
    title: "Plataformas Corporativas",
    description:
      "Desenvolvimento de sistemas complexos e escaláveis, integrando serviços digitais e construindo soluções confiáveis para diferentes setores.",
  },
  {
    icon: Layers,
    title: "Arquitetura",
    description: "Clean Architecture, DDD, microserviços e event-driven design",
  },
  {
    icon: Zap,
    title: "Full Stack",
    description: "Node.js, NestJS, React, Next.js e tecnologias modernas",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Desenvolvedor apaixonado por tecnologia e inovação
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">
              Transformando ideias em soluções digitais
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Sou desenvolvedor full stack com mais de 7 anos de experiência,
                construindo sistemas escaláveis e interfaces modernas para
                diferentes setores. Minha trajetória começou no desenvolvimento
                de aplicações para ambientes virtuais de aprendizagem e portais
                do aluno em uma instituição de ensino superior (EAD), evoluindo
                para plataformas corporativas complexas e integrações robustas.
              </p>
              <p>
                Atualmente na{" "}
                <strong className="text-primary">Trinus.Co</strong>, atuo como
                SR Software Engineer, criando arquiteturas sólidas e
                implementando boas práticas de desenvolvimento. Trabalho com
                tecnologias como Node.js, NestJS, React e Next.js, atuando em
                soluções de pagamentos e internet banking e nosso backoffice.
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-smooth group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { value: "7+", label: "Anos de Experiência" },
            { value: "10+", label: "Tecnologias" },
            { value: "100%", label: "Comprometimento" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

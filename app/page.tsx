"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SkillsSection from "./components/SkillsSection";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function PortfolioWebsite() {
  const projects = [
    {
      title: "AI Operator Platform",
      tag: "AI Systems",
      description:
        "A local-first autonomous agent platform for structured execution across desktop, browser, and CLI environments. Built around orchestration, safety controls, and approval-aware automation.",
      tech: ["TypeScript", "Next.js", "Electron", "Node.js", "WebSockets"],
      href: "#",
      demo: "#",
    },
    {
      title: "TradePersona",
      tag: "Analytics Product",
      description:
        "A behavioral trading intelligence product focused on explainable performance analysis, decision-pattern tracking, and full-stack analytics infrastructure.",
      tech: ["Next.js", "Express", "Python", "Snowflake"],
      href: "#",
      demo: "#",
    },
    {
      title: "Zentro",
      tag: "Agent Marketplace",
      description:
        "A concept for an AI-native marketplace where agents can discover each other, negotiate work, execute services, and transact with minimal human intervention.",
      tech: ["Product Design", "Agent Systems", "Marketplace Logic"],
      href: "#",
      demo: "#",
    },
  ];

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/youssef061204",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/youssef-elsokkary-2135422aa/",
    },
    {
      label: "Email",
      href: "mailto:joe.sokkary@gmail.com",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#f3f3ee]">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_32%),linear-gradient(to_bottom,#0a0a0a,#050505_30%,#050505)]" />

      <header className="sticky top-0 z-50 border-b border-white/8 bg-[#050505]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8 lg:px-10">
          <a href="#home" className="text-sm tracking-[0.24em] text-white/82 uppercase">
            Youssef Elsokkary
          </a>

          <nav className="hidden items-center gap-7 text-sm text-white/56 md:flex">
            <a href="#work" className="transition hover:text-white">
              Work
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section
          id="home"
          className="mx-auto flex min-h-[92vh] max-w-7xl items-end px-6 pb-14 pt-24 md:px-8 md:pb-20 md:pt-28 lg:px-10"
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="grid w-full gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end"
          >
            <div>
              <motion.p
                variants={fadeUp}
                className="mb-6 text-[11px] uppercase tracking-[0.34em] text-white/40"
              >
                Software engineer - AI systems - product-minded builder
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="max-w-5xl text-[3.4rem] font-medium leading-[0.94] tracking-[-0.07em] text-[#f5f5f0] sm:text-[4.4rem] md:text-[5.7rem] lg:text-[7.6rem]"
              >
                Building AI systems,


                <br />
                automation tools,
                <br />
                and software that feels ahead of the market.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-8 max-w-2xl text-base leading-8 text-white/56 md:text-lg"
              >
                CS student focused on AI systems, developer tools, intelligent
                automation, and products that feel technically ambitious and
                visually considered.
              </motion.p>
            </div>

            <motion.div variants={fadeUp} className="grid gap-4 lg:justify-self-end">
              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs uppercase tracking-[0.26em] text-white/34">Currently</p>
                <p className="mt-4 max-w-sm text-sm leading-7 text-white/62">
                  Looking for software engineering, AI engineering, and startup
                  roles.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {socials.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={label === "Email" ? undefined : "_blank"}
                    rel={label === "Email" ? undefined : "noreferrer"}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/68 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                  >
                    {label}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 md:px-8 lg:px-10">
          <div className="h-px w-full bg-white/8" />
        </section>

        <section id="work" className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-20 lg:px-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp} className="mb-12 md:mb-16">
              <p className="text-[11px] uppercase tracking-[0.34em] text-white/36">
                Selected work
              </p>
              <h2 className="mt-4 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
                Projects that define
                <br />
                how I like to build.
              </h2>
            </motion.div>

            <div className="space-y-6">
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  variants={fadeUp}
                  className="group overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.025] transition hover:border-white/16"
                >
                  <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="flex min-h-[320px] flex-col justify-between p-7 md:p-10">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.3em] text-white/34">
                          0{index + 1} - {project.tag}
                        </p>
                        <h3 className="mt-5 text-3xl font-medium tracking-[-0.04em] md:text-5xl">
                          {project.title}
                        </h3>
                        <p className="mt-6 max-w-xl text-sm leading-7 text-white/58 md:text-base">
                          {project.description}
                        </p>
                      </div>

                      <div className="mt-10">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-white/10 px-3 py-2 text-xs uppercase tracking-[0.16em] text-white/50"
                            >
                              {item}
                            </span>
                          ))}
                        </div>

                        <div className="mt-7 flex flex-wrap gap-3">
                          <a
                            href={project.href}
                            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
                          >
                            Project link
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                          <a
                            href={project.demo}
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white/78 transition hover:bg-white/[0.05] hover:text-white"
                          >
                            Demo link
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="relative min-h-[280px] border-t border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))] lg:min-h-full lg:border-l lg:border-t-0">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.14),transparent_25%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.08),transparent_30%)]" />
                      <div className="relative flex h-full items-end p-7 md:p-10">
                        <div className="w-full rounded-[28px] border border-dashed border-white/15 bg-black/20 p-6 backdrop-blur-sm">
                          <p className="text-[11px] uppercase tracking-[0.28em] text-white/36">
                            Preview area
                          </p>
                          <p className="mt-4 text-sm leading-7 text-white/52">
                            Replace this with a project screenshot, animation
                            still, product mockup, or demo frame.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        <SkillsSection />

        <section id="about" className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-20 lg:px-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"
          >
            <motion.div variants={fadeUp}>
              <p className="text-[11px] uppercase tracking-[0.34em] text-white/36">About</p>
              <h2 className="mt-4 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
                Technical depth,
                <br />
                with taste.
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-[34px] border border-white/10 bg-white/[0.025] p-7 md:p-10"
            >
              <p className="text-base leading-8 text-white/62 md:text-lg">
                I like software that feels intentional from both an engineering
                and product perspective. The work that interests me most usually
                sits somewhere between AI infrastructure, developer tooling,
                intelligent automation, analytics, and startup execution.
              </p>
              <p className="mt-6 text-base leading-8 text-white/62 md:text-lg">
                I care about interface quality, system design, and making
                ambitious ideas feel clear, useful, and polished. My goal is to
                build products that feel current now and obvious later.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] border border-white/8 bg-black/20 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/36">Resume</p>
                  <p className="mt-3 text-sm text-white/58"><a
  href="/YoussefsResume.pdf"
  target="_blank"
  rel="noreferrer"
  className="text-sm text-white/70 hover:text-white"
>
  View Resume
</a></p>
                </div>
                <div className="rounded-[24px] border border-white/8 bg-black/20 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/36">
                    Project demos
                  </p>
                  <p className="mt-3 text-sm text-white/58">Add live demo URLs here.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-7xl px-6 pb-20 pt-14 md:px-8 md:pb-28 md:pt-20 lg:px-10"
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[38px] border border-white/10 bg-white/[0.03] p-8 md:p-12"
          >
            <motion.p
              variants={fadeUp}
              className="text-[11px] uppercase tracking-[0.34em] text-white/36"
            >
              Contact
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-4xl font-medium tracking-[-0.05em] md:text-6xl"
            >
              Let us build something
              <br />
              worth remembering.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-8 text-white/58 md:text-lg"
            >
              Reach out directly for internships, startup roles, collaborations,
              or any project where strong engineering and strong product
              instinct both matter.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
              <a
                href="mailto:joe.sokkary@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
              >
                joe.sokkary@gmail.com
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/youssef061204"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white/78 transition hover:bg-white/[0.05] hover:text-white"
              >
                GitHub
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/youssef-elsokkary-2135422aa/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white/78 transition hover:bg-white/[0.05] hover:text-white"
              >
                LinkedIn
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

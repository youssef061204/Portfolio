"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa6";
import { HiOutlineServerStack } from "react-icons/hi2";
import { LuWorkflow } from "react-icons/lu";
import { PiRobot } from "react-icons/pi";
import {
  SiDocker,
  SiElectron,
  SiExpress,
  SiFramer,
  SiGit,
  SiJavascript,
  SiMysql,
  SiN8N,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSnowflake,
  SiSpringboot,
  SiSqlite,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiZapier,
} from "react-icons/si";
import { TbApi, TbBrain, TbBrandSocketIo, TbTopologyStar3 } from "react-icons/tb";

type Skill = {
  name: string;
  icon: IconType;
  tone: string;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

const sectionVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 240,
      damping: 22,
    },
  },
};

const backgroundShards: Array<{ className: string; style: CSSProperties }> = [
  {
    className:
      "left-[4%] top-16 h-40 w-72 border-white/[0.05] bg-white/[0.03] shadow-[0_24px_60px_rgba(2,6,23,0.35)]",
    style: {
      clipPath: "polygon(0 18%, 66% 0, 100% 22%, 88% 100%, 10% 82%)",
      transform: "rotate(-8deg)",
    },
  },
  {
    className:
      "right-[8%] top-24 h-52 w-64 border-slate-300/[0.05] bg-slate-200/[0.03] shadow-[0_24px_80px_rgba(15,23,42,0.35)]",
    style: {
      clipPath: "polygon(16% 0, 100% 14%, 84% 100%, 0 76%, 10% 22%)",
      transform: "rotate(12deg)",
    },
  },
  {
    className:
      "left-[20%] bottom-10 h-44 w-56 border-sky-300/[0.05] bg-sky-300/[0.03] shadow-[0_28px_70px_rgba(8,47,73,0.28)]",
    style: {
      clipPath: "polygon(18% 0, 100% 12%, 76% 100%, 0 80%, 8% 22%)",
      transform: "rotate(10deg)",
    },
  },
  {
    className:
      "right-[24%] bottom-[-3rem] h-56 w-80 border-white/[0.04] bg-white/[0.02] shadow-[0_28px_80px_rgba(2,6,23,0.32)]",
    style: {
      clipPath: "polygon(0 24%, 54% 0, 100% 18%, 92% 100%, 20% 80%)",
      transform: "rotate(-7deg)",
    },
  },
];

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "TypeScript", icon: SiTypescript, tone: "text-sky-300/85" },
      { name: "JavaScript", icon: SiJavascript, tone: "text-amber-200/80" },
      { name: "React", icon: SiReact, tone: "text-cyan-200/85" },
      { name: "Next.js", icon: SiNextdotjs, tone: "text-slate-100/80" },
      { name: "Tailwind CSS", icon: SiTailwindcss, tone: "text-cyan-200/80" },
      { name: "Framer Motion", icon: SiFramer, tone: "text-indigo-200/80" },
      { name: "Electron", icon: SiElectron, tone: "text-sky-100/75" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Python", icon: SiPython, tone: "text-blue-200/85" },
      { name: "Java", icon: FaJava, tone: "text-orange-200/80" },
      { name: "Node.js", icon: SiNodedotjs, tone: "text-emerald-200/80" },
      { name: "Express", icon: SiExpress, tone: "text-slate-200/80" },
      { name: "Spring Boot", icon: SiSpringboot, tone: "text-emerald-200/80" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "Snowflake", icon: SiSnowflake, tone: "text-sky-200/85" },
      { name: "PostgreSQL", icon: SiPostgresql, tone: "text-blue-200/80" },
      { name: "MySQL", icon: SiMysql, tone: "text-cyan-100/75" },
      { name: "SQLite", icon: SiSqlite, tone: "text-slate-200/80" },
      { name: "Supabase", icon: SiSupabase, tone: "text-emerald-200/80" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Docker", icon: SiDocker, tone: "text-sky-200/85" },
      { name: "Git", icon: SiGit, tone: "text-orange-200/80" },
      { name: "Vercel", icon: SiVercel, tone: "text-slate-100/80" },
      { name: "REST APIs", icon: TbApi, tone: "text-slate-200/80" },
      { name: "WebSockets", icon: TbBrandSocketIo, tone: "text-cyan-200/80" },
      { name: "System Design", icon: HiOutlineServerStack, tone: "text-blue-100/80" },
      { name: "Distributed Systems", icon: TbTopologyStar3, tone: "text-slate-200/80" },
      { name: "AI/Agent Systems", icon: PiRobot, tone: "text-violet-200/75" },
      { name: "Data Pipelines", icon: LuWorkflow, tone: "text-sky-200/80" },
      { name: "Machine Learning", icon: TbBrain, tone: "text-indigo-200/80" },
      { name: "Zapier", icon: SiZapier, tone: "text-orange-200/80" },
      { name: "n8n", icon: SiN8N, tone: "text-rose-200/70" },
    ],
  },
];

function SkillBadge({ skill }: { skill: Skill }) {
  const reduceMotion = useReducedMotion();
  const Icon = skill.icon;

  return (
    <motion.li
      variants={badgeVariants}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -4,
              scale: 1.015,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 18,
              },
            }
      }
      className="list-none"
    >
      <div className="group relative overflow-hidden rounded-full border border-white/10 bg-white/[0.045] px-3 py-2.5 backdrop-blur-xl transition-colors duration-300 hover:border-slate-300/20 hover:bg-white/[0.075] hover:shadow-[0_0_0_1px_rgba(148,163,184,0.05),0_24px_60px_rgba(2,6,23,0.42)]">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%,rgba(148,163,184,0.05))] opacity-70" />
        <div className="relative flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
            <Icon className={`text-[1rem] ${skill.tone}`} aria-hidden="true" />
          </span>
          <span className="text-sm font-medium tracking-[0.01em] text-white/78">
            {skill.name}
          </span>
        </div>
      </div>
    </motion.li>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-white/6 bg-[#060709] py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(148,163,184,0.12),transparent_26%),radial-gradient(circle_at_82%_14%,rgba(96,165,250,0.08),transparent_22%),radial-gradient(circle_at_52%_88%,rgba(255,255,255,0.05),transparent_26%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:52px_52px] opacity-[0.08] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />

        {backgroundShards.map((shard, index) => (
          <div
            key={index}
            className={`absolute hidden border backdrop-blur-[2px] lg:block ${shard.className}`}
            style={shard.style}
          />
        ))}

        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/35 to-transparent" />
      </div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-10"
      >
        <motion.div variants={rowVariants} className="mb-14 max-w-3xl md:mb-16">
          <p className="text-[0.68rem] uppercase tracking-[0.34em] text-slate-400/70">
            Technical Skills
          </p>
          <h2
            id="skills-heading"
            className="mt-4 max-w-2xl text-3xl font-medium tracking-[-0.05em] text-white/90 md:text-[3.2rem]"
          >
            A focused stack for building ambitious software with precision.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300/55 md:text-[0.98rem]">
            Tools, frameworks, and systems thinking I lean on when turning
            product ideas into polished, production-ready work.
          </p>
        </motion.div>

        <motion.div
          variants={rowVariants}
          className="relative overflow-hidden rounded-[34px] border border-white/8 bg-white/[0.025] px-5 py-6 shadow-[0_30px_100px_rgba(2,6,23,0.42)] backdrop-blur-md sm:px-6 sm:py-7 md:px-8 md:py-8"
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

          <div className="relative space-y-6 md:space-y-7">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={rowVariants}
                className="border-t border-white/8 pt-6 first:border-t-0 first:pt-0 md:pt-7"
              >
                <div className="grid gap-5 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
                  <div className="flex items-start gap-4">
                    <span className="mt-4 hidden h-px w-8 shrink-0 bg-white/10 lg:block" />
                    <div>
                      <p className="text-[0.65rem] uppercase tracking-[0.34em] text-slate-500/75">
                        {String(categoryIndex + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 text-[1.4rem] font-medium tracking-[-0.04em] text-white/88 md:text-[1.75rem]">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <ul className="flex flex-wrap gap-3 md:gap-3.5" role="list">
                    {category.skills.map((skill) => (
                      <SkillBadge key={skill.name} skill={skill} />
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// apps/web/src/components/landing/hero.tsx
"use client";

import { motion } from "motion/react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Handlebars } from "./handlebars";
import Link from "next/link";
import { SITE_INFO } from "@/constants/site";

const HERO_BG =
  "https://xopcttkrmjvwdddawdaa.supabase.co/storage/v1/object/public/Logos/Blacklabelvisionbackground.png";

export function Hero() {
  return (
    <div className="relative min-h-[calc(100svh-4.5rem)] flex flex-col justify-between items-center text-center px-4">
      {/* Background image + dark overlay for readability */}
      <div className="absolute inset-0 -z-50">
        <Image
          src={HERO_BG}
          alt="Black Label Vision background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto w-full flex-1 flex flex-col justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="inline-block font-bold tracking-tighter text-4xl md:text-[4rem]"
        >
          <h1>Black Label Vision</h1>
          <Handlebars>Video Editor</Handlebars>
        </motion.div>

        <motion.p
          className="mt-10 text-base sm:text-xl text-muted-foreground font-light tracking-wide max-w-xl mx-auto"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }}
        >
          {SITE_INFO.description}
        </motion.p>

        <motion.div
          className="mt-8 flex gap-8 justify-center"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45, duration: 0.7 }}
        >
          <Link href="/editor">
            <Button size="lg" className="px-6 h-11 text-base bg-foreground">
              Open editor <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/projects" className="hidden sm:block">
            <Button size="lg" variant="outline" className="px-6 h-11 text-base">
              View projects
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

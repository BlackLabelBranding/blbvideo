"use client";

import { motion } from "motion/react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Handlebars } from "./handlebars";
import Link from "next/link";
import { SITE_INFO } from "@/constants/site";

// Change this to your image:
// - local: "/hero-bg.jpg" (put the file in apps/web/public/hero-bg.jpg)
// - remote (Supabase): "https://xopcttkrmjvwdddawdaa.supabase.co/storage/v1/object/public/Logos/Blacklabellogo.jpg"
const HERO_BG = "/landing-page-dark.png";

export function Hero() {
  return (
    <div className="min-h-[calc(100svh-4.5rem)] flex flex-col justify-between items-center text-center px-4">
      <Image
        className="absolute top-0 left-0 -z-50 object-cover opacity-85"
        src={HERO_BG}
        alt="background"
        fill
        priority
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto w-full flex-1 flex flex-col justify-center"
      >
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-block font-bold tracking-tighter text-4xl md:text-[4rem]"
        >
          <h1>Black Label Vision</h1>
          <Handlebars>Video Editor</Handlebars>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="mt-10 text-base sm:text-xl text-muted-foreground font-light tracking-wide max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {SITE_INFO.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-8 flex gap-8 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link href="/editor">
            <Button size="lg" className="px-6 h-11 text-base bg-foreground">
              Open editor
              <ArrowRight className="relative z-10 ml-1 h-4 w-4 inline-block" />
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

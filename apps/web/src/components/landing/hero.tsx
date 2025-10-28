// apps/web/src/components/landing/hero.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const HERO_BG =
  "https://xopcttkrmjvwdddawdaa.supabase.co/storage/v1/object/public/Logos/Blacklabelvisionbackground.png";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-4.5rem)]">
      {/* Background */}
      <Image
        src={HERO_BG}
        alt="Black Label Vision background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Optional dark overlay for button legibility */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Centered CTA buttons */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/editor">
            <Button size="lg" className="h-11 px-6">
              Open editor
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>

          <Link href="/projects">
            <Button size="lg" variant="outline" className="h-11 px-6">
              View projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}


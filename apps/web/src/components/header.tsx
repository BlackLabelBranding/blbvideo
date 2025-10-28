"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { HeaderBase } from "./header-base";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import { SITE_INFO } from "@/constants/site";

const LOGO_URL =
  "https://xopcttkrmjvwdddawdaa.supabase.co/storage/v1/object/public/Logos/Blacklabellogo.jpg";

export function Header() {
  const leftContent = (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src={LOGO_URL}
        alt="Black Label Vision Logo"
        width={32}
        height={32}
        className="rounded"
        priority
      />
      <span className="hidden md:block text-xl font-medium">
        {SITE_INFO.title}
      </span>
    </Link>
  );

  const rightContent = (
    <nav className="flex items-center gap-2">
      <div className="flex items-center gap-4">
        <Link href="/blog">
          <Button variant="text" className="p-0 text-sm">
            Blog
          </Button>
        </Link>
        <Link href="/contributors">
          <Button variant="text" className="p-0 text-sm">
            Contributors
          </Button>
        </Link>
      </div>
      <Link href="/projects">
        <Button size="sm" className="ml-2 text-sm">
          Projects
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </Link>
      <ThemeToggle className="mr-2" />
    </nav>
  );

  return (
    <div className="sticky top-4 z-50 mx-4 md:mx-0">
      <HeaderBase
        className="bg-background border rounded-2xl max-w-3xl mx-auto mt-4 pl-4 pr-[11px]"
        leftContent={leftContent}
        rightContent={rightContent}
      />
    </div>
  );
}

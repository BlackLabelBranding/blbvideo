// apps/web/src/components/footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

const LOGO_URL =
  "https://xopcttkrmjvwdddawdaa.supabase.co/storage/v1/object/public/Logos/Blacklabellogo.jpg";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-8">
        {/* Top row: logo + nav */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={LOGO_URL}
              alt="Black Label Branding"
              width={32}
              height={32}
              className="rounded"
              priority
            />
            <span className="text-sm md:text-base font-medium">
              Black Label Branding
            </span>
          </Link>

          <nav className="flex flex-wrap items-center gap-6 text-sm opacity-90">
            <Link href="/resources" className="hover:opacity-100 opacity-80">
              Resources
            </Link>
            <Link href="/roadmap" className="hover:opacity-100 opacity-80">
              Roadmap
            </Link>
            <Link href="/privacy" className="hover:opacity-100 opacity-80">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:opacity-100 opacity-80">
              Terms of Use
            </Link>
          </nav>
        </div>

        {/* Bottom row: rights */}
        <div className="mt-6 border-t pt-4 text-center text-xs opacity-80">
          © {year} Black Label Branding LLC, All Rights reserved.
        </div>
      </div>
    </footer>
  );
}

// apps/web/src/app/page.tsx
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/landing/hero";
import { SITE_INFO, SITE_URL } from "@/constants/site";

export const metadata: Metadata = {
  title: {
    default: SITE_INFO.title,
    template: `%s · ${SITE_INFO.title}`,
  },
  description: SITE_INFO.description,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: SITE_INFO.title,
    description: SITE_INFO.description,
    url: SITE_URL,
    siteName: SITE_INFO.title,
    images: [
      {
        url: SITE_INFO.openGraphImage,
        width: 1200,
        height: 630,
        alt: SITE_INFO.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_INFO.title,
    description: SITE_INFO.description,
    images: [SITE_INFO.twitterImage],
  },
  icons: {
    icon: [{ url: SITE_INFO.favicon }],
    shortcut: [SITE_INFO.favicon],
  },
};

export default async function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Hero typically handles the main hero content/CTA */}
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

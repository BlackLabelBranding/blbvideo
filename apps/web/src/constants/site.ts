// apps/web/src/constants/site.ts

// TODO: Update to your final domain when ready.
export const SITE_URL = "https://opencut.app";

export const SITE_INFO = {
  title: "Black Label Vision",
  description:
    "A simple but powerful video editor that gets the job done. In your browser.",
  url: SITE_URL,
  // Point these to your deployed assets (or keep as-is if you already ship these paths)
  openGraphImage: "/open-graph/default.jpg",
  twitterImage: "/open-graph/default.jpg",
  favicon: "/favicon.ico",
} as const;

export const EXTERNAL_TOOLS = [
  {
    name: "Marble",
    description:
      "Modern headless CMS for content management and the blog for Black Label Vision",
    url: "https://marblecms.com?utm_source=blacklabelvision",
    icon: "MarbleIcon" as const,
  },
  {
    name: "Vercel",
    description: "Platform where we deploy and host Black Label Vision",
    url: "https://vercel.com?utm_source=blacklabelvision",
    icon: "VercelIcon" as const,
  },
  {
    name: "Databuddy",
    description:
      "GDPR compliant analytics and user insights for Black Label Vision",
    url: "https://databuddy.cc?utm_source=blacklabelvision",
    icon: "DataBuddyIcon" as const,
  },
] as const;

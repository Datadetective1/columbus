import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { DevBanner } from "@/components/dev-banner";
import { isPublic, site } from "@/content/site";
import { buildMetadata, structuredData } from "@/lib/seo";

/** Editorial serif for display. Variable weight only — Fraunces defaults SOFT and
 *  WONK to 0, which is the restrained cut we want, so no extra axes are shipped. */
const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

/** Neutral text face — gets out of the way. */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/* The monospace face is gone. It was the strongest "technical document" signal
   in the previous design — it turned every label into a specification
   annotation — and dropping it also removes a font download. */

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  ...buildMetadata({
    title: `${site.personShortName} — ${site.positioning}`,
    description: site.metaDescription,
  }),
  title: {
    default: `${site.personShortName} — ${site.positioning}`,
    template: `%s — ${site.brandName}`,
  },
  applicationName: site.brandName,
  authors: [{ name: site.personName }],
  creator: site.personName,
};

export const viewport: Viewport = {
  themeColor: "#fdfcf9",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        {/* Marks the document as JavaScript-capable before first paint. The
            scroll-reveal styles are scoped to html.js, so if this never runs the
            page renders fully visible instead of blank. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[2px] focus:bg-ink focus:px-4 focus:py-3 focus:text-paper"
        >
          Skip to content
        </a>
        <DevBanner />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        {isPublic ? (
          <Script
            id="schema-org"
            type="application/ld+json"
            // Structured data is withheld while the site is private.
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData()) }}
          />
        ) : null}
      </body>
    </html>
  );
}

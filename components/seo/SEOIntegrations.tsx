"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

function RevealDiv({
  className,
  children,
  delay,
}: {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`fade-in-up visible ${className ?? ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

const INTEGRATIONS = [
  {
    name: "Search Console",
    detail: "Ryze reads real query and page data daily — not cached reports — to spot ranking drops before they compound.",
    logo: null as string | null,
    gIcon: true,
    color: "bg-blue-50",
    iconSize: "h-6 w-auto",
  },
  {
    name: "Google Analytics",
    detail: "Connects traffic to SEO actions. Ryze ties organic sessions and conversions back to every change it ships.",
    logo: "/icons-google-analytics.png" as string | null,
    gIcon: false,
    color: "bg-orange-50",
    iconSize: "h-6 w-auto",
  },
  {
    name: "WordPress",
    detail: "Title tags, meta descriptions, schema, and internal links pushed directly through the REST API. No plugin needed.",
    logo: "/platform-wordpress.svg" as string | null,
    gIcon: false,
    color: "bg-sky-50",
    iconSize: "h-7 w-auto",
  },
  {
    name: "Shopify",
    detail: "Product and collection pages get structured data, optimized titles, and clean URLs — automatically on publish.",
    logo: "/platform-shopify.png" as string | null,
    gIcon: false,
    color: "bg-green-50",
    iconSize: "h-7 w-auto",
  },
  {
    name: "Semrush",
    detail: "Keyword gaps, competitor moves, and backlink signals feed Ryze's prioritization engine in real time.",
    logo: "/platform-semrush.svg" as string | null,
    gIcon: false,
    color: "bg-orange-50",
    iconSize: "h-6 w-auto",
  },
  {
    name: "Google Ads",
    detail: "Surfaces where paid and organic overlap so you stop bidding on keywords you already rank for.",
    logo: "/platform-google-ads.png" as string | null,
    gIcon: false,
    color: "bg-yellow-50",
    iconSize: "h-7 w-auto",
  },
];

export default function SEOIntegrations() {
  return (
    <section className="bg-[#FEFEF5] py-24 md:py-32 border-t border-black/5">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">

        {/* Header */}
        <RevealDiv className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 md:mb-14">
          <div>
            <p className="text-xs uppercase tracking-widest font-medium text-zinc-400 mb-3">
              Integrations
            </p>
            <h3 className="text-3xl md:text-[40px] leading-tight tracking-tight font-bold text-zinc-900">
              Integrate tools you already use
            </h3>
          </div>
          <p className="text-sm text-zinc-500 max-w-xs sm:text-right leading-relaxed">
            One-click setup. Ryze reads, writes, and stays in sync — nothing to maintain.
          </p>
        </RevealDiv>

        {/* Card grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {INTEGRATIONS.map((item, i) => (
            <RevealDiv key={item.name} delay={i * 50}>
              <article className="group h-full rounded-2xl border border-zinc-200 bg-white p-6 md:p-7 flex flex-col hover:border-zinc-300 hover:shadow-sm transition-all duration-300">
                {/* Logo in tinted container */}
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-5`}>
                  {item.gIcon ? (
                    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  ) : (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={item.logo!} alt="" className={`${item.iconSize} object-contain`} />
                  )}
                </div>
                <p className="text-[15px] font-semibold text-zinc-900 mb-2">{item.name}</p>
                <p className="text-[13px] text-zinc-500 leading-relaxed flex-1">{item.detail}</p>
              </article>
            </RevealDiv>
          ))}
        </div>

        {/* Footer note */}
        <RevealDiv className="mt-8 text-center">
          <p className="text-xs text-zinc-400">
            Webflow, Wix, and custom CMS integrations available on Enterprise.
          </p>
        </RevealDiv>

      </div>
    </section>
  );
}

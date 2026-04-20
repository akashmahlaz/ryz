"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

const INTEGRATIONS = [
  { name: "Google Search Console", detail: "Queries, pages, indexing insights" },
  { name: "Google Analytics", detail: "Traffic quality and conversion impact" },
  { name: "WordPress", detail: "Content updates and metadata sync" },
  { name: "Shopify", detail: "Collection/product SEO automation" },
  { name: "Webflow", detail: "CMS updates and schema deployment" },
  { name: "Ahrefs / Semrush", detail: "Keyword and backlink intelligence" },
];

export default function SEOIntegrations() {
  const ref = useScrollReveal();

  return (
    <section className="bg-[#FEFEF5] py-14 md:py-20 border-t border-black/5 border-b border-black/5">
      <div className="max-w-[1367px] mx-auto px-4 sm:px-6 md:px-12 xl:px-16" ref={ref}>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-8 fade-in-up">
          <div>
            <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-zinc-500 mb-2">Integrations</p>
            <h3 className="text-[28px] md:text-[38px] leading-[1.02] tracking-[-0.03em] font-bold text-zinc-900">
              Plug into your stack in minutes
            </h3>
          </div>
          <p className="text-[14px] md:text-[15px] text-zinc-600 max-w-xl leading-relaxed">
            Connect data sources once. Ryze maps SEO opportunities, applies safe updates, and keeps every change auditable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 fade-in-up">
          {INTEGRATIONS.map((item) => (
            <article key={item.name} className="rounded-[6px] border border-zinc-200 bg-white p-4 md:p-5">
              <p className="text-[16px] font-semibold text-zinc-900 mb-1">{item.name}</p>
              <p className="text-[13px] text-zinc-600">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

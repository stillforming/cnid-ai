import Link from "next/link";
import { getAllGuides } from "@/lib/guides";

export const metadata = {
  title: "Guides — cnid.ai",
  description: "Free step-by-step guides for setting up your AI dev workflow on Windows.",
};

export default function GuidesPage() {
  const guides = getAllGuides();

  return (
    <div className="max-w-3xl mx-auto px-6 pt-16 pb-20">
      <h1 className="text-4xl font-bold mb-4">Guides</h1>
      <p className="text-text-secondary mb-12 text-lg">
        Free step-by-step guides. Follow them in order, or jump to what you need.
      </p>

      <div className="flex flex-col gap-4">
        {guides.map((guide, i) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="group bg-surface border border-border rounded-xl p-6 hover:border-nano/30 transition-all"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-nano font-mono text-sm">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="text-lg font-semibold group-hover:text-nano transition-colors">
                    {guide.title}
                  </h2>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {guide.description}
                </p>
              </div>
              <span className="text-text-dim text-xs whitespace-nowrap mt-1">{guide.readTime}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 bg-surface border border-border rounded-xl p-8 text-center">
        <h3 className="text-xl font-semibold mb-2">Want it done for you?</h3>
        <p className="text-text-secondary text-sm mb-6">
          Book a 1-on-1 session and I&apos;ll set up your entire AI dev environment with you.
        </p>
        <Link
          href="/book"
          className="bg-nano hover:bg-nano-dim text-bg font-semibold px-6 py-3 rounded-lg transition-colors text-sm inline-block"
        >
          Book a Session — $100
        </Link>
      </div>
    </div>
  );
}

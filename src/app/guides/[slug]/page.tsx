import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllGuides, getGuide } from "@/lib/guides";
import { MDXContent } from "@/components/MDXContent";

export async function generateStaticParams() {
  const guides = getAllGuides();
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: `${guide.meta.title} — cnid.ai`,
    description: guide.meta.description,
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) notFound();

  const guides = getAllGuides();
  const currentIndex = guides.findIndex((g) => g.slug === slug);
  const nextGuide = currentIndex < guides.length - 1 ? guides[currentIndex + 1] : null;
  const prevGuide = currentIndex > 0 ? guides[currentIndex - 1] : null;

  return (
    <div className="max-w-3xl mx-auto px-6 pt-16 pb-20">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-text-dim mb-8">
        <Link href="/guides" className="hover:text-text-secondary transition-colors">
          Guides
        </Link>
        <span>/</span>
        <span className="text-text-secondary">{guide.meta.title}</span>
      </div>

      {/* Read time */}
      <p className="text-text-dim text-sm mb-4">{guide.meta.readTime} read</p>

      {/* Content */}
      <article className="prose">
        <MDXContent content={guide.content} />
      </article>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-16 pt-8 border-t border-border">
        {prevGuide ? (
          <Link
            href={`/guides/${prevGuide.slug}`}
            className="text-text-secondary hover:text-nano transition-colors text-sm"
          >
            ← {prevGuide.title}
          </Link>
        ) : (
          <div />
        )}
        {nextGuide ? (
          <Link
            href={`/guides/${nextGuide.slug}`}
            className="text-text-secondary hover:text-nano transition-colors text-sm"
          >
            {nextGuide.title} →
          </Link>
        ) : (
          <div />
        )}
      </div>

      {/* CTA */}
      <div className="mt-12 bg-surface border border-border rounded-xl p-8 text-center">
        <h3 className="text-xl font-semibold mb-2">Need help?</h3>
        <p className="text-text-secondary text-sm mb-6">
          Book a 1-on-1 session and I&apos;ll walk you through it personally.
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

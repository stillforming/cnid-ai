import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-bg/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-text-primary tracking-tight">
          cnid<span className="text-nano">.ai</span>
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/guides" className="text-text-secondary hover:text-text-primary transition-colors text-sm">
            Guides
          </Link>
          <Link
            href="/book"
            className="bg-nano hover:bg-nano-dim text-bg font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
          >
            Book a Session
          </Link>
        </div>
      </div>
    </nav>
  );
}

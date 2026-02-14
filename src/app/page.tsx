import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* Hero */}
      <section className="pt-24 pb-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
          I help you set up<br />
          <span className="text-nano">AI dev workflows</span><br />
          on Windows.
        </h1>
        <p className="mt-6 text-text-secondary text-lg max-w-2xl leading-relaxed">
          Bootcamp grad turned AI-powered solo dev. I&apos;ll show you how to set up a real AI development
          environment using WSL — the same setup I use to ship production products.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/guides"
            className="border border-nano text-nano hover:bg-nano hover:text-bg font-semibold px-6 py-3 rounded-lg transition-all text-sm"
          >
            Read the Guides
          </Link>
          <Link
            href="/book"
            className="bg-nano hover:bg-nano-dim text-bg font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Book a Session — $100
          </Link>
        </div>
      </section>

      {/* What I Help With */}
      <section className="pb-20">
        <h2 className="text-2xl font-bold mb-8">What I help with</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <Card
            title="AI Agent Setup"
            description="Persistent AI workspace that lives in your project, knows your codebase, and builds alongside you. Not ChatGPT copy-paste."
          />
          <Card
            title="Windows + WSL"
            description="Get a proper Linux dev environment running on your Windows machine. The right way, with none of the headaches."
          />
          <Card
            title="Full Dev Environment"
            description="Node, Python, Git, Docker, deployment — the complete stack from zero to shipping. One session."
          />
        </div>
      </section>

      {/* Social Proof */}
      <section className="pb-20 border-t border-border pt-16">
        <div className="text-center">
          <p className="text-text-dim text-sm uppercase tracking-wider mb-4">From the setup</p>
          <div className="grid sm:grid-cols-3 gap-8">
            <Stat value="560k+" label="Records in my data pipeline" />
            <Stat value="$20/mo" label="Total infrastructure cost" />
            <Stat value="1 dev" label="+ 1 AI partner" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to set up your AI workflow?</h2>
        <p className="text-text-secondary mb-8 max-w-lg mx-auto">
          Start with the free guides. If you get stuck or want it done right the first time, book a session.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/guides"
            className="border border-border text-text-secondary hover:text-text-primary hover:border-text-dim px-6 py-3 rounded-lg transition-all text-sm"
          >
            Free Guides →
          </Link>
          <Link
            href="/book"
            className="bg-nano hover:bg-nano-dim text-bg font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Book a 1-on-1 →
          </Link>
        </div>
      </section>
    </div>
  );
}

function Card({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-surface border border-border rounded-xl p-6 hover:border-nano/30 transition-colors">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-bold text-nano">{value}</p>
      <p className="text-text-dim text-sm mt-1">{label}</p>
    </div>
  );
}

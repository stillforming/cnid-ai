import Link from "next/link";

export const metadata = {
  title: "Book a Session — cnid.ai",
  description: "1-on-1 AI dev workflow setup. $100 flat rate. Get your full environment running in one session.",
};

export default function BookPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-16 pb-20">
      <h1 className="text-4xl font-bold mb-4">Book a Session</h1>
      <p className="text-text-secondary text-lg mb-12">
        $100 flat rate. One session. Full AI dev environment, set up and running.
      </p>

      {/* What You Get */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">What you get</h2>
        <div className="grid gap-4">
          <Item
            title="1-on-1 video call"
            description="Screen share. I walk you through everything. You ask questions in real time."
          />
          <Item
            title="Full WSL + AI setup"
            description="Windows Subsystem for Linux, Node.js, your AI dev environment — all configured properly."
          />
          <Item
            title="Persistent AI workspace"
            description="Your AI knows your project, remembers context, and builds alongside you. Not a chat window."
          />
          <Item
            title="Your first project"
            description="We don't just install tools. We build something real together so you know the workflow."
          />
          <Item
            title="Follow-up support"
            description="Questions after the session? Reach out. I'll help you troubleshoot."
          />
        </div>
      </section>

      {/* Who This Is For */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Who this is for</h2>
        <ul className="space-y-3 text-text-secondary">
          <li className="flex items-start gap-3">
            <span className="text-nano mt-1">→</span>
            <span>Windows users who want a proper AI dev environment</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-nano mt-1">→</span>
            <span>Bootcamp grads who want to level up their workflow</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-nano mt-1">→</span>
            <span>Devs who&apos;ve tried AI tools but can&apos;t get them to stick</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-nano mt-1">→</span>
            <span>Anyone tired of copy-pasting from ChatGPT</span>
          </li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="mb-16">
        <div className="bg-surface border border-nano/30 rounded-xl p-8">
          <div className="flex items-baseline justify-between mb-6">
            <h3 className="text-2xl font-bold">Setup Session</h3>
            <p className="text-3xl font-bold text-nano">$100</p>
          </div>
          <ul className="space-y-2 text-text-secondary text-sm mb-8">
            <li>✓ Full 1-on-1 video call</li>
            <li>✓ WSL + AI environment setup</li>
            <li>✓ Build your first project together</li>
            <li>✓ Follow-up support included</li>
            <li>✓ Flat rate — no hourly surprises</li>
          </ul>

          {/* Cal.com embed placeholder */}
          <div className="bg-bg border border-border rounded-lg p-12 text-center">
            <p className="text-text-dim text-sm mb-4">Scheduling widget loads here</p>
            <a
              href="https://cal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-nano hover:bg-nano-dim text-bg font-semibold px-8 py-3 rounded-lg transition-colors text-sm inline-block"
            >
              Schedule Your Session
            </a>
          </div>
        </div>
      </section>

      {/* Payment */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Payment</h2>
        <p className="text-text-secondary mb-4">
          Payment is collected via PayPal after you book your session. You&apos;ll receive payment
          instructions in your booking confirmation email.
        </p>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Questions</h2>
        <div className="space-y-6">
          <FAQ
            q="How long is a session?"
            a="As long as it takes. Most setups take 1-2 hours. We don't stop until you're running."
          />
          <FAQ
            q="Do I need to know how to code?"
            a="Basic familiarity with a terminal helps, but I'll guide you through everything."
          />
          <FAQ
            q="What if I'm on Mac or Linux?"
            a="The guides and sessions focus on Windows + WSL, but the AI workflow works on any platform. Book a session and we'll adapt."
          />
          <FAQ
            q="Can I just follow the free guides instead?"
            a="Absolutely. That's what they're there for. The session is for people who want it done right, done fast, or need help troubleshooting."
          />
        </div>
      </section>
    </div>
  );
}

function Item({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-surface border border-border rounded-lg p-5">
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-text-secondary text-sm">{description}</p>
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <div>
      <h3 className="font-semibold mb-1">{q}</h3>
      <p className="text-text-secondary text-sm">{a}</p>
    </div>
  );
}

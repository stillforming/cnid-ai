---
title: "Install OpenClaw in WSL"
description: "Set up your AI dev partner in your WSL environment. Persistent workspace, knows your code, builds alongside you."
readTime: "5 min"
order: 2
---

# Install OpenClaw in WSL

Now that WSL is running, let's install your AI dev environment. OpenClaw gives your AI a persistent workspace — it lives in your project, knows your codebase, and remembers context between sessions.

## Install Node.js First

OpenClaw needs Node.js. Install it with nvm (the right way):

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
source ~/.bashrc
nvm install --lts
```

Verify:

```bash
node --version
```

## Install OpenClaw

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

The installer handles everything. When it's done, you'll see the interactive setup wizard.

## Quick Start Setup

Select **QuickStart** when prompted. It'll ask you to:

1. **Pick your AI model** — Claude is recommended if you have a subscription. Gemini works free.
2. **Connect a chat platform** — Discord, Telegram, or WhatsApp. Pick whichever you use.
3. **Name your AI** — give it something. You can change it later.

## Your First Conversation

Once setup completes, you're in. Talk to your AI:

```
You: I want to build a Discord bot that tracks stock prices. What's the best approach?
```

Notice the difference from ChatGPT: you're not starting from scratch. Your AI is IN your project directory. It can see your files. It remembers what you talked about yesterday.

That's the whole point.

## Next Step

→ [Give Your AI Memory](/guides/workspace-setup)

---

**Stuck?** [Book a 1-on-1 session](/book) and I'll set it up with you.

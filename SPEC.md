# cnid.ai — Site Spec

## Overview
Personal site for Cnid — an AI dev workflow consultant who helps people set up AI development environments on Windows/WSL. Dark mode, dev aesthetic, nano blue accent, clean and minimal.

## Design
- **Theme:** Dark mode only (no light mode toggle)
- **Primary accent:** Nano blue (#00A6FF)
- **Background:** Near-black (#0A0A0F)
- **Surface/cards:** Dark gray (#12121A)
- **Text:** White (#F0F0F0) for headings, gray (#A0A0B0) for body
- **Font:** Inter or system mono for code blocks
- **Aesthetic:** Think Linear.app meets terminal. Clean lines, generous whitespace, subtle borders, no clutter.
- **No stock photos. No illustrations. No gradients.** Just type, space, and accent color.

## Pages

### Home (/)
Hero section:
- Headline: "I help you set up AI dev workflows on Windows."
- Subtext: 1-2 sentences about who Cnid is and what they offer
- Two CTAs: "Read the Guides" → /guides, "Book a Session" → /book

Below hero:
- What I help with (3 short bullet cards):
  - AI agent setup (OpenClaw, persistent workspaces)
  - Windows/WSL configuration
  - Full dev environment from scratch
- Social proof section (placeholder for now — "X people helped" or testimonials later)

### Guides (/guides)
- Grid/list of guide cards
- Each card: title, short description, estimated read time
- Links to individual guide pages

### Individual Guide (/guides/[slug])
- Markdown-rendered content
- GIF/image support
- Code blocks with syntax highlighting
- CTA at bottom: "Need help? Book a 1-on-1 session →"
- Guides stored as MDX files in /content/guides/

### Book a Session (/book)
- What a session includes:
  - 1-on-1 video call
  - Full setup of your AI dev environment
  - Windows/WSL configuration
  - Ongoing support via Discord after the session
- Pricing: $100 flat rate per session
- Cal.com embed for scheduling (placeholder URL for now — will be configured later)
- PayPal payment info/button (placeholder for now)

### Layout
- **Nav:** Simple top bar. Logo/name left, links right (Home, Guides, Book)
- **Footer:** Minimal. Links + "Built with AI" or similar
- **Mobile responsive** — must look good on phone

## Technical
- Next.js 15 App Router
- Tailwind CSS
- MDX for guide content (use next-mdx-remote or @next/mdx)
- Static generation for guides
- Deploy on Vercel

## Content
Create one placeholder guide to demonstrate the system:
- Title: "Install WSL in 30 Seconds"
- Slug: install-wsl
- Short placeholder content showing the format works

## DO NOT
- Add authentication
- Add a database
- Add analytics (yet)
- Add a blog separate from guides
- Over-engineer anything — this ships tonight

# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally:

- **React developers new to bots.** They know components, hooks and routing from the web and want a Telegram bot to feel like the same craft — no handler soup, no hand-built keyboard JSON.
- **Existing Telegram bot developers** (grammY, Telegraf, gramio). They already ship bots and need to see depth before switching: serverless/edge deploys, durable sessions and storage on real databases, middleware and production plugins, testing.

Both arrive from npm, GitHub or a link, decide within a minute whether Teact is serious, then live in the docs while building.

## Product Purpose

Teact is a React renderer for the Telegram Bot API. Bot screens are JSX components; messages, buttons, keyboards and media are UI that re-renders and edits in place. The docs site (this repo) explains, persuades on the landing page, and is the working reference afterwards. Success: a visitor scaffolds a bot (`bun create teact`) and keeps the docs open while building.

## Positioning

A real React reconciler for Telegram — hooks, context, Suspense, a router with guards and co-located commands — not a templating layer over handlers. One codebase runs long-running (polling/webhook server) or serverless (`bot.fetch()` on Cloudflare Workers, Vercel/Deno Edge, Bun) with durable sessions and storage on Redis, Postgres, SQLite, MongoDB, Cloudflare KV/D1.

## Operating Context

- Docs built with Next.js 16 + Fumadocs (MDX in `content/docs`, sidebar from `meta.json`), deployed on Vercel; search, OG images and `llms.txt` routes exist.
- Readers copy code into Bun/TypeScript projects; the CLI (`teact dev|build|add|deploy|webhook|doctor|routes`) is part of every workflow.
- Library source of truth: the `leuliance/teact` monorepo (15 packages under `@teactjs/*` + `create-teact`).

## Capabilities and Constraints

- Release: 1.0.0 is prepared (PR leuliance/teact#2) but not yet published; npm currently serves `0.2.0-alpha.1`. Copy must not claim 1.0 is on npm until it is — the docs present 1.0 as the current version of the docs.
- Packages: core, ui, telegram, plugin-sdk, storage, testing, cli, create-teact, redis, postgres, sqlite, mongodb, cloudflare, i18n (19 locale packs), plugins (rateLimit, logger, maintenance, chatFilter, ignoreOld, errorReporter, analytics, featureFlags, createBroadcaster).
- Every API shown must exist in the library source; examples must type-check against it.
- Stack is fixed: Next.js + Fumadocs + Tailwind v4. Keep search, OG, llms routes, MDX components.

## Brand Commitments

- Name: **Teact** (scoped packages `@teactjs/*`). No existing logo or palette to preserve — full visual redesign allowed.
- Binding visual direction from the owner: **subtle neobrutalism**.

## Evidence on Hand

- Real code: the library's examples, the showcase bot (`examples/showcase-bot` in the teact repo), package READMEs.
- Measured numbers (from the 1.0 work): `teact --version` ~230 ms → ~7 ms; light CLI commands ~230 ms → ~35 ms; `teact dev` first output ~350 ms (vite-node) → ~45 ms (bun); showcase build ~400 ms (vite) → ~58 ms (Bun.build); 911 tests in the library suite.
- GitHub stars / npm downloads: may be shown only when real and non-trivial; at the time of writing the repo has 0 stars and no download stats — do not display them.
- No testimonials, customers, logos or case studies exist. Never fabricate any.

## Product Principles

1. Show, don't claim: lead with real code and the Telegram UI it produces.
2. Depth is the proof for bot veterans — serverless, databases, plugins and testing must be one click away.
3. Every snippet is copy-paste correct against the current API.
4. Reading comfort beats decoration in the docs; the landing page earns attention, the docs earn trust.

## Accessibility & Inclusion

WCAG 2.2 AA contrast in light and dark themes; full keyboard navigation; respects `prefers-reduced-motion`. The audience is global (19 locales ship), so avoid idioms in UI copy.

import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Database,
  FlaskConical,
  Globe2,
  Layers,
  ShieldCheck,
} from 'lucide-react';
import { gitConfig } from '@/lib/shared';
import { LiveDemo } from '@/components/landing/live-demo';
import { CopyCommand } from '@/components/landing/copy-command';
import { Barcode } from '@/components/landing/barcode';
import { Manifest } from '@/components/landing/manifest';
import { Routes, SpeedTicket } from '@/components/landing/routes';
import { SiteHeader } from '@/components/landing/site-header';

const githubHref = `https://github.com/${gitConfig.user}/${gitConfig.repo}`;

/** Handling instructions: what production bots get without extra glue. */
const HANDLING = [
  {
    icon: Database,
    title: 'Durable by default',
    body: 'Sessions and useStorage on Redis, Postgres, SQLite, MongoDB, Cloudflare D1 or KV. Writes land before the update finishes, so nothing is lost when a serverless isolate freezes.',
    href: '/docs/guides/databases',
  },
  {
    icon: Layers,
    title: 'A real router',
    body: 'Routes with params, beforeLoad guards, deep links and commands that live next to the screen they open. Messages edit in place as the user navigates.',
    href: '/docs/guides/router',
  },
  {
    icon: ShieldCheck,
    title: 'Production plugins',
    body: 'Rate limits that hold across instances, maintenance mode, chat filters, error reporting, analytics, feature flags and a paced broadcaster.',
    href: '/docs/packages/plugins',
  },
  {
    icon: Globe2,
    title: 'Speaks the user’s language',
    body: 'Detects Telegram’s language_code, remembers the choice in the session, and ships UI strings for 19 locales with a ready LanguagePicker.',
    href: '/docs/guides/i18n',
  },
  {
    icon: FlaskConical,
    title: 'Testable without Telegram',
    body: 'MockAdapter drives your real bot in bun:test — simulate messages and button presses, assert what was sent and edited. No token needed.',
    href: '/docs/guides/testing',
  },
] as const;

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col bg-kraft text-ink">
      <SiteHeader />

      <main id="main" className="flex-1">
        {/* ── The shipping label ───────────────────────────────────────── */}
        <section aria-labelledby="hero-title" className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6 sm:px-6 md:pb-24 md:pt-10">
          <div className="label-stock shadow-hard-lg">
            {/* FROM / TO */}
            <div className="grid grid-cols-2 border-b-2 border-ink sm:grid-cols-[1fr_1fr_auto]">
              <div className="border-r-2 border-ink px-4 py-3 sm:px-6">
                <div className="field-caps text-ink-soft">From</div>
                <div className="mt-0.5 font-semibold leading-snug">Your React components</div>
              </div>
              <div className="px-4 py-3 sm:border-r-2 sm:border-ink sm:px-6">
                <div className="field-caps text-ink-soft">To</div>
                <div className="mt-0.5 font-semibold leading-snug">Every Telegram chat</div>
              </div>
              <div className="col-span-2 flex items-center gap-3 border-t-2 border-ink px-4 py-3 sm:col-span-1 sm:border-t-0 sm:px-6">
                <span className="field-caps border-2 border-orange-ink px-2 py-1 text-orange-ink">Teact 1.0</span>
                <span className="field-caps text-ink-soft">MIT · Bun · TypeScript</span>
              </div>
            </div>

            {/* Headline */}
            <div className="border-b-2 border-ink px-4 py-8 sm:px-6 md:px-10 md:py-12">
              <h1 id="hero-title" className="display-wide max-w-[16ch] text-[2.6rem] sm:text-6xl md:text-[5.25rem]">
                Ship Telegram bots built from React components.
              </h1>
              <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-ink-soft md:text-xl">
                Teact renders JSX to Telegram. Messages, buttons and keyboards are components that
                re-render and edit in place, with hooks, a router and sessions you already know how
                to use. Run it on polling, a webhook server or the edge.
              </p>
            </div>

            {/* Contents: the working demo */}
            <LiveDemo />

            {/* Tracking */}
            <div className="grid gap-5 border-t-2 border-ink px-4 py-5 sm:px-6 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-6">
              <div>
                <div className="field-caps mb-2 text-ink-soft">Tracking</div>
                <CopyCommand command="bun create teact my-bot" />
              </div>
              <div className="flex flex-wrap items-center gap-3 md:pt-6">
                <Link
                  href="/docs/getting-started/quick-start"
                  className="pressable inline-flex min-h-12 items-center gap-2 border-2 border-ink bg-label px-4 font-semibold shadow-hard"
                >
                  Quick start <ArrowRight className="size-4" aria-hidden />
                </Link>
                <Link
                  href="/docs"
                  className="inline-flex min-h-12 items-center gap-2 px-2 font-semibold underline decoration-2 underline-offset-4 hover:decoration-orange"
                >
                  <BookOpen className="size-4" aria-hidden /> Read the docs
                </Link>
              </div>
              <div className="hidden text-ink md:block md:pt-6">
                <Barcode value="BUN CREATE TEACT" className="h-11 w-56" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Packing list ────────────────────────────────────────────── */}
        <section id="packages" aria-labelledby="packages-title" className="border-t-2 border-ink bg-kraft-tint">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 sm:px-6 md:py-20">
            <div className="grid gap-5 md:grid-cols-[1fr_minmax(0,30rem)] md:items-end">
              <h2 id="packages-title" className="display-wide text-4xl md:text-5xl">
                Everything in the box.
              </h2>
              <p className="max-w-[48ch] text-lg leading-relaxed text-ink-soft">
                Fifteen packages that version together. Start with core, ui and telegram; add a
                database, locales or production plugins when the bot needs them —{' '}
                <code className="font-mono text-[0.9em] text-ink">teact add redis</code> installs and
                wires one for you.
              </p>
            </div>
            <Manifest />
          </div>
        </section>

        {/* ── Routes ───────────────────────────────────────────────────── */}
        <section id="deploy" aria-labelledby="deploy-title" className="border-t-2 border-ink">
          <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
            <div className="grid gap-6 md:grid-cols-[1fr_minmax(0,28rem)] md:items-end">
              <h2 id="deploy-title" className="display-wide max-w-[14ch] text-4xl md:text-5xl">
                One bot. Three ways to ship it.
              </h2>
              <p className="max-w-[48ch] text-lg leading-relaxed text-ink-soft">
                The same <code className="font-mono text-[0.9em] text-ink">bot</code> export runs as a
                long-lived poller or a web-standard <code className="font-mono text-[0.9em] text-ink">fetch</code>{' '}
                handler. On the edge, the reply is sent and the session saved before the response
                resolves.
              </p>
            </div>
            <div className="mt-10">
              <Routes />
            </div>
          </div>
        </section>

        {/* ── Handling + speed ─────────────────────────────────────────── */}
        <section aria-labelledby="handling-title" className="border-t-2 border-ink bg-kraft-tint">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
            <div>
              <h2 id="handling-title" className="display-wide text-4xl md:text-5xl">
                Handle with less glue.
              </h2>
              <ul className="label-stock mt-8">
                {HANDLING.map(({ icon: Icon, title, body, href }) => (
                  <li key={title} className="border-b border-rule last:border-b-0">
                    <Link href={href} className="group grid grid-cols-[2.75rem_1fr] gap-4 px-4 py-5 transition-colors hover:bg-kraft-tint/70 sm:px-5">
                      <span className="flex size-11 items-center justify-center border-2 border-ink bg-label">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <span>
                        <span className="flex items-center gap-2 text-lg font-bold [font-stretch:95%]">
                          {title}
                          <ArrowRight className="size-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" aria-hidden />
                        </span>
                        <span className="mt-1 block leading-relaxed text-ink-soft">{body}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:pt-[4.75rem]">
              <h3 className="text-xl font-bold [font-stretch:95%]">A CLI that gets out of the way</h3>
              <p className="mt-2 max-w-[52ch] leading-relaxed text-ink-soft">
                Commands load on demand, <code className="font-mono text-[0.9em] text-ink">dev</code>{' '}
                runs on <code className="font-mono text-[0.9em] text-ink">bun --watch</code> and{' '}
                <code className="font-mono text-[0.9em] text-ink">build</code> uses Bun.build.
              </p>
              <div className="mt-6">
                <SpeedTicket />
              </div>
            </div>
          </div>
        </section>

        {/* ── Close ────────────────────────────────────────────────────── */}
        <section aria-labelledby="close-title" className="border-t-2 border-ink">
          <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
            <div className="label-stock grid shadow-hard-lg md:grid-cols-[1fr_auto]">
              <div className="px-5 py-8 sm:px-8 md:py-10">
                <h2 id="close-title" className="display-wide text-4xl md:text-6xl">
                  Ready to ship.
                </h2>
                <p className="mt-4 max-w-[50ch] text-lg leading-relaxed text-ink-soft">
                  Scaffold a bot with a template and a database of your choice, add your token, and
                  run <code className="font-mono text-[0.9em] text-ink">bun dev</code>.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <CopyCommand command="bun create teact my-bot" />
                  <Link
                    href="/docs/getting-started"
                    className="pressable inline-flex min-h-12 items-center gap-2 border-2 border-ink bg-label px-4 font-semibold shadow-hard"
                  >
                    Getting started <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-6 border-t-2 border-ink bg-kraft-tint px-5 py-6 text-ink sm:px-8 md:w-72 md:border-l-2 md:border-t-0">
                <div>
                  <div className="field-caps text-ink-soft">Source</div>
                  <a href={githubHref} className="mt-1 block font-mono text-[0.8125rem] underline decoration-2 underline-offset-4 hover:decoration-orange">
                    github.com/{gitConfig.user}/{gitConfig.repo}
                  </a>
                </div>
                <div>
                  <div className="field-caps text-ink-soft">For AI assistants</div>
                  <a href="/llms-full.txt" className="mt-1 block font-mono text-[0.8125rem] underline decoration-2 underline-offset-4 hover:decoration-orange">
                    /llms-full.txt
                  </a>
                </div>
                <Barcode value="TEACT" className="h-10 w-40" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t-2 border-ink bg-ink text-label">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span className="font-bold [font-stretch:112%]">TEACT</span>
          <span className="opacity-80">React for the Telegram Bot API · MIT licensed · Built on grammY</span>
          <nav aria-label="Footer" className="flex gap-4">
            <Link href="/docs" className="underline-offset-4 hover:underline">Docs</Link>
            <a href={githubHref} className="underline-offset-4 hover:underline">GitHub</a>
            <a href="https://www.npmjs.com/org/teactjs" className="underline-offset-4 hover:underline">npm</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

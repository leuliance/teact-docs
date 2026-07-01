import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Bot,
  Braces,
  CheckCircle2,
  Cpu,
  GitBranch,
  Layers,
  MessageCircle,
  Sparkles,
  Terminal,
  Zap,
} from 'lucide-react';
import { JetBrains_Mono, Syne } from 'next/font/google';
import { gitConfig } from '@/lib/shared';

const display = Syne({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const githubHref = `https://github.com/${gitConfig.user}/${gitConfig.repo}`;

const highlights = [
  {
    icon: Layers,
    title: 'File-based routing',
    body: 'Guards, params, and navigate modes that feel like a mini SPA inside Telegram.',
  },
  {
    icon: MessageCircle,
    title: 'Conversations & forms',
    body: 'Multi-step flows with useConversation, useForm, and declarative prompts.',
  },
  {
    icon: Braces,
    title: 'Real React',
    body: 'Hooks, context, Suspense — same patterns you use on the web, compiled with Bun.',
  },
  {
    icon: Terminal,
    title: 'CLI that ships',
    body: 'Scaffold, dev with HMR, build for production, and generate components or plugins.',
  },
] as const;

const steps = [
  {
    n: '01',
    title: 'Scaffold',
    body: 'Run create-teact, pick a template, and toggle plugins (storage, auth, i18n, and more).',
  },
  {
    n: '02',
    title: 'Configure',
    body: 'Drop your bot token into .env and adjust teact.config.ts when you add plugins.',
  },
  {
    n: '03',
    title: 'Ship',
    body: 'Use teact dev with HMR locally, then teact build and run with polling or webhooks.',
  },
] as const;

const faqs = [
  {
    q: 'Do I need to know grammY?',
    a: 'Teact uses grammY under the adapter. You can stay in JSX land for most bots and drop down when you need raw API access.',
  },
  {
    q: 'Is this production-ready?',
    a: 'The stack is designed for real bots: sessions, webhooks, storage drivers, tests with MockAdapter, and a production build path.',
  },
  {
    q: 'Can I use npm or pnpm?',
    a: 'Yes. The scaffolder lets you pick bun, npm, or pnpm. Bun is the default sweet spot for dev speed.',
  },
  {
    q: 'Where do routes and commands live?',
    a: 'Use createRouter for file-style paths and pass commands into createBot for Telegram menu commands and deep links.',
  },
] as const;

export default function HomePage() {
  return (
    <div className="relative flex flex-col flex-1 overflow-x-hidden bg-zinc-50 text-zinc-900 dark:bg-[#05080f] dark:text-zinc-100">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(6,182,212,0.14),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.22),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_0%,rgba(14,165,233,0.08),transparent)] dark:bg-[radial-gradient(ellipse_60%_40%_at_100%_0%,rgba(34,211,238,0.12),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-size-[64px_64px] opacity-40 mask-[radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)] dark:opacity-35 bg-[linear-gradient(rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.06)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]"
      />

      <section className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-16 pt-14 text-center md:pb-24 md:pt-20">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-600/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium tracking-wide text-cyan-900 backdrop-blur-sm dark:border-cyan-500/25 dark:text-cyan-200/90">
          <Sparkles className="size-3.5 text-cyan-600 dark:text-cyan-300" aria-hidden />
          React for the Telegram Bot API
        </div>

        <h1
          className={`${display.className} max-w-4xl pb-2 text-5xl font-extrabold leading-[1.12] tracking-tight text-zinc-900 sm:text-6xl md:text-7xl dark:text-white`}
        >
          React took over the web.{' '}
          <span className="inline-block bg-linear-to-r from-cyan-600 via-sky-600 to-indigo-600 bg-clip-text pb-1 text-transparent dark:from-cyan-300 dark:via-sky-400 dark:to-indigo-400">
            Bots are next.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 md:text-xl dark:text-zinc-400">
          The web builds its best interfaces with React. In a world moving fast on AI,{' '}
          <strong className="font-semibold text-zinc-900 dark:text-zinc-200">Teact</strong> brings the same
          components, hooks, and routing to Telegram — bots that feel like apps, powered by grammY and Bun.
        </p>

        <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
          <Link
            href="/docs"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-cyan-500 to-sky-600 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_32px_-10px_rgba(6,182,212,0.45)] transition hover:brightness-110 active:scale-[0.98] dark:shadow-[0_0_40px_-8px_rgba(34,211,238,0.55)]"
          >
            Read the docs
            <ArrowRight className="size-4" aria-hidden />
          </Link>
          <a
            href={githubHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-7 py-3.5 text-sm font-semibold text-zinc-900 backdrop-blur-sm transition hover:border-zinc-300 hover:bg-zinc-50 dark:border-white/15 dark:bg-white/5 dark:text-zinc-100 dark:hover:border-white/25 dark:hover:bg-white/10"
          >
            <GitBranch className="size-4 text-zinc-500 dark:text-zinc-400" aria-hidden />
            View on GitHub
          </a>
        </div>

        <p className={`${mono.className} mt-6 text-sm text-zinc-500 dark:text-zinc-500`}>
          <span className="text-zinc-400 dark:text-zinc-600">$</span> bun create teact my-bot
        </p>
      </section>

      <section className="relative z-10 border-y border-zinc-200/80 bg-white/60 py-10 backdrop-blur-sm dark:border-white/10 dark:bg-black/20">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {[
            { k: 'Packages', v: '@teactjs/*' },
            { k: 'Adapter', v: 'grammY' },
            { k: 'Runtime', v: 'Bun-first' },
            { k: 'License', v: 'MIT' },
          ].map((row) => (
            <div key={row.k} className="text-center md:text-left">
              <p className={`${mono.className} text-[11px] font-medium uppercase tracking-wider text-zinc-500`}>{row.k}</p>
              <p className={`${display.className} mt-1 text-lg font-bold text-zinc-900 dark:text-white`}>{row.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
          <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-linear-to-br from-white to-zinc-50/80 p-1 shadow-xl shadow-cyan-900/5 dark:border-white/10 dark:from-white/8 dark:to-transparent dark:shadow-cyan-950/40 lg:col-span-3">
            <div className="flex items-center gap-2 border-b border-zinc-200 bg-zinc-100/80 px-4 py-3 dark:border-white/10 dark:bg-black/30">
              <Bot className="size-4 text-cyan-600 dark:text-cyan-400" aria-hidden />
              <span className={`${mono.className} text-xs font-medium text-zinc-500 dark:text-zinc-400`}>src/index.tsx</span>
              <span className="ml-auto flex gap-1.5">
                <span className="size-2.5 rounded-full bg-red-500/80" />
                <span className="size-2.5 rounded-full bg-amber-500/80" />
                <span className="size-2.5 rounded-full bg-emerald-500/80" />
              </span>
            </div>
            <pre
              className={`${mono.className} overflow-x-auto bg-zinc-50 p-5 text-left text-[13px] leading-relaxed text-zinc-800 md:text-sm dark:bg-transparent dark:text-zinc-300`}
            >
              <code>
                <span className="text-sky-700 dark:text-sky-400/90">import</span>
                {' { '}
                <span className="text-cyan-800 dark:text-cyan-200">createBot</span>
                {' } '}
                <span className="text-sky-700 dark:text-sky-400/90">from</span>{' '}
                <span className="text-emerald-700 dark:text-emerald-300/90">&quot;@teactjs/core&quot;</span>;
                {'\n'}
                <span className="text-sky-700 dark:text-sky-400/90">import</span>
                {' { '}
                <span className="text-cyan-800 dark:text-cyan-200">Message</span>,{' '}
                <span className="text-cyan-800 dark:text-cyan-200">Button</span>, <span className="text-cyan-800 dark:text-cyan-200">InlineKeyboard</span>
                {' } '}
                <span className="text-sky-700 dark:text-sky-400/90">from</span>{' '}
                <span className="text-emerald-700 dark:text-emerald-300/90">&quot;@teactjs/ui&quot;</span>;
                {'\n'}
                <span className="text-sky-700 dark:text-sky-400/90">import</span>
                {' { '}
                <span className="text-cyan-800 dark:text-cyan-200">TelegramAdapter</span>
                {' } '}
                <span className="text-sky-700 dark:text-sky-400/90">from</span>{' '}
                <span className="text-emerald-700 dark:text-emerald-300/90">&quot;@teactjs/telegram&quot;</span>;
                {'\n\n'}
                <span className="text-zinc-500 dark:text-zinc-500">{'// Components + hooks — same as you know them'}</span>
                {'\n'}
                <span className="text-violet-700 dark:text-violet-300/90">const</span> bot = <span className="text-cyan-800 dark:text-cyan-200">createBot</span>({'{\n'}
                {'  '}<span className="text-amber-800 dark:text-amber-200/90">component</span>: App,
                {'\n  '}
                <span className="text-amber-800 dark:text-amber-200/90">adapter</span>: <span className="text-cyan-800 dark:text-cyan-200">new</span>{' '}
                <span className="text-amber-800 dark:text-amber-200">TelegramAdapter</span>(),{'\n  '}
                <span className="text-amber-800 dark:text-amber-200/90">token</span>: process.env.<span className="text-amber-800 dark:text-amber-200">TELEGRAM_BOT_TOKEN</span>,
                {'\n}'});{'\n\n'}
                bot.<span className="text-cyan-800 dark:text-cyan-200">start</span>();
              </code>
            </pre>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-2">
            <div className="flex flex-1 flex-col justify-center rounded-2xl border border-cyan-600/15 bg-cyan-500/6 p-6 backdrop-blur-sm dark:border-cyan-500/20">
              <Zap className="mb-3 size-8 text-cyan-600 dark:text-cyan-400" aria-hidden />
              <h2 className={`${display.className} text-xl font-bold text-zinc-900 dark:text-white`}>Why Teact</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Ship inline keyboards, media, polls, and payments with declarative UI — then layer routing,
                sessions, i18n, and streaming when you need them.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white/80 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-white/3">
              <p className={`${mono.className} text-xs uppercase tracking-wider text-zinc-500`}>Ecosystem</p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-cyan-500" />
                  @teactjs/core, ui, telegram, plugin-sdk
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-sky-500" />
                  Storage, testing utils, CLI &amp; create-teact
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="group rounded-2xl border border-zinc-200 bg-white/60 p-5 transition hover:border-cyan-500/30 hover:bg-white dark:border-white/10 dark:bg-white/2 dark:hover:border-cyan-500/25 dark:hover:bg-white/4"
            >
              <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 transition group-hover:bg-cyan-500/15 dark:text-cyan-400">
                <Icon className="size-5" aria-hidden />
              </div>
              <h3 className={`${display.className} font-bold text-zinc-900 dark:text-zinc-100`}>{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 border-t border-zinc-200/80 bg-zinc-100/50 py-20 dark:border-white/10 dark:bg-black/25">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className={`${mono.className} text-xs font-medium uppercase tracking-widest text-cyan-600 dark:text-cyan-400`}>
              From zero to first message
            </p>
            <h2 className={`${display.className} mt-2 text-3xl font-bold text-zinc-900 md:text-4xl dark:text-white`}>
              Three steps, then iterate
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.n}
                className="relative rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/4"
              >
                <span className={`${mono.className} text-4xl font-bold text-cyan-500/25 dark:text-cyan-400/20`}>{s.n}</span>
                <h3 className={`${display.className} -mt-2 text-lg font-bold text-zinc-900 dark:text-white`}>{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <h2 className={`${display.className} mb-8 text-center text-2xl font-bold text-zinc-900 dark:text-white`}>
          Built on a stack you already trust
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {[
            { icon: Braces, label: 'React patterns' },
            { icon: Bot, label: 'Telegram Bot API' },
            { icon: Cpu, label: 'Bun runtime' },
            { icon: Terminal, label: 'grammY adapter' },
            { icon: BookOpen, label: 'Full docs' },
          ].map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-200"
            >
              <Icon className="size-4 text-cyan-600 dark:text-cyan-400" aria-hidden />
              {label}
            </span>
          ))}
        </div>
      </section>

      <section className="relative z-10 border-t border-zinc-200/80 bg-white/70 py-16 dark:border-white/10 dark:bg-black/20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className={`${display.className} mb-8 text-center text-2xl font-bold text-zinc-900 dark:text-white`}>
            Frequently asked
          </h2>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details
                key={q}
                className="group rounded-xl border border-zinc-200 bg-zinc-50/80 open:bg-white dark:border-white/10 dark:bg-white/4 dark:open:bg-white/6"
              >
                <summary className="flex cursor-pointer list-none items-center gap-2 px-4 py-3 text-left text-sm font-semibold text-zinc-900 dark:text-zinc-100 [&::-webkit-details-marker]:hidden">
                  <CheckCircle2 className="size-4 shrink-0 text-cyan-600 opacity-70 group-open:opacity-100 dark:text-cyan-400" aria-hidden />
                  {q}
                </summary>
                <p className="border-t border-zinc-200 px-4 pb-4 pt-3 text-sm leading-relaxed text-zinc-600 dark:border-white/10 dark:text-zinc-400">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 border-t border-zinc-200/80 bg-zinc-100/40 py-14 dark:border-white/10 dark:bg-black/20">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className={`${display.className} text-lg font-bold text-zinc-900 dark:text-white`}>Ready to prototype?</p>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-500">
              Installation, routing, hooks, and package reference live in the docs. Toggle theme anytime from the navbar.
            </p>
          </div>
          <Link
            href="/docs"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            Open documentation
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </section>
    </div>
  );
}

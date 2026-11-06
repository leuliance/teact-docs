'use client';

import { useState } from 'react';

/** One bot, three delivery routes — the same `bot` export, different entry files. */
const ROUTES = [
  {
    id: 'polling',
    name: 'Polling',
    where: 'Bun on a VPS, a container, your laptop',
    file: 'src/index.tsx',
    run: 'teact build && bun run start',
    code: `export const bot = createBot({ router, adapter: new TelegramAdapter() });

// Long-running: start polling only when this file is run directly.
if (import.meta.main) bot.start();`,
  },
  {
    id: 'workers',
    name: 'Cloudflare Workers',
    where: 'Edge — sessions on D1 or KV',
    file: 'src/worker.ts',
    run: 'teact deploy cloudflare --run',
    code: `import { bot } from './index';

export default {
  fetch: (request: Request, env: Env) =>
    bot.fetch(request, {
      token: env.TELEGRAM_BOT_TOKEN,
      secretToken: env.WEBHOOK_SECRET,
      env, // read bindings anywhere with getEnv<Env>()
    }),
};`,
  },
  {
    id: 'vercel',
    name: 'Vercel Edge',
    where: 'Edge — sessions on Upstash or Neon',
    file: 'api/bot.ts',
    run: 'vercel deploy',
    code: `import { bot } from '../src/index';

export const config = { runtime: 'edge' };

export default (request: Request) =>
  bot.fetch(request, {
    token: process.env.TELEGRAM_BOT_TOKEN,
    secretToken: process.env.WEBHOOK_SECRET,
  });`,
  },
] as const;

export function Routes() {
  const [active, setActive] = useState<(typeof ROUTES)[number]['id']>('polling');
  const route = ROUTES.find((r) => r.id === active)!;

  return (
    <div className="label-stock overflow-hidden">
      <div role="tablist" aria-label="Deploy target" className="grid grid-cols-3 border-b-2 border-ink">
        {ROUTES.map((r, i) => {
          const selected = r.id === active;
          return (
            <button
              key={r.id}
              type="button"
              role="tab"
              id={`route-tab-${r.id}`}
              aria-selected={selected}
              aria-controls="route-panel"
              onClick={() => setActive(r.id)}
              className={`flex min-h-16 flex-col items-start justify-center gap-0.5 px-3 py-2 text-left transition-colors sm:px-4 ${
                i > 0 ? 'border-l-2 border-ink' : ''
              } ${selected ? 'bg-ink text-label' : 'bg-label text-ink hover:bg-kraft-tint'}`}
            >
              <span className="text-[0.9375rem] font-bold leading-tight [font-stretch:90%] sm:text-base">{r.name}</span>
              <span className={`hidden text-[0.8125rem] sm:block ${selected ? 'text-label/75' : 'text-ink-soft'}`}>{r.where}</span>
            </button>
          );
        })}
      </div>
      <div id="route-panel" role="tabpanel" aria-labelledby={`route-tab-${route.id}`}>
        <div className="flex items-center justify-between border-b-2 border-ink bg-kraft-tint px-4 py-2">
          <span className="font-mono text-[0.75rem] text-ink-soft">{route.file}</span>
          <span className="font-mono text-[0.75rem] text-ink-soft">$ {route.run}</span>
        </div>
        <pre className="min-h-56 overflow-x-auto px-4 py-4 text-[0.8125rem] leading-[1.7] text-ink">
          <code>{route.code}</code>
        </pre>
      </div>
    </div>
  );
}

/** Measured CLI timings (Teact 1.0 vs the previous release), set as a weigh-station ticket. */
const TIMINGS = [
  { what: 'teact --version', before: 230, after: 7 },
  { what: 'teact webhook · info · routes', before: 230, after: 35 },
  { what: 'teact dev — first output', before: 350, after: 45 },
  { what: 'teact build — showcase bot', before: 400, after: 58 },
];

export function SpeedTicket() {
  const max = Math.max(...TIMINGS.map((t) => t.before));
  return (
    <div className="label-stock overflow-hidden">
      <div className="grid grid-cols-[1fr_auto_auto] items-end gap-x-4 border-b-2 border-ink bg-kraft-tint px-4 py-2">
        <span className="field-caps text-ink-soft">Command</span>
        <span className="field-caps w-14 text-right text-ink-soft">Before</span>
        <span className="field-caps w-14 text-right text-ink-soft">Now</span>
      </div>
      <ul>
        {TIMINGS.map((t) => (
          <li key={t.what} className="border-b border-rule px-4 py-3 last:border-b-0">
            <div className="grid grid-cols-[1fr_auto_auto] items-baseline gap-x-4">
              <span className="font-mono text-[0.8125rem] text-ink">{t.what}</span>
              <span className="w-14 text-right font-mono text-[0.8125rem] text-ink-soft line-through decoration-ink-soft/50 tabular">
                {t.before} ms
              </span>
              <span className="w-14 text-right font-mono text-[0.875rem] font-bold text-ink tabular">{t.after} ms</span>
            </div>
            <div className="relative mt-2 h-2.5" aria-hidden>
              <div className="absolute inset-y-0 left-0 border border-ink/40 bg-kraft-tint" style={{ width: `${(t.before / max) * 100}%` }} />
              <div className="absolute inset-y-0 left-0 border border-ink bg-orange" style={{ width: `${Math.max((t.after / max) * 100, 1.5)}%` }} />
            </div>
          </li>
        ))}
      </ul>
      <p className="border-t-2 border-ink px-4 py-2 text-[0.8125rem] text-ink-soft">
        Measured on the Teact monorepo: lazy-loaded commands and Bun-native <code className="font-mono">dev</code> and{' '}
        <code className="font-mono">build</code>. Vite is still available with <code className="font-mono">--vite</code>.
      </p>
    </div>
  );
}

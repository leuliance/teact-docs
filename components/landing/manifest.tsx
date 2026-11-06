'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

type Item = {
  pkg: string;
  contents: string;
  install: string;
  href: string;
  group: 'Engine' | 'Data' | 'Ship' | 'Grow';
};

/** The packing list: every package that ships, grouped by what it does. */
const ITEMS: Item[] = [
  { group: 'Engine', pkg: '@teactjs/core', contents: 'createBot, hooks, router with guards, sessions, middleware, i18n runtime', install: 'bun add @teactjs/core react', href: '/docs/packages/core' },
  { group: 'Engine', pkg: '@teactjs/ui', contents: 'Message, Button, InlineKeyboard, Photo, Poll, MediaGroup and 30 more components', install: 'bun add @teactjs/ui', href: '/docs/packages/ui' },
  { group: 'Engine', pkg: '@teactjs/telegram', contents: 'grammY adapter — polling, webhook server, serverless bot.fetch()', install: 'bun add @teactjs/telegram grammy', href: '/docs/packages/telegram' },
  { group: 'Data', pkg: '@teactjs/storage', contents: 'useStorage, async drivers, per-update cache, createSessionStore', install: 'bun add @teactjs/storage', href: '/docs/packages/storage' },
  { group: 'Data', pkg: '@teactjs/redis', contents: 'ioredis, node-redis, Bun RedisClient, Upstash (edge) — Cluster aware', install: 'bun add @teactjs/redis ioredis', href: '/docs/packages/redis' },
  { group: 'Data', pkg: '@teactjs/postgres', contents: 'pg, postgres.js, Neon (edge), PGlite — one-query hydration', install: 'bun add @teactjs/postgres postgres', href: '/docs/packages/postgres' },
  { group: 'Data', pkg: '@teactjs/sqlite', contents: 'bun:sqlite and better-sqlite3 — synchronous, no cache layer', install: 'bun add @teactjs/sqlite', href: '/docs/packages/sqlite' },
  { group: 'Data', pkg: '@teactjs/mongodb', contents: 'MongoDB driver with TTL indexes and atomic counters', install: 'bun add @teactjs/mongodb mongodb', href: '/docs/packages/mongodb' },
  { group: 'Data', pkg: '@teactjs/cloudflare', contents: 'Workers KV and D1 drivers and session stores', install: 'bun add @teactjs/cloudflare', href: '/docs/packages/cloudflare' },
  { group: 'Grow', pkg: '@teactjs/i18n', contents: 'Locale detection, 19 UI string packs, LanguagePicker, Intl formatting', install: 'bun add @teactjs/i18n', href: '/docs/packages/i18n' },
  { group: 'Grow', pkg: '@teactjs/plugins', contents: 'rateLimit, logger, maintenance, errorReporter, analytics, feature flags, broadcast', install: 'bun add @teactjs/plugins', href: '/docs/packages/plugins' },
  { group: 'Grow', pkg: '@teactjs/plugin-sdk', contents: 'definePlugin — middleware, providers, services, lifecycle', install: 'bun add @teactjs/plugin-sdk', href: '/docs/packages/plugin-sdk' },
  { group: 'Ship', pkg: '@teactjs/cli', contents: 'teact dev, build, add, deploy, webhook, doctor, routes', install: 'bun add -d @teactjs/cli', href: '/docs/packages/cli' },
  { group: 'Ship', pkg: '@teactjs/testing', contents: 'MockAdapter and renderBot for bun:test', install: 'bun add -d @teactjs/testing', href: '/docs/packages/testing' },
  { group: 'Ship', pkg: 'create-teact', contents: 'Scaffolder — templates, database choice, ready to run', install: 'bun create teact my-bot', href: '/docs/packages/create-teact' },
];

export function Manifest() {
  const [open, setOpen] = useState<string | null>('@teactjs/core');

  return (
    <div className="label-stock overflow-hidden">
      <div className="hidden grid-cols-[3rem_15rem_1fr_6rem_2rem] items-center border-b-2 border-ink bg-kraft-tint px-4 py-2 md:grid">
        <span className="field-caps text-ink-soft">Item</span>
        <span className="field-caps text-ink-soft">Package</span>
        <span className="field-caps text-ink-soft">Contents</span>
        <span className="field-caps text-ink-soft">Group</span>
        <span className="sr-only">Details</span>
      </div>
      <ul>
        {ITEMS.map((item, i) => {
          const isOpen = open === item.pkg;
          const id = `manifest-${i}`;
          return (
            <li key={item.pkg} className="border-b border-rule last:border-b-0">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={id}
                onClick={() => setOpen(isOpen ? null : item.pkg)}
                className={`grid w-full grid-cols-[2.5rem_1fr_2rem] items-start gap-x-2 px-4 py-3 text-left transition-colors hover:bg-kraft-tint/70 md:grid-cols-[3rem_15rem_1fr_6rem_2rem] md:items-center ${
                  isOpen ? 'bg-kraft-tint/70' : ''
                }`}
              >
                <span className="font-mono text-[0.75rem] text-ink-soft tabular md:pt-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="min-w-0">
                  <span className="block truncate font-mono text-[0.8125rem] font-semibold text-ink">{item.pkg}</span>
                  <span className="mt-0.5 block text-[0.875rem] text-ink-soft md:hidden">{item.contents}</span>
                </span>
                <span className="hidden text-[0.9375rem] text-ink-soft md:block">{item.contents}</span>
                <span className="hidden md:block">
                  <span className="field-caps inline-block border border-ink px-1.5 py-0.5 text-ink">{item.group}</span>
                </span>
                <ChevronDown
                  aria-hidden
                  className={`size-4 justify-self-end text-ink transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <div id={id} hidden={!isOpen} className="border-t border-dashed border-rule bg-label px-4 py-4 md:pl-[4rem]">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <code className="inline-block w-fit max-w-full overflow-x-auto border-2 border-ink bg-white px-3 py-2 font-mono text-[0.8125rem] text-[#17140f] dark:bg-kraft-tint dark:text-ink">
                    {item.install}
                  </code>
                  <Link
                    href={item.href}
                    className="inline-flex w-fit items-center gap-1 font-semibold text-orange-ink underline decoration-2 underline-offset-4 hover:decoration-orange"
                  >
                    Read the {item.pkg} docs <ArrowUpRight className="size-4" aria-hidden />
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

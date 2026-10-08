import type { ReactNode } from 'react';

/**
 * Release status badge — a small pill with a status dot, shown on the docs home page.
 */
export function ReleaseBadge({ children }: { children?: ReactNode }) {
  return (
    <span
      role="status"
      className="not-prose inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-900 dark:border-emerald-500/40 dark:bg-emerald-500/15 dark:text-emerald-200"
    >
      <span className="size-2 rounded-full bg-emerald-600 dark:bg-emerald-400" aria-hidden />
      {children ?? 'v1.0 — stable'}
    </span>
  );
}

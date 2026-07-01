import type { ReactNode } from 'react';

/**
 * Alpha status badge — yellow background with a flashing dot.
 * Signals that Teact is pre-1.0 and its API may change between releases.
 */
export function AlphaBadge({ children }: { children?: ReactNode }) {
  return (
    <span
      role="status"
      className="not-prose inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100 px-3 py-1 text-sm font-medium text-amber-900 dark:border-amber-500/40 dark:bg-amber-500/15 dark:text-amber-200"
    >
      <span className="teact-alpha-dot" aria-hidden />
      {children ?? 'Alpha — API may change before 1.0'}
    </span>
  );
}

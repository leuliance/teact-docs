import type { ComponentProps } from 'react';
import { Tab as FdTab, Tabs as FdTabs } from 'fumadocs-ui/components/tabs';

/** Fumadocs tabs, set as a ruled manifest with label tabs. */
export function Tabs({ className = '', ...props }: ComponentProps<typeof FdTabs>) {
  return (
    <FdTabs
      {...props}
      className={`my-6 rounded-none border-2 border-ink bg-kraft-tint shadow-hard [&>[role=tablist]]:border-b-2 [&>[role=tablist]]:border-ink [&>[role=tablist]]:px-3 [&_[role=tab]]:font-mono [&_[role=tab]]:text-[0.75rem] [&_[role=tab][data-state=active]]:border-b-2 [&_[role=tab][data-state=active]]:border-orange [&_[role=tab][data-state=active]]:text-ink ${className}`}
    />
  );
}

export function Tab({ className = '', ...props }: ComponentProps<typeof FdTab>) {
  return <FdTab {...props} className={`rounded-none bg-label ${className}`} />;
}

import Link from 'next/link';
import { gitConfig } from '@/lib/shared';
import { ThemeToggle } from './theme-toggle';
import { Wordmark } from './wordmark';

const githubHref = `https://github.com/${gitConfig.user}/${gitConfig.repo}`;

/** The landing page's label strip: wordmark, the three places a visitor goes, theme. */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-kraft">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:border-2 focus:border-ink focus:bg-label focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-4 px-4 sm:px-6">
        <Link href="/" aria-label="Teact home" className="flex items-center gap-2.5">
          <Wordmark />
        </Link>
        <nav aria-label="Main" className="ml-auto flex items-center gap-1 sm:gap-2">
          <Link href="/docs" className="px-2 py-2 font-semibold underline-offset-4 hover:underline sm:px-3">
            Docs
          </Link>
          <a href="#packages" className="hidden px-3 py-2 font-semibold underline-offset-4 hover:underline md:inline">
            Packages
          </a>
          <a href="#deploy" className="hidden px-3 py-2 font-semibold underline-offset-4 hover:underline md:inline">
            Deploy
          </a>
          <a href={githubHref} className="px-2 py-2 font-semibold underline-offset-4 hover:underline sm:px-3">
            GitHub
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

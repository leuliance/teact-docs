import { RootProvider } from 'fumadocs-ui/provider/next';
import type { Metadata, Viewport } from 'next';
import { Archivo, Martian_Mono } from 'next/font/google';
import './global.css';

// Archivo carries the whole voice: wide black for headlines, condensed caps for
// label fields, normal width for reading. Martian Mono is for code, package names
// and tracking numbers only.
const sans = Archivo({
  subsets: ['latin', 'latin-ext'],
  weight: 'variable',
  axes: ['wdth'],
  variable: '--font-archivo',
  display: 'swap',
});

const mono = Martian_Mono({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  weight: 'variable',
  axes: ['wdth'],
  variable: '--font-martian',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Teact — React for Telegram bots',
    template: '%s · Teact',
  },
  description:
    'Build Telegram bots from React components. Messages, buttons and keyboards that re-render and edit in place — on polling, webhooks or the edge.',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#cba574' },
    { media: '(prefers-color-scheme: dark)', color: '#211b14' },
  ],
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col" suppressHydrationWarning>
        <RootProvider theme={{ enabled: true }}>{children}</RootProvider>
      </body>
    </html>
  );
}

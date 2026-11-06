import type { ReactNode } from 'react';
import { AlertTriangle, CheckCircle2, Info, Lightbulb, OctagonX } from 'lucide-react';

type CalloutType = 'info' | 'note' | 'tip' | 'idea' | 'warn' | 'warning' | 'error' | 'success';

const STYLES = {
  info: { label: 'Note', Icon: Info, strip: 'bg-[#d9ecf8] text-[#0f4f7a] dark:bg-[#12324a] dark:text-[#9fd6f8]' },
  tip: { label: 'Tip', Icon: Lightbulb, strip: 'bg-[#f6e7c4] text-[#6b4708] dark:bg-[#3a2c10] dark:text-[#f0cf84]' },
  warning: { label: 'Watch out', Icon: AlertTriangle, strip: 'bg-orange text-[#17140f]' },
  error: { label: 'Don’t', Icon: OctagonX, strip: 'bg-[#f6d3d0] text-[#7d1812] dark:bg-[#4a1c18] dark:text-[#ffb3ac]' },
  success: { label: 'Works', Icon: CheckCircle2, strip: 'bg-[#d8eedb] text-[#1f5a29] dark:bg-[#183a1f] dark:text-[#a6e2b0]' },
} as const;

function resolve(type: CalloutType = 'info'): keyof typeof STYLES {
  if (type === 'warn') return 'warning';
  if (type === 'note') return 'info';
  if (type === 'idea') return 'tip';
  return type;
}

/** A labeled sticker: typed header strip, then the note. */
export function Callout({ type, title, children }: { type?: CalloutType; title?: ReactNode; children?: ReactNode }) {
  const { label, Icon, strip } = STYLES[resolve(type)];
  return (
    <aside className="not-prose my-6 border-2 border-ink bg-label shadow-hard-sm" role="note">
      <div className={`flex items-center gap-2 border-b-2 border-ink px-3 py-1.5 ${strip}`}>
        <Icon className="size-4 shrink-0" aria-hidden />
        <span className="field-caps">{label}</span>
        {title && <span className="truncate text-[0.875rem] font-semibold normal-case">{title}</span>}
      </div>
      <div className="prose prose-no-margin max-w-none px-4 py-3 text-[0.9375rem] leading-relaxed text-ink">{children}</div>
    </aside>
  );
}

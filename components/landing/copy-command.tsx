'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

/** The tracking line: a copyable install command, set like a label's tracking number. */
export function CopyCommand({ command, className = '' }: { command: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setFailed(false);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setFailed(true);
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy command: ${command}`}
      className={`pressable group inline-flex min-h-12 items-center gap-3 border-2 border-ink bg-orange px-4 text-left font-mono text-[0.875rem] font-medium text-[#17140f] shadow-hard sm:text-[0.9375rem] ${className}`}
    >
      <span aria-hidden className="select-none opacity-60">$</span>
      <span className="whitespace-nowrap">{command}</span>
      <span className="ml-auto inline-flex items-center gap-1.5 border-l-2 border-[#17140f] pl-3 field-caps">
        {copied ? <Check className="size-4" aria-hidden /> : <Copy className="size-4" aria-hidden />}
        <span aria-live="polite">{copied ? 'Copied' : failed ? 'Select & copy' : 'Copy'}</span>
      </span>
    </button>
  );
}

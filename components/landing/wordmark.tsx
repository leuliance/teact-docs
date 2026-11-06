/** Teact's mark: a parcel label with a reply arrow — a component, shipped. */
export function Mark({ className = 'size-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <rect x="2.5" y="2.5" width="25" height="25" fill="var(--color-label)" stroke="currentColor" strokeWidth="2.5" />
      <rect x="5" y="5" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="0" />
      <path d="M2.5 11.5h25" stroke="currentColor" strokeWidth="2.5" />
      <path d="M9 17.5h9.5a4 4 0 0 1 0 8H14" fill="none" stroke="var(--color-orange)" strokeWidth="3" strokeLinecap="square" />
      <path d="M12.5 14l-3.5 3.5 3.5 3.5" fill="none" stroke="var(--color-orange)" strokeWidth="3" strokeLinecap="square" />
    </svg>
  );
}

export function Wordmark() {
  return (
    <span className="flex items-center gap-2.5 text-ink">
      <Mark />
      <span className="text-[1.375rem] font-extrabold tracking-[-0.03em] [font-stretch:115%]">teact</span>
    </span>
  );
}

import { ArrowUpRight, CheckCheck } from 'lucide-react';

type InlineButton = string | { text: string; url?: string };

/**
 * What a component renders in Telegram — a static, faithful-enough chat preview
 * for docs pages. Show it next to the code that produces it.
 *
 * @example
 * <TelegramPreview user="/start" text={"Welcome!\nPick an option:"} buttons={[["Browse", "Search"], ["Settings"]]} />
 */
export function TelegramPreview({
  bot = 'Your Bot',
  user,
  text,
  buttons,
  replyKeyboard,
  edited = false,
  caption = 'Renders in Telegram as',
  notification,
}: {
  bot?: string;
  user?: string;
  text: string;
  buttons?: InlineButton[][];
  replyKeyboard?: string[][];
  edited?: boolean;
  caption?: string;
  notification?: string;
}) {
  return (
    <figure className="not-prose my-6 border-2 border-ink bg-label shadow-hard">
      <figcaption className="flex items-center justify-between border-b-2 border-ink bg-kraft-tint px-4 py-2">
        <span className="field-caps text-ink-soft">{caption}</span>
        <span className="font-mono text-[0.6875rem] text-ink-soft">Telegram</span>
      </figcaption>
      <div className="flex flex-col gap-3 bg-tg-chat px-4 py-5 sm:px-6">
        {user && (
          <div className="ml-auto max-w-[80%] whitespace-pre-line rounded-2xl rounded-br-md bg-[#e3f7d0] px-3 py-1.5 text-[0.9375rem] text-[#17140f] dark:bg-[#2b5278] dark:text-[#f2ebde]">
            {user}
            <span className="ml-2 inline-flex translate-y-0.5 items-center gap-0.5 text-[0.6875rem] text-[#4f9a3a] dark:text-[#8fc1ea]">
              12:04 <CheckCheck className="size-3.5" aria-hidden />
            </span>
          </div>
        )}
        <div className="max-w-[min(88%,26rem)]">
          <div className="rounded-2xl rounded-bl-md bg-white px-3 py-2 text-[#17140f] shadow-sm dark:bg-[#182533] dark:text-[#f2ebde]">
            <div className="text-[0.8125rem] font-semibold text-[#1c7fc0] dark:text-[#6fc6f5]">{bot}</div>
            <div className="whitespace-pre-line text-[0.9375rem] leading-snug">{text}</div>
            <div className="mt-0.5 flex justify-end gap-1 text-[0.6875rem] text-[#7d8b97] dark:text-[#7f97ad]">
              {edited && <span>edited</span>}
              <span>12:04</span>
            </div>
          </div>
          {buttons?.map((row, i) => (
            <div key={i} className="mt-1 grid gap-1" style={{ gridTemplateColumns: `repeat(${row.length}, minmax(0, 1fr))` }}>
              {row.map((b, j) => {
                const label = typeof b === 'string' ? b : b.text;
                const isUrl = typeof b !== 'string' && b.url;
                return (
                  <span
                    key={j}
                    className="relative rounded-lg bg-[#5b8db5]/45 py-2 text-center text-[0.875rem] font-medium text-white dark:bg-[#2b4a66]/80"
                  >
                    {label}
                    {isUrl && <ArrowUpRight aria-hidden className="absolute right-1 top-1 size-3" />}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
        {notification && (
          <div className="mx-auto rounded-xl bg-[#17140f]/75 px-3 py-2 text-[0.8125rem] text-white">{notification}</div>
        )}
      </div>
      {replyKeyboard && (
        <div className="grid gap-1 border-t-2 border-ink bg-[#e9eef2] p-1.5 dark:bg-[#17212b]">
          {replyKeyboard.map((row, i) => (
            <div key={i} className="grid gap-1" style={{ gridTemplateColumns: `repeat(${row.length}, minmax(0, 1fr))` }}>
              {row.map((b, j) => (
                <span key={j} className="rounded-md bg-white py-2 text-center text-[0.875rem] text-[#17140f] shadow-sm dark:bg-[#2b3a48] dark:text-[#f2ebde]">
                  {b}
                </span>
              ))}
            </div>
          ))}
        </div>
      )}
    </figure>
  );
}

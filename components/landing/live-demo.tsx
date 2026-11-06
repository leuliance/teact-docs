'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, CheckCheck } from 'lucide-react';

/**
 * The hero's CONTENTS field: a real Teact component on the left and the Telegram
 * message it renders on the right. The preview's inline keyboard works — pressing a
 * button edits the message in place (as Teact does) and highlights the handler line
 * that ran.
 */

type Tok = [cls: string, text: string];
type Line = { toks: Tok[]; handler?: 'dec' | 'inc' };

const K = 'text-[#b93a0c] dark:text-[#ff8a5c]'; // keyword
const S = 'text-[#2f7a3c] dark:text-[#8fd49a]'; // string
const C = 'text-[#1c7fc0] dark:text-[#6fc6f5]'; // component / type
const F = 'text-[#7a4fb8] dark:text-[#c4a4f2]'; // function
const P = 'text-ink-soft'; // punctuation
const N = ''; // plain

const CODE: Line[] = [
  { toks: [[K, 'import'], [N, ' { createBot, useState } '], [K, 'from'], [S, " '@teactjs/core'"], [P, ';']] },
  { toks: [[K, 'import'], [N, ' { Message, InlineKeyboard, Button } '], [K, 'from'], [S, " '@teactjs/ui'"], [P, ';']] },
  { toks: [[K, 'import'], [N, ' { TelegramAdapter } '], [K, 'from'], [S, " '@teactjs/telegram'"], [P, ';']] },
  { toks: [] },
  { toks: [[K, 'function'], [N, ' '], [F, 'Counter'], [P, '() {']] },
  { toks: [[N, '  '], [K, 'const'], [N, ' [count, setCount] = '], [F, 'useState'], [P, '('], [N, '0'], [P, ');']] },
  { toks: [[N, '  '], [K, 'return'], [P, ' (']] },
  { toks: [[P, '    <'], [C, 'Message'], [N, ' text'], [P, '={'], [S, '`Count: ${count}`'], [P, '}>']] },
  { toks: [[P, '      <'], [C, 'InlineKeyboard'], [P, '>']] },
  { handler: 'dec', toks: [[P, '        <'], [C, 'Button'], [N, ' text'], [P, '='], [S, '"−1"'], [N, ' onClick'], [P, '={() => '], [F, 'setCount'], [P, '(count - 1)} />']] },
  { handler: 'inc', toks: [[P, '        <'], [C, 'Button'], [N, ' text'], [P, '='], [S, '"+1"'], [N, ' onClick'], [P, '={() => '], [F, 'setCount'], [P, '(count + 1)} />']] },
  { toks: [[P, '      </'], [C, 'InlineKeyboard'], [P, '>']] },
  { toks: [[P, '    </'], [C, 'Message'], [P, '>']] },
  { toks: [[P, '  );']] },
  { toks: [[P, '}']] },
  { toks: [] },
  { toks: [[K, 'export const'], [N, ' bot = '], [F, 'createBot'], [P, '({']] },
  { toks: [[N, '  component: Counter,']] },
  { toks: [[N, '  adapter: '], [K, 'new'], [N, ' '], [C, 'TelegramAdapter'], [P, '(),']] },
  { toks: [[P, '});']] },
  { toks: [[K, 'if'], [P, ' ('], [K, 'import'], [N, '.meta.main'], [P, ') '], [N, 'bot.'], [F, 'start'], [P, '();']] },
];

export function LiveDemo() {
  const [count, setCount] = useState(0);
  const [edited, setEdited] = useState(false);
  const [ran, setRan] = useState<'dec' | 'inc' | null>(null);
  const [pulse, setPulse] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const press = (which: 'dec' | 'inc') => {
    setCount((c) => (which === 'inc' ? c + 1 : c - 1));
    setEdited(true);
    setRan(which);
    setPulse((p) => p + 1);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setRan(null), 1400);
  };

  return (
    <div className="grid min-w-0 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
      {/* Code */}
      <div className="min-w-0 lg:border-r-2 lg:border-ink">
        <div className="flex items-center justify-between border-b-2 border-ink bg-kraft-tint px-4 py-2">
          <span className="field-caps text-ink-soft">Contents · src/index.tsx</span>
          <span className="font-mono text-[0.6875rem] text-ink-soft">TSX</span>
        </div>
        <pre
          aria-label="Example Teact bot: a counter component"
          className="overflow-x-auto px-0 py-3 text-[0.75rem] leading-[1.65] xl:text-[0.8125rem]"
        >
          <code className="block min-w-max">
            {CODE.map((line, i) => {
              const active = line.handler && line.handler === ran;
              return (
                <span
                  key={i}
                  className={`flex pr-4 transition-colors duration-500 ${
                    active ? 'bg-orange/25' : 'bg-transparent'
                  }`}
                >
                  <span aria-hidden className="w-10 shrink-0 select-none pr-3 text-right text-ink-soft/60 tabular">
                    {i + 1}
                  </span>
                  <span className={active ? 'font-semibold' : undefined}>
                    {line.toks.length === 0
                      ? ' '
                      : line.toks.map(([cls, text], j) => (
                          <span key={j} className={cls}>
                            {text}
                          </span>
                        ))}
                  </span>
                </span>
              );
            })}
          </code>
        </pre>
      </div>

      {/* Rendered Telegram message */}
      <div className="order-first flex min-w-0 flex-col border-b-2 border-ink lg:order-none lg:border-b-0">
        <div className="flex items-center justify-between border-b-2 border-ink bg-kraft-tint px-4 py-2">
          <span className="field-caps text-ink-soft">Delivers as · Telegram message</span>
          <span className="font-mono text-[0.6875rem] text-ink-soft" aria-live="polite">
            {ran ? `ran onClick (${ran === 'inc' ? '+1' : '−1'})` : 'try the buttons'}
          </span>
        </div>
        <div className="flex flex-1 flex-col justify-end gap-3 bg-tg-chat px-4 py-5 sm:px-6">
          <div className="mx-auto mb-auto rounded-full bg-[#17140f]/25 px-2.5 py-0.5 text-[0.75rem] font-medium text-white dark:bg-black/40">
            Today
          </div>
          {/* user message */}
          <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-[#e3f7d0] px-3 py-1.5 text-[0.9375rem] text-[#17140f] dark:bg-[#2b5278] dark:text-[#f2ebde]">
            /start
            <span className="ml-2 inline-flex translate-y-0.5 items-center gap-0.5 text-[0.6875rem] text-[#4f9a3a] dark:text-[#8fc1ea]">
              12:04 <CheckCheck className="size-3.5" aria-hidden />
            </span>
          </div>

          {/* bot message + inline keyboard */}
          <div className="max-w-[88%]">
            <div className="rounded-2xl rounded-bl-md bg-white px-3 py-2 text-[#17140f] shadow-sm dark:bg-[#182533] dark:text-[#f2ebde]">
              <div className="text-[0.8125rem] font-semibold text-[#1c7fc0] dark:text-[#6fc6f5]">Counter Bot</div>
              <div key={pulse} className="text-[0.9375rem] tabular motion-safe:animate-[tg-edit_420ms_cubic-bezier(0.16,1,0.3,1)]">
                Count: {count}
              </div>
              <div className="mt-0.5 flex justify-end gap-1 text-[0.6875rem] text-[#7d8b97] dark:text-[#7f97ad]">
                {edited && <span>edited</span>}
                <span>12:04</span>
                <Check className="size-3.5 opacity-0" aria-hidden />
              </div>
            </div>
            <div className="mt-1 grid grid-cols-2 gap-1" role="group" aria-label="Inline keyboard">
              {(['dec', 'inc'] as const).map((which) => (
                <button
                  key={which}
                  type="button"
                  onClick={() => press(which)}
                  className="rounded-lg bg-[#5b8db5]/45 py-2 text-[0.9375rem] font-medium text-white transition-[background-color,transform] duration-150 hover:bg-[#4c7ea6]/60 active:scale-[0.97] dark:bg-[#2b4a66]/80 dark:hover:bg-[#335a7c]"
                >
                  {which === 'inc' ? '+1' : '−1'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

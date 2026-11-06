/**
 * A real Code 39 barcode drawn from its text (no image): each character is nine
 * elements — five bars, four spaces — three of them wide.
 */
const CODE39: Record<string, string> = {
  '0': 'nnnwwnwnn', '1': 'wnnwnnnnw', '2': 'nnwwnnnnw', '3': 'wnwwnnnnn', '4': 'nnnwwnnnw',
  '5': 'wnnwwnnnn', '6': 'nnwwwnnnn', '7': 'nnnwnnwnw', '8': 'wnnwnnwnn', '9': 'nnwwnnwnn',
  A: 'wnnnnwnnw', B: 'nnwnnwnnw', C: 'wnwnnwnnn', D: 'nnnnwwnnw', E: 'wnnnwwnnn',
  F: 'nnwnwwnnn', G: 'nnnnnwwnw', H: 'wnnnnwwnn', I: 'nnwnnwwnn', J: 'nnnnwwwnn',
  K: 'wnnnnnnww', L: 'nnwnnnnww', M: 'wnwnnnnwn', N: 'nnnnwnnww', O: 'wnnnwnnwn',
  P: 'nnwnwnnwn', Q: 'nnnnnnwww', R: 'wnnnnnwwn', S: 'nnwnnnwwn', T: 'nnnnwnwwn',
  U: 'wwnnnnnnw', V: 'nwwnnnnnw', W: 'wwwnnnnnn', X: 'nwnnwnnnw', Y: 'wwnnwnnnn',
  Z: 'nwwnwnnnn', '-': 'nwnnnnwnw', '.': 'wwnnnnwnn', ' ': 'nwwnnnwnn', '*': 'nwnnwnwnn',
};

export function Barcode({ value, className = '', height = 44 }: { value: string; className?: string; height?: number }) {
  const text = `*${value.toUpperCase().replace(/[^0-9A-Z .-]/g, '-')}*`;
  const rects: { x: number; w: number }[] = [];
  let x = 0;
  for (const ch of text) {
    const pattern = CODE39[ch] ?? CODE39['-'];
    [...pattern].forEach((el, i) => {
      const w = el === 'w' ? 3 : 1;
      if (i % 2 === 0) rects.push({ x, w });
      x += w;
    });
    x += 1; // inter-character gap
  }
  return (
    <svg
      viewBox={`0 0 ${x} ${height}`}
      preserveAspectRatio="none"
      className={className}
      role="img"
      aria-label={`Barcode: ${value}`}
    >
      {rects.map((r, i) => (
        <rect key={i} x={r.x} y={0} width={r.w} height={height} fill="currentColor" />
      ))}
    </svg>
  );
}

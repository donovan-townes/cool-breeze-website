export function AutumnLeaves({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`autumn-leaves ${className}`.trim()}
      viewBox="0 0 360 220"
      aria-hidden="true"
      focusable="false"
    >
      <g className="autumn-leaves__leaf autumn-leaves__leaf--rust" transform="translate(15 18) rotate(-14 68 78)">
        <path d="M69 8 80 45l22-20-7 35 37-9-27 27 27 17-39 2 5 37-27-24-9 48-10-46-30 24 8-39-40-5 31-16-25-27 38 10-6-37 24 24Z" />
        <path className="autumn-leaves__stem" d="M68 91c8 33 8 57 2 86" />
      </g>
      <g className="autumn-leaves__leaf autumn-leaves__leaf--amber" transform="translate(175 3) rotate(18 62 89) scale(.78)">
        <path d="M64 7c8 18 18 31 31 42 14 12 26 28 25 48-2 30-27 55-57 66-29-14-52-40-52-70 0-23 15-38 30-51C51 33 58 21 64 7Z" />
        <path className="autumn-leaves__stem" d="M64 75c1 43 8 73 23 101" />
        <path className="autumn-leaves__vein" d="M64 88 37 65m29 49 31-29" />
      </g>
      <g className="autumn-leaves__leaf autumn-leaves__leaf--paper" transform="translate(252 104) rotate(42 50 50) scale(.65)">
        <path d="M50 4c13 17 26 29 40 42 10 10 12 28 4 40-9 15-27 23-44 28C28 104 8 87 6 66 4 43 24 27 50 4Z" />
        <path className="autumn-leaves__stem" d="M49 54c6 30 14 49 28 70" />
      </g>
    </svg>
  );
}

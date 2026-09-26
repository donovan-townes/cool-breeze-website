const leafNames = ["main", "one", "two", "three", "four", "five"] as const;

export function AutumnLeaves({ className = "" }: { className?: string }) {
  return (
    <div className={`autumn-leaves ${className}`.trim()} aria-hidden="true">
      {leafNames.map((leaf) => (
        <span
          className={`autumn-leaves__item autumn-leaves__item--${leaf}`}
          key={leaf}
        />
      ))}
    </div>
  );
}

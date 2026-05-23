import { useId, type ReactNode } from 'react';

/** Wraps a trigger; shows `text` as a hover bubble linked via aria-describedby. */
export function Tooltip({ text, children }: { text: string; children: ReactNode }) {
  const id = useId();
  return (
    <span className="tooltip" title={text} aria-describedby={id}>
      {children}
      <span className="tooltip-bubble" role="tooltip" id={id}>
        {text}
      </span>
    </span>
  );
}

import type { JSX } from 'react';
export default function Quote(params: { children: JSX.Element | React.ReactNode }) {
  return (
    <blockquote className="border-l-4 rounded bg-stone-100 text-base px-4 py-2 text-stone-950 border-stone-950">
      &quot;{params.children}&quot;
    </blockquote>
  );
}

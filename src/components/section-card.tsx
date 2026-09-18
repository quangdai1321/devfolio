import type { PropsWithChildren } from "react";

export function SectionCard({ children }: PropsWithChildren) {
  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur">
      {children}
    </article>
  );
}

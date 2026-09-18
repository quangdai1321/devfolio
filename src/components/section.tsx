import type { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  id: string;
  title: string;
  subtitle?: string;
}>;

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 space-y-5">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-100">
          {title}
        </h2>
        {subtitle ? <p className="text-slate-400">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

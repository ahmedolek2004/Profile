import type { ReactNode } from 'react';

interface Props {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: Props) {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <h2 className="mb-8 font-display text-2xl font-bold text-white sm:text-3xl">{title}</h2>
      {children}
    </section>
  );
}

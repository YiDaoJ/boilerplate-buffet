import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';

export const Navigation: FC = () => {
  return (
    <header className={clsx(['p-8', 'flex justify-end gap-8'])}>
      <Link href="/">Home</Link>
      <Link href="/film">Star Wars Films</Link>
    </header>
  );
};

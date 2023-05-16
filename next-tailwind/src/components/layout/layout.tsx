import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { Navigation } from '../nav/nav';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={clsx(['h-full flex flex-col'])}>
      <Navigation />
      <main className="flex-1 p-8">{children}</main>
      <footer className="p-8">Footer</footer>
    </div>
  );
};

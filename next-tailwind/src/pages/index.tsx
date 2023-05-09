import { Button } from '@/components';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Button color="warning" onClick={() => alert('click successfully')}>
        Click on me
      </Button>
    </main>
  );
}

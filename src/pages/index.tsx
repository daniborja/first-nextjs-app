import Link from 'next/link';

import { MainLayout } from '@/layouts';

export default function HomePage() {
  return (
    <MainLayout>
      <h1>Home Page</h1>

      <h3>
        Go to {/* <a href="/about">About Page</a> */}
        <Link href="/about">About</Link>
      </h3>
    </MainLayout>
  );
}

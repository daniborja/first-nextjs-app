import Link from 'next/link';

import { MainLayout } from '@/layouts';

const PricingPage = () => {
  return (
    <MainLayout>
      <h1>Pricing Page</h1>

      <h3>
        Go to
        <Link href="/">Home</Link>
      </h3>
    </MainLayout>
  );
};

export default PricingPage;

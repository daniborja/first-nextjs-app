import Link from 'next/link';

import { MainLayout } from '@/layouts';

const ContactPage = () => {
  return (
    <MainLayout>
      <h1>Contact Page</h1>

      <h3>
        Go to
        <Link href="/">Home</Link>
      </h3>
    </MainLayout>
  );
};

export default ContactPage;

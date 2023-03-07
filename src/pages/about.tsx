import Link from 'next/link';

import { DarkLayout, MainLayout } from '@/layouts';

const AboutPage = () => {
  return (
    <>
      <h1>About Page</h1>

      <h3>
        Go to
        <Link href="/">Home</Link>
      </h3>
    </>
  );
};

export default AboutPage;

AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};

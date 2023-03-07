import { CSSProperties } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// import styles from './ActiveLink.module.css';

interface ActiveLinkProps {
  title: string;
  path: string;
}

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
};

const ActiveLink = ({ title, path }: ActiveLinkProps) => {
  const { asPath } = useRouter();

  return (
    // <Link href={path} className={`${asPath === path && styles.active}`}>
    <Link href={path} style={asPath === path ? style : undefined}>
      {title}
    </Link>
  );
};

export default ActiveLink;

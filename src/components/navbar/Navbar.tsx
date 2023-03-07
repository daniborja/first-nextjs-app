import { ActiveLink } from '../ActiveLink';
import styles from './Navbar.module.css';
import { navLinks } from './navLinks';

export const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
      <ul>
        {navLinks.map(({ path, title }) => (
          <li key={path}>
            <ActiveLink {...{ path, title }} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

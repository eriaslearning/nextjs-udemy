import styles from './header.module.css';
import Link from 'next/link'

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <header className={styles['header']}>
      <div className={styles['logo']}>
        <Link href="/">erias Events</Link>
      </div>
      <nav className={styles['navigation']}>
        <ul>
          <li>
            <Link href="/events">All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

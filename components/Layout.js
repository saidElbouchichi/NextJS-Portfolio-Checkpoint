import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Layout.module.css';

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/about', label: 'À propos' },
  { href: '/projects', label: 'Projets' },
  { href: '/contact', label: 'Contact' },
];

export default function Layout({ title, children }) {
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <title>{`${title} | Said El Bouchichi`}</title>
        <meta name="description" content="Portfolio de Said El Bouchichi — développeur web" />
      </Head>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>SE.</Link>
        <nav className={styles.nav}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={pathname === l.href ? styles.active : ''}>
              {l.label}
            </Link>
          ))}
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>© {new Date().getFullYear()} Said El Bouchichi</footer>
    </>
  );
}

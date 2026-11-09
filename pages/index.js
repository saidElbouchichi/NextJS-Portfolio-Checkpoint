import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout title="Accueil">
      <section className={styles.hero}>
        <Image src="/profile.svg" alt="Photo de profil" width={180} height={180} priority className={styles.avatar} />
        <div>
          <h1>Bonjour, je suis Said 👋</h1>
          <p>
            Ingénieur en génie électrique devenu développeur web full-stack. Je construis des applications
            React / Next.js claires, rapides et accessibles.
          </p>
          <div className={styles.actions}>
            <Link href="/projects" className="btn">Voir mes projets</Link>
            <Link href="/contact" className="btn btn-outline">Me contacter</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Projects.module.css';
import projects from '../data/projects';

// Rendu côté serveur : les projets sont chargés à chaque requête
export async function getServerSideProps() {
  return { props: { projects, generatedAt: new Date().toISOString() } };
}

export default function Projects({ projects, generatedAt }) {
  return (
    <Layout title="Projets">
      <h1>Projets</h1>
      <p className={styles.ssr}>Page rendue côté serveur le {new Date(generatedAt).toLocaleString('fr-FR')}</p>
      <div className={styles.grid}>
        {projects.map((p) => (
          <article key={p.id} className={styles.card}>
            <Image src={p.image} alt={p.title} width={400} height={220} className={styles.image} />
            <div className={styles.body}>
              <h2>{p.title}</h2>
              <p>{p.description}</p>
              <ul className={styles.stack}>
                {p.stack.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <a href={p.repo} target="_blank" rel="noreferrer">Code source →</a>
            </div>
          </article>
        ))}
      </div>
    </Layout>
  );
}

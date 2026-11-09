import Layout from '../components/Layout';
import styles from '../styles/About.module.css';

const skills = ['HTML / CSS', 'JavaScript (ES6+)', 'React', 'Redux', 'TypeScript', 'Next.js', 'Node.js', 'Git / GitHub'];

export default function About() {
  return (
    <Layout title="À propos">
      <h1>À propos</h1>
      <p>
        Ingénieur en génie électrique (automatisme et informatique industrielle), je me forme au développement
        logiciel chez GOMYCODE. J'aime résoudre des problèmes techniques et transformer des idées en produits.
      </p>
      <h2>Compétences</h2>
      <ul className={styles.skills}>
        {skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </Layout>
  );
}

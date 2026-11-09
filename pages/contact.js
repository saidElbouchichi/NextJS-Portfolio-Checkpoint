import { useState } from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Layout title="Contact">
      <h1>Contact</h1>
      <p>
        LinkedIn :{' '}
        <a href="https://www.linkedin.com/in/said-el-bouchichi-428332217" target="_blank" rel="noreferrer">
          Said El Bouchichi
        </a>
        <br />
        GitHub :{' '}
        <a href="https://github.com/saidElbouchichi" target="_blank" rel="noreferrer">saidElbouchichi</a>
      </p>
      {sent ? (
        <p className={styles.success}>Merci ! Votre message a bien été pris en compte.</p>
      ) : (
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <input name="name" placeholder="Votre nom" required />
          <input name="email" type="email" placeholder="Votre e-mail" required />
          <textarea name="message" rows={5} placeholder="Votre message" required />
          <button className="btn" type="submit">Envoyer</button>
        </form>
      )}
    </Layout>
  );
}

import Layout from '../components/Layout';
import styles from './produtos.module.css';

export default function Produtos() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.titulo}>Nossos Produtos</h1>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <img src="/produtos/IMG_3925.jpg" alt="Produto 1" />
            <h2>Produto 1</h2>
            <p>Descrição do produto 1</p>
          </div>

          <div className={styles.card}>
            <img src="/produtos/IMG_3926.jpg" alt="Produto 2" />
            <h2>Produto 2</h2>
            <p>Descrição do produto 2</p>
          </div>

          <div className={styles.card}>
            <img src="/produtos/IMG_3927.jpg" alt="Produto 3" />
            <h2>Produto 3</h2>
            <p>Descrição do produto 3</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

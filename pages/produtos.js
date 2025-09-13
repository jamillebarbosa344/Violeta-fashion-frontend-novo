// pages/produtos.js
import styles from './produtos.module.css';

const produtos = [
  {
    id: 1,
    nome: "Vestido Floral",
    preco: "R$ 120,00",
    imagem: "https://source.unsplash.com/400x400/?dress,fashion"
  },
  {
    id: 2,
    nome: "Bolsa Elegante",
    preco: "R$ 200,00",
    imagem: "https://source.unsplash.com/400x400/?bag,fashion"
  },
  {
    id: 3,
    nome: "Sapato Feminino",
    preco: "R$ 150,00",
    imagem: "https://source.unsplash.com/400x400/?shoes,fashion"
  },
  {
    id: 4,
    nome: "Blusa Estilosa",
    preco: "R$ 90,00",
    imagem: "https://source.unsplash.com/400x400/?blouse,fashion"
  }
];

export default function Produtos() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Nossos Produtos</h1>
      <div className={styles.grid}>
        {produtos.map((produto) => (
          <div key={produto.id} className={styles.card}>
            <img src={produto.imagem} alt={produto.nome} className={styles.imagem} />
            <h2>{produto.nome}</h2>
            <p>{produto.preco}</p>
            <button className={styles.botao}>Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>
    </div>
  );
}

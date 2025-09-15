import Image from "next/image"
import styles from "./produtos.module.css"

export default function Produtos() {
  const produtos = [
    { id: 1, nome: "Produto 1", preco: "R$ 99,90", imagem: "/produtos/IMG_3925.jpg" },
    { id: 2, nome: "Produto 2", preco: "R$ 149,90", imagem: "/produtos/IMG_3926.jpg" },
    { id: 3, nome: "Produto 3", preco: "R$ 79,90", imagem: "/produtos/IMG_3927.jpg" },
  ]

  return (
    <div className={styles.container}>
      <h1>Nossos Produtos</h1>
      <div className={styles.grid}>
        {produtos.map((produto) => (
          <div key={produto.id} className={styles.card}>
            <Image
              src={produto.imagem}
              alt={produto.nome}
              width={250}
              height={300}
              className={styles.img}
            />
            <h3>{produto.nome}</h3>
            <p>{produto.preco}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

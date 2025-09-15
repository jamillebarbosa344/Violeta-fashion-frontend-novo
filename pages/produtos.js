import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from "next/image"
import styles from "./produtos.module.css"

export default function Produtos() {
  const produtos = [
    { id: 1, nome: "Produto 1", preco: "R$ 100,00", imagem: "/produto1.jpg" },
    { id: 2, nome: "Produto 2", preco: "R$ 150,00", imagem: "/produto2.jpg" },
    { id: 3, nome: "Produto 3", preco: "R$ 200,00", imagem: "/produto3.jpg" },
  ]

  return (
    <>
      <Header />
      <main className={styles.container}>
        <h1>Nossos Produtos</h1>
        <div className={styles.grid}>
          {produtos.map((produto) => (
            <div key={produto.id} className={styles.card}>
              <Image 
                src={produto.imagem} 
                alt={produto.nome} 
                width={200} 
                height={200} 
              />
              <h2>{produto.nome}</h2>
              <p>{produto.preco}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

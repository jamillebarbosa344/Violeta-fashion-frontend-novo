import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Cart() {
  return (
    <>
      <Header />
      <main style={{ padding: "20px" }}>
        <h1>Carrinho</h1>
        <p>Seu carrinho está vazio no momento.</p>
      </main>
      <Footer />
    </>
  )
}

import Header from '../components/header'
import Footer from '../components/footer'

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

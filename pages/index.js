import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ padding: "20px" }}>
        <h1>Bem-vindo à Violeta Fashion</h1>
        <p>Moda com estilo e sofisticação para todas as ocasiões.</p>
      </main>
      <Footer />
    </>
  )
}

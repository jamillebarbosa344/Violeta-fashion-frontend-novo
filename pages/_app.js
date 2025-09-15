import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Navbar no topo */}
      <Navbar />

      {/* Header logo abaixo */}
      <Header />

      {/* Conteúdo da página */}
      <main>
        <Component {...pageProps} />
      </main>

      {/* Footer no final */}
      <Footer />
    </>
  )
}

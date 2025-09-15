import '../styles/globals.css'
import Navbar from '/components/Navbar'
import Header from '/components/Header'
import Footer from '/components/Footer'
import { useRouter } from 'next/router'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
      {/* Navbar no topo */}
      <Navbar />

      {/* Header só aparece na Home */}
      {router.pathname === '/' && <Header />}

      {/* Conteúdo da página */}
      <main>
        <Component {...pageProps} />
      </main>

      {/* Footer no final */}
      <Footer />
    </>
  )
}

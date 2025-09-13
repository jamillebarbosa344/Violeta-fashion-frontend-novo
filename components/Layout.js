import Header from './Header.js'
import Footer from './Footer.js'
import Navbar from './Navbar.js'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

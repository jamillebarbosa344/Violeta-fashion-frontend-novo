import Link from "next/link";
import "./Navbar.css"; // vamos criar esse css já já

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Violeta Fashion</div>
      <ul className="nav-links">
        <li><Link href="/">Início</Link></li>
        <li><Link href="/about">Sobre</Link></li>
        <li><Link href="/produtos">Produtos</Link></li>
        <li><Link href="/contact">Contato</Link></li>
        <li><Link href="/cart">Carrinho</Link></li>
      </ul>
    </nav>
  );
}

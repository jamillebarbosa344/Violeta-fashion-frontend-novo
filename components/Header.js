import Link from "next/link";

export default function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>Violeta Fashion</h1>
      <nav>
        <ul style={styles.navList}>
          <li><Link href="/">Início</Link></li>
          <li><Link href="/about">Sobre</Link></li>
          <li><Link href="/produtos">Produtos</Link></li>
          <li><Link href="/contact">Contato</Link></li>
          <li><Link href="/cart">Carrinho</Link></li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#800080", // violeta
    color: "white",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    margin: 0,
    fontSize: "24px",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
  },
};

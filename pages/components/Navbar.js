import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      padding: "15px",
      backgroundColor: "#800080",
      color: "white",
      fontSize: "18px"
    }}>
      <Link href="/">Home</Link>
      <Link href="/about">Sobre</Link>
      <Link href="/contact">Contato</Link>
    </nav>
  );
}

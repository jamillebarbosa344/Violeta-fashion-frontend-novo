import Link from 'next/link';

export default function Header() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 30px',
      backgroundColor: '#6a0dad',
      color: '#fff'
    }}>
      <h1 style={{ margin: 0 }}>Violeta Fashion</h1>
      
      <nav>
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          gap: '20px',
          margin: 0,
          padding: 0
        }}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">Sobre Nós</Link></li>
          <li><Link href="/cart">Carrinho</Link></li>
          <li><Link href="/contact">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}

import Link from "next/link";

export default function Navbar(){
  return (
    <nav style={{
      backgroundColor: "var(--violet)",
      padding: "12px 0",
      position: "sticky",
      top: 0,
      zIndex: 1000
    }}>
      <div style={{maxWidth:1100, margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between", gap:12, padding:"0 16px"}}>
        <Link href="/">
          <a style={{display:"flex",alignItems:"center",gap:10}}>
            <img src="/logo.jpg" alt="Violeta Fashion" style={{width:48,height:48,objectFit:"cover",borderRadius:8}} />
            <span style={{color:"#fff", fontWeight:700}}>VIOLETA FASHION</span>
          </a>
        </Link>

        <div style={{display:"flex",gap:18,alignItems:"center"}}>
          <Link href="/"><a style={{color:"#fff", fontWeight:600}}>Início</a></Link>
          <Link href="/produtos"><a style={{color:"#fff", fontWeight:600}}>Produtos</a></Link>
          <Link href="/cart"><a style={{color:"#fff", fontWeight:600}}>Carrinho</a></Link>
          <Link href="/contato"><a style={{color:"#fff", fontWeight:600}}>Contato</a></Link>
        </div>
      </div>
    </nav>
  );
}

import Link from "next/link";

const produtos = [
  { id: 1, nome: "Vestido Floral", preco: 149.90, imagem: "https://via.placeholder.com/400x300?text=Vestido+Floral" },
  { id: 2, nome: "Blusa de Seda", preco: 89.90, imagem: "https://via.placeholder.com/400x300?text=Blusa+de+Seda" },
  { id: 3, nome: "Calça Jeans", preco: 129.90, imagem: "https://via.placeholder.com/400x300?text=Calça+Jeans" },
  { id: 4, nome: "Saia Midi", preco: 99.90, imagem: "https://via.placeholder.com/400x300?text=Saia+Midi" }
];

function formatBR(n){ return n.toFixed(2).replace('.',',') }

export default function Produtos(){
  const addToCart = (p) => {
    const key = 'vf_cart';
    let cart = JSON.parse(localStorage.getItem(key) || '[]');
    const found = cart.find(i => i.id === p.id);
    if(found) found.quantity += 1;
    else cart.push({ id: p.id, name: p.nome, price: p.preco, quantity: 1, image: p.imagem });
    localStorage.setItem(key, JSON.stringify(cart));
    alert(`${p.nome} adicionado ao carrinho`);
  }

  return (
    <div className="container" style={{paddingTop:20}}>
      <h1>Produtos</h1>
      <div className="grid" style={{marginTop:12}}>
        {produtos.map(p => (
          <div className="card" key={p.id}>
            <img src={p.imagem} alt={p.nome} />
            <h3>{p.nome}</h3>
            <p style={{color:"var(--violet)", fontWeight:700}}>R$ {formatBR(p.preco)}</p>
            <div style={{display:"flex",gap:8,justifyContent:"center",marginTop:8}}>
              <button className="btn" onClick={() => addToCart(p)}>Adicionar ao carrinho</button>
              <Link href={`/product/${p.id}`}><a style={{alignSelf:"center"}}>Detalhes</a></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

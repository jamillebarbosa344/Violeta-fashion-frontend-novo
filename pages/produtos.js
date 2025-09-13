// pages/produtos.js
export default function Produtos() {
  const produtos = [
    {
      id: 1,
      nome: "Conjunto Floral",
      preco: "R$ 199,90",
      image: "/produtos/IMG_3925.jpg",
    },
    {
      id: 2,
      nome: "Vestido Azul Elegante",
      preco: "R$ 249,90",
      image: "/produtos/IMG_3926.jpg",
    },
    {
      id: 3,
      nome: "Bolsa Branca Clássica",
      preco: "R$ 159,90",
      image: "/produtos/IMG_3927.jpg",
    },
    {
      id: 4,
      nome: "Sandália Fashion",
      preco: "R$ 179,90",
      image: "/produtos/IMG_3928.jpg",
    },
    {
      id: 5,
      nome: "Blusa Estilo Verão",
      preco: "R$ 129,90",
      image: "/produtos/IMG_3929.jpg",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Nossos Produtos</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
        {produtos.map((produto) => (
          <div key={produto.id} style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "10px", textAlign: "center" }}>
            <img 
              src={produto.image} 
              alt={produto.nome} 
              style={{ width: "100%", height: "auto", borderRadius: "5px" }} 
            />
            <h2>{produto.nome}</h2>
            <p>{produto.preco}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

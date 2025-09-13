import Footer from "./components/Footer";
import "./produtos.css";

export default function Produtos() {
  const produtos = [
    {
      id: 1,
      nome: "Vestido Floral",
      preco: "R$ 120,00",
      imagem: "https://via.placeholder.com/300x400?text=Vestido+Floral",
    },
    {
      id: 2,
      nome: "Blusa Elegante",
      preco: "R$ 80,00",
      imagem: "https://via.placeholder.com/300x400?text=Blusa+Elegante",
    },
    {
      id: 3,
      nome: "Calça Jeans",
      preco: "R$ 100,00",
      imagem: "https://via.placeholder.com/300x400?text=Calca+Jeans",
    },
    {
      id: 4,
      nome: "Bolsa Feminina",
      preco: "R$ 150,00",
      imagem: "https://via.placeholder.com/300x400?text=Bolsa+Feminina",
    },
  ];

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>✨ Nossos Produtos ✨</h1>
      <div className="produtos-container">
        {produtos.map((item) => (
          <div key={item.id} className="produto-card">
            <img src={item.imagem} alt={item.nome} />
            <h3>{item.nome}</h3>
            <p>{item.preco}</p>
            <button>Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

import Footer from "./components/Footer";

export default function Produtos() {
  const produtos = [
    {
      id: 1,
      nome: "Vestido Floral",
      preco: "R$ 120,00",
      imagem: "https://via.placeholder.com/200x250?text=Vestido+Floral",
    },
    {
      id: 2,
      nome: "Blusa Elegante",
      preco: "R$ 80,00",
      imagem: "https://via.placeholder.com/200x250?text=Blusa+Elegante",
    },
    {
      id: 3,
      nome: "Calça Jeans",
      preco: "R$ 100,00",
      imagem: "https://via.placeholder.com/200x250?text=Calca+Jeans",
    },
    {
      id: 4,
      nome: "Bolsa Feminina",
      preco: "R$ 150,00",
      imagem: "https://via.placeholder.com/200x250?text=Bolsa+Feminina",
    },
  ];

  return (
    <>
      <h1>✨ Nossos Produtos ✨</h1>
      <div style={styles.container}>
        {produtos.map((item) => (
          <div key={item.id} style={styles.card}>
            <img src={item.imagem} alt={item.nome} style={styles.img} />
            <h3>{item.nome}</h3>
            <p>{item.preco}</p>
            <button style={styles.button}>Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    textAlign: "center",
    backgroundColor: "#fff",
  },
  img: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "6px",
  },
  button: {
    marginTop: "10px",
    padding: "10px",
    backgroundColor: "purple",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h1>Bem-vinda à Loja Violeta Fashion 🌸</h1>
        <p>Explore nossas coleções e descubra o melhor da moda feminina.</p>
      </div>
    </div>
  );
}

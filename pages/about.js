import Link from "next/link";

export default function About() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Sobre a Violeta Fashion 🌸</h1>
      <p>
        Somos uma loja de moda feminina dedicada a trazer estilo, elegância e 
        confiança para cada cliente.
      </p>

      {/* Link para a página inicial */}
      <p>
        <Link href="/">Voltar para a Home</Link>
      </p>
    </div>
  );
}

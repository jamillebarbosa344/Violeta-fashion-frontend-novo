export default function Contato(){
  return (
    <div className="container" style={{paddingTop:20}}>
      <h1>Contato</h1>
      <p>Quer falar com a gente? Use o WhatsApp ou o Instagram:</p>

      <p>
        WhatsApp (clique):{" "}
        <a href="https://wa.me/5567993400590" target="_blank" rel="noreferrer">Enviar mensagem</a>
        <br />
        Instagram: <a href="https://instagram.com/seu_instagram" target="_blank" rel="noreferrer">@seu_instagram</a>
      </p>

      <p style={{color:'var(--muted)'}}>Substitua o número e o @ pelo seus reais nas configurações depois.</p>
    </div>
  )
}

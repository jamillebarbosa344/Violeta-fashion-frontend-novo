import { useEffect, useState } from "react";

export default function Cart(){
  const [items, setItems] = useState([]);
  useEffect(()=> {
    setItems(JSON.parse(localStorage.getItem('vf_cart') || '[]'));
  },[])

  const total = items.reduce((s,i)=>s + i.price * i.quantity, 0);

  const checkout = async () => {
    // chamado para backend (simulado)
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ items })
    });
    const data = await res.json();
    if(data.checkoutUrl) window.location.href = data.checkoutUrl;
    else alert('Checkout simulado criado (sem gateway).');
  }

  return (
    <div className="container" style={{paddingTop:20}}>
      <h1>Seu Carrinho</h1>
      {items.length === 0 ? <p>Seu carrinho está vazio.</p> : (
        <>
          <ul>
            {items.map((it, idx) => (
              <li key={idx} style={{marginBottom:8}}>
                {it.name} x {it.quantity} — R$ {String(it.price.toFixed(2)).replace('.',',')}
              </li>
            ))}
          </ul>
          <p style={{fontWeight:700}}>Total: R$ {String(total.toFixed(2)).replace('.',',')}</p>
          <button className="btn" onClick={checkout}>Finalizar Compra</button>
        </>
      )}
    </div>
  )
}

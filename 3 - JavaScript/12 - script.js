function calcular(event) {
  event.preventDefault();
  const preco = parseFloat(document.querySelector("#precoTotal").value);
  const parcelas = parseInt(document.querySelector("#parcelas").value);
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";
  for(let i = 1; i<=parcelas; i++) {
    resultado.innerHTML += `Parcela ${i}: R$ ${(preco/parcelas).toFixed(2)}<br>`;  
  }
  document.querySelector("#precoTotal").value = '';
  document.querySelector("#parcelas").value = '';
}
function calcular(event) {
  event.preventDefault();
  const investimento = parseFloat(document.querySelector("#investimento").value);
  const taxa = parseFloat(document.querySelector("#taxa").value);
  const meses = parseInt(document.querySelector("#meses").value);
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = '';
  let novoSaldo = investimento;
  for(let i=1; i<=meses; i++) {
    novoSaldo = novoSaldo + (novoSaldo*(taxa/100));
    resultado.innerHTML += `Mês ${i}: R$ ${novoSaldo.toFixed(2)}<br>`;
  }

  document.querySelector("#investimento").value = '';
  document.querySelector("#taxa").value = '';
  document.querySelector("#meses").value = '';
}
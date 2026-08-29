function calcular(event) {
  event.preventDefault();
  const orcamento = parseFloat(document.querySelector("#orcamento").value);
  const dias = parseInt(document.querySelector("#dias").value);
  const alimentacao = parseFloat(document.querySelector("#alimentacao").value);
  const transporte = parseFloat(document.querySelector("#transporte").value);
  const resultado = document.querySelector("#resultado");
  const gastoTotal = (alimentacao+transporte)*dias;
  if(gastoTotal > orcamento) {
    const valorParcial = gastoTotal - orcamento;
    resultado.innerHTML = `Gastos Totais acima do orcamento na ordem de R$ ${valorParcial.toFixed(2)}`;
    resultado.style.color = 'red';
  } else {
    const valorTotal = orcamento - gastoTotal;
    resultado.innerHTML = `Gastos dentro do limite. Margem positiva de R$ ${valorTotal.toFixed(2)}`;
  }

  document.querySelector("#orcamento").value = '';
  document.querySelector("#dias").value = '';
  document.querySelector("#alimentacao").value = '';
  document.querySelector("#transporte").value = '';
}
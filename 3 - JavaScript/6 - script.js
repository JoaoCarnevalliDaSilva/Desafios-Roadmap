function calcular(event) {
  event.preventDefault();
  const valor = parseFloat(document.querySelector("#total").value);
  const gorjeta = parseFloat(document.querySelector("#gorjeta").value);
  const pessoas = parseFloat(document.querySelector("#pessoas").value);
  const resultado = document.querySelector("#resultado");
  let totalGorjeta = (valor*gorjeta)/100;
  let totalPagar = valor + totalGorjeta;
  let totalPorPessoa = totalPagar / pessoas;
  resultado.innerHTML = 'A conta ficou R$ ${totalPorPessoa} para cada pessoa.'; 
  document.querySelector("#total").value = '';
  document.querySelector("#gorjeta").value = '';
  document.querySelector("#pessoas").value = '';
}
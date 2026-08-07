function calcular(event) {
  event.preventDefault();
  let valor = parseFloat(document.querySelector("#inicial").value);
  let taxa = parseFloat(document.querySelector("#taxa").value);
  let periodo = parseFloat(document.querySelector("#periodo").value);
  let resultado = document.querySelector("#resultado");
  let rendimento = (valor*taxa*periodo)/100;
  let valorFinal = valor + rendimento;
  resultado.innerHTML = 'Ao final de ${periodo} meses, você terá ${valorFinal}';
  document.querySelector("#inicial").value = '';
  document.querySelector("#taxa").value = '';
  document.querySelector("#periodo").value = '';
}
function calcular(event) {
  event.preventDefault();
  let altura = document.querySelector("#altura").value;
  let peso = document.querySelector("#peso").value;
  let resultado = document.querySelector("#resultado");
  let imc = 0;
  imc = peso/(altura * altura);
  resultado.innerHTML = "Seu IMC é de: " + imc.toFixed(2);
}

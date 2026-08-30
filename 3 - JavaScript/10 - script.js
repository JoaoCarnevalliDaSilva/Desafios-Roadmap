function calcular(event) {
  event.preventDefault();
  const idade = parseInt(document.querySelector("#idade").value);
  const railcard = document.querySelector("#railcard").value.toLowerCase();
  const passagem = parseFloat(document.querySelector("#passagem").value);
  const resultado = document.querySelector("#resultado");
  if (idade >= 60 || railcard === "sim") {
    resultado.innerHTML = `Desconto aplicado! Sua passagem de R$ ${passagem.toFixed(2)} caiu para R$ ${passagem*0.7.toFixed(2)}`;
    resultado.style.color = 'green';
  } else {
    resultado.innerHTML = `Sem desconto aplicável. O valor da passagem é de R$ ${passagem.toFixed(2)}`;
  }

  document.querySelector("#idade").value = '';
  document.querySelector("#railcard").value = '';
  document.querySelector("#passagem").value = '';
}
function calcular(event) {
  event.preventDefault();
  const idade = parseInt(document.querySelector("#idade").value);
  const renda = parseFloat(document.querySelector("#renda").value);
  const emprestimo = parseFloat(document.querySelector("#emprestimo").value);
  const resultado = document.querySelector("#resultado");
  if (idade >= 18 && renda >= 2500 && emprestimo <= (renda*5)) {
    resultado.innerHTML = `Emprestimo de R$ ${emprestimo} aprovado com sucesso`;
    resultado.style.color = 'green';
  } else {
    resultado.innerHTML = `Emprestimo recusado. Nao cumpre os requisitos do emprestimo`;
    resultado.style.color = 'red';
  }

  document.querySelector("#idade").value = '';
  document.querySelector("#renda").value = '';
  document.querySelector("#emprestimo").value = '';
}
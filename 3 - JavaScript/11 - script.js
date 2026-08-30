function calcular(event) {
  event.preventDefault();
  const cargo = document.querySelector("#cargo").value;
  const urgencia = document.querySelector("#urgencia").value;
  const resultado = document.querySelector("#resultado");
  if (cargo === "Gerente" || (cargo === "Analista" && urgencia === "Urgente") ) {
    resultado.innerHTML = `Viagem Aprovada`;
    resultado.style.color = 'green';
  } else {
    resultado.innerHTML = `Viagem Bloqueada. Verifique a politica corporativa`;
    resultado.style.color = 'red';
  }

  document.querySelector("#cargo").value = '';
  document.querySelector("#urgencia").value = '';
}
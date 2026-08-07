function calcular(event) {
  event.preventDefault();
  const salario = parseFloat(document.querySelector("#salario").value);
  const nota = parseFloat(document.querySelector("#nota").value);
  const resultado = document.querySelector("#resultado");
  let valorBonus = 0;
  if (nota === 5) {
    valorBonus = salario * 2;
    resultado.innerHTML = `Valor do bonus é de R$ ${valorBonus} e o montante total a receber é de R$ ${salario+valorBonus}`;
  } else if(nota === 4) {
    valorBonus = salario;
    resultado.innerHTML = `Valor do bonus é de R$ ${valorBonus} e o montante total a receber é de R$ ${salario+valorBonus}`;
  } else if (nota === 3){
    valorBonus = salario * 0.5; 
    resultado.innerHTML = `Valor do bonus é de R$ ${valorBonus} e o montante total a receber é de R$ ${salario+valorBonus}`; 
  } else {
    valorBonus = 0;
    resultado.innerHTML = `Valor do bonus é de R$ ${valorBonus} e o montante total a receber é de R$ ${salario+valorBonus}`;
    resultado.style.color = 'red';
  }
  document.querySelector("#salario").value = '';
  document.querySelector("#nota").value = '';
}
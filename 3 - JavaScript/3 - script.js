function calcular(event) {
  event.preventDefault();
  let receita = parseFloat(document.querySelector("#receita").value);
  let custo = parseFloat(document.querySelector("#custo").value);
  let lucroLiquido = receita - custo;
  let margemLucro = (lucroLiquido / receita) * 100;
  let resultado = document.querySelector("#resultado");
  if(lucroLiquido > 0) {
    resultado.innerHTML = "Seu lucro foi de R$ "+lucroLiquido+" e a sua margem foi de "+margemLucro.toFixed(2)+"%";
    resultado.style.color = "green";
    document.querySelector("#receita").value = '';
    document.querySelector("#custo").value = '';
  } else {
    resultado.innerHTML = "Seu lucro foi de R$ "+lucroLiquido+" e a sua margem foi de "+margemLucro.toFixed(2)+"%";
    resultado.style.color = "red";
    document.querySelector("#receita").value = '';
    document.querySelector("#custo").value = '';
  }
}
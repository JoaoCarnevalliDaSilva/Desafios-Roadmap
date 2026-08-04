function calcular(event) {
  event.preventDefault();
  let montante = parseFloat(document.querySelector("#montante").value);
  let conversao = parseFloat(document.querySelector("#conversao").value);
  let ideal = parseFloat(document.querySelector("#ideal").value);
  let resultado = document.querySelector("#resultado");
  let valorConvertido = montante / conversao;
  if(valorConvertido > ideal) {
    resultado.innerHTML = "Vamoo bora! Faça as malas, você tem o montante de $"+valorConvertido.toFixed(2);
  } else {
    let montanteFaltante = ideal - valorConvertido;
    resultado.innerHTML = "Não desanime!! Faltam $"+montanteFaltante.toFixed(2)+" para você atingir seu objetivo."
  }
  document.querySelector("#ideal").value = '';
  document.querySelector("#montante").value = '';
  document.querySelector("#conversao").value = '';
}
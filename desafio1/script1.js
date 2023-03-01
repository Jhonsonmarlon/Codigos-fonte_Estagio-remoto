const INDICE = 13;
let SOMA = 0;
let K = 0;

const outputDiv = document.querySelector('#output');

while (K < INDICE) {
  K++;
  SOMA += K;
  outputDiv.innerHTML += `K = ${K}, SOMA = ${SOMA}<br>`;
}

outputDiv.innerHTML += `Ao final do processamento, o valor da variável SOMA é ${SOMA}.`;

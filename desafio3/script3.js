
fetch('dados.json')
  .then(response => response.json())
  .then(data => {
    let faturamento = data.map(item => item.valor);
    let menor = Math.min(...faturamento); 
    let maior = Math.max(...faturamento); 
    let media = faturamento.reduce((a, b) => a + b, 0) / faturamento.length;
    let acimaDaMedia = faturamento.filter(valor => valor > media);
    let diasAcimaDaMedia = acimaDaMedia.length;

    document.getElementById('menor').innerHTML = menor;
    document.getElementById('maior').innerHTML = maior;
    document.getElementById('acima-media').innerHTML = diasAcimaDaMedia;
  })
  .catch(error => console.log(error));

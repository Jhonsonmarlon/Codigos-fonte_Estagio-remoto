const faturamentoMensalPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };

  
  const valorTotalMensal = Object.values(faturamentoMensalPorEstado).reduce(
    (total, valor) => total + valor
  );

  const representacaoPorEstado = {};
for (const estado in faturamentoMensalPorEstado) {
  representacaoPorEstado[estado] =
    (faturamentoMensalPorEstado[estado] / valorTotalMensal) * 100;
}

document.getElementById("sp").textContent =
  representacaoPorEstado.SP.toFixed(2) + "%";
document.getElementById("rj").textContent =
  representacaoPorEstado.RJ.toFixed(2) + "%";
document.getElementById("mg").textContent =
  representacaoPorEstado.MG.toFixed(2) + "%";
document.getElementById("es").textContent =
  representacaoPorEstado.ES.toFixed(2) + "%";
document.getElementById("outros").textContent =
  representacaoPorEstado.Outros.toFixed(2) + "%";

  
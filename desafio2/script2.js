
    function fibonacci(num) {
      let a = 0;
      let b = 1;
      let c;

      while (b <= num) {
        c = a + b;
        a = b;
        b = c;
      }

      if (a === num) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
      } else {
        return `O número ${num} não pertence à sequência de Fibonacci.`;
      }
    }

    function verificar() {
      const numero = document.getElementById("numero").value;
      const resultado = document.getElementById("resultado");
      resultado.innerText = fibonacci(numero);
    }
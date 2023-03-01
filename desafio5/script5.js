
      function inverterString() {
        let stringOriginal = document.getElementById("stringOriginal").value;
        let novaString = "";
        for (let i = stringOriginal.length - 1; i >= 0; i--) {
          novaString += stringOriginal[i];
        }
        document.getElementById("resultado").textContent = novaString;
      }

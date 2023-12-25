var butaoContar = window.document.getElementById("butaoContar");

butaoContar.addEventListener("click", funcaoContar);

function funcaoContar() {
  var inicioContador = parseInt(
    window.document.getElementById("inicioContador").value
  );
  var fimContador = parseInt(
    window.document.getElementById("fimContador").value
  );
  var saltoContador = parseInt(
    window.document.getElementById("saltoContador").value
  );

  var resultado = document.getElementById("resultado");

  resultado.innerHTML = "";

  if (saltoContador > 0) {
    for (
      let contador = inicioContador;
      contador <= fimContador;
      contador += saltoContador
    ) {
      resultado.innerHTML = resultado.innerHTML + contador;

      if (contador + saltoContador <= fimContador) {
        resultado.innerHTML = resultado.innerHTML + " &#10145; ";
      }
    }
  } else {
    resultado.innerHTML = "O valor do salto deve ser maior que zero.";
  }
}

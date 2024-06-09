const precioBase = 400000;
let cantidad = 0;
let valorTotal = 0;

document.querySelector("#precio-inicial").innerHTML = precioBase;

const btnSum = document.getElementById("btn-sum");
btnSum.addEventListener("click", () => {
  cantidad++;
  document.querySelector("#cantidad").innerHTML = cantidad;
  calcularValor(cantidad);
});

const btnRest = document.getElementById("btn-rest");
btnRest.addEventListener("click", () => {
  cantidad--;
  if (cantidad < 0) {
    cantidad = 0;
  }
  document.querySelector("#cantidad").innerHTML = cantidad;
  calcularValor(cantidad);
});

function calcularValor(cantidad) {
  valorTotal = cantidad * precioBase;
  document.querySelector("#valorTotal").innerHTML = valorTotal;
}

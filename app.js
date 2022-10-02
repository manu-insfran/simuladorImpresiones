/// Declaración de Variables

let nombreCliente;
let cantidadImpresiones;
let total = 0;
tipoPapel = 0;

/// Función identificación del cliente

function identificacion() {
  if (nombreCliente != "") {
    alert(`Bienvenido ${nombreCliente} al centro de impresión`);
  } else {
    alert("Debe ingresar su nombre");
  }
}

/// El cliente ingresa sus datos
nombre();
function nombre() {
  nombreCliente = prompt("Por favor ingrese su nombre");
  identificacion();
}

cantidadImpresiones = parseInt(
  prompt("Ingrese el numero de copias que desea realizar")
);

function totalAPagar() {
  ripoPapel = 0;
  for (x = 1; x <= cantidadImpresiones; x++) {
    tipoPapel = parseInt(
      prompt(
        "Ingrese el tipo papel en el que desea imprimir 1- A4 2- Ofico 3- A3"
      )
    );
    switch (tipoPapel) {
      case 1:
        precio = 1500;
        break;
      case 2:
        precio = 2000;
        break;
      case 3:
        precio = 2500;
        break;
    }
    total += precio;
  }
  return total;
}

alert("El total a pagar es: " + totalAPagar());

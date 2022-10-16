/// Declaración de Variables

let nombreCliente;
let impresiones = [];
let salir = false;
let salirWhile;
let acumulador = 0;

/// Declaración de Objeto
let A4 = {
  largo: 210,
  ancho: 297,
  precio: 1500,
};
let A3 = {
  largo: 297,
  ancho: 420,
  precio: 2000,
};
let Carta = {
  largo: 216,
  ancho: 279,
  precio: 1800,
};

/// Función de identificación de cliente
function identificacion(nombre) {
  if (nombre != "") {
    alert(`Bienvenido ${nombre} al centro de impresión`);
  } else {
    alert("Debe ingresar su nombre");
  }
}

function agregarImpresiones(impresion) {
  impresiones.push(impresion);
}

nombreCliente = prompt("Por favor ingrese su nombre");
identificacion(nombreCliente);

while (salir == false) {
  let solicitudDeImpresion = prompt(
    `Ingrese el tipo de papel que quiere imprimir.\n A4 \n A3 \n Carta`
  );
  if (
    solicitudDeImpresion == "A4" ||
    solicitudDeImpresion == "A3" ||
    solicitudDeImpresion == "Carta"
  ) {
    agregarImpresiones(solicitudDeImpresion);
    alert(`${solicitudDeImpresion} agregado`);
  } else {
    alert("Por favor ingrese un tipo de hoja valido");
  }
  salirWhile = confirm("Desea salir?. Cancelar para volver");
  if (salirWhile == true) {
    salir = true;
  }
}

for (i = 0; i <= impresiones.length; i++) {
  switch (impresiones[i]) {
    case "A4":
      acumulador += A4.precio;
      break;
    case "A3":
      acumulador += A3.precio;
      break;
    case "Carta":
      acumulador += Carta.precio;
      break;
    default:
      break;
  }
}

alert(`Total a pagar: ${acumulador}`);

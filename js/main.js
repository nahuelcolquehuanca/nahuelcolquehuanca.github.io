var precioDolarCompra = 0;
var precioDolarVenta = 0;
var arrayValoresDolares = []

let URLDolar = "https://dolarapi.com/v1/dolares"

fetch(URLDolar)
  .then(response => response.json())
  .then(data => obtenerTasaCambio(data));


  function obtenerTasaCambio(data){
    precioDolarCompra = data[0].compra
    precioDolarVenta = data[0].venta
    arrayValoresDolares.push(...data)
  }

function convertirPesoADolar() {
    let peso = parseFloat(document.getElementById("pesoInput").value);

    if (!isNaN(peso)) {
        let dolar = peso / precioDolarCompra;
        document.getElementById("dolarInput").value = dolar.toFixed(2);
    } else {
        alert("Ingresa un valor válido para la conversión.");
    }
}

function convertirDolarAPeso() {
    let dolar = parseFloat(document.getElementById("dolarInput").value);

    if (!isNaN(dolar)) {
        let peso = dolar *precioDolarVenta;
        document.getElementById("pesoInput").value = peso.toFixed(2);
    } else {
        alert("Ingresa un valor válido para la conversión.");
    }
}

function convertirDolarAPeso2() {
    let dolar = parseFloat(document.getElementById("dolarInput2").value);

    if (!isNaN(dolar)) {
        let peso = dolar * precioDolarVenta;
        document.getElementById("pesoInput2").value = peso.toFixed(2);
    } else {
        alert("Ingresa un valor válido para la conversión.");
    }
}

function convertirPesoADolar2() {
    let peso = parseFloat(document.getElementById("pesoInput2").value);

    if (!isNaN(peso)) {
        let dolar = peso / precioDolarCompra;
        document.getElementById("dolarInput2").value = dolar.toFixed(2);
    } else {
        alert("Ingresa un valor válido para la conversión.");
    }
}

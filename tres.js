function mostrar()
{
var precio;
var descuento;
var pfinal;

precio=prompt("Ingrese precio.");
descuento=prompt("Ingrese porcentaje de descuento.");
pfinal= parseInt(precio) - (parseInt(precio) / 100 * parseInt(descuento));

document.getElementById("elPrecioFinal").value=pfinal;


}
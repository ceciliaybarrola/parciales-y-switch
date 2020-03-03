function mostrar()
{
function mostrar()
{
    /*Realizar el algoritmo que permita iterar el ingreso de dos datos,
    una letra y un número entre -100 y 100 (validar) hasta que el usuario 
    quiera e informar al terminar el ingreso por document.write:
    a) La cantidad de números pares.
    b) La cantidad de números impares.
    c) La cantidad de ceros.
    d) El promedio de todos los números positivos ingresados.
    e) La suma de todos los números negativos.
    f) El número y la letra del máximo y el mínimo.*/

var letra;
var numero;
var respuesta;
var contadorCeros=0;
var contadorPares=0;
var contadorImpares=0;
var acumuladorPositivos=0;
var contadorPositivos=0;
var acumuladorNegativo=0;
var maximo;
var minimo;
var letraMaximo;
var letraMinimo;
var promedio;
var i=0;
do
{
    numero=prompt("ingrese un numero");
    while(isNaN(numero)||numero<-100 || numero>100)
    {
        numero=prompt("ingrese un numero valido");
    }
    letra=prompt("ingrese una letra");
    while(!(isNaN)(letra))
    {
        letra=prompt("ingrese una letra valida");
    }//fin validaciones

    i=i+1;
    if (numero==0)
    {
        contadorCeros=contadorCeros+1;
    }
    if(numero%2==0)
    {
        contadorPares=contadorPares+1;
    }
    else
    {
        contadorImpares=contadorImpares+1
    }
    if (numero>0)
    {
        acumuladorPositivos=acumuladorPositivos+parseInt(numero);
        contadorPositivos=contadorPositivos+1;
    }
    else
    {
        acumuladorNegativo=acumuladorNegativo+parseInt(numero);
    }
    if (i==1||maximo<numero)
    {
        maximo=numero;
        letraMaximo=letra;
    }
    if (i==1||minimo>numero)
    {
        minimo=numero;
        letraMinimo=letra;
    }

respuesta=prompt("ingrese 'si' para seguir ingresando numeros");
}while (respuesta=="si")
promedio=acumuladorPositivos/contadorPositivos;

document.write("Cantidad Pares: "+contadorPares+"<br>");
document.write("Cantidad impares: "+contadorImpares+"<br>");
document.write("cantidad ceros: "+contadorCeros+"<br>");
document.write("promedio positivos: "+promedio+"<br>");
document.write("suma negativos: "+acumuladorNegativo+"<br>");
document.write("Maximo "+maximo+" letra "+letraMaximo+"<br>");
document.write("Minimo "+minimo+" letra "+letraMinimo+"<br>");
}
 
}

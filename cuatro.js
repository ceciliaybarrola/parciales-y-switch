function mostrar()
{
   /* Pedir dos números y mostrar el resultado:
    Si son iguales los muestro concatenados.
    Si el primero es mayor, los resto,
    de lo contrario los sumo.
    Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
    "la suma es xxx y supero el 10".*/

var n1;
var n2;
var nresto;

n1=prompt("Inserte un número");
n2=prompt("Inserte otro número");
nresto=parseInt(n1) - parseInt(n2);

if ( n1 == n2)
{
    alert(+n1+ " es igual a " + n2);
}
if ( n1 > n2)
{
    alert(nresto);
}

}

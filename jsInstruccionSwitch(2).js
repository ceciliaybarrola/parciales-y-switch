function mostrar()
{
//tomo la edad  
var mesDelAnio = document.getElementById('mes').value;

alert (mesDelAnio);

switch (mesDelAnio)
{   
   
    case "Julio" :
    case "Agosto" :
        alert("Abrigate que hace frio.");
        break;
    case "Septiempre" :
    case "Octubre" :
    case "Noviembre" :
    case "Diciembre" :
        alert("Ya pasamos el frio, ahora calor!!!.")
        break;
    case "Enero" :
    case "Febrero" :
    case "Marzo" :
    case "Abril" :
    case "Mayo" :
    case "Junio" :
             alert("Falta para el invierno.")
             break;
             // puedo usar default: alert
             // hay que tener cuidado cuando el usuario escribe
    
}



}//FIN DE LA FUNCIÓN

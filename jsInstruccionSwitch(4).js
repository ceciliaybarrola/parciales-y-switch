function mostrar()
{
//tomo la edad  
var mesDelAnio = document.getElementById('mes').value;

//alert (mesDelAño);
	
switch (mesDelAnio)
{
    case ("Febrero") :
        alert("Este mes tiene 28 días");
        break;
    case ("Abril") :
    case ("Junio") :
    case ("Agosto") :
    case ("Septiempre") :
        alert("Este mes tiene 30 días");
        break;
    default :
        alert("Este mes tiene 31 días");
        break;
        
}
		



}//FIN DE LA FUNCIÓN

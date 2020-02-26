function mostrar()
{
var planeta = prompt("Ingrese un planeta");

switch (planeta)
{
    case ("mercurio"):
    case ("venus"):
        alert("Acá hace mas calor");
        break;
    case ("tierra"):
        alert("Aca vivimos");
        break;
    case ("marte"):
    case ("jupiter"):
    case ("saturno"):
    case ("urano"):
    case ("neptuno"):
    case ("pluton"):
        alert("Acá hace mas frio");
        break;
    default:
        alert("No es un planeta");
}

}

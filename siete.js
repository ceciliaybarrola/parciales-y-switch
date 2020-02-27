function mostrar()
{
var i=0;
var nota;
var acNota=0;
var min=0;
var varonesAprobados=0;
var sexo;
var acSexo;
var promedio;

while(i<5)
{
    nota=prompt("ingrese nota");
    sexo=prompt("ingrese sexo");
    
    if (nota<0 || nota>10)
    {
        alert("no es una nota valida")
        break;
    }
    if (sexo !="m" && sexo !="f")
    {
        alert("no es un sexo valido. Ingrese `f´ o `m´")
        break;
    }
   //hacerlo con un while
    else
    {
        if (nota>=6 && sexo=="m")
        {
            varonesAprobados++
        }
        if (min>nota)
        {
            min=nota;//no anda
            acSexo=sexo;

        }
    
    }

    acNota=acNota+parseInt(nota);
    i++
}

promedio=acNota/i;
alert("El promedio de la notas es: "+promedio);
alert("la nota mas baja es "+min+" y el sexo es "+acSexo);
alert("la cantidad de varones aprobados es: "+varonesAprobados);
}

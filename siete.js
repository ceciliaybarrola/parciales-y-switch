function mostrar()
{
 var num;
    var i=0;
    var sexo;
    var contFem=0;
    var contMasc=0;
    var promedio;
    var min=num;
    var nota=0;

    num=parseInt(num);

    while (i<5)
    {
       // sexo=prompt("ingrese sexo");
        num= parseInt(prompt("ingrese nota"));
        nota=parseInt(nota)+parseInt(num);
        if(num<min)
        {
            min=num;

        }
        if(num>=6 && sexo=="m")
        {
            contMasc++;
        }
        i++;
    }
promedio=nota/i;
alert("El promedio es: "+promedio);
alert("La nota mas baja es: "+min);
alert("La cantidad de varones aprobados es: "+contMasc);



}

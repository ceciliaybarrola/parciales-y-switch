function mostrar()
{
    var n1;
    var n2;
    var nresto;
    var nsuma;

    n1=parseInt(prompt("titulo","Inserte un número"));
    n2=parseInt(prompt("titulo", "Inserte otro número"));
   
    
    if ( n1 == n2)
    {
        alert(+n1+ " es igual a " + n2);
    }
    else
    { 
        if ( n1 > n2)
        {
        nresto= n1-n2;
        alert("Resultado resta= "+nresto);
        }
             else 
             {
                nsuma= n1 + n2;
                alert("Resulatdo suma= "+nsuma);
                if (nsuma > 10)
                {
                    alert("la suma es "+nsuma+" y es mayor a diez")
                }
             }
    }

}

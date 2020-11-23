function func1 ()
{
    var i=document.getElementById("foot").value;
    if(i==0)
    {
        document.getElementById("foot").hidden=false;
        document.getElementById("foot").value=1;
    }
    else
    {
        document.getElementById("foot").hidden=true;
        document.getElementById("foot").value=0;
    }

}
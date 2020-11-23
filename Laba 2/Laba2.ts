

function Return_Arg ()
{
    var x = document.getElementById("arg1").nodeValue;
    x+='-New';
    console.log(x);
    document.getElementById("arg1").nodeValue=x;
}

function Arr_Sum()
{
    document.getElementById("arg2_ans").hidden=false;
    var x = document.getElementById("arg2").nodeValue;
    var sum = 0;
    var arr = [];
    if(x.length==5) 
        console.log(x);
        else
        {   
            document.getElementById("arg2_ans").nodeValue="You don't have 3 elements";
            return(Function);
        }

        for (var i = 0; i < 5;) {
            if (isNaN(x[i]))
            {
                document.getElementById("arg2_ans").nodeValue = "Some symbols are not a numbers!";
                console.log(x[i]);
                return (Function);
            }
            else
            sum+=parseInt(x[i],10);
            i+=2;
        }
        document.getElementById("arg2_ans").nodeValue = sum.toString();

     
    
}

function Arr_Trans() 
{
    var x = document.getElementById("arg2").nodeValue;
   let  arr='';
    if(x.length==5) 
    console.log(x);
    else
    {  
        document.getElementById("arg3_ans").innerHTML="You don't have 3 elements";
        return(Function);
    }

    for (var i = 0; i < 5;i++) 
    {
        if(x[i]==' ')
        {
            arr+=' ';
        }
else
      { 
            if (isNaN(x[i]))
            {
                arr+='0';
            }
            else
            {
                arr+=x[i]*x[i];
            
            }
        }
    }
var zalupa=arr.toString();
    document.getElementById("arg3_ans").innerHTML=arr;
    console.log(arr);
    console.log(zalupa);
}
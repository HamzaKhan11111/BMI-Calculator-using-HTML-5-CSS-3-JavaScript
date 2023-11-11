function Calculate()
{
    weight=parseInt(document.getElementById("weight").value);
    height=parseInt(document.getElementById("height").value);
    var result=weight/(height*height)
    result=result.toFixed(3);
    document.getElementById("result").innerHTML="<b>BMI: "+ result +" kg/m<sup>2</sup></b>";
    if(result<18.5)
    {
        document.getElementById("exp").innerHTML="<b>You are underweight</b>";
    }
    else if(18<=result<25)
    {
        document.getElementById("exp").innerHTML="<b>You are normal weight</b>";

    }
    else if(25<=result<30)
    {
        document.getElementById("exp").innerHTML="<b>You are over weight</b>";

    }
    else
    {
        document.getElementById("exp").innerHTML="<b>You are obese</b>";

    }
}
function chooseOp(op)
{
	var actionSelected  =document.getElementById("actionSelected");
	switch(op)
	{
		case "multi":
		actionSelected.innerHTML = "x" ;
		break;
		case "plus":
		actionSelected.innerHTML ="+";
		break;
		case "moins":
		actionSelected.innerHTML = "-";
		break;
		case "div":
		actionSelected.innerHTML = "/";
		break;
	}





}


function result()
{
	var resultInput = document.getElementById("resultInput");
	var number1 =  +document.getElementById("number1").value ;
	var number2 =  +document.getElementById("number2").value ;
	var actionSelected  = document.getElementById("actionSelected").innerHTML;

		if(isNaN(number1) || isNaN(number2) )
		{
			
			alert("les valeur doivent être des chiffre");
		}
		else
		{
			
				switch(actionSelected)
				{		
					case "x":
					resultInput.value =	number1 * number2;
					break;
					case "+":
					resultInput.value =	number1 + number2;
					break;
					case "-":
					resultInput.value =	number1 - number2;
					break;
					case "/":
					resultInput.value =	number1 / number2;
					break;
				}
			
		}
}		

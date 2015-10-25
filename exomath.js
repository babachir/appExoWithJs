var nbrCoup = 3;

function initExo()
{
	var number1 =  document.getElementById("number1") ;
	var number2 =  document.getElementById("number2") ;
	var actionSelected  =document.getElementById("actionSelected");

	var operation = Math.floor((Math.random() * 4) + 1);

					switch(operation)
					{		
					case 1:
					actionSelected.innerHTML = "x";
					break;
					case 2:
					actionSelected.innerHTML = "+" ;
					break;
					case 3:
					actionSelected.innerHTML = "-" ;
					break;
					case 4:
					actionSelected.innerHTML = "/" ;
					break;
				}

	number1.value = Math.floor((Math.random() * 100) + 1);
	number2.value = Math.floor((Math.random() * 100) + 1);	

}


function valider()
{
	var result;
	var resultInput = +document.getElementById("resultInput").value;
	var number1 =  +document.getElementById("number1").value ;
	var number2 =  +document.getElementById("number2").value ;
	var actionSelected  = document.getElementById("actionSelected").innerHTML;


		if(isNaN(resultInput))
		{
			
			alert("les valeur doivent être des chiffre");
		}
		else
		{
			
				switch(actionSelected)
				{		
					case "x":
					result =	number1 * number2;
					break;
					case "+":
					result =	number1 + number2;
					break;
					case "-":
					result =	number1 - number2;
					break;
					case "/":
					result =	number1 / number2;
					break;
				}


				if(result==resultInput)
					{
						alert("bravo, vous avez réussi");
						initExo();
					}

				else
					{
						nbrCoup--;
						if(nbrCoup>0)
						{
							alert("faux, il vous reste "+nbrCoup+" coup");
						}
						else
						{
							alert("vous avez perdu, le résultat c'est = "+result);
							nbrCoup = 3;
							initExo();
						}

					}
			
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

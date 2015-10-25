/*tableau des email qui peuvent se connecter*/
var arrayEmail = ['ba.bachir@hotmail.fr','azerty@live.fr','123@live.fr'];

/**/
function auth()
{

/*récupéré le inpute qui contient l'email*/
var inputEmail = document.getElementById('emailauth');
var i=0;
var inArray = false;

/*vérfier si l'email existe dans le tableau*/
for(i=0;i<arrayEmail.length;i++)
	{
			if(arrayEmail[i]==inputEmail.value)
				{
					inArray = true;
				}
	
	}

	/*si il existe réorionté vers la page d'acceuil*/
	if(inArray)
	document.location.href="acceuil.html"; 
	else
	alert('Email incorrecte');
	/*sinon msg d'erreur*/

}
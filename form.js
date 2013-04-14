/*
	1/ FONCTIONS A CREER
	
		checkBirthday()
			> si date de naissance postérieure à la date du jour, afficher "Vous seriez donc né(e) dans le futur ?"
			> si âge inférieur à 18 ans, afficher "Vous êtes mineur(e) ?"
		
		checkPhone()
			> si les 3 numéros sont identiques, afficher "Les trois numéros sont identiques."
		
		autocompleteCity()
			> si code postal "21000", afficher "Dijon" dans le champ "city"
			> si code postal "75xxx", afficher "Paris dans le champ "city"
	

	2/ FONCTION A COMPLETER
	
		optionsInterets()
			> si "Jeux" coché, ouvrir une nouvelle fenêtre disant "Nouvelle fenêtre pour jouer !"
			> si niveau "Expert", masquer la zone "Motivations" (div #bloc-motivation)
	
	
	NOTE: les appels sont déjà présents dans le formulaire.
	Oui, je m'ennuyais.
	Non, je n'avais pas prévu de faire toute la partie "Profession", mais voilà...
	
*/


// Active le focus sur l'élément "surname"
function autofocus() {
	document.information.surname.focus();
}


// Génére automatiquement les options des champs "Jour", "Mois" et "Année" de la date de naissance
function createSelectOptions() {
	// S'applique au champ "Année"
	for (i=1912; i<=2025; i++) {
		document.information.year.options[document.information.year.options.length] = new Option(i,i);
	}
	// S'applique au champ "Mois"
	for (i=1; i<=12; i++) {
		document.information.month.options[document.information.month.options.length] = new Option(i,i);
	}
	// S'applique au champ "Jour"
	for (i=1; i<=31; i++) {
		document.information.day.options[document.information.day.options.length] = new Option(i,i);
	}
}


// Les deux fonctions suivantes affichent ou masquent des champs en fonction de la sélection
// Elles concernent respectivement :
//		- la profession
//		- les intérêts

function optionsProfession() {
	// récupère le champ "Profession" (qui rassemble tous les boutons radio)
	var profession = document.information.profession;
	// déclare la liste des valeurs concernées
	var tri = ["fonctionnaire", "cadre", "patron", "etudiant"];
	
	// DEBUT de la boucle
	// la fonction va passer en revue tous les éléments du champ "Profession"
	for (i=0; i<profession.length; i++) {
		// vérifie si la valeur fait partie des valeurs concernées
		if (tri.indexOf(profession[i].value) != -1) {
			// si cochée, affiche son champ supplémentaire
			if (profession[i].checked) {
				document.getElementById("bloc-" + profession[i].value).style.display = "inline-block";
			}
			// si non cochée, masque son champ supplémentaire
			else {
				document.getElementById("bloc-" + profession[i].value).style.display = "none";
			}
		}
	}
	// FIN de la boucle
}
	
function optionsInterets(a) {
	// Si la case cochée est "Informatique", applique ce qui suit
	if (a == document.information.informatique) {
		// si "Informatique" coché, affiche les options supplémentaires
		if (document.information.informatique.checked) {
			document.getElementById("bloc-informatique").style.display = "block";
		}
		// sinon, masque les options supplémentaires
		else {
			document.getElementById("bloc-informatique").style.display = "none";
		}
	}
	
	// autres...
	
}
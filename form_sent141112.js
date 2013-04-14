// Vérifie la date de naissance
function checkBirthday() {
	// Etablit la date de référence à la date courante
	var currentDate = new Date();
	var cHours = currentDate.getHours();
	var cMinutes = currentDate.getMinutes();
	var cSeconds = currentDate.getSeconds();
	var cMilliSeconds = currentDate.getMilliseconds();

	// Récupère les valeurs "année", "mois" et "jour" de la date de naissance
	var birthYear = document.information.year.value;
	var birthMonth = parseInt(document.information.month.value) - 1;
	var birthDay = document.information.day.value;
	
	// Initialise la date de naissance
	var birthDate = new Date(birthYear,birthMonth,birthDay,cHours,cMinutes,cSeconds,cMilliSeconds);
	
	// Calcule l'âge en soustrayant la date de naissance à la date courante
	var age = currentDate - birthDate;
	// Convertit le résultat en jours
	age = age/(1000*60*60*24);

	// Calcule la majorité en jours
	var ofAge = 18*365.2422;

	// Vérifie si la personne est majeure ou mineure
	if ((age < ofAge) && (currentDate > birthDate)) {
		alert ("Vous êtes mineur(e)...");
	}

	// Vérifie si la personne a entré une date dans le futur
	else if (currentDate <= birthDate) {
		alert ("Vous êtes né(e) dans le futur ?");
	}
}

// Active le focus sur l'élément "surname"
function autofocus() {
	document.information.surname.focus();
}

// A la sortie de chaque champ, vérifie si le champ est vide
// Affiche une alerte dans le cas échéant
function isEmpty(a) {
	if (a.value == "" || a.value == "@" || a.value == "06.") {
		alert("Le champ est vide !");
	}
}

// Vérifie les numéros de téléphone
function checkPhone() {
	// Récupération des valeurs des champs "domicile", "mobile" et "professionnel"
	var phoneHome = document.information.phoneHome.value;
	var phoneMobile = document.information.phoneMobile.value;
	var phonePro = document.information.phonePro.value;

	// Si les valeurs sont différentes, affiche le message
	if (phoneHome==phoneMobile && phoneHome==phonePro && phoneHome!="") {
		alert("Les trois numéros sont identiques !");
	}
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

// Autocomplète la ville en fonction du code postal
function autocompleteCity() {
	// Récupération des champs "Code postal" et "Ville"
	var postalcode = document.information.postalcode;
	var city = document.information.city;

	// Si la valeur de "Code postal" est égale à "21000", affiche la valeur "Dijon" dans "Ville"
	if (postalcode.value == 21000) {
		city.value = "Dijon";
		// Message de compatissance pour tous les dijonnais
		alert("Nous compatissons à votre désarroi. Bon courage !");
	}
	// Si la valeur est comprise entre "75000" inclus et "76000" exclus ou est égale à 75, affiche la valeur "Paris" 
	else if ((75000 <= postalcode.value && postalcode.value < 76000) || postalcode.value == 75) {
		city.value = "Paris";
		alert("Êtes-vous coincé dans les transports en commun ?");
	}

	// Pour tout autre code postal, si le champ "Ville" est complété avant
	// Si la ville est "Paris" ou "Dijon", efface le champ "Ville"
	else if ((city.value == "Paris") || (city.value == "Dijon")) {
		city.value = "";
	}
	// Sinon, ne rien faire
	else {
		return false;
	}
}

// Affiche ou masque des champs en fonction de la sélection "Profession"
function optionsProfession() {
	// Récupère le champ "Profession" (qui rassemble tous les boutons radio)
	var profession = document.information.profession;
	// Déclare la liste des valeurs concernées
	var sortList = ["fonctionnaire", "cadre", "patron", "etudiant"];

	// DEBUT de la boucle
	// La fonction va passer en revue tous les éléments du champ "Profession"
	for (i=0; i<profession.length; i++) {
		// Vérifie si la valeur fait partie des valeurs concernées
		if (sortList.indexOf(profession[i].value) != -1) {
			// Si cochée, affiche son champ supplémentaire
			if (profession[i].checked) {
				document.getElementById("bloc-" + profession[i].value).style.display = "inline-block";
			}
			// Si non cochée, masque son champ supplémentaire
			else {
				document.getElementById("bloc-" + profession[i].value).style.display = "none";
			}
		}
	}
	// FIN de la boucle
}

// Affiche ou masque des champs en fonction des sélections "Intérêts"
function optionsInterests(a) {
	// Si le champ concerné est "Informatique", applique ce qui suit
	if (a == document.getElementById("informatique")) {
		// Si "Informatique" coché, affiche les options supplémentaires
		if (a.checked) {
			document.getElementById("bloc-informatique").style.display = "block";
		}
		// Sinon, masque les options supplémentaires
		else {
			document.getElementById("bloc-informatique").style.display = "none";
		}
	}

	// Si le champ concerné est "Jeux vidéos" et que la case est cochée, ouvre une nouvelle fenêtre
	if (a == document.getElementById("jeuxpc") && a.checked) {
		window.open("http://www.minecraft.net","status=no, scrollbars=yes, menubar=yes, width=800, height=600");
	}

	// Si le champ concerné est "Niveau", applique ce qui suit
	if (a == document.getElementById("niveau")) {
		// Si niveau "Expert" ou "Asian" sélectionné, masque le bloc "Motivation"
		if (a.value == 3 || a.value == 4) {
			document.getElementById("bloc-motivation").style.display = "none";
		}
		// Sinon, affiche le bloc "Motivation"
		else {
			document.getElementById("bloc-motivation").style.display = "block";
		}
	}
}

// Complète la réinitialisation par défaut du bouton "reset"
// Passe les champs éventuellement affichés ou masqués à leur état originel
function erase() {
	document.getElementById("bloc-fonctionnaire").style.display = "none";
	document.getElementById("bloc-cadre").style.display = "none";
	document.getElementById("bloc-etudiant").style.display = "none";
	document.getElementById("bloc-patron").style.display = "none";
	document.getElementById("bloc-informatique").style.display = "none";
	document.getElementById("bloc-motivation").style.display = "block";
}
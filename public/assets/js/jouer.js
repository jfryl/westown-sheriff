document.addEventListener("DOMContentLoaded", function() {

    // Depot
    const popUp = document.querySelector('#popUp');
    const jetonDepot = document.querySelector('#jetonDepot');
    const contentDepot = document.querySelector('#contentDepot');
    const closeDepot = document.querySelector('#closeDepot');

    jetonDepot.onclick = function(){
        contentDepot.classList.add('showDiv');
        popUp.classList.add('showPopUp');
    }
    closeDepot.onclick = function(){
        contentDepot.classList.remove('showDiv');
        popUp.classList.remove('showPopUp');
    }

    // Echange
    const jetonEchange = document.querySelector('#jetonEchange');
    const contentEchange = document.querySelector('#contentEchange');
    const closeEchange = document.querySelector('#closeEchange');

    jetonEchange.onclick = function(){
        contentEchange.classList.add('showDiv');
        popUp.classList.add('showPopUp');
    }
    closeEchange.onclick = function(){
        contentEchange.classList.remove('showDiv');
        popUp.classList.remove('showPopUp');
    }

    // Offre
    const jetonOffre = document.querySelector('#jetonOffre');
    const contentOffre = document.querySelector('#contentOffre');
    const closeOffre = document.querySelector('#closeOffre');

    jetonOffre.onclick = function(){
        contentOffre.classList.add('showDiv');
        popUp.classList.add('showPopUp');
    }
    closeOffre.onclick = function(){
        contentOffre.classList.remove('showDiv');
        popUp.classList.remove('showPopUp');
    }

    // Secret
    const jetonSecret = document.querySelector('#jetonSecret');
    const contentSecret = document.querySelector('#contentSecret');
    const closeSecret = document.querySelector('#closeSecret');

    jetonSecret.onclick = function(){
        contentSecret.classList.add('showDiv');
        popUp.classList.add('showPopUp');
    }
    closeSecret.onclick = function(){
        contentSecret.classList.remove('showDiv');
        popUp.classList.remove('showPopUp');
    }

    // ouvrir les parametres de partie
    const buttonParameter = document.querySelector('#buttonParameter');
    const contentParameter = document.querySelector('#contentParameter');

    buttonParameter.onclick = function(){
        contentParameter.classList.toggle('showDiv' );
        popUp.classList.toggle('showPopUp');
    }

    // chat
    const closeChat = document.querySelector('#closeChat');
    const openChat = document.querySelector('#openChat');

    closeChat.onclick =  function(){
        closeChat.classList.toggle('showChat');
        openChat.classList.toggle('showChat');
    }
    openChat.onclick =  function(){
        closeChat.classList.toggle('showChat');
        openChat.classList.toggle('showChat');
    }

    // changement contenu de la balise title en fonctione de si l'utilisateur est sur la page ou non
	if (document.documentElement.lang === "fr") { // detecter si la page est en français
	    nouveauTitre = "Revenez shérif !";
	} else if(document.documentElement.lang === "en") { // Sinon si elle est en anglais
	    nouveauTitre = "Come back sheriff !";
	}

	titreNormal = document.title; 

	document.addEventListener("visibilitychange", function() {
		if (document.visibilityState === 'visible') { // Si l'utilisateur est sur la page on affiche le titre html
			document.title = titreNormal;
		} else { // Sinon on affiche le nouveau titre décrit dans la variable
			document.title = nouveauTitre;
		}
	});
})
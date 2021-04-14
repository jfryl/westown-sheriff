document.addEventListener("DOMContentLoaded", function() {
    const table = document.querySelector('#table');
    const contentTable = document.querySelector('#contentTable');
    const blur = document.querySelector("#blur");
    const friends = document.querySelector("#friends");
    const main = document.querySelector('#main');
    const bodyClass = document.body;

    table.onclick = function(){
        table.classList.toggle('rotate');
        contentTable.classList.toggle('rotate');
        blur.classList.toggle('spawn');
        friends.classList.toggle('spawn');
        main.classList.toggle('index');
        bodyClass.classList.toggle('overflow');
    };

    
    // modifier le profil
    const popUp = document.querySelector('#popUp');
    const buttonModifieInfos = document.querySelector('#modifieInfos');
    const closeModifieInfos = document.querySelector('#closeModifieInfos');
    const contentModifieInfos = document.querySelector('#contentModifieInfos');

    buttonModifieInfos.onclick = function() {
        popUp.classList.add('showPopUp');
        contentModifieInfos.classList.add('showDiv');
    }
    closeModifieInfos.onclick = function() {
        popUp.classList.remove('showPopUp');
        contentModifieInfos.classList.remove('showDiv');
        closeModifieInfos.classList.remove('hideDiv');
    }
        // afficher le mot de passe
        const inputPass = document.querySelector('#valueModifMotDePasse');
        const boutonPass = document.querySelector('#buttonMotDePasse')

        boutonPass.onclick = function(){
            if(inputPass.type === 'password'){
                inputPass.type = "text";
                boutonPass.classList.add('text');
            } else{
                inputPass.type = "password";
                boutonPass.classList.remove('text');
            }
        }
    
    // voir plus d'infos
    const buttonShowInfos = document.querySelector('#showInfos');
    const closeShowInfos = document.querySelector('#closeShowInfos');
    const contentShowInfos = document.querySelector('#contentShowInfos');

    buttonShowInfos.onclick = function() {
        popUp.classList.add('showPopUp');
        contentShowInfos.classList.add('showDiv');
    }
    closeShowInfos.onclick = function() {
        popUp.classList.remove('showPopUp');
        contentShowInfos.classList.remove('showDiv');
        closeShowInfos.classList.remove('hideDiv');
    }
        // afficher le mot de passe
        const inputPassword = document.querySelector('#showModifMotDePasse');
        const boutonPassword = document.querySelector('#buttonShowMotDePasse')
        
        inputPassword.disabled = true;
        boutonPassword.onclick = function(){
            if(inputPassword.type === 'password'){
                inputPassword.type = "text";
                boutonPassword.classList.add('text');
            } else{
                inputPassword.type = "password";
                boutonPassword.classList.remove('text');
            }
        }


    // reprendre la partie
    const buttonJoinPart = document.querySelector('#joinPart');
    const closeJoinPart = document.querySelector('#closeJoinPart');
    const contentJoinPart = document.querySelector('#contentJoinPart');

    buttonJoinPart.onclick = function() {
        popUp.classList.add('showPopUp');
        contentJoinPart.classList.add('showDiv');
    }
    closeJoinPart.onclick = function() {
        popUp.classList.remove('showPopUp');
        contentJoinPart.classList.remove('showDiv');
        closeJoinPart.classList.remove('hideDiv');
    }

    // relancer un ami
    const buttonLaunchFriend = document.querySelector('#launchFriend');
    const closeLaunchFriend = document.querySelector('#closeLaunchFriend');
    const contentLaunchFriend = document.querySelector('#contentLaunchFriend');

    buttonLaunchFriend.onclick = function() {
        popUp.classList.add('showPopUp');
        contentLaunchFriend.classList.add('showDiv');
    }
    closeLaunchFriend.onclick = function() {
        popUp.classList.remove('showPopUp');
        contentLaunchFriend.classList.remove('showDiv');
        closeLaunchFriend.classList.remove('hideDiv');
    }

    // supprimer une partie
    const buttonDeletePart = document.querySelector('#deletePart');
    const closeDeletePart = document.querySelector('#closeDeletePart');
    const contentDeletePart = document.querySelector('#contentDeletePart');

    buttonDeletePart.onclick = function() {
        popUp.classList.add('showPopUp');
        contentDeletePart.classList.add('showDiv');
    }
    closeDeletePart.onclick = function() {
        popUp.classList.remove('showPopUp');
        contentDeletePart.classList.remove('showDiv');
        closeDeletePart.classList.remove('hideDiv');
    }

    // créer une table
    const buttonCreateTable = document.querySelector('#createTable');
    const closeCreateTable = document.querySelector('#closeCreateTable');
    const contentCreateTable = document.querySelector('#contentCreateTable');

    buttonCreateTable.onclick = function() {
        popUp.classList.add('showPopUp');
        contentCreateTable.classList.add('showDiv');
    }
    closeCreateTable.onclick = function() {
        popUp.classList.remove('showPopUp');
        contentCreateTable.classList.remove('showDiv');
        closeCreateTable.classList.remove('hideDiv');
    }

    // choix de la table
    const buttonChooseTable = document.querySelector('#chooseTable');
    const closeChooseTable = document.querySelector('#closeChooseTable');
    const contentChooseTable = document.querySelector('#contentChooseTable');

    buttonChooseTable.onclick = function() {
        popUp.classList.add('showPopUp');
        contentChooseTable.classList.add('showDiv');
    }
    closeChooseTable.onclick = function() {
        popUp.classList.remove('showPopUp');
        contentChooseTable.classList.remove('showDiv');
        closeChooseTable.classList.remove('hideDiv');
    }

    // inviter un ami
    const buttonInviteFriend = document.querySelector('#inviteFriend');
    const closeInviteFriend = document.querySelector('#closeInviteFriend');
    const contentInviteFriend = document.querySelector('#contentInviteFriend');

    buttonInviteFriend.onclick = function() {
        popUp.classList.add('showPopUp');
        contentInviteFriend.classList.add('showDiv');
    }
    closeInviteFriend.onclick = function() {
        popUp.classList.remove('showPopUp');
        contentInviteFriend.classList.remove('showDiv');
        closeInviteFriend.classList.remove('hideDiv');
    }

    // inviter un joueur
    const buttonInvitePlayer = document.querySelector('#invitePlayer');
    const closeInvitePlayer = document.querySelector('#closeInvitePlayer');
    const contentInvitePlayer = document.querySelector('#contentInvitePlayer');

    buttonInvitePlayer.onclick = function() {
        popUp.classList.add('showPopUp');
        contentInvitePlayer.classList.add('showDiv');
    }
    closeInvitePlayer.onclick = function() {
        popUp.classList.remove('showPopUp');
        contentInvitePlayer.classList.remove('showDiv');
        closeInvitePlayer.classList.remove('hideDiv');
    }

    // rechercher le joueur
    const persons = [
        {name: 'Camille', id: 555},
        {name: 'Clara', id: 556},
        {name: 'Florent', id: 557},
        {name: 'Luc', id: 558},
        {name: 'Lucas', id: 559},
        {name: 'Jérémy', id: 560},
        {name: 'Joffrey', id: 561},
        {name: 'FRACTAL', id: 562},
        {name: 'fractal, id: 563'}
    ];

    const searchInput = document.querySelector('#searchInput');

    searchInput.addEventListener('keyup', function(){
        const input = searchInput.value;
        const result = persons.filter(item => item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()));
        let suggestion = '';

        if (input != ''){
            result.forEach(resultItem =>
                suggestion += `
                <div>
                    <input type="radio" name="invitePlayer" id="inputInvitePlayer${resultItem.id}">
                    <label for="inputInvitePlayer${resultItem.id}">${resultItem.name}</label>
                </div>`
            )
        }

        document.getElementById('suggestions').innerHTML = suggestion;
    })
})
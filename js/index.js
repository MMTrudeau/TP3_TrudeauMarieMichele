function afficherConfirmation(e) {
    e.preventDefault();
    alert("Merci! J'ai bien reçu votre message.")
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactFormulaire");
    form.addEventListener("submit", afficherConfirmation);
})

document.addEventListener("DOMContentLoaded", ()=> {
    const cliquer = document.getElementById("cliquerBouton");
    if (cliquer) {
        cliquer.addEventListener("click", () => {
            alert("Bonne visite!");
        })
    }
})

function direBonjour() {
    alert("Merci d'avoir visité mon portfolio");
}


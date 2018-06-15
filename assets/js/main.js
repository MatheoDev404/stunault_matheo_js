$(()=>{

    // au submit
    $("#adoption_form").submit(function(e){

        // interuption de la soumission du formulaire
        e.preventDefault();

        // On réinitialise les champs
        $('.is-invalid').removeClass('is-invalid')

        //  on recupère les valeur des champ
       let chat             = $('#choix_chat'),
           raison           = $('#raison_adoption');
           formulaireValide  = true ;


        // on verifie si les champ remplissent les conditions 
        // et si une erraur est trouver on affiche le champ en rouge
        if(chat.val() === ""){
            formulaireValide = false;
            chat.addClass('is-invalid');
        }
        
        if(raison.val().length < 15){
            formulaireValide = false;
            raison.addClass('is-invalid');
        }

        if(formulaireValide){
            $(this).replaceWith(`
            <div class="alert alert-success" role="alert">
                formulaire bien envoyé.
            </div>
            `)
        }
    })



});
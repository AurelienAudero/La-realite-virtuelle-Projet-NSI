// Identifier le formulaire dans une variable
var form = document.getElementById("feedback-form");

// En-tête de la requête API
const headers_ = {
     'Authorization': 'Bearer patcrpXYURk3xrvqP.71e7763db95c3838c0d0233bcc29348f3ab92ec09330978033c40ddb3a80e4cc',
     'Content-Type': 'application/json'
};

// Regarde quand le bouton "Envoyer" du formulaire est cliqué
form.addEventListener("submit", function(event) {
  // Empêche l'envoi par défault du formulaire pour qu'il soit géré par le JavaScript
  event.preventDefault();

  // Récupérer l'élément "input" qui a été sélectionné
  var selectedGrade = document.querySelector('input[name="data[grade]"]:checked');

  // Récupérer la valeur de l'élément sélectionné
  var gradeValue = selectedGrade.value;

  // Envoie les données du formulaire avec "POST"
  axios.post("https://api.airtable.com/v0/applZ3IYyNU9V7ids/tblvc6ATrMR10xd99",
  {
    "fields": {
      "Prénom": document.getElementById("firstname").value,
      "Nom de famille": document.getElementById("lastname").value,
      "Note": gradeValue,
  }
  }, {headers: headers_}
  )
  .then((resp) => {
    // Si l'envoi est réussi, apparition d'un message informant l'utilisateur que le formulaire à été envoyé
    document.getElementById('feedback-form').style.display = "none";
    document.getElementById('form-submit-success').style.display = "unset";
  })
  .catch(function (error) {
    // Si l'envoi a échoué, affichage d'un message d'erreur
    alert("Une erreur s'est produite lors de l'envoi du formulaire." + "\n" + "Veuillez réessayer plus tard…")
    console.log(gradeValue)
  });
});
// Fonction pour créer un cookie
function createCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  }
  
  // Fonction pour récupérer la valeur d'un cookie
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  
  // Fonction pour supprimer le pop-up
  function removePopup(popupElement) {
    if (popupElement) {
      popupElement.remove();
    }
  }
  
  // Vérifier si le cookie de consentement existe
  var consentCookie = getCookie('cookieConsent');
  
  // Si le cookie de consentement n'existe pas ou a une valeur différente de "true", afficher le pop-up
  if (!consentCookie || consentCookie !== "true") {
    var acceptBtn = document.querySelector('.cookie-item');
    var learnMoreLink = document.querySelector('a.cookie-item');
    
    // Ajouter un écouteur d'événement au bouton "J'accepte"
    acceptBtn.addEventListener('click', function() {
      // Créer un cookie de consentement valide pendant 1 an
      createCookie('cookieConsent', 'true', 365);
      // Supprimer le pop-up
      removePopup(document.querySelector('.cookie-container'));
    });
  
    // Ajouter un écouteur d'événement au lien "En savoir plus"
    learnMoreLink.addEventListener('click', function(event) {
      event.preventDefault();
      // Créer le contenu du pop-up d'informations supplémentaires
      var popupContent = document.createElement('div');
      popupContent.classList.add('cookie-popup-content');
      popupContent.innerHTML = '<header>Informations supplémentaires</header>' +
        '<br>' +
        '<p>Ce site utilise des cookies fournis par Google Marketing Platform afin de collecter des statistiques anonymes.</p>' +
        '<p>Nous utilisont aussi nos propres cookies afin d\'améliorer votre expérience utilisateur.</p>' +
        '<br>' +
        '<p>En continuant la navigation sur notre site, vous consentez à l\'utilisation de cookies sur ce site.</p>' +
        '<br>' +
        '<button class="close-btn">Fermer</button>';
  
      // Créer le pop-up et l'ajouter au corps de la page
      var popup = document.createElement('div');
      popup.classList.add('cookie-popup');
      popup.appendChild(popupContent);
      document.body.appendChild(popup);
  
      // Ajouter un écouteur d'événement au bouton de fermeture du pop-up
      var closeBtn = popup.querySelector('.close-btn');
      closeBtn.addEventListener('click', function() {
        // Supprimer le pop-up d'informations supplémentaires
        removePopup(popup);
      });
    });
  } else {
    // Si le cookie de consentement existe et a la valeur "true", supprimer le pop-up
    removePopup(document.querySelector('.cookie-container'));
  }
  
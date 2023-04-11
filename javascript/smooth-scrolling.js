/**!
 * Smooth Scrolling
 * @author: Aurélien Audero (https://github.com/AurelienAudero)
 * @author: Tony Baca (https://github.com/Thidokachi)
 * @url: https://github.com/AurelienAudero/La-realite-virtuelle-Projet-NSI/
 * @license: https://github.com/AurelienAudero/La-realite-virtuelle-Projet-NSI/blob/main/LICENSE
 */

$(function() {
  // Ajout du smooth scrolling sur tous les liens
  $("a").on("click", function(event) {
    if (this.hash !== "") {
      // Empêche l'action par défaut lors du clic sur une ancre
      event.preventDefault();
      
      // Récupération de l'identifiant de l'ancre cible
      const hash = this.hash;

      // Utilisation de la méthode d'animation de jQuery pour ajouter un effet de smooth scrolling
      $("html, body").animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        // Ajout du hash à l'URL une fois l'animation terminée
        window.location.hash = hash;
      });
    }
  });
});

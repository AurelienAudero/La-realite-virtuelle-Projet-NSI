/**!
 * Go Back Up Button
 * @author: Aurélien Audero (https://github.com/AurelienAudero)
 * @author: Tony Baca (https://github.com/Thidokachi)
 * @url: https://github.com/AurelienAudero/La-realite-virtuelle-Projet-NSI/
 * @license: https://github.com/AurelienAudero/La-realite-virtuelle-Projet-NSI/blob/main/LICENSE
 */

// Récupère l'élément #home-up-arrow
const homeUpArrow = document.querySelector('#home-up-arrow');

// Récupère l'élément footer
const footer = document.querySelector('.footer-container');

// Récupère la position verticale du footer par rapport au haut de la page
const footerPosition = footer.getBoundingClientRect().top + window.scrollY;

// Ajoute un écouteur d'événement qui se déclenche à chaque fois que l'utilisateur scroll
window.addEventListener('scroll', () => {
  // Récupère la position verticale actuelle de l'utilisateur
  const scrollPosition = window.scrollY + window.innerHeight;

  // Vérifie si l'utilisateur a atteint le footer
  if (scrollPosition >= footerPosition) {
    // Si oui, change le positionnement de l'élément #home-up-arrow en "absolute"
    homeUpArrow.style.position = `unset`;
  } else {
    // Sinon, change le positionnement de l'élément #home-up-arrow en "fixed"
    homeUpArrow.style.position = 'fixed';
    homeUpArrow.style.bottom = '15px';
    homeUpArrow.style.right = '0px';
  }
});
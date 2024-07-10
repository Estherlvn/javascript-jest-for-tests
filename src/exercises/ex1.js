// Récupérer le bouton et l'élément div
const button = document.getElementById('add-class-button');
const element = document.getElementById('element');

// Fonction pour ajouter une classe à l'élément div lors du clic sur le bouton
function addClassToElement() {
  element.classList.add('nouvelle-classe');
}

// Écouter le clic sur le bouton et appeler la fonction addClassToElement
button.addEventListener('click', addClassToElement);

// Exporter la fonction addClassToElement si nécessaire pour les tests
module.exports = {
  addClassToElement
};

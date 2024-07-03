// src/exercises/ex1.js

// Récupérer le bouton et l'élément div
const button = document.getElementById('add-class-button');
const element = document.getElementById('element');
console.log("hello")
// Fonction pour ajouter une classe à l'élément div
function addClassToElement() {
    element.classList.add('nouvelle-classe');
}

// Écouter le clic sur le bouton (corriger la variable du bouton)
button.addEventListener('click', addClassToElement);

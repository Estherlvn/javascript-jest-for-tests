// Importer Jest's jsdom pour simuler le DOM
const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

// Importer la fonction à tester
const { addClassToElement } = require('./ex1');

let dom;
let button;
let element;

// Avant chaque test, charger le contenu HTML et initialiser jsdom
beforeEach(() => {
  // Charger le contenu de index.html dans un environnement jsdom
  const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');

  // Créer un nouvel environnement JSDOM
  dom = new JSDOM(html, { runScripts: 'dangerously' });

  // Récupérer le bouton et l'élément div du DOM simulé
  button = dom.window.document.getElementById('add-class-button');
  element = dom.window.document.getElementById('element');

  // Attacher les événements du DOM simulé
  dom.window.document.body.appendChild(button);
  dom.window.document.body.appendChild(element);
});

// Test unitaire pour addClassToElement
test('addClassToElement ajoute une classe à element lors du clic sur le bouton', () => {
  // Vérifier si le bouton et l'élément ont été correctement récupérés
  expect(button).toBeTruthy();
  expect(element).toBeTruthy();

  // Simuler un clic sur le bouton
  button.dispatchEvent(new dom.window.Event('click'));

  // Vérifier si la classe 'nouvelle-classe' a été ajoutée à l'élément
  expect(element.classList.contains('nouvelle-classe')).toBe(true);
});

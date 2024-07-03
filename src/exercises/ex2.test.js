// ex2.test.js

// Importez JSDOM pour simuler un environnement de navigateur
const { JSDOM } = require('jsdom');

// Chargez votre fichier ex2.js ici
const fs = require('fs');
const path = require('path');
const ex2Path = path.resolve(__dirname, 'ex2.js');
const ex2Code = fs.readFileSync(ex2Path, 'utf8');

// Définissez un exemple de test avec Jest
describe('Test pour ex2.js', () => {
  let window;

  // Avant chaque test, initialisez JSDOM
  beforeEach(() => {
    const dom = new JSDOM(`
      <!DOCTYPE html>
      <html>
      <body>
        <button id="click-me-button">Click me</button>
        <p id="message"></p>
        <script>${ex2Code}</script>
      </body>
      </html>
    `, { runScripts: 'dangerously' });

    window = dom.window;
  });

  // Exemple de test
  test('La fonction showMessage modifie le contenu du message', () => {
    // Simuler un clic sur le bouton
    const clickMeButton = window.document.getElementById('click-me-button');
    clickMeButton.click();

    // Vérifier si le texte du message a changé comme prévu
    const messageElement = window.document.getElementById('message');
    expect(messageElement.textContent).toBe('Text has changed');
  });

  // Vous pouvez ajouter d'autres tests ici
});


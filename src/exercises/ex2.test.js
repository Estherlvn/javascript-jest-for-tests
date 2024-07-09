/**
 * @jest-environment jsdom
 */

const { setup } = require('./ex2');

describe('ex2', () => {
  let clickMeButton;
  let message;
  let showMessage;

  beforeEach(() => {
    // Configurer le DOM avant chaque test
    document.body.innerHTML = `
      <button id="click-me-button">Click Me!</button>
      <p id="message"></p>
    `;
  });

  test('should render clickMeButton and message elements', () => {
    ({ clickMeButton, message } = setup());
    expect(clickMeButton).toBeDefined(); // Vérifie si clickMeButton est défini
    expect(message).toBeDefined(); // Vérifie si message est défini
  });

  test('should call showMessage function when clickMeButton is clicked', () => {
    showMessage = jest.fn();
    ({ clickMeButton } = setup(showMessage));
    clickMeButton.click();
    expect(showMessage).toHaveBeenCalledTimes(1); // Vérifie si showMessage a été appelée une fois
  });

  test('should update the message text when showMessage is called', () => {
    ({ clickMeButton, message } = setup());
    clickMeButton.click();
    expect(message.textContent).toBe('Text has changed'); // Vérifie le texte du message
  });
});

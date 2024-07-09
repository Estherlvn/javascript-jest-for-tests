function setup(showMessageCallback) {
  const clickMeButton = document.getElementById('click-me-button');
  const message = document.getElementById('message');

  const showMessage = showMessageCallback || function showMessage() {
    message.textContent = "Text has changed";
  };

  clickMeButton.addEventListener('click', showMessage);

  return { clickMeButton, message, showMessage };
}

module.exports = { setup };

clickMeButton.addEventListener('click', showMessage);

const clickMeButton = document.getElementById('click-me-button');
const message = document.getElementById('message');

function showMessage() {
  // Change the text content of the 'message' paragraph.
  message.textContent = "Text has changed";
}

clickMeButton.addEventListener('click', showMessage);

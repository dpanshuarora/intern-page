const buttons = document.getElementsByClassName('welcome-button');

function addEventListenerToButtons(buttons) {
  for (let button of buttons) {
    button.addEventListener('click', printMessage)
  }
}

function printMessage() {
  document.write("Welcome " + this.parentNode.parentNode.childNodes[1].childNodes[1].innerHTML);
}

addEventListenerToButtons(buttons);

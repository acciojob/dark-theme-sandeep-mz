// JavaScript to toggle the dark theme

// Function to toggle the theme when the button is clicked
function swapTheme() {
  const mainElement = document.querySelector('#app');
  const buttonElement = document.querySelector('#swap');

  if (mainElement.classList.contains('night')) {
    mainElement.classList.remove('night');
    buttonElement.classList.remove('button_night');
    buttonElement.textContent = 'Dark';
  } else {
    mainElement.classList.add('night');
    buttonElement.classList.add('button_night');
    buttonElement.textContent = 'Light';
  }
}

// Add a click event listener to the button
const buttonElement = document.querySelector('#swap');
buttonElement.addEventListener('click', swapTheme);

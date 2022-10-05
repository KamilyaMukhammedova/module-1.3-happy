const lightMode = document.getElementById('light-mode');
const darkMode = document.getElementById('dark-mode');
const modeBlock = document.getElementById('mode-block');
const orangeWord = document.getElementById('orange-word');
const modeColor = document.getElementById('mode-color');
const darkIc = document.getElementById('dark-ic');
const lightIc = document.getElementById('light-ic');
const sunLabel = document.getElementById('light-label');
const moonLabel = document.getElementById('dark-label');

const checkMode = () => {
  if (!darkMode.checked) {
    modeBlock.style.backgroundColor = '#FFFF';
    modeBlock.style.color = '#222222';
    orangeWord.textContent = 'light';
    modeColor.textContent = 'Light';
    sunLabel.style.color = '#FF9209';
    moonLabel.style.color = '#222222';
    darkIc.style.fill = '#222222';
    lightIc.style.fill = '#FF9209';
  } else {
    modeBlock.style.backgroundColor = '#222222';
    modeBlock.style.color = '#FFFF';
    orangeWord.textContent = 'dark';
    modeColor.textContent = 'Dark';
    sunLabel.style.color = '#FFFF';
    moonLabel.style.color = '#FF9209';
    darkIc.style.fill = 'red';
    darkIc.style.fill = '#FF9209';
    lightIc.style.fill = '#FFFF';
  }
};

document.addEventListener('DOMContentLoaded', () => {
  darkMode.checked = true;
  checkMode();
});

lightMode.addEventListener('click', () => {
  checkMode();
});

darkMode.addEventListener('click', () => {
  checkMode();
});


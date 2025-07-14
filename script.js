// Show default tab on load
openTab('guess');

// Switch tabs
function openTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.style.display = 'none';
  });
  document.getElementById(tabId).style.display = 'block';
}

// Number Guessing Game
let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const guess = parseInt(document.getElementById('userGuess').value);
  const result = document.getElementById('guessResult');

  if (!guess || guess < 1 || guess > 100) {
    result.innerText = "❌ Please enter a number between 1 and 100";
  } else if (guess === randomNumber) {
    result.innerText = "🎉 Correct! You guessed the number!";
    randomNumber = Math.floor(Math.random() * 100) + 1; // reset
  } else if (guess > randomNumber) {
    result.innerText = "Too high! Try again.";
  } else {
    result.innerText = "Too low! Try again.";
  }
}

// BMI Calculator
function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100;

  if (weight > 0 && height > 0) {
    const bmi = (weight / (height * height)).toFixed(2);
    document.getElementById('bmiResult').innerText = `Your BMI is ${bmi}`;
  } else {
    document.getElementById('bmiResult').innerText = "Enter valid weight and height!";
  }
}

// Color Changer
function changeColor() {
  const colors = ["#f9c74f", "#90be6d", "#f94144", "#577590", "#43aa8b", "#ff6f91"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById("mainContainer").style.backgroundColor = randomColor;
}

// Digital Clock
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  document.getElementById('clockDisplay').innerText = time;
}
setInterval(updateClock, 1000);

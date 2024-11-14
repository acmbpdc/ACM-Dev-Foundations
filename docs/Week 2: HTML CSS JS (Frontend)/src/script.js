// Initialize the counter variable
let count = 0;

// Select the display element
const counterDisplay = document.getElementById("counter");

// Function to update the display
function updateDisplay() {
  counterDisplay.innerText = count;
}

// Increase count
document.getElementById("increase-2").addEventListener("click", () => {
  count += 2;
  updateDisplay();
});

// Increase count
document.getElementById("increase-3").addEventListener("click", () => {
  count += 3;
  updateDisplay();
});

// Decrease count
document.getElementById("decrease").addEventListener("click", () => {
  count--;
  updateDisplay();
});

// Reset count
document.getElementById("reset").addEventListener("click", () => {
  count = 0;
  updateDisplay();
});

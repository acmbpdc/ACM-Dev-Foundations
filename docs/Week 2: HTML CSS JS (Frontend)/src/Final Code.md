# A Simple Counter Application

### HTML/CSS:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Basketball Score</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <style>
    .counter-display {
      font-size: 2rem;
      margin: 20px 0;
    }
  </style>
</head>

<body>
  <div class="container text-center">
    <h1 class="my-4">🏀 Basketball Score</h1>

    <!-- Counter Display -->
    <div id="counter" class="counter-display">0</div>

    <!-- Buttons -->
    <div class="d-flex justify-content-center gap-3">
      <button id="increase-2" class="btn btn-success">2 Pointer</button>
      <button id="increase-3" class="btn btn-success">3 Pointer</button>
      <button id="decrease" class="btn btn-danger">Decrease</button>
      <button id="reset" class="btn btn-secondary">Reset</button>
    </div>
  </div>

  <!-- JavaScript -->
  <script src="script.js"></script>
</body>
</body>

</html>
```

### JavaScript: 

```javascript
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
```
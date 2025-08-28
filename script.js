// Part 2: Functions with parameters & return values

// Global variable (scope demo)
let globalMultiplier = 5;

// Function with parameters & return value
function multiplyNumbers(num1, num2) {
  let result = num1 * num2 * globalMultiplier; // Uses global variable
  return result; // returns value
}

// Function triggered by button
function showCalculation() {
  let localValue = 2; // local scope
  let answer = multiplyNumbers(localValue, 3); // Pass parameters
  document.getElementById("calc-result").textContent =
    `Calculation Result: ${answer}`;
}

// Part 3: Combine CSS + JS (trigger animations)
function triggerBoxAnimation() {
  let box = document.getElementById("js-box");
  // Toggle class to trigger CSS transition
  box.classList.toggle("animate");
}

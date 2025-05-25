// 10-factorial.js

function factorial(n) {
  // Convert input to integer
  const num = parseInt(n);

  // If NaN or less than 0, factorial is 1
  if (isNaN(num) || num < 0) return 1;

  // Base case: factorial(0) = 1
  if (num === 0) return 1;

  // Recursive case
  return num * factorial(num - 1);
}

// Get argument from command line
const arg = process.argv[2];

// Print factorial result
console.log(factorial(arg));

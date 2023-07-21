/**
 * Checks if a number is prime.
 * 
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is prime, false otherwise.
 */
exports.isPrime = function isPrime(num) {
  // Check if the number is less than 2
  if (num < 2) {
    return false;
  }

  // Check if the number is divisible by any number from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

/**
 * Performs prime operations on two numbers.
 * 
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @returns {number} - The result of the prime operations.
 */
exports.primeOperations = function primeOperations(num1, num2) {
  // Check if both numbers are prime
  if (!isPrime(num1) || !isPrime(num2)) {
    return 0;
  }

  // Perform prime operations (e.g., addition, subtraction, multiplication, etc.)
  const sum = num1 + num2;
  const difference = Math.abs(num1 - num2);
  const product = num1 * num2;

  // Return the result
  return sum + difference + product;
}
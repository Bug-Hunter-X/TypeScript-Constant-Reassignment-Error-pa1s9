function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // This will work fine

// Correct way to declare and use a constant:
const PI: number = 3.14159;
console.log(PI); // Accessing the constant value
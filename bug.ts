function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // This will work fine

// The following will cause an error because TypeScript does not allow assigning a value to a constant variable:
const PI: number = 3.14159;
PI = 3.14; // Error: Cannot assign to 'PI' because it is a constant.
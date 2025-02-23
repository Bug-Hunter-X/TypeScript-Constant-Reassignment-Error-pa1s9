# TypeScript Constant Reassignment Error

This repository demonstrates a common error in TypeScript: attempting to reassign a value to a constant variable.  The `bug.ts` file contains code that will cause this error.  `bugSolution.ts` provides a solution.

The issue arises when using the `const` keyword to declare a variable, intending to make it immutable. Any subsequent attempt to change the value of a `const` variable results in a compile-time error.

This error is crucial to understand to write robust and error-free TypeScript code.  Proper use of `const` enhances code reliability and predictability.
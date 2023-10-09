# Functions

In JavaScript there are many different ways to write a function. There are no right or wrong ways to store a function but some are more modern than others.

## Task 1:

In `functions_1.js`, rewrite the `logPerson()` function declaration, into one of each of the following functions.

- Functions stored in a Variable
- Arrow Functions
- Anonymous Arrow Functions 💅

Note: There are no tests for this task!

👉 What is the difference between all these functions? Can you explain what the differences are?
function logPerson(person){} - This is the traditional way of defining a function in javascript. Function declarations are hoisted that is they can be used before they are defined.
const performLogPerson = logPerson - logPerson is a function expression and is created by assigning function to a variable performLogPerson. Function expressions are not hoisted that is they can be used only after they are defined.
Arrow functions - Provide a concise way of declaring functions They use => and do not need the function or return keywords
Anonymous arrow functions - It defines inline as an argument for a forEach method. Arrow functions are often used when a function is needed to be passed as an argument. The main differences are in their syntax and hoisting behavior.

When you've finished this exercise move on to another file such as Variables 🙌

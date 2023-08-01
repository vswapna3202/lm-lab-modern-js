# Rest Parameters

The `add()` function in `rest_parameters.js` adds two numbers together.

This is fine... but what if we wanted to add *any amount* of numbers together? 🤔

If you run the test file using:

                npm test rest_parameters.test.js

You'll notice the second test fails:

```JavaScript
expect(add(1, 2, 3, 4, 5)).toBe(15);
```

The function only takes two parameters, so in this test numbers 3, 4 and 5 are getting ignored! 

Using Rest Parameters and some kind of forLoop (your choice!), refactor this function so that it can add together *any number* of arguments and fix the failing test.

👉 Hint: make sure you're in the correct folder before running these commands. You will also need to `console.log()` your function to see any output.

👉 Hint: If you get stuck, use the MDN documentation to help you: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

Good luck! 🙌

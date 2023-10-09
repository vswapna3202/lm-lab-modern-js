// Instructions can be found in rest_parameters.md

// Add rest parameters here!
export function add(...numbers) {
  // Add a loop here
  let sum = 0;
  for (let number of numbers)
    sum += number;
  return sum;
}

console.log(add(1, 2, 3, 4, 5));

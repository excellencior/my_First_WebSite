const mark1 = [1, 2, 3, 4, 5];
const mark2 = [6, 7, 8, 9];

const final1 = mark1.concat(mark2).concat([10, 11, 12]);
console.log(final1);
// const final = mark1 + mark2 + [10]; // This is string concatenation not merging of integer array
const final2 = [...mark1, ...mark2, 10]; // 3 dot operator is introduced in ES6
console.log(final2);

// A good use of 3 dot operator
const anyArray = [10, 20, 40, 30, 70, 50];
const maxValue = Math.max(...anyArray); // Math.max(10, 20, 40, 30, 70, 50);
console.log(maxValue);
let doubleIt = function doubleNumbers(num) {
    return num * 2;
}
// doubleNumbers(20); // This cannot be called explicitly
// console.log(doubleIt); // Error
console.log(doubleIt(20)); // Fine

// A shorter way with arrow function
let add = (num1, num2) => num1+num2; // In single line arrow function , return statement is not required
console.log(add(10, 20));

let multiLine = (num1, num2) => {
    const difNum = num1-num2;
    const addNum = num1+num2;
    return difNum*addNum;
}
console.log(multiLine(40, 30));
const numbers = [2, 3, 4, 5, 6, 7, 8, 9];

// creating an array of square of each element from numbers array
const finalArray1 = numbers.map(x => x*x);

// function square(x) {
//     return x*x;
// }
// const finalArray1 = numbers.map(square);

// const finalArray1 = numbers.map(function(x) {
//     return x * x;
// })

console.log(finalArray1);
// map(callbackfn: (value: number, index: number, array: number[]) => any, thisArg?: any): any[]
// A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

const ans = numbers.map(function(x) {
    if (x>5) return x;
})
// Better way of doing this is by using filter
const ans2 = numbers.filter(x => x > 5);
console.log(ans2);

const result = numbers.find(x => x>5); // Returns the first element of the condition
console.log(result);
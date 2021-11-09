function increment() {
    let counter = 0;
    return function() {
        counter++;
        return counter;
    }
}
// ranVar now gets the function and it will act as an acting function
const ranVar = increment();
console.log(ranVar());
console.log(ranVar());
console.log(ranVar());
console.log(ranVar());

console.log(increment()()); // increment()() -> function()

//changing variable will act independently
const ranVar2 = increment();
console.log(ranVar2());
console.log(ranVar2());
console.log(ranVar2());
console.log(ranVar2());
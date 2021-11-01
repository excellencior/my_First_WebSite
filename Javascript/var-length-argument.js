function addNumbers() {
    let sum = 0;
    for (var i=0; i<arguments.length; i++) {
        sum += arguments[i]; // arguments is a non-modifiable array (no push and pop function exists)
    }
    return sum;
}

var sumNum = addNumbers(1, 2, 3, 4); // it can take any number of parameters
console.log(sumNum);
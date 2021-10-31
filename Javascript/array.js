var arr = [1, 2, 3, 4];
console.log(arr);
arr.push(10);
console.log(arr + ' length = ' + arr.length); // Like java

// For adding values at the first index 
arr.unshift(0);
console.log(arr);
// arr.shift() will remove the first element from the array

var result = arr.slice(2);
console.log(result);
// result will get slice from index 2 to the last element

var result = arr.slice(2, 5);
console.log(result);
// no duplicate variable error is notified (same named variable "result")
// result will get slice from index 2 to index 5
// arr.splice(form, to) -> it will change the arr array
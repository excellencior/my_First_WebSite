var p = 10, q = 20;
[p, q] = [q, p];
console.log("p = " + p + " , q = " + q);

var x = 1, y = 2;
x = x+y;
y = x-y;
x = x-y;
console.log("x = " + x + " , y = " + y);
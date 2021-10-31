// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
function fibSeries(n) {
    if (n==0){
        return [0];
    }
    else if (n==1) {
        return [0, 1];
    }
    else {
        var fibArray = fibSeries(n-1);
        var nextElement = fibArray[n-1] + fibArray[n-2];
        fibArray.push(nextElement);
        return fibArray;
    } 
}
    var array = fibSeries(10);
    console.log(array);
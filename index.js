// JavaScript program to get the first x Fibonacci numbers.



let fib_series = function (x) {
  if (x===1) {
    return [0, 1];
  } 
  else {
    let a = fib_series(x - 1);
    a.push(a[a.length - 1] + a[a.length - 2]);
    return a;
  }
};

 console.log(fib_series(20));
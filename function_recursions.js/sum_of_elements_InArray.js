function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) + arr[n - 1];
    }
}
let ans = multiply([3,4,5,6],4);
console.log(ans);
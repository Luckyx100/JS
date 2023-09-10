let arr = [2,4,6,13,90,53,77,10]

// How to shift elements 
// console.log(arr.shift());   // shifts 1 value (2 is not present now) 
// console.log(arr.shift());  // shifts another value (4 is not ''')
// console.log(arr);

// Unshift
//console.log(arr.unshift(2,4));  // unshifts all elements at a time
//console.log(arr);

// Slice
console.log(arr.slice(2,6));   // prints elements from 2 to 5 (6th element is not included)

// Splice
console.log(arr.splice(2,5));  // takes out elements from array from 2 to 5th element
console.log(arr);  // So now the the sliced part it taken out from array
let arr = [2,5,7,14,10,56,11,0,17]
let other_arr = ["lucky",true,false,18,10,[2,3]] // diff data types are allowed
                                                 // Can include array inside an array
console.log(typeof arr);     // every array is an object (not int, char,etc)
console.log(typeof other_arr);    // arrays are considered to be objects 
                                 // Therefore everything is a subset of object in Javascript     
for (let i = 0; i < other_arr.length; i++) {
    const element = other_arr[i];   // other_arr[5] = [2,3]
    console.log(element);
}                       

console.log(other_arr.length);  // Show actual no of elements, not no of indexes.

// other way to printf elements of array
console.log(arr.at(2));  // will print array at index 2
console.log(other_arr.indexOf("lucky")); // will print index of element
                                        // but if element is not there then it will by default print 
console.log(  );
//  How to include elements in Array
arr.push(1,2);  // 1,2 are inserted behind the array "arr"
console.log(arr);     // to print whole array

//  How to exclude elemenys in Array
console.log(arr.pop());  // excludes the last element in array
console.log(arr);  


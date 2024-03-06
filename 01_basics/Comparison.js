 console.log(2>1)
 console.log(2>=1)
 console.log(2<1)
 console.log(2==1)
 console.log(2!=1)

console.log("2">1)
console.log("02">1)

console.log(null>0)
console.log(null==0)
console.log(null<=0)

/* The == and comparison operator (<,>,<=,>=) work differently , the compariosn
   operators convert the null to number value which is 0 , which's why 
   in (1) 0>0 is false , (3) 0<=0 is true , in == operstor there is no conversion .
 */

console.log(undefined==0)
console.log(undefined>0)
console.log(undefined<0)

// All false values


// (===) -> strictly checks the value as well as the data type 

console.log("2"==2)  // -> returns true value since it converts string to number 

console.log("2"===2) // -> returns false since different data type 


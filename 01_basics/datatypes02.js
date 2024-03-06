/* Primitive data types: Call by value 

1> String
2> number
3> boolean
4> null
5> undefined
6> symbol
7> BigInt

*/

const value = Symbol(34)
const newvalue= Symbol(34)

console.log(typeof(value))
console.log(typeof(newvalue))

console.log(value===newvalue)

/* JS is dynamically typed language , we dont define the data type of the 
   variable at compile time , defined at run time , data type can be changed 
   throughout the program
*/
   

/* Non-Primitive :  Call by reference 

1> Array
2> Object
3> Functions

*/

const hero = ["virat","mahi","rohit"];

let bioData= {
    name: "Bishu",
    age: 18,
    Phone: 9476310651 
}

const myFunction = function(){
    console.log("print my name : ");
}

console.log(typeof(myFunction)) // Object Function
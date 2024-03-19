const score=100

const balance= new Number(200) // strictly its data type is Number
console.log(balance);

console.log(balance.toString().length)
console.log(typeof(balance))

console.log(balance.toFixed(2)) // no of values after decimal

const otherNumber= 135.565622

console.log(otherNumber.toPrecision(4))

const Hundreds=10000000000

console.log(Hundreds.toLocaleString())        // adds appropriate comma to value
console.log(Hundreds.toLocaleString('en-IN'))


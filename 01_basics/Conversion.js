let score =45

let valueInNumber = Number(score)

console.log(typeof(score))
console.log(typeof(valueInNumber))


score="123bishu"
valueInNumber = Number(score)
console.log(typeof(score))
console.log(typeof(valueInNumber)) // score here is string but output type is number 
console.log(valueInNumber)  // value in valueInNumber is Not a Number 

score=null
valueInNumber = Number(score)
console.log(typeof(score))
console.log(typeof(valueInNumber))
console.log(valueInNumber)

score=true
valueInNumber = Number(score)
console.log(typeof(score))
console.log(typeof(valueInNumber))
console.log(valueInNumber)


// "45" => 45
// "123bishu" => NaN
// true =>1 , false =>0

let loggedIn=1
let statusLoggedIn= Boolean(loggedIn)
console.log(typeof(loggedIn))
console.log(typeof(statusLoggedIn))
console.log(statusLoggedIn)

// 1=> true ;  0=> false
// ""=> false ; "hi"=> true

let number=33
let str=String(number)
console.log(typeof(number))
console.log(str)
console.log(typeof(str))
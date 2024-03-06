// Primitive-> Stack , copy of the data is given
// Non-Primitive-> Heap , reference of the exact data is given

let myCrush= "Samadrita"
let newCrush= myCrush   // in newCrush the copy of data in myCrush is given

newCrush="Devangi"     // change in data of newCrush will not change the data in myCrush

console.log(newCrush)
console.log(myCrush)

let crush={
    name:"samadrita"
}

let newcrush=crush       // newcrush has been given the reference/address of crush

newcrush.name="Devangi"  // here any change in newcrush will cause change in data of crush

console.log(crush.name)
console.log(newcrush.name)



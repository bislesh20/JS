let myDate= new Date()
console.log(myDate)

console.log(myDate.toString())      // Fri Mar 08 2024 Time

console.log(myDate.toDateString()) // Fri Mar 08 2024

console.log(myDate.toISOString())  // 2023-03-08T()

console.log(myDate.toJSON())      //  20234-03-08T()

console.log(myDate.toLocaleDateString())  // 3/8/2024

console.log(myDate.toLocaleString())      // 3/8/2024 , Time

console.log(myDate.toLocaleTimeString())  // only current Time

console.log(myDate.toTimeString())        // Current time and GMT+0000

console.log(myDate.toUTCString())         // Fri , 08 Mar 2024 current time

console.log(myDate.getTimezoneOffset())   // 0

console.log(typeof myDate) // Date is object

let myCreatedDate1= new Date(2024,0,20)
console.log(myCreatedDate1.toDateString())

let myCreatedDate2= new Date(2024,0,20,16,40,0)
console.log(myCreatedDate2.toUTCString())

let myCreatedDate3= new Date("2024-01-20")      // yy-mm-dd
console.log(myCreatedDate3.toLocaleDateString())

let myCreatedDate4= new Date("01-20-2024")     // mm-dd-yy
console.log(myCreatedDate4.toLocaleDateString())

let myTimeStamp = Date.now()      // miliseconds passed from 1925 to till current time
console.log(myTimeStamp)

console.log(myCreatedDate1.getTime()) // miliseconds passed from 1925 to date mentioned

console.log(myTimeStamp>myCreatedDate1)

console.log(Math.floor(myTimeStamp/1000))  // convert in seconds

let NewDate= new Date()
console.log(NewDate)

console.log(NewDate.getDay())
console.log(NewDate.getMonth())

console.log(NewDate.toLocaleString('default',{
    weeday:"long",
}))









const tinderUser= new Object()

tinderUser.Id="abc.123"
tinderUser.name="subham"
tinderUser.isLoggedIn=true

console.log(tinderUser);

const newUser={
    email:"newUser@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Bislesh",
            lastname:"Singh"
        }
    }
}
console.log(newUser.fullname.userfullname.firstname)

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
const obj3={
    5:"e",
    6:"f"
}

// const obj3= {obj1,obj2} // does not merges two objects , considers the second object as another parameter 

const obj4=Object.assign({},obj1,obj2,obj3)
console.log(obj4)

const obj5= {...obj1,...obj2,...obj3}
console.log(obj5)

// An Array of Objects
const users=[   
    {
        id:1001,
        name:"bishu"
    }, // comma seperated values
    {
        id:1002,
        name:"harsh"
    },
    {
        id:1003,
        name:"rahul"
    }
]

console.log(users[1].name)

console.log(Object.keys(tinderUser));  // returns value in array 

console.log(Object.values(tinderUser));// returns value in array

console.log(Object.entries(tinderUser)); // returns [[key,value],[key,value]] pairs in a array format 

console.log(tinderUser.hasOwnProperty('name')); // returns whether it has the particular field in it




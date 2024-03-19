// Singleton -> made from constructor

// Object Literals

// Object.create()

const mySym= Symbol("key1")

const JsUser={
    name: "Bishu",
    age:20,
    location:"Kolkata",
    email:"bishu@gmail.com",
    isLoggedIn: true,
    lastLogin: ["Monday","Sunday"],
    mySym:"key1"   // the type of for this declaration is string 
    [mySym]="key1" // the type of this declaration is symbol  
}

console.log(JsUser.name);
console.log(JsUser["name"]);

console.log(JsUser.age);
console.log(JsUser["age"])

console.log(JsUser.lastLogin)
console.log(JsUser["lastLogin"])

console.log(JsUser.isLoggedIn)
console.log(JsUser["isLoggedIn"])

console.log(JsUser.mySym)
console.log(JsUser["mySym"])

console.log(typeof JsUser["mySym"])

JsUser.email="bishu1221@gmail.com" // to change the values of keys

// To make the values inside object unchangeable

//Object.freeze(JsUser)
JsUser.name="Bislesh"
console.log(JsUser["name"])

JsUser.greeting= Function()
{
    console.log("Hello JS user")
}
JsUser.greetingTwo=Function()
{
    console.log(`Hello JS user,${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())

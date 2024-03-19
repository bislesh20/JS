const marvel=["Thor","Hulk","Iron Man"]
const dc=["superman","flash","batman"]

marvel.push(dc)     // takes dc as the fourth element of array
console.log(marvel)
console.log(marvel[3][1])

const allHero=marvel.concat(dc)
console.log(allHero)

const ind_hero=[...marvel,...dc]
console.log(ind_hero)

const newArr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_array= newArr.flat(3)
console.log(real_array)

console.log(Array.isArray(newArr))
console.log(Array.from("Bishu"))
console.log(Array.from({name:"Bishu"})) // interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))


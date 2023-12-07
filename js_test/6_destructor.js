// //ver1
// const array = [1,2]
// const a = array[0]
// const b = array[1]
// console.warn(a, b)

//ver2
const array = [1,2]
const [a, b] = array //assign a,b = 1,2
console.warn(a, b)

const person = {first:"Jane", Last:"Doe"}
const {first: f, Last: l} = person
console.warn(f, l)

const oneToFive = [1,2,3,4,5]
const [i,ii, , iv] = oneToFive //124
console.warn(i,ii,iv) 
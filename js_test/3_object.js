// //ver1
// const color = 'red'
// const age = 2
// function bark(){
//     console.log("woof!")
// } 

// const dog = {color: color, age: age, bark:bark} //object
// dog.bark()

// //ver2
// const color = 'red'
// const age = 2
// function bark(){
//     console.log("woof!")
// } 

// const dog = {color, age, bark} //if property and variable has same name
// dog.bark()

// //ver3
// const color = 'red'
// const age = 2
// function bark(){
//     console.log("woof!")
// } 

// const dog = {
//     color, 
//     age, 
//     bark(){
//         console.warn("woof!")
//     }} //can write this too
// dog.bark()

//ver4
const color = 'red'
const age = 2
function bark(){
    console.log("woof!")
} 

const doBark = "ba" + "rk" 
const dog = {
    color, 
    age, 
    [doBark]: function(){ //dobark = "ba"+"rk" ="bark"
        console.warn("woof!")
    }} //can write this too
dog.bark() //เลยเรียกใช้ bark ตรงนี้ได้
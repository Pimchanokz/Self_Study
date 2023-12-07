// //ver1
// var name = "Luna"; //var กำหนดค่าตัวแปลแบบ global
// if(true){
//     var name = "Ken"; //มันเลยไม่สนใจ if เลย เสมือนเป็นตัวเดียวกัน
// }

// console.log(name); //console.log ใช้งานคล้ายๆprint

// //ver2
// var name = "Luna"; 
// function a(){
//     var name = "Ken"; //var เคารพ func
// }

// console.log(name);

// //ver3
// let name = "Luna"; 
// if(true){
//     let name = "Ken"; //let respect this block scope
// }

// console.log(name);

// //ver1
// var stack = []

// for(var i=0; i<10; i++){
//     stack.push(function(){
//         console.warn(i) //same as log
//     })
// }

// stack.forEach(function(f){ //เรียกฟังก์ชันทุกครั้งที่มีการวนลูป
//     f()
// })

// //ver2
// var stack = []

// for(let i=0; i<10; i++){
//     stack.push(function(){
//         console.warn(i) //same as log
//     })
// }

// stack.forEach(function(f){ //เรียกฟังก์ชันทุกครั้งที่มีการวนลูป
//     f()
// })

//ver1
const fruit = 'Banana'
{
    const fruit = 'Apple' //const respect block scope but can't re assign
}
console.warn(fruit)

// fruit = 'Tomato' //cannot re assign, const is read only

//but can add property like this 
const person = {}
person.name = 'Luna'
console.warn(person.name)
// //spead
// const arr = [4,5,6]
// const append = [1,2,3, ...arr] // ...ต่อด้วย array จะเป็นการนำค่าในarray ออกมา
// console.warn(append)

// const arr2 = [7,8,9]
// arr.push(...arr2) 
// console.warn(arr)

// //copy by 'slice()'
// const arr = [4,5,6]
// const copy = arr.slice()
// console.warn(copy)
// copy.push(7)
// console.warn(arr)
// console.warn(copy)

// //spread into arguments
// function add(x, y, z){
//     return x+y+z
// }
// let sum = add(1,2,3)
// console.warn(sum)

// const arr = [1,2,3]
// sum = add(...arr)
// console.warn(sum)

// //rest = spread reverse = make argument to array
// function howManyArgs(...args){
//     console.log(args.length)
//     console.log(args)
// }

// howManyArgs()
// howManyArgs(4,5,)
// howManyArgs(4,5,8)

//rest params
function multiply(multiplier, ...array){
    console.warn(array)
    return array.map(e => multiplier * e) //mapใช้ได้กับarrayไว้ทำในทุกๆตัว โดย e => multiplier * e คือรับตัวแปรไรมาส่งออกอันนั้น
}

const result = multiply(2, 100, 200, 300)
console.warn(result)

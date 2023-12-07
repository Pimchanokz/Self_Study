const array = [1,4,9,8,7,11,12,0,10,11,8]

//index of ใช้หา object ไม่ได้
// let index = array.indexOf(8) 
// console.warn(index)
const index = array.indexOf(2) 
console.warn(index)

//find ถ้าไม่มี = undefined
const found = array.find(e => e%4 === 0)
console.warn(found)

//find index
const foundIn = array.findIndex(e => e === 11) 
console.warn(foundIn)
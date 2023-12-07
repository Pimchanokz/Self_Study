const array = [1,2,3]
console.log(array.join())
console.log(array.join('-'))
console.log(array.join('+'))

const fourToSix = [4,5,6]
const oneToSix = array.concat(fourToSix)
console.log(oneToSix.join())

const color = ['blue', 'green']
const momlight = color.push('read')
console.log(color)

//pop เอาออกตัวสุดท้าย
//shift เอาออกตัวแรก
//push เพิ่มท้าย
//unshift เพิ่มแรก
//spliced(5, 1 , insert ตัวสุดท้าย) บอกตำแหน่งที่เริ่มลบกับจำนวน
//sliced(5, 1 , insert ตัวสุดท้าย) ดึงตั้งแต่ตำแหน่งที่เท่าไหร่กับจำนวน, ไม่เปลี่ยนค่า array
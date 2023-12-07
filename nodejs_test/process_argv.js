//เลือกคำนวณ พื้นที่สามเหลี่ยม หรือพื้นที่สี่เหลี่ยม

//console.log(process.argv) //ใช้จัดการกับข้อมูลที่ส่งมาทาง command line เป็นในรูป array
const minimist = require('minimist')

function get_triangle_area(width, height){
    return 1/2 * width * height
}

function get_rectangle_area(width, height){
    return width * height
}

const argument = process.argv.slice(2) //ตัด 2 ตัวแรก
const clean_argument = minimist(argument) //แปลง argument เป็น object
// const [shape, w, h] = argument
const {shape, w, h} = clean_argument //เปลี่ยน array เป็น object
let area = 0
if (shape === 'tri'){
    area = get_triangle_area(Number(w), Number(h))
}
else if(shape === 'rec'){
    area = get_rectangle_area(Number(w), Number(h))
}
console.log(argument)
console.log(`kscks = ${area}`)
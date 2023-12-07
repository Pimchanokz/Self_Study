const array = [10,20,30]

// const map = array.map(e => e)
// console.warn(map)

// const reduce = array.reduce((ret, e, i) => {
//     console.warn(i, ret, e)
//     const sum = ret + e
//     return sum
// }, 0) //อยากได้ผลลัพธ์เดียวจาก array ตั้งต้น
// console.warn(reduce)

//ret ค่าสะสม ,e ค่าจาก array, i จำนวนรอบ
//ถ้าไม่ใส่ค่าเริ่มต้น(0) ค่าสะสมจะเป็นค่าแรจาหในอาเรย์ทันที


// const reduce = array.reduce((ret, e, i) => ret+e , 0) //อยากได้ผลลัพธ์เดียวจาก array ตั้งต้น
// console.warn(reduce)

const c = [
    {id: 1, name: 'Kaprao', cal:1000},
    {id: 2, name: 'Salad', cal:500},
    {id: 3, name: 'Radna', cal:1400},
    {id: 4, name: 'Soup', cal:700},
    {id: 5, name: 'Kaitod', cal:1200},
]

const isNotHealthy = e => e.cal >= 1000

const sum = c
    .filter(isNotHealthy) //เลือกเฉพาะ not healthy
    .map(e => e.cal) //วนแคลทุกตัว [1000, 1400, 1200]
    .reduce((ret, e) => ret + e, 0) //มาบวกค่าแคล

    console.warn(sum)
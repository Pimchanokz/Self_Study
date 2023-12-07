// const array = [10, 20, 30]

// const result = array.filter(e => e>10) //คัดเฉพาะตัวที่ผ่านเงื่อนไข


const array = [
    {id: 1, name:'Mina', color: 'Brown', breed:'Pom'},
    {id: 2, name:'Mona', color: 'White', breed:'Pom'},
    {id: 3, name:'Miya', color: 'Black', breed:'Pom'},
]
const result = array.filter(e => e.id >= 2) //คัดเฉพาะตัวที่ผ่านเงื่อนไข

console.warn(result)
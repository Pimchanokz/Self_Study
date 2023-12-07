// const array = [1,4,-9,8,7,11,-12,0,10,11,8]

// const test = array.every(e => e>-100)
// console.warn(test)

const array = [
    {id: 1, name:'Mina', color: 'Brown', breed:'Pom'},
    {id: 2, name:'Mona', color: 'White', breed:'Pom'},
]

const test = array.every(e => e.breed === 'Pom')
console.warn(test)
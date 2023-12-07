const pets = [
    {name: 'Luna'},
    {name: 'Lola'}
]

const result = pets.map(e => e.name)
console.warn(result)


const fruits = ['banana', 'apple', 'mango']

const result2 = fruits.map((e, i) => { //map ส่ง element เลข ให้เราได้
    return `Day ${i+1}, eat ${e}`
})
console.warn(result2)
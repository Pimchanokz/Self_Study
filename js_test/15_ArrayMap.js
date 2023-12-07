const array = [1, 2, 3]

// const result = []
// array.forEach(e => {
//     const a = e*2
//     result.push(a)
// })


// const result = array.map(e => { //mapไม่mutate array เดิมนอกลูป
//     e*2
//     return a
// })

const result = array.map(e => e*2)

console.warn(array)
console.warn(result)
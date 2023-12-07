// //ver1
// function howareyou(mood){
//     if(!mood){
//        mood = 'happy' 
//     }
//     console.warn(mood)
// }

// howareyou()

// //ver2
// function howareyou(mood = 'happy'){ //add default
//     console.warn(mood)
// }

// howareyou()

//add default to function 1
// function createUser(person){
//     const name = person.name || 'nana'
//     const age = person.age || 2
//     return `${name} (age: ${age})`
// }

// console.warn(createUser({age: 10, name: 'Lucy'}))

// //add default to function 2
// function createUser({age = 2, name = 'nana'}= {}){
//     return `${name} (age: ${age})`
// }

// // console.warn(createUser({}))

// function profilePage(
//     {favColor} = {favColor: 'pink'},
//     [name,age] = ['Bunny', 24]
// ){
//     console.warn(
//         `Name = ${name}, age = ${age}, color = ${favColor}!`
//     )
// }

// profilePage({favColor:'blue'}, ['Ed', 30])
// profilePage() //เรียกค่า default
// // profilePage({},[]) //match แต่ไม่มีค่า object = error

//edit
function profilePage(
    {favColor='pink'} = {},
    [name='Bunny',age=24] = []
){
    console.warn(
        `Name = ${name}, age = ${age}, color = ${favColor}!`
    )
}
profilePage({}, [])
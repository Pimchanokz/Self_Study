//Promise async = value, future value
const a ='a'

// const ap = new Promise((resolve,) => { //promise const a
//     setTimeout(() => {
//         resolve('a')
//     },2000)
// })
// console.warn(a)
// console.warn(ap)

// ap.then(e => { //then = เปิดเอาค่าใน promise
//     console.warn(e)
//     return `my value is: ${e}`
// })
// .then(e => {
//     console.warn(e)
// })

//ดีกว่า callback ตรงที่มันไม่ซ้อนไปเรื่อยๆ

// //reject
// const ap = new Promise((resolve, reject) => { //promise const a
//     setTimeout(() => {
//         reject('a')
//     },2000)
// })
// console.warn(a)
// console.warn(ap)

// ap.then(e => { //then = เปิดเอาค่าใน promise
//     console.warn(e)
//     return `my value is: ${e}`
// })
// .then(e => {
//     console.warn(e)
// })
// .catch(e => {
//     console.error(e)
// })  //handler error

//callback losdnews
function loadNews(cb){
    setTimeout(() => {
        cb([
            {id: 1, title: 'a'},
            {id: 2, title: 'b'},
            {id: 3, title: 'c'},
            {id: 4, title: 'd'},
            {id: 5, title: 'e'},
            {id: 6, title: 'f'},
            {id: 7, title: 'g'},
            {id: 8, title: 'h'},
        ])
    },1000)
}

//Promise = value, future value.
function loadNewsP(){
    const news = new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {id: 1, title: 'a'},
                {id: 2, title: 'b'},
                {id: 3, title: 'c'},
                {id: 4, title: 'd'},
                {id: 5, title: 'e'},
                {id: 6, title: 'f'},
                {id: 7, title: 'g'},
                {id: 8, title: 'h'},
            ])
        },1000)
    })
    return news
}

const newsP = loadNewsP()
    .then(validateNewsP)
    .then(sortByLastestP)
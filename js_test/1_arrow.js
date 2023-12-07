// var greet = function(name, message){
//     return message + name
// }

// var arrowGreet = (name, message) => {
//     return message + name
// }

// var arrowGreet2 = (name, message) => message + name


// //ver1
// var person = {
//     name: 'Luna',

//     handleMessage: function(message, handler){
//         handler(message)
//     },

//     greet: function(){
//         var _this = this //ต้องใส่ในjs
//         this.handleMessage('Hi, ', function(message){
//             console.warn(message + _this.name) //จะได้เรียกตัวแปร name ได้
//         })
//     }
// }

// //ver2
// var person = {
//     name: 'Luna',

//     handleMessage: function(message, handler){
//         handler(message)
//     },

//     greet: function(){
//         this.handleMessage('Hi, ', (message) => {
//             console.warn(message + this.name) //ถ้าเป็น arrow func ใช้ this ได้เลย
//         })
//     }
// }

//ver3
var person = {
    name: 'Luna',

    handleMessage: function(message, handler){
        handler(message)
    },

    greet: function(){
        this.handleMessage('Hi, ', message => console.warn(message + this.name))
    }
}

person.greet()



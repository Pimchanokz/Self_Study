const a = doA()
const b = doB()

//Sync = ทำตามลำดับบนลงล่าง
//Async = ทำงานไม่ต้องรอกัน

$(document).ready(function(){ //callback = ทำงานเสดละเรียกนะ

})

//callback 
button.addEventListener('click', handleClick)

setTimeout(() => {},1000) //timeout 1 second

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
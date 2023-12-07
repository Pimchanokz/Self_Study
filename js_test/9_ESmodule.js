import log from './9_2log.js' //ไปดึง module log
// import {add,minus} from './9_3math.js'

function add1(a){
    return add(a, 1)
}

log(add1(8))
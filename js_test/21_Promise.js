const box = Promise.resolve('error top')
box
    .then(e => {
        console.warn(e)
        throw 'error'
    }, e => {
        console.warn('2nd handle')
    })
    .catch(e => console.error(e))
    .then(e => console.warn('final')) //ถ้า handle error แล้วก็จะมองหส then ต่อไป

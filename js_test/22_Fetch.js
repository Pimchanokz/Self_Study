const u = 'https://www.youtube.com/watch?v=FMEEr-cuiT4'

fetch(u) //request to server รับ url return promise
    .then(e => {
        console.warn(e)
        return e.json() //???
    })
    .catch(e =>  {
        console.error(e)
    })

    //งง
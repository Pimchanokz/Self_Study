const express = require('express')
const bodyParser = require('body-parser')


const app = express()
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', (req, res) => {
    res.send('Hello root')
})

app.get('/about', (req, res) => {
    res.send('About us page')
})

app.get('/product', (req, res) => {
    res.send('Product')
})

app.get('/product/:productID', (req, res) => {
    console.warn(req.params)
    res.send(`Product Page ${req.params.productID}`)
})

app.post('/product', (req, res) => {
    console.warn(req.body)
})

app.listen(3000, () => {
    console.warn('server listen at 3000. ready')
})
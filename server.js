const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000

//express setup
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))

//templates
app.set('views', path.join(__dirname, 'public'))
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
    const data = { vehicle:null, submitted:false }
    response.render('index', data)
})

app.get('/calculate', (request, response) => {
    const { getDiscount } = require('./app/check-discount')
    discountValue = getDiscount(request.query.plate)

    const data = {
        vehicle: discountValue,
        submitted: true
    }

    response.render('index', data)
})

app.listen(PORT, () => { 
    console.log('Server is running on port ' + PORT)
})
const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))

app.set('views', path.join(__dirname, 'public'))
app.set('view engine', 'ejs')


app.get('/', (request, response) => {
    const data = { plate:null, submitted:false }
    response.render('index', data)
})

app.get('/status', (request, response) => {
    const { getPlates } = require('./app/vehiclePlate')
    plateNumber = getPlates(request.query.vehiclePlate)
    
    const data = {
        plate: plateNumber,
        submitted: true
    }

    response.render('index', data)
})

app.listen(PORT, () => { 
    console.log('Server is running on port ' + PORT)
})
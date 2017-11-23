const multas = require('./db/trafficTicketsDB.json')

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
    const data = { suaMulta:null, submitted:false }
    response.render('index', data)
})

app.get('/multasDeTransito', (request, response) => {
    const placa = request.query.placa;

    for (var multa of multas) {
        if (multa.vehiclePlate == placa) {
            const valor = multa.value
            const calculo = valor-(valor * 0.1);
            /*Converte os valores em rais*/
            const valorDesconto = calculo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
            const valorSemDesconto = valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

            const dbDaMultas = 
                {
                    vehiclePlate: multa.vehiclePlate,
                    violation: multa.violation,
                    points: multa.points,
                    value: valorSemDesconto,
                    desconto: valorDesconto
                };
                
                const data = {
                    suaMulta: dbDaMultas,
                    submitted: true
                }

                response.render('index', data)
                return ;
        }
    }
    const data = {
        suaMulta: false,
        submitted: false
    }
    response.render('index', data)
})

app.listen(PORT, () => { 
    console.log('Server is running on port ' + PORT)
})
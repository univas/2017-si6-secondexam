 const veiculos = require('./db/trafficTicketsDB.json')
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
     const data = { veiculo:null, submitted:false }
     response.render('index', data)
 })
 app.get('/veiculos', (request, response) => {
     const placa = request.query.placa;
    for (var multa of veiculos) {
       if (multa.vehiclePlate == placa) {
             const valormulta = multa.value
             const calculo = valormulta-(valormulta * 0.1);
             const valorComDesconto = calculo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
             const valorSemDesconto = valormulta.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
             const Multas = {
                     placaVeiculo: multa.vehiclePlate,
                     violacao: multa.violation,
                     pontos: multa.points,
                     valor: valorSemDesconto,
                     comDesconto: valorComDesconto
                 };
                 const data = {
                     veiculo: Multas,
                     submitted: true
                 }
                 response.render('index', data)
                 return ;
         }
     }
     const data = {
         veiculo: false,
         submitted: false
     }
     response.render('index', data)
 })
 app.listen(PORT, () => { 
     console.log('Server is running on port ' + PORT)
 }) 





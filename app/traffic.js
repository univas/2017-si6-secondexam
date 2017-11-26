var platesDB = require('../db/trafficTicketsDB.json')

module.exports = {

    getStatus (plate) {

        let status = statusDB.find(status => status.vehiclePlate == plate)
        
        if (status) {
            vehiclePlate = placa.vehiclePlate
            violation = placa.violation
            points = placa.points
            value = placa.value
            discont = placa.value/10*9
            console.log(value)
        }
        return status
    
    }
}
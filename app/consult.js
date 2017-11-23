const statusDB = require('../db/trafficTicketsDB.json')

module.exports = {
    getStatus (placa) {
        let status = statusDB.find(status => status.vehiclePlate == placa)
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
const statusDB = require('../db/trafficTicketsDB.json')

module.exports = {
    getStatus (placa) {
        let status = statusDB.find(status => status.vehiclePlate == placa)
        if (status) {
            vehiclePlate = placa.vehiclePlate
            violation = placa.violation
            points = placa.points
            value = placa.value
        }
        return status
    }
}
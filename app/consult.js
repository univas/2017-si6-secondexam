const statusDB = require('../db/trafficTicketsDB.json')

module.exports = {
    getStatus (plate) {
    let status = statusDB.find(status => status.vehiclePlate == plate)
    if (status) {
        vehiclePlate = plate.vehiclePlate
        violation = plate.violation
        points = plate.points
        value = plate.value
        discont = plate.value/10*9
        console.log(value)
    }
    return status
    }
}
const plates = require('../db/trafficTicketsDB.json')

module.exports = {
    getPlates (platee) {
        let plate = plates.find(plate => plate.vehiclePlate == platee)
        if (plate) {
            vehiclePlate = plate.vehiclePlate
            violation = plate.violation
            points = plate.points
            value = plate.value
            discountValue = plate.value/10*9
        }
        return plate
    }
}
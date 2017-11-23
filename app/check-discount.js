const vehicles = require('../db/trafficTicketsDB.json')
const DISCOUNT = 0.10

module.exports = {
    getDiscount(plate){
        let vehicle = vehicles.find(vehicle => vehicle.vehiclePlate == plate)
        if(vehicle) {
            let discountValue = (vehicle.value - (vehicle.value * DISCOUNT))
            vehicle.discountValue = discountValue.toFixed(2)
        }
        return vehicle
    }
}
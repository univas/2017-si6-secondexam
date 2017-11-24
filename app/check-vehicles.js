const vehicles = require('../db/trafficTicketsDB.json')

function getvehiclePlate() {
    return process.argv[2] || null
}

function byPlate(vehicle) {
    return vehicle.vehiclePlate == getvehiclePlate()
}

const vehicle = vehicles.find(byPlate)

module.exports = {
       getVehicleStatus (plate) {
        let vehicle = vehicles.find(vehicle => vehicle.vehiclePlate == vehiclePlate)

         if(vehicle) {

            vehicle.discont = vehicle.value -= (plate.value*10/100)
         }
        return vehicle
    }
    
}
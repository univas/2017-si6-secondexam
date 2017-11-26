const tickets = require('../db/trafficTicketsDB.json')

function getVehiclePlate() {
    return process.argv[2] || null
}

function byPlate(vehicle) {
    return vehicle.vehiclePlate == getVehiclePlate()
}

function getTicketDiscount(value) {
    return (value * 0.9) 
}

const ticket = tickets.find(byPlate)

module.exports = {
    getTicketStatus(vehiclePlate) {
        let ticket = tickets.find(ticket => ticket.vehiclePlate == vehiclePlate)
        if(ticket) {
            ticket.updateValue = getTicketDiscount(ticket.value).toFixed(2)
        }
        return ticket
    }
}
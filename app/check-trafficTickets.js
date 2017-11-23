const tickets = require('../db/trafficTicketsDB.json')

function getVehiclePlate() {
    return process.argv[2] || null
}

function byPlate(vehicle) {
    return vehicle.vehiclePlate == getVehiclePlate()
}

function getTicketDiscount(value) {
    return value * (1 - 0.1)
}

const ticket = tickets.find(byPlate)

if (ticket) {
    console.log('VehiclePlate: ' + ticket.vehiclePlate)
    console.log('Violation: ' + ticket.violation)
    console.log('Points: ' + ticket.points)
    console.log('Value: ' + ticket.value)
    console.log("Valu with discount: " + getTicketDiscount(ticket.value).toFixed(2))
}
else {
    console.log('Ticket not found!')
}

// module.exports = {
//     getStudentStatus(id) {
//         let student = vehicles.find(student => student.id == id)
//         if(student) {
//             const average = getAverage(student.grades)
//             student.average = average
//             student.status = getStatus(average)
//         }
//         return student
//     }
// }
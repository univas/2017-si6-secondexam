function printName(plate) {
    console.log(plate.vehiclePlate)
    console.log(plate.violation)
    console.log(plate.points)
    console.log(plate.value)
}

function fancyPrint(plate) {
    console.log("Vehicle Plate: " + plate.vehiclePlate)
    console.log("Violation:     " + plate.violation)
    console.log("Points:        " + plate.points)
    console.log("Value:         " + plate.value)
}

module.exports = {
    printName,
    fancyPrint
}
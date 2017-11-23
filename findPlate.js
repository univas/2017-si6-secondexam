const plates = require('./db/trafficTicketsDB.json')
const { printName, fancyPrint } = require('./printer-module')

const plateId = process.argv[2]

function findPlateById (plateId) {

    return function callback(plate, index){

        return plateId == plate.vehiclePlate
    }
}
const plate = plates.find(findPlateById(plateId))

const platesFound = plates.filter(findPlateById(plateId))

if(platesFound.length > 0){
const value2 = plate.value/10*9 // calculando os 10%
var value3 = Math.round(value2).toFixed(2); //limitando apenas à 2 numeros após a virgula
}

platesFound.forEach(fancyPrint)

if(platesFound.length > 0){
console.log("Valor -10%:    " + value3)
}

if(platesFound.length === 0)
    console.log('Plate not found!')




// let platePrint = plate ? plate.vehiclePlate : 'plate not found'
// let vioaltionPrint = plate ? plate.violation : 'plate not found'
// let pointsPrint = plate ? plate.points : 'plate not found'
// let valuePrint = plate ? plate.value : 'plate not found'

// console.log(platePrint)
// console.log(violationPrint)
// console.log(pointsPrint)
// console.log(valuePrint)
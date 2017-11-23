const vehicles = require('../db/trafficTicketsDB.json')

function getVehiclePlaca(){
    return process.argv[2]
}

function Placa(vehicle){
    return vehicle.vehiclePlate == getVehiclePlaca()
}

function getValor(value) {
    return value;
}

function getValorAVista(value) {
    return value-(value*0.10);
}

function getInflacao(violation){
    return violation
}

function getPontos(points){
    return points
}

const vehicle = vehicles.find(Placa)

module.exports = {
    getVehicleInformations(vehiclePlate){
        let vehicle = vehicles.find (vehicle => vehicle.vehiclePlate == vehiclePlate)
        return vehicle
    }
}


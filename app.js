const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {

    try {
        let coords = await lugar.getLugarLatLng(argv.direccion);

        let temperatura = await clima.getClima(coords.lat, coords.lng);

        return `El clima en ${coords.direccion}, es de ${temperatura} c°`;

    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}.`
    }
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));

/*lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(e => console.log(e));

clima.getClima(21.5041651, -104.8945887)
    .then(temp => {
        console.log(temp);
    })
    .catch(e => console.log(e));*/
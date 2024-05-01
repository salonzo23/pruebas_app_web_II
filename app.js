import { fetchCities } from './funciones/funcione';
fetchCities('Tokyo')
    .then(cities => {
        console.log('Ciudades obtenidas:', cities);
    })
    .catch(error => {
        console.error('Se produjo un error:', error);
    });
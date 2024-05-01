
import { ICity } from './objetos';
export function fetchCities(cityName: string): Promise<ICity[]> {
    return fetch(`http://geodb-free-service.wirefreethought.com/v1/geo/cities?namePrefix=${cityName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al realizar la solicitud');
            }
            return response.json();
        })
        .then(data => {
            // Asumimos que la propiedad 'data' contiene la lista de ciudades
            const cities: ICity[] = data.data as ICity[];
            return cities;
        });
}

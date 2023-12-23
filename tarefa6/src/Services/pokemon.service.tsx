import { API } from './api'

export async function getPokemons(endPoint: string = '/pokemon/') {
    try {
        const response = await API.get(endPoint);
        return response;
    } catch (error) {
        throw new Error(error as string);
    }
}

export async function getPokemonDetail(endPoint: string) {
    try {
        const response = await API.get(endPoint);
        return response;
    } catch (error) {
        throw new Error(error as string);
    }
}
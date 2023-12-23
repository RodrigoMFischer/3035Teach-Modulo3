import { API } from './api';

export async function getUserData(userName: string) {
    try{
        const response = await API.get(userName);
        return response;
    } catch (error) {
       return null;
    } 
}

export async function getUserRepos(userName: string) {
    try{
        const repository = `${userName}/repos`
        const response = await API.get(repository);
        return response;
    } catch (error) {
        console.log("não acessou")        
    } 
}


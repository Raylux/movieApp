import { BASE_URL, OPTIONS } from "./config.js";

export const searchPerson = async(personToSearch) => {
    const response = await fetch(BASE_URL + `search/person?query=${personToSearch}&include_adult=false&language=en-US&page=1`, OPTIONS);

    const data = await response.json();

    return data;
}
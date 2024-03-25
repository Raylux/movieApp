// import { getTrending } from "../index.js";


/**
 * createTrendingMovies()
 * 
 * @param Array dei film
 * @returns 
 */

export const createList = (listId, array) => {
    const list = document.getElementById(listId);

    array.forEach((element) => {
        const listItem = document.createElement("li");
        listItem.innerText = element.title;
        list.appendChild(listItem);
    });
}
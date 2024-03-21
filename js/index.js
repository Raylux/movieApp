import { createCardSection } from "./dom-manipulator/createCard.js";
import { printAllTrending, getTrendingMovies, createList } from "./utils/modulesHub.js";

const trendingData = getTrendingMovies()
.then((data) => {
    createCardSection("card-container", data.results);
});
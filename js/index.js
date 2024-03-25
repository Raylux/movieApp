import { createCardSection } from "./dom-manipulator/createCard.js";
import { printAllTrending, getTrending, createList } from "./utils/modulesHub.js";

const trendingData = getTrending()
.then((data) => {
    createCardSection("card-container", data.results);
});
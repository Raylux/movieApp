import { BASE_URL_IMAGES } from "../api/config.js";

export const createCard = (title, description, backdropPath) => {
    const card = document.createElement("div");
    card.classList.add("card");

    // create backdrop image of the card
    const backdrop = document.createElement("img");
    backdrop.classList.add("backdrop");
    backdrop.src = `${BASE_URL_IMAGES}w780/${backdropPath}`;
    card.appendChild(backdrop);

    //create card text container
    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");

    //create card title
    const cardTitle = document.createElement("h3");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = title;
    cardInfo.appendChild(cardTitle);

    //create card description
    const cardDescription = document.createElement("p");
    cardDescription.classList.add("card-description");
    cardDescription.innerText = truncateText(description, 200);
    cardInfo.appendChild(cardDescription);

    card.appendChild(cardInfo);

    return card;
}


export const createCardSection = (containerId, array) => {
    const cardContainer = document.getElementById(containerId);

    array.forEach((element) => {
        const title = element.title ?? element.name;
        const card = createCard(title, element.overview, element.backdrop_path);
        cardContainer.appendChild(card);
    });
}

export const truncateText = (text, limit) => {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
}
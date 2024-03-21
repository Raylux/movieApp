import { BASE_URL_IMAGES } from "../api/config.js";

export const createCard = (title, description, backdropPath) => {
    const card = document.createElement("div");
    card.classList.add("card");

    //create backdrop image of the card
    const backdrop = document.createElement("img");
    backdrop.classList.add("backdrop");
    backdrop.src = `${BASE_URL_IMAGES}w300/${backdropPath}`;
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
    cardDescription.innerText = description;
    cardInfo.appendChild(cardDescription);

    card.appendChild(cardInfo);

    return card;
}


export const createCardSection = (containerId, array) => {
    const cardContainer = document.getElementById(containerId);

    array.forEach((element) => {
        const card = createCard(element.title, element.overview, element.backdrop_path)
        cardContainer.appendChild(card);
    });
}
/**
 * Funzione che al caricamento della pagina verifichi che il titolo sia correto, in caso lo corregge
 */


export const fixTitle = () => {

    const title = document.getElementById('header');

    const titleContent = title.innerHTML;

    if(titleContent === "Movie App") return;

    title.innerHTML = "Movie App";
} 


/**
 * Funzione che al caricamento della pagina aggiunga un paragrafo col titolo del film
 */
export const addParagraph = () => {
    const title = document.getElementById('header');
    const paragraph = document.createElement('p');
    paragraph.innerHTML = "content";
    title.appendChild(paragraph);
}

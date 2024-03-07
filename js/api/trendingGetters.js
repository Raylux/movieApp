import { BASE_URL, OPTIONS } from "./config.js";

/** getTrending
 * 
 * @returns all trending content
 */
export const getTrending = async () => {
    const response = await fetch(BASE_URL +'trending/all/day?language=en-US', OPTIONS);

    const data = await response.json();

    return data;
}

/** getTrendingMovies
 * 
 * @returns trending movies 
 */
export const getTrendingMovies = async () => {
    const response = await fetch(BASE_URL +'trending/movie/day?language=en-US', OPTIONS);

    const data = await response.json();

    return data;
}


/** getTrendingTVShows
 * 
 * @returns trending TV Shows 
 */
export const getTrendingTVShows = async () => {
    const response = await fetch(BASE_URL +'trending/tv/day?language=en-US', OPTIONS);

    const data = await response.json();

    return data;
}


/** getTrendingPeople
 * 
 * @returns list of trending people 
 */
export const getTrendingPeople = async () => {
    const response = await fetch(BASE_URL +'trending/person/day?language=en-US', OPTIONS);

    const data = await response.json();

    return data;
}

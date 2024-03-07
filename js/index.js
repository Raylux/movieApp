import { getTrending, getTrendingMovies, getTrendingPeople, getTrendingTVShows } from "./api/trendingGetters.js";
import { searchPerson } from "./api/searchGetters.js";
import { printAllTrending } from "./api/printMedia.js";

const trendingData = getTrending()
    .then((data) => {
        printAllTrending(data.results);
    });


//const trendingPeopleData = getTrendingPeople();
// const trendingMoviesData = getTrendingMovies();
// const trendingTVShowsData = getTrendingTVShows();
// const personSearchData = searchPerson("clooney");

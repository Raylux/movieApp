import { getTrending, getTrendingMovies, getTrendingTVShows } from "./api/trendingGetters.js";
import { searchPerson } from "./api/searchGetters.js";

const trendingData = getTrending();
const trendingMoviesData = getTrendingMovies();
const trendingTVShowsData = getTrendingTVShows();

const personSearchData = searchPerson("clooney");

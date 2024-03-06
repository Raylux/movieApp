import { getTrending, getTrendingMovies } from "./API/trendingGetters.js";
import { prefixUrlTrending } from "./API/config.js";

const trendingData = getTrending(prefixUrlTrending);
const trendingMoviesData = getTrendingMovies(prefixUrlTrending);
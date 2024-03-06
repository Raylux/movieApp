const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTBlZTlkMGFmNGM1MWQ1MmQxNDllODE1NTFkNzVjOCIsInN1YiI6IjY1ZTg2YWY5OTYzODY0MDE2MWM4ZDlkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zk6ZRZwKu17wt5zVf6YmRGpypBPNH5Zc8QtS5c997U0'

    }
}

export const getTrending = async (prefixUrlTrending) => {
    const response = await fetch(prefixUrlTrending +'all/day?language=en-US', options);

    const data = await response.json();

    return data;
}

/** getTrendingMovies
 * 
 * 
 * @returns trending movies 
 */
export const getTrendingMovies = async (prefixUrlTrending) => {
    const response = await fetch(prefixUrlTrending +'movie/day?language=en-US', options);

    const data = await response.json();

    return data;
}


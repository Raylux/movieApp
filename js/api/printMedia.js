export const printMovieDetails = (movie) => {
    console.log(
        `Title: ${movie.title}\n` +
        `ID: ${movie.id}\n` +
        `Poster path: ${movie.poster_path}\n` +
        `Vote average: ${movie.vote_average}\n` +
        `Media type: ${movie.media_type}\n` +
        `Release date: ${movie.release_date}\n`
    );
}


export const printTvShowDetails = (tvShow) => {
    console.log(
        `Title: ${tvShow.name}\n` +
        `ID: ${tvShow.id}\n` +
        `Poster path: ${tvShow.poster_path}\n` +
        `Vote average: ${tvShow.vote_average}\n` +
        `Media type: ${tvShow.media_type}\n` +
        `First air date: ${tvShow.first_air_date}\n`
    );
}

export const printPersonDetails = (person) => {
    console.log(
        `Name: ${person.name}\n` +
        `ID: ${person.id}\n` +
        `Gender: ${(person.gender == 1) ? "Female" : "Male"}\n` +
        `Known for department: ${person.known_for_department}\n` +
        `Profile path: ${person.profile_path}\n`
    );
}


/**
 * Cycle through the array of trending medias 
 */
export const printAllTrending = (resultsArray) => {
    resultsArray.forEach((element) => {
        switch (element.media_type) {
            case "movie":
                printMovieDetails(element);
                break;
    
            case "tv":
                printTvShowDetails(element);
                break;
    
            case "person":
                printPersonDetails(element);
                break;
        }
    });
    
}
// action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITES = "ADD_FAVOURITES";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";
export const SHOW_FAVOURITES = "SHOW_FAVOURITES";

//action creaters
export function addMovies(movies) {
  return {
    type: "ADD_MOVIES",
    movies,
  };
}
export function addFavourites(movie) {
  return {
    type: "ADD_FAVOURITES",
    movie,
  };
}

export function removeFavourite(movie) {
  return {
    type: "REMOVE_FAVOURITE",
    movie,
  };
}

export function showFavourites(val) {
  return {
    type: "SHOW_FAVOURITES",
    val,
  };
}

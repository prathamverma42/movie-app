import { ADD_MOVIES, ADD_FAVOURITES, REMOVE_FAVOURITE } from "../actions/index";

const initialState = {
  list: [],
  favourites: [],
};

export default function movies(state = initialState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_FAVOURITES:
      const favourite_movie = action.movie;

      const all_movies = state.list;
      // console.log("Favorite", favourite_movie);
      // console.log("ALL movie", all_movies);
      const new_movies = all_movies.filter(
        (movie) => movie !== favourite_movie
      );
      // console.log("filtered movies", new_movies);
      return {
        // ...state,
        list: new_movies,
        favourites: [action.movie, ...state.favourites],
      };
    case REMOVE_FAVOURITE: {
      const favourite_movies = state.favourites;

      const new_movies = favourite_movies.filter(
        (movie) => movie !== action.movie
      );
      return{
        list: [action.movie,...state.list],
        favourites: new_movies
      }
    }
    default:
      return {
        ...state,
      };
  }
}

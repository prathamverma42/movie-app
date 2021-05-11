import {
  ADD_MOVIES,
  ADD_FAVOURITES,
  REMOVE_FAVOURITE,
  SHOW_FAVOURITES,
} from "../actions/index";

const initialMovieState = {
  list: [],
  favourites: [],
  showfav: false,
};

export function movies(state = initialMovieState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };

    case ADD_FAVOURITES: {
      const filtered_movies = state.list.filter(
        (movie) => movie !== action.movie
      );

      return {
        ...state,
        list: filtered_movies,
        favourites: [action.movie, ...state.favourites],
      };
    }

    case REMOVE_FAVOURITE: {
      const updated_fav_movies = state.favourites.filter(
        (movie) => movie !== action.movie
      );

      return {
        ...state,
        list: [action.movie, ...state.list],
        favourites: updated_fav_movies,
      };
    }

    case SHOW_FAVOURITES: {
      return{
        ...state,
        showfav: action.val,
      }
    }

    default:
      return {
        ...state,
      };
  }
}


const intitalSearchState = {
  result: {}
}

export function search(state=intitalSearchState,action){
  return state
}


const initialRootReducer = {
  movies : initialMovieState,
  search : intitalSearchState
}

export default function rootReducer(state = initialRootReducer, action) {
    return {
      movies: movies(state.movies,action),
      search: search(state.search,action),
    }  
}
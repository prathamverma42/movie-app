import { ADD_MOVIES } from "../actions/index";

const initialState = {
  list: [],
  favourite: []
}

export default function movies(state = initialState, action) {
  if (action.type === ADD_MOVIES) {
    return {
      ...state,
      list: action.movies
    };
  }
  return state;
}

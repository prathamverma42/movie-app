import React from "react";
import { data } from "../data";

import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import { addMovies, showFavourites } from "../actions/index";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;

    store.subscribe(() => {
      console.log("UPDATED");
      this.forceUpdate();
      console.log(store.getState());
    });

    store.dispatch(addMovies(data));
  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props.store.getState();
    const { favourites } = movies;
    const index = favourites.indexOf(movie);

    if (index !== -1) {
      return true;
    }

    return false;
  };

  show_fav_all_movies = (val) => {
    this.props.store.dispatch(showFavourites(val));
  };

  render() {
    const { movies } = this.props.store.getState();
    const { list, favourites, showfav } = movies;
    const displayMovies = showfav ? favourites : list;
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showfav ? "" : "active-tabs"}`}
              onClick={() => this.show_fav_all_movies(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showfav ? "active-tabs" : ""}`}
              onClick={() => this.show_fav_all_movies(true)}
            >
              Favourites
            </div>
          </div>
          <div className="list">
            {displayMovies.length === 0 ? (
              <p>No movies to display</p>
            ) : (
              displayMovies.map((movie, index) => {
                return (
                  <MovieCard
                    movie={movie}
                    key={`movies-${index}`}
                    dispatch={this.props.store.dispatch}
                    isMovieFavourite={this.isMovieFavourite(movie)}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React from "react";
import { data } from "../data";

import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import { addMovies } from "../actions/index";

class App extends React.Component {
  // const [show, setShow] = useState('movies');
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log("UPDATED");
      this.forceUpdate();
      console.log(store.getState());
    });
    store.dispatch(addMovies(data));
  }

  show = true;

  isMovieFavourite = (movie) => {
    const { favourites } = this.props.store.getState();
    // console.log()
    const index = favourites.indexOf(movie);
    // console.log("hello");
    if (index !== -1) {
      return true;
    }
    return false;
  };

  UnFavouriteMovie = () => {};
  showfav = () => {
    console.log("nsdslgng");
    this.show = false;
    console.log(this.show);
  };

  render() {
    const { list, favourites } = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab" onChangeTab={this.showfav}>
              Favourites
            </div>
          </div>
          <div className="list">
            <h1>MOVIES</h1>
            {list.map((movie, index) => {
              return (
                <MovieCard
                  movie={movie}
                  key={`movies-${index}`}
                  dispatch={this.props.store.dispatch}
                  isMovieFavourite={this.isMovieFavourite(movie)}
                />
              );
            })}
            <h1>Favourites</h1>
            {favourites.map((movie, index) => {
              return (
                <MovieCard
                  movie={movie}
                  key={`movies-${index}`}
                  dispatch={this.props.store.dispatch}
                  isMovieFavourite={this.isMovieFavourite(movie)}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

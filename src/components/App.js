import React from "react";
import { data } from "../data";

import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import { addMovies } from "../actions/index";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;

    store.subscribe(() => {
      console.log("UPDATED");
      this.forceUpdate();
    });

    console.log(store.getState());
    //make api call/
    // dispatch that data received from DB into our STORE
    store.dispatch(addMovies(data));
    console.log(store.getState());
  }

  render() {
    const {list} = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {list.map((movie, index) => {
              return <MovieCard movie={movie} key={`movies-${index}`} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

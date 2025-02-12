import "../css/Favorites.css";
import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../contexts/MovieContext";

const Favorites = () => {
  const { favorites } = useMovieContext();

  if (favorites && favorites.length > 0) {
    console.log(favorites);
    return (
      <div className="favorites">
        <h2>Movies to watch later</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No movies to watch later 😴</h2>
    </div>
  );
};

export default Favorites;

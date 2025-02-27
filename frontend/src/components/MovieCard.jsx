import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

const MovieCard = ({ movie }) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();

  const favorite = isFavorite(movie.id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  };

  const maxPopularity = 2500;
  const normalizedPopularity = Math.min(
    (movie.popularity / maxPopularity) * 100,
    100
  );

  const getProgressClass = (value) => {
    if (value > 95) return "extreme";
    if (value >= 80) return "very-high";
    if (value >= 60) return "high";
    if (value >= 40) return "medium";
    return "low";
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={handleFavoriteClick}
          >
            ♡
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date.split("-")[0]}</p>
        <div className="popularity-container">
          <p>Popularity</p>
          <div className="progress-bar">
            <div
              className={`progress-fill ${getProgressClass(
                normalizedPopularity
              )}`}
              style={{ width: `${normalizedPopularity}%` }}
            ></div>
          </div>
          <span>
            {normalizedPopularity > 95 ? (
              <>🔥 {Math.round(movie.popularity)}</>
            ) : normalizedPopularity < 20 ? (
              <>😴 {Math.round(movie.popularity)}</>
            ) : (
              Math.round(movie.popularity)
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

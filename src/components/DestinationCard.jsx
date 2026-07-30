import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorite } from "../features/favoriteSlice";

function DestinationCard({ destination, onDelete }) {
  const dispatch = useDispatch();

  function handleFavorite() {
    dispatch(addFavorite(destination));
  }

  return (
    <div className="card">
      <img
        src={destination.image}
        alt={destination.name}
      />

      <h2>{destination.name}</h2>

      <p>{destination.country}</p>

      {destination.category && <p>{destination.category}</p>}
      {destination.rating && <p>⭐ {destination.rating}</p>}

      <button
        className="favorite-btn"
        onClick={handleFavorite}
      >
        ❤ Add To Favorites
      </button>

      <div className="card-actions">
        {destination.id && (
          <>
            <Link
              className="view-btn"
              to={`/destinations/${destination.id}`}
            >
              View
            </Link>

            <Link
              className="edit-btn"
              to={`/edit-destination/${destination.id}`}
            >
              Edit
            </Link>
          </>
        )}

        {onDelete && (
          <button
            className="delete-btn"
            onClick={() => onDelete(destination.id)}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default DestinationCard;

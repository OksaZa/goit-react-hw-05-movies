import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';
import { PLACEHOLDER } from 'utils/placehold';

const MoviesList = ({ films }) => {
  const location = useLocation();
  return (
    <ul className={css.moviesGalleryContainer}>
      {films.map(({ id, title, poster_path }) => (
        <li className={css.movieCard} key={id}>
          <Link
            className={css.movieCardLink}
            to={`/movies/${id}`}
            state={{ from: location }}
          >
            <img
              className={css.cardLinkMedia}
              src={
                poster_path
                  ? `http://image.tmdb.org/t/p/w342${poster_path}`
                  : PLACEHOLDER + '?text=' + title
              }
              alt={title}
              width="342"
              height="520"
            />
            <h3 className={css.cardLinkTitle}>{title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;

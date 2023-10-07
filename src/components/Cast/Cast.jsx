import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import { fetchMovieCast, onFetchError } from 'services/fetch';
import { PLACEHOLDERINFO } from 'utils/placehold';
const endPoint = '/movie';

const Cast = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    fetchMovieCast(endPoint, movieId)
      .then(data => {
        setCast(data.cast);
      })
      .catch(onFetchError)
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
      <h3 className={css.castTitle}>Cast</h3>
      {loading && <Loader />}
      {cast.length !== 0 ? (
        <ul className={css.castList}>
          {cast.map(({ id, name, character, profile_path }) => (
            <li className={css.castLink} key={id}>
              <img
                src={
                  profile_path
                    ? `http://image.tmdb.org/t/p/w185${profile_path}`
                    : PLACEHOLDERINFO + '?text= ' + name
                }
                alt={name}
                width="185"
                height="150"
              />
              <b>{name}</b>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry! We have no information about the cast</p>
      )}
    </>
  );
};
export default Cast;

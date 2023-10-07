import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';
import { fetchMovieReviews, onFetchError } from 'services/fetch';

const endPoint = '/movie';

const Reviews = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    fetchMovieReviews(endPoint, movieId)
      .then(data => {
        setReviews(data.results);
      })
      .catch(onFetchError)
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
      <h3 className={css.rewiewsTitle}>Reviews</h3>
      {loading && <Loader />}
      {reviews.length !== 0 ? (
        <ul className={css.reviewsList}>
          {reviews.map(({ id, author, content }) => (
            <li className={css.reviewsLink} key={id}>
              <p>
                <b>Author:</b> {author}
              </p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry! We don't have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;

import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-info.module.css";

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({id}: {id: string}) {
    const movie = await getMovie(id);
    return (
    <section className={styles.container}>   
      <img src={movie.poster_path} className={styles.poster} alt={movie.title}/>
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <div className={styles.ratingWrapper}>
            <span className={styles.rating}>⭐ {movie.vote_average.toFixed(1)}</span>
        </div>
        <p className={styles.overview}>{movie.overview}</p>
        <a href={movie.homepage} target="_blank" className={styles.homepage} rel="noreferrer">
          Visit Homepage &rarr;
        </a>
      </div>
    </section>
    );
}
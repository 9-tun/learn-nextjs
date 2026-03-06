import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-similar.module.css";
    
async function getMovieSimilar(id: string) {
    const response = await fetch(`${API_URL}/${id}/similar`);
    return response.json();
}

export default async function MovieSimilar({id}: {id: string}) {
    const similar = await getMovieSimilar(id);
    //return <h1>{JSON.stringify(similar)}</h1>;
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Similar Movies</h2>
            <div className={styles.grid}>
                {similar.slice(0, 10).map((movie) => (
                    <div key={movie.id} className={styles.movieItem}>
                        <img 
                            src={movie.poster_path} 
                            alt={movie.title}
                            className={styles.posterImage}
                        />
                        <p className={styles.name}>{movie.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
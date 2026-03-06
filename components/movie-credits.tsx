import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-credits.module.css";

async function getMovieCredits(id: string) {
    const response = await fetch(`${API_URL}/${id}/credits`);
    return response.json();
}

export default async function MovieCredits({id}: {id: string}) {
    const credits = await getMovieCredits(id);
    
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Cast</h2>
            <div className={styles.grid}>
                {credits.slice(0, 20).map((credit) => (
                    <div key={credit.id} className={styles.creditItem}>
                        <img 
                            src={credit.profile_path || "/placeholder-profile.png"} 
                            alt={credit.name}
                            className={styles.profileImage}
                        />
                        <p className={styles.name}>{credit.name}</p>
                        <p className={styles.character}>{credit.character}</p>
                    </div>
                ))}
            </div>  
        </div>
    );
}
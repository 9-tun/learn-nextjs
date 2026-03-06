import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-providers.module.css";

async function getMovieProviders(id: string) {
    const response = await fetch(`${API_URL}/${id}/providers`);
    return response.json();
}

export default async function MovieProviders({id}: {id: string}) {
    const providers = await getMovieProviders(id);
    const krProviders = providers.KR?.flatrate || [];

    if (krProviders.length === 0) return null;

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Where to Watch</h2>
            <div className={styles.grid}>
                {krProviders.map((provider) => (
                    <div key={provider.provider_id} className={styles.providerItem}>
                        <img 
                            src={provider.logo_path.startsWith("http") ? provider.logo_path : `https://image.tmdb.org/t/p/original${provider.logo_path}`} 
                            alt={provider.provider_name}
                            className={styles.logoImage}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
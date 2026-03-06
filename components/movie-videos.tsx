import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-videos.module.css";

async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({id}: {id: string}) {
    const videos = await getVideos(id);
    // Limit to top 6 videos for better performance and layout
    const displayVideos = videos.slice(0, 6);

    if (displayVideos.length === 0) return null;

    return (
      <section className={styles.container}>
        <h2 className={styles.title}>Trailers & Clips</h2>
        <div className={styles.grid}>
          {displayVideos.map((video) => (
            <div key={video.id} className={styles.videoWrapper}>
              <iframe
                src={`https://www.youtube.com/embed/${video.key}`}
                title={video.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <p className={styles.videoTitle}>{video.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
}
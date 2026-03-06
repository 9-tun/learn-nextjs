import styles from "../../styles/about-us.module.css";
import Link from "next/link";

export const metadata = {
  title: "About Us | Next Cinema",
  description: "Learn more about Next Cinema and our mission to provide the best movie discovery experience.",
};

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.heroTitle}>Next Cinema</h1>
        <p className={styles.heroSubtitle}>
          Discover your next favorite movie with the most advanced movie portal built on Next.js.
        </p>
      </header>

      <main>
        <section className={styles.section}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              <span>🎬</span> Our Story
            </h2>
            <p className={styles.cardContent}>
              Next Cinema started with a simple idea: movie discovery should be as exciting as the movies themselves. 
              We've built a platform that combines lightning-fast performance with a beautiful, cinematic interface.
            </p>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              <span>🚀</span> Our Mission
            </h2>
            <p className={styles.cardContent}>
              Our mission is to empower movie lovers to explore the vast world of cinema through data, visual beauty, 
              and seamless interaction. We bring you the latest trailers, cast information, and recommendations in one place.
            </p>
          </div>
        </section>

        <section className={styles.cta}>
          <h2>Ready to explore?</h2>
          <Link href="/" className={styles.ctaButton}>
            Browse Movies Now
          </Link>
        </section>
      </main>
    </div>
  );
}

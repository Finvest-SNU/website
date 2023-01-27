import styles from './banner.module.css';

export default function Banner() {
    return (
        <section id="banner" className={`d-flex flex-column justify-content-center align-items-center ${styles.banner}`}>
            <h1 className={styles.heading1} data-aos="fade-down">Something big is coming</h1>
            <h1 className={styles.heading2} data-aos="fade-up">stay tuned</h1>
        </section>
    );
}
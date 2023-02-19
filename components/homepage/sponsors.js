import styles from './sponsors.module.css';
import SponsorsImg from './../../assets/img/homepage/sponsors.png';

export default function Sponsors() {
    return (
        <section id="sponsors">
            <div className="container text-center">
                <h1 className={styles.h1}>Our Sponsors</h1>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <img src={SponsorsImg.src} alt="" className={`img-fluid ${styles.sponsorsImg}`} />
                    </div>
                </div>
            </div>
        </section>
    );
}
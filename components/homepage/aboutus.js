import Img from './../../assets/img/homepage/aboutus.png';
import styles from './aboutus.module.css';

export default function AboutUs() {
    return (
        <section id="about">
            <div className="container text-center">
                <h3 className={styles.h3}>About Us</h3>
                <h1 className={styles.h1}>Making Interests Interesting</h1>
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-6">
                        <h5 className={styles.h5}>A highly-curated platform for creating, collecting and trading unique NFTs. Trade with confidence on the world’s fastest and most secure crypto exchange</h5>
                        <img src={Img.src} className="img-fluid" alt="About Us Image" />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="btn-group mb-4">
                            <button type="button" className={`btn btn-light ${styles.btn}`}>Stock Market</button>
                            <button type="button" className={`btn btn-light ${styles.btn}`}>Personal Finance</button>
                            <button type="button" className={`btn btn-light ${styles.btn}`}>Taxes</button>
                        </div>
                        <h5 className={styles.h5}>A highly-curated platform for creating, collecting and trading unique NFTs. Trade with confidence on the world’s fastest and most secure crypto exchange</h5>
                    </div>
                </div>
            </div>
    </section>
    );
}
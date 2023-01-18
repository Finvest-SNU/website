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
                        <img src={Img.src} className={`img-fluid ${styles.img}`} alt="About Us Image" />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-8">
                        {/* <div className="btn-group mb-4"> */}
                        <div className="row mb-4 justify-content-center">
                            <div className="col-12 col-sm-4 mb-2">
                                <button type="button" className={`btn btn-light ${styles.btn}`}>Stock Market</button>
                            </div>
                            <div className="col-12 col-sm-4 mb-2">
                                <button type="button" className={`btn btn-light ${styles.btn} ${styles.btn_active}`}>Personal Finance</button>
                            </div>
                            <div className="col-12 col-sm-4">
                                <button type="button" className={`btn btn-light ${styles.btn}`}>Taxes</button>
                            </div>
                        </div>
                        <h5 className={styles.h5}>A highly-curated platform for creating, collecting and trading unique NFTs. Trade with confidence on the world’s fastest and most secure crypto exchange</h5>
                    </div>
                </div>
            </div>
    </section>
    );
}
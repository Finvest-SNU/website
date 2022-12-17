import styles from './roadmap.module.css';
import MoneyImg from './../../assets/img/homepage/roadmap/money-emoji.png';
import GroupImg from './../../assets/img/homepage/roadmap/group.png';

export default function Roadmap() {
    return (
        <section id="roadmap">
            <div className={`container text-center ${styles.roadmap}`}>
                <img src={GroupImg.src} className={`img-fluid ${styles.groupImg}`} alt="" />
                <div className={`col-lg-12 ${styles.content}`}>
                    <img src={MoneyImg.src} className="img-fluid" alt="" />
                    <h3 className={styles.h3}>Be self sufficient</h3>
                    <div>
                        <h1 className={styles.h1}>Stock Market</h1>
                        <h1 className={`${styles.h1} ${styles.roadmapText}`}>Roadmap</h1>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-6 mt-4">
                                <button type="button" className={`btn btn-light ${styles.btn} ${styles.btn_active}`}>Download</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
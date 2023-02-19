import styles from './banner.module.css';
import Img from './../../assets/img/homepage/banner.png';
import MobileImg from './../../assets/img/homepage/banner_mobile.png';

export default function Banner() {
    return (
        <section id="banner" className={`d-flex flex-column justify-content-center align-items-center ${styles.banner}`}>
            <img src={Img.src} className={`img-fluid ${styles.bannerImg}`} alt="Banner" />
            <img src={MobileImg.src} className={`img-fluid ${styles.mobileImg}`} alt="Banner" />
        </section>
    );
}
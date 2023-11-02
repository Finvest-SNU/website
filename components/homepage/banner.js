import styles from './banner.module.css';
import Img from './../../assets/img/homepage/banner.png';
import MobileImg from './../../assets/img/homepage/banner_mobile.png';

export default function Banner() {
    return (
        
        <section id="banner" className={`d-flex flex-column justify-content-center align-items-center ${styles.banner}`}>
            <img src={Img.src} className={`${styles.bannerImg}`} id="bannerimg" alt="Banner" />
            <img src={MobileImg.src} className={`${styles.mobileImg}`} alt="Banner" />
        </section>
    );
}
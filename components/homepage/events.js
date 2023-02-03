import styles from './events.module.css';
import PFGImg from './../../assets/img/homepage/events/personal_finance_guide.png';
import EventsImg from './../../assets/img/homepage/events/events.png';
import InstaIcon from './../../assets/img/homepage/events/instagram.png';
import BisleriImg from './../../assets/img/homepage/events/bisleri.png';
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

export default function Events() {
    return (
        <section id="events">
            <div className="container text-center">
                <div className={`row`}>
                    <div className={`col-lg-5 col-md-5 ${styles.pfg}`}>
                        <div className={`col-5 ${styles.pfg_text}`}>
                            <h1>Personal Finance Guide</h1>
                        </div>
                        <img src={PFGImg.src} className={`img-fluid ${styles.PFGImg}`} alt="Personal Finance Guide" />
                        <button type="button" className={`${styles.btn} ${styles.pfg_btn}`}>Download</button>
                    </div>
                    <div className={`col-lg-7 col-md-7 text-center ${styles.events_section} mt-2 mt-sm-0`}>
                        <img src={EventsImg.src} className={`img-fluid ${styles.eventsImg}`} alt="Events" />
                        <button type="button" className={`btn ${styles.btn} ${styles.events_btn}`}>Checkout</button>
                    </div>
                </div>
                <div className={`row mt-sm-4 mt-2`}>
                    <div className={`d-flex align-items-center justify-content-start justify-content-md-center text-start col-lg-3 col-md-5 ${styles.insta_container}`}>
                        <div className={`ml-3 pt-4 pb-4 col-9 col-md-6`}>
                            <img src={InstaIcon.src} className={`img-fluid ${styles.insta_icon}`} alt="Instagram" />
                            <h1 className={styles.insta_text}>Follow us for<br/>updates</h1>
                            <button type="button" className={`btn ${styles.btn} ${styles.insta_btn}`}>Follow us</button>
                        </div>
                    </div>
                    
                    <div className={`col-lg-9 col-md-7 ${styles.bisleri_container}`}>
                        <Swiper
                            spaceBetween={5}
                            slidesPerView="auto"
                            // onSlideChange={() => console.log('slide change')}
                            // onSwiper={(swiper) => console.log(swiper)}
                            modules={[Navigation, Scrollbar]}
                            navigation
                            breakpoints={{
                                // when window width is >= 320px
                                320: {
                                    slidesPerView: 1,
                                },
                                // when window width is >= 480px
                                // 480: {
                                // slidesPerView: 3,
                                // spaceBetween: 30
                                // },
                                // // when window width is >= 640px
                                767: {
                                    slidesPerView: 1,
                                },
                                993: {
                                    slidesPerView: 3,
                                    spaceBetween: 5
                                }
                            }}
                            loop
                            scrollbar={{ draggable: true }}
                        >
                            <SwiperSlide><img src={BisleriImg.src} className="img-fluid" alt="Bisleri" /></SwiperSlide>
                            <SwiperSlide><img src={BisleriImg.src} className="img-fluid" alt="Bisleri" /></SwiperSlide>
                            <SwiperSlide><img src={BisleriImg.src} className="img-fluid" alt="Bisleri" /></SwiperSlide>
                            <SwiperSlide><img src={BisleriImg.src} className="img-fluid" alt="Bisleri" /></SwiperSlide>
                            <SwiperSlide><img src={BisleriImg.src} className="img-fluid" alt="Bisleri" /></SwiperSlide>
                        {/* ... */}
                        </Swiper>

                        {/* <div className={`row ${styles.bisleri_container}`}>
                            <div className={`col-lg-4`}>
                                <img src={BisleriImg.src} className={`img-fluid`} alt="Bisleri" />
                            </div>
                            <div className={`col-lg-4`}>
                                <img src={BisleriImg.src} className={`img-fluid`} alt="Bisleri" />
                            </div>
                            <div className={`col-lg-4`}>
                                <img src={BisleriImg.src} className={`img-fluid`} alt="Bisleri" />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
import styles from "./events.module.css";
import PFGImg from "./../../assets/img/homepage/events/personal_finance_guide.png";
import EventsImg from "./../../assets/img/homepage/events/events.png";
import InstaIcon from "./../../assets/img/homepage/events/instagram.png";
import insta_1 from "../../public/insta_1.png";
import insta_2 from "../../public/insta_2.png";
import insta_3 from "../../public/insta_3.png";
import insta_4 from "../../public/insta_4.png";
import insta_5 from "../../public/insta_5.png";
import { Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Link from "next/link";

export default function Events() {
  return (
    <section id="events">
      <div className="container text-center">
        <div className={`row`}>
          <div className={`col-lg-5 col-md-5 ${styles.pfg}`}>
            <div className={`col-5 ${styles.pfg_text}`}>
              <h1>Personal Finance Guide</h1>
            </div>
            <img
              src={PFGImg.src}
              className={`img-fluid ${styles.PFGImg}`}
              alt="Personal Finance Guide"
            />
            <Link href='https://zerodha.com/varsity/modules/'   target="_blank">
              <button
                type="button"
                className={`${styles.btn} ${styles.pfg_btn}`}
              >
                Download
              </button>
            </Link>
          </div>
          <div
            className={`col-lg-7 col-md-7 text-center ${styles.events_section} mt-2 mt-sm-0`}
          >
            <img
              src={EventsImg.src}
              className={`img-fluid ${styles.eventsImg}`}
              alt="Events"
            />
            <button
              type="button"
              className={`btn ${styles.btn} ${styles.events_btn}`}
            >
              <Link className="nav-link scrollto" href="/eventss">
                Checkout
              </Link>
            </button>
          </div>
        </div>
        <div className={`row mt-sm-4 mt-2`}>
          <div
            className={`d-flex align-items-center justify-content-start justify-content-md-center text-start col-lg-3 col-md-5 ${styles.insta_container}`}
          >
            <div className={`ml-3 pt-4 pb-4 col-9 col-md-6`}>
              <img
                src={InstaIcon.src}
                className={`img-fluid ${styles.insta_icon}`}
                alt="Instagram"
              />
              <h1 className={styles.insta_text}>
                Follow us for
                <br />
                updates
              </h1>
              <button
                type="button"
                className={`btn ${styles.btn} ${styles.insta_btn}`}
              >
                <Link
                  className="nav-link active"
                  href="https://www.instagram.com/finvest_snu/"
                  target="_blank"
                >
                  Follow Us
                </Link>
              </button>
            </div>
          </div>

          <div className={`col-lg-9 col-md-7 ${styles.bisleri_container}`}>
            <Swiper
              spaceBetween={5}
              slidesPerView="auto"
              modules={[Navigation, Scrollbar]}
              navigation
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                },
                767: {
                  slidesPerView: 1,
                },
                993: {
                  slidesPerView: 3,
                  spaceBetween: 5,
                },
              }}
              loop
              scrollbar={{ draggable: true }}
            >
              <SwiperSlide>
                <img
                  src={insta_1.src}
                  className="img-fluid"
                  alt="insta_post1"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={insta_2.src}
                  className="img-fluid"
                  alt="insta_post2"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={insta_3.src}
                  className="img-fluid"
                  alt="insta_post3"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={insta_4.src}
                  className="img-fluid"
                  alt="insta_post4"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={insta_5.src}
                  className="img-fluid"
                  alt="insta_post5"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

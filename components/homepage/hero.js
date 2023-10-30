import React from "react";
import styles from "./hero.module.css";
import Img from "./../../assets/img/homepage/hero.png";
import Link from "next/link";

export default function Hero() {
 

  return (
    <section
      id="hero"
      className={`d-flex flex-column justify-content-center align-items-center ${styles.hero}`}
    >
      <img src={Img.src} className="img-fluid" />
      <div
        className={`container text-center text-md-left ${styles.container}`}
        data-aos="fade-up"
      >
        <h1 className={styles.h1}>Making Interests Interesting</h1>
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8 text-center">
            <h2 className={styles.h2}>
              A highly-curated platform for creating, collecting, and trading
              unique NFTs. Trade with confidence on the world’s fastest and most
              secure crypto exchange
            </h2>
           
             <Link href="/" target="_blank" className={`${styles.joinBtn}`}>
           <i class="bi bi-whatsapp"></i>

           <button type="button" >
            Join our community
          </button></Link>
            
          </div>
        </div>
      </div>
    </section>
  );
}

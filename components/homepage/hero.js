import React, { useState } from "react";
import styles from "./hero.module.css";
import Img from "./../../assets/img/homepage/hero.png";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const submitData = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/emailData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        setError("Enter Valid Email")
      }

      const data = await response.json();
      setError(data.message || data.error)
    } catch (error) {
      console.error(error);
      setError(error.error);
    }
  };

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
            <div
              className={`col-lg-8 offset-lg-2 justify-content-start ${styles.join_community}`}
            >
              <form className={styles.form}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className={styles.joinBtn}
                  onClick={submitData}
                >
                  Join our community
                </button>
              </form>
              {error && <p className={styles.errorMsg}>{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

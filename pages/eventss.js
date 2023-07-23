import styles from "./events.module.css";
const EventComponent = () => {
  const styles1 = {
    marginTop: "40%",
  };
  const background = {
    backgroundColor: "black",
  };
  const font = {
    marginTop: "-25px",
  };
  return (
    <div className="container-fluid" style={background}>
      <div className="row text-center">
        <div
          className={`${styles.img1} text-center pt-md-3 pb-md-5 card`}
          data-aos="fade-up"
        >
          <div className={styles.text} style={styles1}>
            <p></p>
            <p></p>
            <p className={styles.content}>
              What is happening around the world A highly-curated platform for
              creating, collecting and trading unique NFTs. Trade with
              confidence on
            </p>
          </div>
        </div>

        <div className={`${styles.img2} text-center pt-md-3 pb-md-5  card`} data-aos="fade-up">
          <div
            className={styles.text}
            style={{ marginTop: "7%", marginBottom: "7%" }}
          >
            <p className={styles.exp}>EXPERIENCE METAVERSE</p>
            <p className={styles.finverse}>FINVERSE</p>
            <p className={styles.content}>
              What is happening around the world A highly-curated platform for
              creating, collecting and trading unique NFTs. Trade with
              confidence on
            </p>
            <div className={styles.knowContainer}>
              <button className={styles.know}>
                <span className={styles.Knowtext}>Know More</span>
              </button>
            </div>
          </div>
        </div>

        <div className={` ${styles.img3} text-center pt-md-3 pb-md-5  card`} data-aos="fade-up">
          <div
            className={styles.text}
            style={{ marginTop: "7%", marginBottom: "7%" }}
          >
            <p className={styles.exp}>A NEGOTIATION BASED TRADE</p>
            <p className={styles.finverse}>FINQUEST</p>
            <p className={styles.content}>
              What is happening around the world A highly-curated platform for
              creating, collecting and trading unique NFTs. Trade with
              confidence on
            </p>
            <div className={styles.knowContainer}>
              <button className={styles.know}>
                <span className={styles.Knowtext}>Know More</span>
              </button>
            </div>
          </div>
        </div>

        <div className={`${styles.img4} text-center pt-md-3 pb-md-5  card` } data-aos="fade-up">
          <div
            className={styles.text}
            style={{ marginTop: "7%", marginBottom: "7%" }}
          >
            <p className={styles.exp}>LEARN STOCK MARKET WITH</p>
            <p className={`${styles.finverse2}`}>LEARNERS’ TRIBE</p>
            <p className={`${styles.content} `} style={font}>
              What is happening around the world A highly-curated platform for
              creating, collecting and trading unique NFTs. Trade with
              confidence on
            </p>
            <div className={styles.knowContainer}>
              <button className={styles.know}>
                <span className={styles.Knowtext}>Know More</span>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${styles.bgblack} text-center card  p-3 p-md-4`}
          data-aos="fade-up"
        >
          <div className={`${styles.text} mt-5 mb-5`}>
            <p className={`text-white ${styles.content1}`}>
              And many more to come...
            </p>
            <span className={styles.emoji}>🤑</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventComponent;

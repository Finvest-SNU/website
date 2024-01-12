import styles from "./events.module.css";
import React, { useState } from "react";

// function ReadMoreLess() {
//   const [isShowMore, setIsShowMore] = useState(false);

//   const toggleReadMoreLess = () => {
//     setIsShowMore(!isShowMore);
//   };

//   return (
//     <div className="card">
//       <h3>Read More Read Less</h3>
//       <p>
//       Relive the captivating journey into finance with FINQUEST, a resounding success hosted by Finvest.  Participants enjoyed an evening filled with financial exploration armed with 1,00,000 Fincash. Teams navigated market fluctuations and invested in diverse commodities.
//       </p>
//       {isShowMore && (
//         <p>
//           Relive the captivating journey into finance with FINQUEST, a resounding success hosted by Finvest.  Participants enjoyed an evening filled with financial exploration armed with 1,00,000 Fincash. Teams navigated market fluctuations and invested in diverse commodities.
//         </p>
//       )}


// <button onClick={toggleReadMoreLess}>
//         {isShowMore ? "Read Less" : "Read More"}
//       </button>
//     </div>
//   );
// }

// function ReadMoreLess() {
//   const [isShowMore, setIsShowMore] = useState(false);

//   const toggleReadMoreLess = () => {
//     setIsShowMore(!isShowMore);
//   };

//   return (
//     <div className="card">
//       <h3>Read More Read Less</h3>
//       <p>
//       Relive the captivating journey into finance with FINQUEST, a resounding success hosted by Finvest.  Participants enjoyed an evening filled with financial exploration armed with 1,00,000 Fincash. Teams navigated market fluctuations and invested in diverse commodities.
//       </p>
//       {isShowMore && (
//         <p>
//           Relive the captivating journey into finance with FINQUEST, a resounding success hosted by Finvest.  Participants enjoyed an evening filled with financial exploration armed with 1,00,000 Fincash. Teams navigated market fluctuations and invested in diverse commodities.
//         </p>
//       )}


// <button onClick={toggleReadMoreLess}>
//         {isShowMore ? "Read Less" : "Read More"}
//       </button>
//     </div>
//   );
// }

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

  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
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
              <p>
              Recently held as part of Breeze'22, FINVERSE offered participants an immersive experience beyond conventional finance. Teams, consisting of dynamic duos, showcased their strategic and financial intellect through a series of captivating games.
              </p>
            {isShowMore && (
              <p>
              The event was divided into two compelling rounds, starting with challenging games such as Casino (including Bluff, Big Short, Teen Patti, Roulette), Trade-O-Bar, and Clash of Lands. These activities tested participants' skills and wit, fostering an atmosphere of excitement and friendly competition.
              The latter half of FINVERSE witnessed an exhilarating auction where various Non-Fungible Token (NFT) assets were traded, adding an innovative touch to the financial landscape explored during the event. FINVERSE served as a platform that not only entertained but also enlightened participants about the intersection of gaming, finance, and the evolving metaverse.              </p>
            )}
              <p>
              Recently held as part of Breeze'22, FINVERSE offered participants an immersive experience beyond conventional finance. Teams, consisting of dynamic duos, showcased their strategic and financial intellect through a series of captivating games.
              </p>
            {isShowMore && (
              <p>
              The event was divided into two compelling rounds, starting with challenging games such as Casino (including Bluff, Big Short, Teen Patti, Roulette), Trade-O-Bar, and Clash of Lands. These activities tested participants' skills and wit, fostering an atmosphere of excitement and friendly competition.
              The latter half of FINVERSE witnessed an exhilarating auction where various Non-Fungible Token (NFT) assets were traded, adding an innovative touch to the financial landscape explored during the event. FINVERSE served as a platform that not only entertained but also enlightened participants about the intersection of gaming, finance, and the evolving metaverse.              </p>
            )}
            </p>
            <div className={styles.knowContainer}>
              <button className={styles.know}  onClick={toggleReadMoreLess}>
                <span className={styles.Knowtext}>
                  {isShowMore ? "Read Less" : "Read More"}
                  </span>
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
            <p>
                Relive the captivating journey into finance with FINQUEST, a resounding success hosted by Finvest.  Participants enjoyed an evening filled with financial exploration armed with 1,00,000 Fincash. Teams navigated market fluctuations and invested in diverse commodities.
              </p>
            {isShowMore && (
              <p>
                Relive the captivating journey into finance with FINQUEST, a resounding success hosted by Finvest.  Participants enjoyed an evening filled with financial exploration armed with 1,00,000 Fincash. Teams navigated market fluctuations and invested in diverse commodities.
              </p>
            )}
            <p>
                Relive the captivating journey into finance with FINQUEST, a resounding success hosted by Finvest.  Participants enjoyed an evening filled with financial exploration armed with 1,00,000 Fincash. Teams navigated market fluctuations and invested in diverse commodities.
              </p>
            {isShowMore && (
              <p>
                Relive the captivating journey into finance with FINQUEST, a resounding success hosted by Finvest.  Participants enjoyed an evening filled with financial exploration armed with 1,00,000 Fincash. Teams navigated market fluctuations and invested in diverse commodities.
              </p>
            )}
            </p>
            <div className={styles.knowContainer}>
              <button className={styles.know} onClick={toggleReadMoreLess}>
                <span className={styles.Knowtext}>{isShowMore ? "Read Less" : "Read More"}</span>
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
            <p className={`${styles.finverse2}`}>SNIFTY</p>
            <p className={`${styles.finverse2}`}>SNIFTY</p>
            <p className={`${styles.content} `} style={font}>
            <p>
              Embark on a thrilling financial journey with SNIFTY, the ultimate stock market simulation presented by Finvest, The Finance Club of SNIoE. 
              </p>
            {isShowMore && (
              <p>
                 Dive into the exciting world of stock trading featuring your favorite SNU businesses like Naveen, Nescafé, Grabbo, Sodexo, and more! SNIFTY offers a unique opportunity to hone your investment skills and make strategic moves in a risk-free environment. Join us for an immersive experience that combines fun and finance, exclusively tailored for our SNU community. Let the trading games begin!
              </p>
            )}
            <p>
              Embark on a thrilling financial journey with SNIFTY, the ultimate stock market simulation presented by Finvest, The Finance Club of SNIoE. 
              </p>
            {isShowMore && (
              <p>
                 Dive into the exciting world of stock trading featuring your favorite SNU businesses like Naveen, Nescafé, Grabbo, Sodexo, and more! SNIFTY offers a unique opportunity to hone your investment skills and make strategic moves in a risk-free environment. Join us for an immersive experience that combines fun and finance, exclusively tailored for our SNU community. Let the trading games begin!
              </p>
            )}
            </p>
            <div className={styles.knowContainer}>
              <button className={styles.know} onClick={toggleReadMoreLess}>
                <span className={styles.Knowtext}>{isShowMore ? "Read Less" : "Read More"}</span>
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

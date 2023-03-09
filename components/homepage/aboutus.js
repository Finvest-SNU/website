import Img from './../../assets/img/homepage/aboutus.png';
import styles from './aboutus.module.css';

export default function AboutUs() {
    return (
        <section id="about">
            <div className="container text-center">
                <h3 className={styles.h3}>About Us</h3>
                <h1 className={styles.h1}>Making Interests Interesting</h1>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <h5 className={styles.h5}>A highly-curated platform for creating, collecting and trading unique NFTs. Trade with confidence on the world’s fastest and most secure crypto exchange</h5>
                        <img src={Img.src} className={`img-fluid ${styles.img}`} alt="About Us Image" />
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        {/* <div className="btn-group mb-4"> */}
                        <div className="row mb-4 justify-content-center" id="infoAccordians">
                            <div className="col-12 col-sm-4 mb-2">
                                <button type="button" data-bs-toggle="collapse" data-bs-target="#stockMarketCollapse" aria-expanded="true" aria-controls="stockMarketCollapse" className={`accordian-button btn btn-light btn_active ${styles.btn}`}>Stock Market</button>
                            </div>
                            <div className="col-12 col-sm-4 mb-2">
                                <button type="button" data-bs-toggle="collapse" data-bs-target="#personalFinanceCollapse" aria-expanded="false" aria-controls="personalFinanceCollapse" className={`accordian-button collapsed btn btn-light ${styles.btn}`}>Personal Finance</button>
                            </div>
                            <div className="col-12 col-sm-4">
                                <button type="button" data-bs-toggle="collapse" data-bs-target="#taxesCollapse" aria-expanded="false" aria-controls="taxesCollapse" className={`accordian-button collapsed btn btn-light ${styles.btn}`}>Taxes</button>
                                {/* <button type="button" className={`btn btn-light ${styles.btn}`}>Taxes</button> */}
                            </div>
                            <div className="accordion-item">
                                <div id="stockMarketCollapse" className={`accordion-collapse show collapse ${styles.h5}`} data-bs-parent="#infoAccordians">
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordian-item">
                                <div id="personalFinanceCollapse" className={`accordion-collapse collapse ${styles.h5}`} data-bs-parent="#infoAccordians">
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div id="taxesCollapse" className={`accordion-collapse collapse ${styles.h5}`} data-bs-parent="#infoAccordians">
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
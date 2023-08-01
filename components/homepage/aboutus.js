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
                        <h5 className={styles.h5}>Welcome to the exciting world of Finvest, where finance becomes an exhilarating adventure rather than a daunting mystery!
                            We're not your average finance club– at Finvest, we're on a mission to unleash the power of financial literacy and make it accessible to everyone. We firmly believe that by equipping individuals with the knowledge and skills to navigate the financial landscape confidently, we can drive positive change in people's lives.
                            Whether you're a finance pro or a complete novice, we are here to guide you through the twists and turns of the financial landscape.</h5>
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
                                        <strong>The stock market:</strong> <br/> Platform to trade shares of public companies. Investors buy to own part of a company and gain from profits and growth. Key for capital formation and wealth growth. Prices fluctuate based on company performance and market conditions. Informed decisions crucial for success.
                                    </div>
                                </div>
                            </div>
                            <div className="accordian-item">
                                <div id="personalFinanceCollapse" className={`accordion-collapse collapse ${styles.h5}`} data-bs-parent="#infoAccordians">
                                    <div className="accordion-body">
                                        <strong>Personal finances:</strong> <br/>Managing individual money matters. Involves budgeting, saving, investing, and debt management. Crucial for financial stability and achieving goals. Create a budget, track expenses, build an emergency fund. Invest wisely for long-term growth. Minimize debts, establish good credit. Plan for retirement and future milestones. Seek professional advice if needed. Empower yourself for a secure financial future.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div id="taxesCollapse" className={`accordion-collapse collapse ${styles.h5}`} data-bs-parent="#infoAccordians">
                                    <div className="accordion-body">
                                        <strong>Taxes:</strong><br/> Mandatory contributions to the government. Collected to fund public services and infrastructure. Types include income, sales, property taxes, etc. Payable by individuals and businesses. File annual tax returns. Deductible expenses can lower tax liability. Understand tax brackets and rates. Keep records for accuracy. Deadlines are crucial. Seek tax professionals for complex situations. Compliance ensures legal and financial well-being.
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
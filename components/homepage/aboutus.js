import React, { useState } from 'react';
import Img from './../../assets/img/homepage/aboutus.png';
import styles from './aboutus.module.css';

export default function AboutUs() {
    const [activeAccordion, setActiveAccordion] = useState('stockMarketCollapse');

    const handleAccordionClick = (accordionId) => {
        setActiveAccordion(accordionId);
    };

    return (
        <section id="about">
            <div className="container text-center">
                <h3 className={styles.h3}>About Us</h3>
                <h1 className={styles.h1}>Making Interests Interesting</h1>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        {/* Your content */}
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="row mb-4 justify-content-center" id="infoAccordians">
                            <div className="col-12 col-sm-4 mb-2">
                                <button
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#stockMarketCollapse"
                                    aria-expanded={activeAccordion === 'stockMarketCollapse'}
                                    aria-controls="stockMarketCollapse"
                                    className={`accordian-button btn btn-light ${styles.btn} ${activeAccordion === 'stockMarketCollapse' ? 'btn_active' : ''}`}
                                    onClick={() => handleAccordionClick('stockMarketCollapse')}
                                >
                                    Stock Market
                                </button>
                            </div>
                            <div className="col-12 col-sm-4 mb-2">
                                <button
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#personalFinanceCollapse"
                                    aria-expanded={activeAccordion === 'personalFinanceCollapse'}
                                    aria-controls="personalFinanceCollapse"
                                    className={`accordian-button collapsed btn btn-light ${styles.btn} ${activeAccordion === 'personalFinanceCollapse' ? 'btn_active' : ''}`}
                                    onClick={() => handleAccordionClick('personalFinanceCollapse')}
                                >
                                    Personal Finance
                                </button>
                            </div>
                            <div className="col-12 col-sm-4">
                                <button
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#taxesCollapse"
                                    aria-expanded={activeAccordion === 'taxesCollapse'}
                                    aria-controls="taxesCollapse"
                                    className={`accordian-button collapsed btn btn-light ${styles.btn} ${activeAccordion === 'taxesCollapse' ? 'btn_active' : ''}`}
                                    onClick={() => handleAccordionClick('taxesCollapse')}
                                >
                                    Taxes
                                </button>
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

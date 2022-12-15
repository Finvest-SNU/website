import Logo from './../assets/img/logo.png';
export default function Footer() {
    return (
        <>
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row" id="logo-footer">
                            <a href="index.html"><img src={Logo.src} alt="Finvest" className="img-fluid" /></a>
                        </div>
                        <div className="row justify-content-around align-items-center">

                            <div className="col-lg-3">
                                <div className="footer-info">
                                    {/* <a href="index.html"><img src={Logo.src} id="logo-footer" alt="" className="img-fluid" /></a> */}
                                    <h4 id="inquiry-text">Feel free to get in touch</h4>
                                    <div id="send-message-form" className="footer-newsletter">
                                        <form action="" method="post">
                                            <input type="email" name="email" placeholder="Send message" />
                                            <input type="submit" value="Send" />
                                        </form>
                                    </div>
                                    {/* <div className="social-links mt-3">
                                        <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                                        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                                        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                                        <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                                        <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                    </div> */}
                                </div>
                            </div>

                            <div className="col-lg-4 offset-lg-2 col-md-6 footer-links">
                                <h4>finvest</h4>
                                <div className="row justify-content-center">
                                    <div className="col-6">
                                        <ul>
                                            <li><a href="#">HOME</a></li>
                                            <li><a href="#">ABOUT US</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-6">
                                        <ul>
                                            <li><a href="#">TEAM</a></li>
                                            <li><a href="#">EVENTS</a></li>
                                        </ul> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Contact us</h4>
                                <ul>
                                    <li><a href="#">finvest@snu.edu.in</a></li>
                                    <li><a href="#">+91 956 0160 969</a></li>
                                </ul>
                            </div>

                        {/* <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                            </ul>
                        </div> */}

                        {/* <div className="col-lg-4 col-md-6 footer-newsletter">
                            <h4>Our Newsletter</h4>
                            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                            <form action="" method="post">
                                <input type="email" name="email" /><input type="submit" value="Subscribe" />
                            </form>

                        </div> */}

                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Finvest SNU</span></strong>. All Rights Reserved
                    </div>
                    {/* <div className="credits">
                        <!-- All the links in the footer should remain intact. -->
                        <!-- You can delete the links only if you purchased the pro version. -->
                        <!-- Licensing information: https://bootstrapmade.com/license/ -->
                        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/maxim-free-onepage-bootstrap-theme/ -->
                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div> */}
                </div>
            </footer>

            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        </>
    );
}
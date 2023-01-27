import Logo from './../assets/img/logo.png';
import LogoLight from './../assets/img/logo-light.png';

export default function Navbar() {
    return (
        <>
            <header id="header" className="fixed-top d-flex header-dark">
                <div id="navbar-bg" className=""></div>
                <div className="container d-flex justify-content-between align-items-center navbar-container">

                <div className="logo">
                    {/* <h1><a href="index.html">Maxim</a></h1> */}
                    {/* <!-- Uncomment below if you prefer to use an image logo --> */}
                    <div id="logo-light" data-src={LogoLight.src} style={{display: 'none'}}></div>
                    <div id="logo-dark" data-src={Logo.src} style={{display: 'none'}}></div>
                    <a href="index.html"><img src={Logo.src} id="navbar-logo" alt="" className="img-fluid" /></a>
                </div>

                <nav id="navbar" className="navbar">
                    <ul>
                    <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                    <li><a className="nav-link scrollto" href="#about">About Us</a></li>
                    <li><a className="nav-link scrollto" href="#team">Team</a></li>
                    <li><a className="nav-link scrollto " href="#events">Events</a></li>
                    {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                        <ul>
                        <li><a href="#">Drop Down 1</a></li>
                        <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                            <ul>
                            <li><a href="#">Deep Drop Down 1</a></li>
                            <li><a href="#">Deep Drop Down 2</a></li>
                            <li><a href="#">Deep Drop Down 3</a></li>
                            <li><a href="#">Deep Drop Down 4</a></li>
                            <li><a href="#">Deep Drop Down 5</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Drop Down 2</a></li>
                        <li><a href="#">Drop Down 3</a></li>
                        <li><a href="#">Drop Down 4</a></li>
                        </ul>
                    </li> */}
                    {/* <li><a className="nav-link scrollto" href="#contact">Contact</a></li> */}
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

                <a href="" className="btn-market-blog btn-market-blog-light">The Market Blog</a>
             {/* <!-- .navbar --> */}

                </div>
            </header>
        </>
    );
}
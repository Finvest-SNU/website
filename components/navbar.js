import Logo from './../assets/img/logo.png';
import LogoLight from './../assets/img/logo-light.png';
import Link from 'next/link';

export default function Navbar() {
    
    return (
        <>
            <header id="header" className="fixed-top d-flex header-dark">
                <div id="navbar-bg" className=""></div>
                <div className="container d-flex justify-content-between align-items-center navbar-container">

                <div className="logo order-2 order-lg-1">
                    {/* <h1><a href="index.html">Maxim</a></h1> */}
                    {/* <!-- Uncomment below if you prefer to use an image logo --> */}
                    <div id="logo-light" data-src={LogoLight.src} style={{display: 'none'}}></div>
                    <div id="logo-dark" data-src={Logo.src} style={{display: 'none'}}></div>
                    <Link href="/"><img src={Logo.src} id="navbar-logo" alt="" className="img-fluid" /></Link>
                </div>

                <nav id="navbar" className="navbar order-1 order-lg-2">
                    <ul>
                    <li><Link href="/" className="nav-link scrollto active">Home</Link></li>
                    <li><a className="nav-link scrollto" href="/#about">About Us</a></li>
                    <li><Link className="nav-link scrollto" href="/team">Team</Link></li>
                    <li><Link className="nav-link scrollto" href="/eventss">Events</Link></li>
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

                {/* <Link href='/Market' className="order-3"><button id="btn-market-blog" className="btn-market-blog btn-market-blog-light">The Market Blog</button></Link> */}
                <Link href='/Market' className="order-3 btn-market-blog btn-market-blog-light">The Market Blog</Link>
             {/* <!-- .navbar --> */}

                </div>
            </header>
        </>
    );
}

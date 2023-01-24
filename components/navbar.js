import Logo from './../assets/img/logo.png';
import React,{useState} from 'react'
import Link from 'next/link';


export default function Navbar() {
    
    return (
        <>
            <header id="header" className="fixed-top d-flex">
                <div className="container d-flex justify-content-between align-items-center">

                <div className="logo">
                    {/* <h1><a href="index.html">Maxim</a></h1> */}
                    {/* <!-- Uncomment below if you prefer to use an image logo --> */}
                    <a href="index.html"><img src={Logo.src} alt="" className="img-fluid" /></a>
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

                <Link href='/Market'><button id="btn-market-blog" >The Market Blog</button></Link>
               
             {/* <!-- .navbar --> */}

                </div>
            </header>
        </>
    );
}

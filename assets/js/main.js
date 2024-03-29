import { PassThrough } from "stream";

/**
* Template Name: Maxim - v4.9.1
* Template URL: https://bootstrapmade.com/maxim-free-onepage-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      if(el)
      return document.querySelector(el)
      else true
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectel = select(el, all)
    if (selectel) {
      if (all) {
        selectel.forEach(e => e.addEventListener(type, listener))
      } else {
        selectel.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  function toggleMobileMenu() {
    select('#navbar').classList.toggle('navbar-mobile')
    const el = select('.mobile-nav-toggle');
    el.classList.toggle('bi-list')
    el.classList.toggle('bi-x')
  }

  on('click', '.mobile-nav-toggle', toggleMobileMenu)

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Testimonials slider
   */
  // new Swiper('.testimonials-slider', {
  //   speed: 600,
  //   loop: true,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false
  //   },
  //   slidesPerView: 'auto',
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: true
  //   },
  //   breakpoints: {
  //     320: {
  //       slidesPerView: 1,
  //       spaceBetween: 20
  //     },

  //     1200: {
  //       slidesPerView: 3,
  //       spaceBetween: 20
  //     }
  //   }
  // });

  /**
   * Porfolio isotope and filter
   */
  // window.addEventListener('load', () => {
  //   let portfolioContainer = select('.portfolio-container');
  //   if (portfolioContainer) {
  //     let portfolioIsotope = new Isotope(portfolioContainer, {
  //       itemSelector: '.portfolio-item',
  //       layoutMode: 'fitRows'
  //     });

  //     let portfolioFilters = select('#portfolio-flters li', true);

  //     on('click', '#portfolio-flters li', function(e) {
  //       e.preventDefault();
  //       portfolioFilters.forEach(function(el) {
  //         el.classList.remove('filter-active');
  //       });
  //       this.classList.add('filter-active');

  //       portfolioIsotope.arrange({
  //         filter: this.getAttribute('data-filter')
  //       });
  //       portfolioIsotope.on('arrangeComplete', function() {
  //         AOS.refresh()
  //       });
  //     }, true);
  //   }

  // });

  /**
   * Initiate portfolio lightbox 
   */
  // const portfolioLightbox = GLightbox({
  //   selector: '.portfolio-lightbox'
  // });

  /**
   * Portfolio details slider
   */
  // new Swiper('.portfolio-details-slider', {
  //   speed: 400,
  //   loop: true,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false
  //   },
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: true
  //   }
  // });

  /**
   * Animation on scroll
   */
  // window.addEventListener('load', () => {
  //   AOS.init({
  //     duration: 1000,
  //     easing: 'ease-in-out',
  //     once: true,
  //     mirror: false
  //   })
  // });

  // CUSTOM JS
  const changeNavBar = () => {
    let position = window.scrollY;
    let banner = select('#banner')
    const header = select('#header')
    const navbarBg = select('#navbar-bg')
    const navbarlinks = select('.navbar a', true)
    const logo = select('#navbar-logo')
    const logoLight = select('#logo-light').dataset.src;
    const logoDark = select('#logo-dark').dataset.src;
    let url = window.location.href.split('/');
    url = url[url.length-1];
    const pageOffset = {'': banner?.offsetTop ?? 0, 'team': 60, 'Market': 60};
    // if (!banner) return
    // if (position >= banner.offsetTop) {
    if (position >= pageOffset[url]) {
      if(header.classList.contains('header-dark')) {
        header.classList.remove('header-dark')
        navbarBg.classList.add('navbar-bg')
        select('.mobile-nav-toggle').classList.add('mobile-nav-toggle-dark')
        navbarlinks.forEach(navbarlink => {
          navbarlink.classList.add('navbar-link-dark')
        })
        logo.setAttribute('src', logoLight)
      }
    } else {
      if(!header.classList.contains('header-dark'))
      {
        header.classList.add('header-dark')
        navbarBg.classList.remove('navbar-bg')
        select('.mobile-nav-toggle').classList.remove('mobile-nav-toggle-dark')
        navbarlinks.forEach(navbarlink => {
          navbarlink.classList.remove('navbar-link-dark')
        })
        logo.setAttribute('src', logoDark)
      }
    }
  }

  onscroll(document, changeNavBar)

  on('click', '.accordian-button', function(el) {
    select('.accordian-button', true).forEach(btn => {
      console.log(btn.classList.remove('btn_active'))
    });
    if(!el.target.classList.contains('collapsed')) el.target.classList.add('btn_active');
  }, true);

  on('click', 'a.nav-link', function() {
    if(window.screen.width < 992) toggleMobileMenu('.mobile-nav-toggle')
  }, true);

  

})()
import Head from 'next/head';
import Favicon from './../assets/img/favicon.png';

export default function Header() {
    return (
        <Head>
            <meta charset="utf-8" />
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />

            <title>Finvest SNU</title>
            <meta content="" name="description" />
            <meta content="" name="keywords" />

            {/* <!-- Favicons --> */}
            <link href={Favicon.src} rel="shortcut icon" />
            <link href={Favicon.src} rel="apple-touch-icon" />

            {/* <!-- Google Fonts --> */}
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />

            {/* <!-- Vendor CSS Files --> */}
            {/* <link href="../assets/vendor/aos/aos.css" rel="stylesheet" /> */}
            {/* <link href="../assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" /> */}
            {/* <link href="../assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" /> */}
            {/* <link href="../assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" /> */}
            {/* <link href="../assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
            <link href="../assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" /> */}

            {/* <!-- Template Main CSS File --> */}

            {/* <link href="assets/css/style.css" rel="stylesheet" /> */}

            {/* <!-- =======================================================
            * Template Name: Maxim - v4.9.1
            * Template URL: https://bootstrapmade.com/maxim-free-onepage-bootstrap-theme/
            * Author: BootstrapMade.com
            * License: https://bootstrapmade.com/license/
            ======================================================== --></link> */}
        </Head>
    );
}
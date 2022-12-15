import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'boxicons/css/boxicons.min.css';
import 'aos/dist/aos.css';
import '../styles/globals.css';
import AOS from 'aos';

import { useEffect } from 'react';
import Layout from '../components/layout';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    }),
    import('../assets/js/main'),
    import('aos/dist/aos'),
    import('bootstrap/dist/js/bootstrap.bundle.min')
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
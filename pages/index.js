import Hero from './../components/homepage/hero';
import Banner from './../components/homepage/banner';
import AboutUs from './../components/homepage/aboutus';
import Roadmap from './../components/homepage/roadmap';
import Sponsors from './../components/homepage/sponsors';

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <AboutUs />
      <Roadmap />
      <Sponsors />
    </>
  );  
}

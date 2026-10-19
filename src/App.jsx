import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Products from './components/Products.jsx';
import Works from './components/Works.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ScrollTop from './components/ScrollTop.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Works />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}

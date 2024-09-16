import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Gallery from "./pages/Gallery";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";

export default function App() {
  return (
    <>
      <section className="background_marmore">
        <div className="container">
          <Header />
          <Home />
        </div>
      </section>
      <section className="background_cookies">
        <div className="container">
          <Products />
        </div>
      </section>
      <section className="background_marmore">
        <div className="container">
          <Gallery />
        </div>
      </section>
      <section className="background_cookies">
        <div className="container">
          <About />
        </div>
      </section>
      <section className="background_marmore">
        <div className="container">
          <Contact />
          <Footer />
        </div>
      </section>
    </>
  );
}

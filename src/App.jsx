import Gallery from "./pages/Gallery";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";

export default function App() {
  return (
    <>
      <div className="background_marmore">
        <section className="container">
          <Header />
          <Home />
        </section>
      </div>
      <div className="background_cookies">
        <section className="container">
          <Products />
        </section>
      </div>
      <div className="background_marmore">
        <section className="container">
          <Gallery></Gallery>
        </section>
      </div>
    </>
  );
}

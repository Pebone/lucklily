import Header from "./pages/Header";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <div className="background_marmore">
        <section className="container">
          <Header />
          <Home />
        </section>
      </div>
    </>
  );
}

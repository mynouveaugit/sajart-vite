import { useState, useCallback, lazy, Suspense } from "react";
import Loader  from "./Loader.jsx";
import Header  from "./components/Header.jsx";
import Hero    from "./components/Hero.jsx";
import About   from "./components/About.jsx";

const Services = lazy(() => import("./components/Services.jsx"));
const Team     = lazy(() => import("./components/Team.jsx"));
const Gallery  = lazy(() => import("./components/Gallery.jsx"));
const Contact  = lazy(() => import("./components/Contact.jsx"));
const Footer   = lazy(() => import("./components/Footer.jsx"));

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const handleDone = useCallback(() => setLoaded(true), []);

  return (
    <>
      {!loaded && <Loader onDone={handleDone} />}

      <a href="#main" className="skip-link">Aller au contenu</a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
          {loaded && (
            <>
              <Services />
              <Team />
              <Gallery />
              <Contact />
            </>
          )}
        </Suspense>
      </main>
      <Suspense fallback={null}>
        {loaded && <Footer />}
      </Suspense>
    </>
  );
}
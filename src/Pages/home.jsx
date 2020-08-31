import React from "react";

//Components
import {
  Preloader,
  Header,
  Navbar,
  Description,
  SectionHome,
  Gallery,
  Profile,
  /* Map, */
  Footer,
} from "../components";

const Home = () => (
  <>
    <main className="principal">
      <Header children={<Navbar />} />
      <Description />
      <SectionHome
        name={"galería"}
        description={"Muestras del software"}
        children={<Gallery />}
      />
      <SectionHome
        name={"nosotros"}
        description={"Las mentes detrás de Weigh App"}
        children={<Profile />}
      />
      {/* <Map /> */}
      <Footer />
    </main>
    <Preloader />
  </>
);

export default Home;

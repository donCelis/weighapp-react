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
  InfoProfile,
  MapCom,
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
      <SectionHome
        children={<InfoProfile />}
      />
      <MapCom />
      <Footer />
    </main>
    <Preloader />
  </>
);

export default Home;

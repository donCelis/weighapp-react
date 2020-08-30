import React, { Fragment } from "react";
//import { Helmet } from "react-helmet";

//Components
import {
  Preloader,
  Header,
  Navbar,
  Description,
  SectionHome,
  Gallery,
  Profile,
  Map,
  Footer
} from "../components";

const Home = () => (
  <Fragment>
    {/* <Helmet>
      <title>Weigh App</title>
    </Helmet> */}
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
      <Map />
      <Footer />
    </main>
    <Preloader />
  </Fragment>
);
export default Home;

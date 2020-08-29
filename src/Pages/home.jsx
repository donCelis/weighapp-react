import React, { Fragment } from "react";
//import { Helmet } from "react-helmet";

//Components
import Preloader from "../components/preloader";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Description from "../components/description";
import SectionHome from "../components/sectionHome";
import Gallery from "../components/gallery";
import Profile from "../components/profile";
import Footer from "../components/footer";

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
      <Footer />
    </main>
    <Preloader />
  </Fragment>
);
export default Home;

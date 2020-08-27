import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

//Components
import Preloader from "../Components/preloader";
import Header from "../Components/header";
import Navbar from "../Components/navbar";
import Description from "../Components/description";
import SectionHome from "../Components/sectionHome";
import Gallery from "../Components/gallery";
import Profile from "../Components/profile";
import Footer from "../Components/footer";

const Home = () => (
  <Fragment>
    <Helmet>
      <title>Weigh App</title>
    </Helmet>
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

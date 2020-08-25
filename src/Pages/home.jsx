import React, { Fragment, useState, useEffect } from "react";
import { Ripple } from "react-preloaders";

//Components
import Header from "../Components/header";
import Navbar from "../Components/navbar";
import Description from "../Components/description";
import SectionHome from "../Components/sectionHome";
import Gallery from "../Components/gallery";
import Profile from "../Components/profile";
import Footer from "../Components/footer";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  return (
    <Fragment>
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
      <Ripple
        customLoading={loading}
        color={"#2980b9"}
        background="#2c3e50"
        animation="fade"
      />
    </Fragment>
  );
};

export default Home;

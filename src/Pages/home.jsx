import React, { Fragment, useState, useEffect } from "react";
import { Lines } from "react-preloaders";

//Components
import Header from "../Components/header";
import Navbar from "../Components/navbar";
import Description from "../Components/description";
import ContentHome from "../Components/contentHome";
import PrintImages from "../Components/printImages";
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
        <Header>
          <Navbar />
        </Header>
        <Description />
        <ContentHome 
          name={"galería"}
          description={"Muestras del software"}
          children={<PrintImages/>}
        />
        <ContentHome
          name={"nosotros"}
          description={"Las mentes detrás de Weigh App"}
          children={<Profile/>}
        />
       <Footer/>
      </main>
      <Lines
        customLoading={loading}
        color={"#2980b9"}
        background="#2c3e50"
        animation="fade"
      />
    </Fragment>
  );
};

export default Home;

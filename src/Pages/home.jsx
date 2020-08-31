import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
  Footer,
} from "../components";

const Home = () => (
  <>
    <HelmetProvider>
      <Helmet>
        <title>Weigh App</title>
        <meta name="description" content="testing react helmet" />
        <meta name="keywords" content="react,seo,helmet" />
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
        <Map />
        <Footer />
      </main>
    </HelmetProvider>
    <Preloader />
  </>
);

export default Home;

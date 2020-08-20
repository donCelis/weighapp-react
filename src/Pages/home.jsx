import React, { Fragment, useState, useEffect } from "react";
import Preloader from "../Components/preloader";
import Header from "../Components/header";
import Navbar from "../Components/navbar";
import Description from "../Components/description";

const Home = () => {
  const [loading, setLoading] = useState(true);

  
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <Fragment>
      {loading === true && <Preloader />}
      <main className="principal">
        <Header>
          <Navbar />
        </Header>
        <Description />
      </main>
    </Fragment>
  );
};

export default Home;

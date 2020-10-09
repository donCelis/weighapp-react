import React from "react";
import { Header, Preloader, UserMenu } from "../components";


const Dashboard = () => {
  return (
    <>
      <section>
        <Header children={<UserMenu />}/>
      </section>
      <Preloader />
    </>
  );
};

export default Dashboard;

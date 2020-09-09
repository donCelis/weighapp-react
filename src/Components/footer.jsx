import React, { useState } from "react";

const Footer = () => {
  const [data] =  useState({
    year: new Date().getFullYear(),
    name: "Weigh App"
  })

  return (
    <footer className="text-center p-4">
      <p className="m-0">
        {data.name} © {data.year} || Todos los derechos reservados
      </p>
    </footer>
  );
};

export default Footer;

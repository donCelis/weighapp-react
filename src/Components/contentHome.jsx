import React from "react";

const ContentHome = ({name = "", description = "", children}) => {

  return (
    <section id={name} className="py-5">
      <div className="container text-center">
        <div className="mb-4">
          <h2 className="capita">{name}</h2>
          <div className="linea"></div>
          <p>{description}</p>
        </div>
        {children}
      </div>
    </section>
  );
};

export default ContentHome;

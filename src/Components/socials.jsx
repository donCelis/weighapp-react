const Socials = () => {
  const { fb, what, insta } = {
    fb: "https://www.facebook.com/d0nCelis",
    what: "https://web.whatsapp.com/",
    insta: "https://www.instagram.com/d0nCelis/",
  };

  return (
    <div className="socials">
      <h3 className="mb-3">Redes Sociales</h3>
      <div className="row justify-content-center">
        <div className="col-2">
          <a rel="noopener noreferrer" href={fb} target="_blank">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
        <div className="col-2">
          <a rel="noopener noreferrer" href={what} target="_blank">
            <i className="fab fa-whatsapp-square"></i>
          </a>
        </div>
        <div className="col-2">
          <a rel="noopener noreferrer" href={insta} target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Socials;

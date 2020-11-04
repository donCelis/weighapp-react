import { Socials } from ".";

const InfoProfile = () => {
  const info = [
    {
      name: "Contacto",
      date: [`Celular: (+57) 300-875-4649`, "Correo: contacto@weighapps.com"],
    },
    {
      name: "Ubicación",
      date: [`Calle 54A No. 30 - 01`, "Medellín - Colombia"],
    },
  ];

  return (
    <section className="row justify-content-center">
      {info.map(({ name, date }, index) => (
        <div key={index} className="col-12 col-md-12 col-lg-4 mb-4">
          <div>
            <h3 className="mb-3">{name}</h3>
            {date.map((element, index) => (
              <p key={index} className="mb-2">
                {element}
              </p>
            ))}
          </div>
        </div>
      ))}
      <div className="col-12 col-md-12 col-lg-4 mb-3">
        <Socials />
      </div>
    </section>
  );
};

export default InfoProfile;

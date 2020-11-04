const Footer = () => {
  const { year, name } = {
    year: new Date().getFullYear(),
    name: "Weigh App",
  };

  return (
    <footer className="text-center p-4">
      <p className="m-0">
        {name} © {year} || Todos los derechos reservados
      </p>
    </footer>
  );
};

export default Footer;

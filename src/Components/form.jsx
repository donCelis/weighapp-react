const Form = () => {
  const sendData = (e) => {
    e.preventDefault();
    let { email, pass } = document.getElementsByTagName("input");
    console.log(email.value, pass.value);
  };

  return (
    <form className="formulario p-4">
      <div className="form-group">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-github"></i>
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="@Correo"
          required
          autoComplete="off"
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="pass"
          className="form-control"
          placeholder="Contraseña"
          required
          autoComplete="off"
        />
      </div>
      <div className="form-group">
        <input
          onClick={(e) => sendData(e)}
          type="submit"
          className="w-100 btn btn-info"
          value="Enviar"
        />
      </div>
    </form>
  );
};

export default Form;

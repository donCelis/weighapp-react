import { Link } from "react-router-dom";
import { NavItem } from ".";

const Navbar = () => {
  const names = ["inicio", "galería", "nosotros"];

  return (
    <div className="menu navbar-collapse collapse" id="mobile">
      <ul className="navbar-nav ml-auto">
        {names.map((name, index) => (
          <NavItem key={index} data={name} />
        ))}
        <li className="nav-item">
          <Link
            to="/login"
            className="nav-link menu--login fas fa-user-circle"
          />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

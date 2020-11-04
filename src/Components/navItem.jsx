const NavItem = ({ data = "" }) => (
  <li className="nav-item">
    <a href={`#${data}`} className="nav-link" aria-label={data}>
      {data}
    </a>
  </li>
);

export default NavItem;

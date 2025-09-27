const Navlink = ({ route }) => {
  return (
    <li className="mdHover">
      <a href={route.path} className="links">
        {route.name}
      </a>
    </li>
  );
};

export default Navlink;

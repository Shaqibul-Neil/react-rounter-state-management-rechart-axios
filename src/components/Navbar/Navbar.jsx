import Navlink from "./Navlink";

const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-4">
        {navLinks.map((route) => (
          <Navlink route={route} key={route.id} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

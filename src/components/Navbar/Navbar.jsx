import { Menu, X } from "lucide-react";
import Navlink from "./Navlink";
import { useState } from "react";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const links = navLinks.map((route) => (
    <Navlink route={route} key={route.id} />
  ));
  return (
    <nav className="layout">
      <div className="layout gap-4" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <X className="md:hidden" />
        ) : (
          <Menu className="md:hidden"></Menu>
        )}
        <ul className={`mdNav  ${menuOpen ? "top-20" : "-top-50"}`}>{links}</ul>
        <h3>My NavBar</h3>
      </div>

      <ul className="md:flex gap-10 hidden">{links}</ul>
      <button className="btn btn-info">Click Me</button>
    </nav>
  );
};

export default Navbar;

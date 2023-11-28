import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="lg:block hidden  text-white ">
      <NavLink
        className="hover:text-secondary-color-hover text-2xl  duration-200 "
        to="/clothes"
      >
        Clothes
      </NavLink>
      <NavLink
        className="hover:text-secondary-color-hover mx-10 text-2xl duration-200  "
        to="/shoes"
      >
        Shoes
      </NavLink>
      <NavLink
        className="hover:text-secondary-color-hover text-2xl duration-200 "
        to="/watches"
      >
        Watches
      </NavLink>
    </div>
  );
};

export default NavLinks;

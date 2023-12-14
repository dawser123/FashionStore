import { NavLink } from "react-router-dom";

const NavLinks = () => {

  return (
    <div className="hidden text-white  lg:block ">
      <NavLink
        className="text-2xl duration-200  hover:text-secondary-color-hover "
        to="/clothes"
      >
        Clothes
      </NavLink>
      <NavLink
        className="mx-10 text-2xl duration-200 hover:text-secondary-color-hover  "
        to="/shoes"
      >
        Shoes
      </NavLink>
      <NavLink
        className="text-2xl duration-200 hover:text-secondary-color-hover "
        to="/watches"
      >
        Watches
      </NavLink>
    </div>
  );
};

export default NavLinks;

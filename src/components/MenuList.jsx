import { NavLink } from "react-router-dom";
const MenuList = () => {
  return (
    <div className=" lg:hidden sticky top-20 mt-20 flex w-full flex-col items-center justify-center bg-zinc-900 px-4 py-16 shadow-lg">
      <div className="flex w-full flex-col items-start justify-center gap-7 text-2xl text-white xsm:items-center m:text-3xl">
        <NavLink to="/clothes">Clothes</NavLink>
        <NavLink to="/shoes">Shoes</NavLink>
        <NavLink to="/watches">Watches</NavLink>
      </div>
    </div>
  );
};

export default MenuList;

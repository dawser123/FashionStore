import { useContext, useState } from "react";
import { BsFillBagFill } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
import CartContext from "../../store/cart-context";
import { useNavigate } from "react-router-dom";
import MenuList from "../MenuList";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();
  const clickBasketHandler = () => {
    navigate("/cart");
  };
  const clickHomeHandler = () => {
    navigate("/");
  };

  const dropDownMenuHandler = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <>
      <div className="mb-25 fixed top-0 z-40 flex w-full  items-center  justify-between bg-primary-color px-4 py-6 lg:px-20 ">
        <NavLinks />
        {!isActive ? (
          <AiOutlineArrowDown
            aria-label="Open Menu "
            tabIndex="0"
            onClick={dropDownMenuHandler}
            className="cursor-pointer text-2xl text-white duration-150 hover:scale-[1.2] xsm:text-4xl lg:hidden "
          />
        ) : (
          <AiOutlineArrowUp
            aria-label="Close Menu "
            tabIndex="0"
            onClick={dropDownMenuHandler}
            className="cursor-pointer text-2xl text-white duration-150 hover:scale-[1.2] xsm:text-4xl lg:hidden "
          />
        )}

        <div onClick={clickHomeHandler} className=" flex items-center ">
          <h1
            aria-label="home"
            tabIndex="0"
            className="cursor-pointer text-3xl  font-bold text-secondary-color xsm:text-4xl lg:mr-64"
          >
            Fashion
          </h1>
        </div>
        <div className="relative flex cursor-pointer items-center">
          <BsFillBagFill
            aria-label="Cart"
            tabIndex="0"
            className="text-2xl text-white xsm:text-4xl"
            onClick={clickBasketHandler}
          />
          <span
            onClick={clickBasketHandler}
            className={`absolute -left-1 top-2 flex h-5 w-5  items-center justify-center rounded-full bg-secondary-color text-white xsm:top-4 xsm:h-7 xsm:w-7 ${
              cartContext.isCartAnimating
                ? "scale-125 transition-transform duration-100"
                : ""
            }`}
          >
            {cartContext.totalNumberOfItems}
          </span>
        </div>
      </div>
      {isActive && <MenuList />}
    </>
  );
};

export default Navbar;

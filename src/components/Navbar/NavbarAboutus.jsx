import { useContext,  } from "react";
import { BsFillBagFill } from "react-icons/bs";
import CartContext from "../../store/cart-context";
import { useNavigate } from "react-router-dom";
import NavLinks from "./NavLinks";
const NavbarAboutus = () => {
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();
  const clickBasketHandler = () => {
    navigate("/cart");
  };
  const clickHomeHandler = () => {
    navigate("/");
  };


  return (
    <>
      <div
        className="mb-25  lg:px-20 fixed top-0 z-50 flex  w-full  items-center justify-between px-4 py-6 "
      >
        <NavLinks />
        

        <div onClick={clickHomeHandler} className=" flex items-center ">
          <h1 className="text-secondary-color lg:mr-64  cursor-pointer text-3xl font-bold xsm:text-4xl">
            Zalando
          </h1>
        </div>
        <div className="relative flex cursor-pointer items-center">
          <BsFillBagFill
            className="text-2xl text-white xsm:text-4xl"
            onClick={clickBasketHandler}
          />
          <span
            onClick={clickBasketHandler}
            className={`bg-secondary-color absolute -left-1 top-2 flex h-5  w-5 items-center justify-center rounded-full text-white xsm:top-4 xsm:h-7 xsm:w-7 ${
              cartContext.isCartAnimating
                ? "scale-125 transition-transform duration-100"
                : ""
            }`}
          >
            {cartContext.totalNumberOfItems}
          </span>
        </div>
      </div>
  
    </>
  );
};

export default NavbarAboutus;

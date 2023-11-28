import { useContext } from "react";
import Button from "../UI/Button/Button";
import CartContext from "../../store/cart-context";
const Item = ({ item }) => {
  const cartContext = useContext(CartContext);
  const handleAddtoCart = (name, price, img) => {
    cartContext.addItems(name, price, img);
  };

  return item.map(({ name, price, id, img }) => (
    <div
      className="mx-auto mb-11 mt-14 flex w-[180px]  flex-col items-center justify-center overflow-hidden rounded-xl bg-slate-600 py-6 shadow-2xl xsm:w-[220px]  "
      key={id}
    >
      <img
        className="h-[200px] max-w-[160px]  rounded-xl xsm:w-full"
        src={img}
        alt={name}
      />
      <h3 className="p-1 font-bold text-white">{name}</h3>
      <p className="mb-1 text-lg text-white ">{price}$</p>
      <Button
        disabled={cartContext.isProductInCart(name)}
        className={`rounded-xl px-6 py-1 ${
          cartContext.isProductInCart(name)
            ? "bg-lime-400 hover:bg-lime-400 "
            : "bg-secondary-color hover:bg-secondary-color-hover"
        }`}
        onClick={() => handleAddtoCart(name, price, img)}
      >
        {cartContext.isProductInCart(name) ? "Added " : "Add to cart"}
      </Button>
    </div>
  ));
};

export default Item;

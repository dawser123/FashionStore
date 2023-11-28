import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button/Button";
import { MdDelete } from "react-icons/md";
import Modal from "../UI/Modal/Modal";
const Cart = () => {
  const cartContext = useContext(CartContext);
  const [orderDone, setOrderDone] = useState(false);
  const onAddItem = (name) => {
    cartContext.increaseNumberOfIitem(name);
  };
  const onRemoveItem = (name) => {
    cartContext.decreaseNumberOfItem(name);
  };
  const onDeleteItem = (name) => {
    cartContext.deleteItem(name);
  };
  const handleOrder = () => {
    cartContext.orderItems()
    setOrderDone(true);

  };
  return (
    <div className="mt-[90px] px-3">
      <h1 className="center mb-10 text-center text-xl font-bold text-white ">
        Shopping Cart
      </h1>

      {cartContext.totalNumberOfItems ? (
        <>
          <ul className=" mx-1 my-10 max-h-[360px] overflow-y-scroll rounded-xl bg-slate-950 p-5 sm:mx-auto  sm:max-h-[650px] m:max-w-[1200px] ">
            {cartContext.items.map((item) => (
              <li
                className=" my-10 flex rounded-xl bg-slate-700 m:mx-24"
                key={item.name}
              >
                <img
                  className="h-[100px] w-full max-w-[100px] rounded-xl p-1"
                  src={item.img}
                  alt={item.name}
                />
                <div className="m-auto flex flex-col">
                  <div className="text-center  text-white">
                    <p className="text-xl font-bold">{item.name}</p>
                    <p>{item.price}$</p>
                  </div>
                  <div className="flex items-center justify-end  text-white">
                    <Button
                      className="w-[40px]"
                      onClick={() => onRemoveItem(item.name)}
                    >
                      -
                    </Button>
                    <p className=" mx-1 font-bold">x {item.numberOfItems}</p>
                    <Button
                      className="w-[40px]  "
                      onClick={() => onAddItem(item.name)}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <MdDelete aria-label="Remove item from cart"
                  className="transit my-auto cursor-pointer text-white duration-200 hover:text-slate-900"
                  size={28}
                  onClick={() => onDeleteItem(item.name)}
                >
                
                </MdDelete>
              </li>
            ))}
          </ul>
          <p className="text-center text-2xl text-white">
            Total price:
            <span className="mx-2 text-3xl font-bold text-secondary-color">
              {cartContext.totalCost}
            </span>
            $
          </p>
          <button
            onClick={handleOrder}
            className="bg-color mx-auto my-10  block w-[50%] cursor-pointer rounded-xl bg-secondary-color py-2 text-3xl font-bold text-white transition duration-200 hover:bg-secondary-color-hover m:max-w-[20%]"
          >
            Order
          </button>
        </>
      ) : (
        <p className="my-60 text-center text-3xl font-bold text-white ">
          Your cart is empty
        </p>
      )}
      {orderDone && (
        <Modal
          title="Thanks for shopping!"
          onClose={() => {
            setOrderDone(false);
          }}
        >
          <Button
            onClick={() => {
              setOrderDone(false);
            }}
            className="mx-auto my-auto mt-3 block w-full max-w-[80%] p-2  "
          >
            ok
          </Button>
        </Modal>
      )}
    </div>
  );
};

export default Cart;

import { createContext, useEffect, useState } from "react";

const CartContext = createContext({
  items: [],
  numberOfItems: 0,
  totalNumberOfItems: 0,
  increaseNumberOfIitem: () => {},
  decreaseNumberOfItem: () => {},
  deleteItem: () => {},
  isCartAnimating: false,
  isProductInCart: () => {},
  orderItems: () => {},
});
const cartFromLocalStorege = JSON.parse(
  localStorage.getItem("cartItems") || "[]",
);

export const CartContextProvider = ({ children }) => {
  const [isCartAnimating, setIsCartAnimating] = useState(false);
  const [items, setItems] = useState(cartFromLocalStorege);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems"));
    console.log("Getting items from localStorage:", storedItems);
    setItems(storedItems);
  }, []);

  const addItems = (name, price, img) => {
    const existingItem = items.find((item) => item.name == name);

    if (existingItem) {
      existingItem.numberOfItems += 1;

      setItems([...items]);
    } else {
      setItems((prevItems) => [
        ...prevItems,
        { name, price, numberOfItems: 1, img },
      ]);
    }

    setIsCartAnimating(true);
    setTimeout(() => {
      setIsCartAnimating(false);
    }, 300);
  };
  const isProductInCart = (name) => {
    return items.some((item) => item.name === name);
  };

  const totalCost = items.reduce((total, item) => {
    return total + item.price * item.numberOfItems;
  }, 0);

  const totalNumberOfItems = items.reduce((total, item) => {
    return total + item.numberOfItems;
  }, 0);
  const increaseNumberOfIitem = (name) => {
    const updatedItems = items.map((item) => {
      if (item.name === name) {
        return { ...item, numberOfItems: item.numberOfItems + 1 };
      }
      return item;
    });

    setItems(updatedItems);
  };

  const decreaseNumberOfItem = (name) => {
    const updateItems = items
      .map((item) => {
        if (item.name === name) {
          return { ...item, numberOfItems: item.numberOfItems - 1 };
        }
        return item;
      })
      .filter((item) => item.numberOfItems > 0);
    setItems(updateItems);
  };

  const deleteItem = (name) => {
    const updatedItems = items.filter((item) => item.name !== name);
    setItems(updatedItems);
  };

  const orderItems = () => {
    setItems([]);
  };
  const dataProvider = {
    items,
    addItems,
    totalCost,
    totalNumberOfItems,
    increaseNumberOfIitem,
    decreaseNumberOfItem,
    deleteItem,
    isCartAnimating,
    isProductInCart,
    orderItems,
  };

  return (
    <>
      <CartContext.Provider value={dataProvider}>
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartContext;

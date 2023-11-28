import Item from "../Item/Item";
import ProductGrid from "../UI/Card/ProductGrid";

const Shoes = () => {
  const products = [
    {
      name: "Shoes 1",
      price: 10,
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
      id: 6,
    },
    {
      name: "Shoes 2",
      price: 50,
      img: " https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8fDA%3D ",
      id: 7,
    },
    {
      name: "Shoes 3",
      price: 50,
      img: " https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww ",
      id: 8,
    },
    {
      name: "Shoes 4",
      price: 50,
      img: "  https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNob2VzfGVufDB8fDB8fHww",
      id: 9,
    },
    {
      name: "Shoes 5",
      price: 50,
      img: " https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHNob2VzfGVufDB8fDB8fHww ",
      id: 10,
    },
  ];
  return (
    <>

      <ProductGrid title="Shoes">
        <Item item={products} />
      </ProductGrid>
    </>
  );
};

export default Shoes;

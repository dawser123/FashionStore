import Item from "../Item/Item";
import ProductGrid from "../UI/Card/ProductGrid";

const Watches = () => {
  const products = [
    {
      name: "Watch 1",
      price: 10,
      img: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHx8MA%3D%3D",
      id: 11,
    },
    {
      name: "Watch 2",
      price: 100,
      img: "https://images.unsplash.com/photo-1594576722512-582bcd46fba3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2hlc3xlbnwwfHwwfHx8MA%3D%3D",
      id: 12,
    },
    {
      name: "Watch 3",
      price: 100,
      img: " https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D    ",
      id: 13,
    },
    {
      name: "Watch 4",
      price: 100,
      img: " https://images.unsplash.com/photo-1619134778706-7015533a6150?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D   ",
      id: 14,
    },
    {
      name: "Watch 5",
      price: 100,
      img: " https://images.unsplash.com/photo-1612817159623-0399784fd0ce?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D  ",
      id: 15,
    },
  ];
  return (
    <>
     
      <ProductGrid title="Watches">
        <Item item={products} />
      </ProductGrid>
    </>
  );
};

export default Watches;

import Item from "../Item/Item";
import ProductGrid from "../UI/Card/ProductGrid";
const Clothes = () => {
  const products = [
    {
      name: "T-shirt 1",
      price: 5,
      img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
      id: 1,
    },
    {
      name: "T-shirt 2",
      price: 5,
      img: "https://images.unsplash.com/photo-1618354691438-25bc04584c23?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D  ",
      id: 2,
    },
    {
      name: "T-shirt 3",
      price: 5,
      img: " https://images.unsplash.com/photo-1636954935833-80bdb8d2fcb2?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D ",
      id: 3,
    },
    {
      name: "T-shirt 4",
      price: 5,
      img: " https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHQlMjBzaGlydCUyMG1vY2t1cHxlbnwwfHwwfHx8MA%3D%3D ",
      id: 4,
    },
    {
      name: "T-shirt 5",
      price: 5,
      img: " https://images.unsplash.com/photo-1618354691551-44de113f0164?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHQlMjBzaGlydCUyMG1vY2t1cHxlbnwwfHwwfHx8MA%3D%3D ",
      id: 5,
    },
  ];
  return (
    <>
      <ProductGrid title="Clothes">
        <Item item={products} />
      </ProductGrid>
    </>
  );
};
export default Clothes;

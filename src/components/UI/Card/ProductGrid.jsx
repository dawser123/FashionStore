const ProductGrid = ({ children, title }) => {
  return (
    <div className="mt-40 ">
      <h1 className="text-center  text-3xl font-bold text-white">{title}</h1>
      <div className=":grid-cols-3 mx-auto max-w-5xl gap-3 xsm:grid xsm:grid-cols-2 m:grid-cols-3">
        {children}
      </div>
    </div>
  );
};

export default ProductGrid;

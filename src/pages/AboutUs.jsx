const NavbarShop = () => {
  return (
    <>
      <div className=" relative mt-24 h-[200px] w-full xsm:h-[250px]  m:h-[300px]">
        <div className="h-full w-full">
          <div className="absolute h-full w-full bg-black/40 bg-gradient-to-tl from-black"></div>
          <img
            className="h-full w-screen object-cover   "
            src="https://cdn.pixabay.com/photo/2013/11/14/12/34/neckties-210347_1280.jpg"
            alt="clothes"
          />
        </div>
        <div className="absolute left-0 top-0 h-full w-full"></div>
      </div>
      <h1 className="my-10 text-center text-2xl font-bold text-white m:text-2xl">
        About us
      </h1>
      <div className="mx-auto flex max-w-lg flex-col items-start justify-center px-10 m:text-lg ">
        <div>
          <p className="mb-8 text-secondary-color">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda,
            ab enim consectetur optio delectus inventore architecto numquam
            itaque omnis quis.
          </p>
          <p className="text-white ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda,
            ab enim consectetur optio delectus inventore architecto numquam
            itaque omnis quis.
          </p>
        </div>
        <div className=" my-20 flex flex-col text-white ">
          <h2 className="text-2xl font-bold text-secondary-color">Adress:</h2>
          <div className="mt-3">
            <p>Zalando</p>
            <p>Karl Johans gt. 1, 0154</p>
            <p>Oslo</p>
            <p>Norway</p>
            <p>Phone: 12345678</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarShop;

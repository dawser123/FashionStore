import { Link } from "react-router-dom";

const HeadCard = ({ name, img, path, }) => {
  return (
    <>
      <div className="mx-4 my-10 flex  max-w-[320px] flex-col rounded-xl bg-slate-600 font-bold uppercase shadow-xl ">
        <figure className="px-5 pt-5">
          <img src={img} alt={name} className="rounded-xl m:h-[200px]" />
        </figure>
        <h1 className="py-10 text-center text-2xl text-white">{name}</h1>
        <Link to={path}>
          <button className="w-[100%] bg-secondary-color py-5 uppercase hover:bg-secondary-color-hover rounded-lg text-white transition bg-color duration-200 ">
            See products
          </button>
        </Link>
      </div>
    </>
  );
};

export default HeadCard;

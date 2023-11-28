import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShirt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className=" mt-auto flex items-center justify-evenly  bg-slate-900 py-6 m:justify-center ">
      <FontAwesomeIcon
        icon={faShirt}
        className="text-5xl text-white xsm:text-6xl m:mr-5"
      />
      <div className="flex  flex-col items-start justify-center gap-4 text-sm uppercase text-white m:flex-row ">
        <Link
          className="relative cursor-pointer after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-0 after:bg-secondary-color after:transition-all after:duration-300 hover:after:w-full  "
          to="/aboutus"
        >
          about us
        </Link>
        <Link
          className="relative cursor-pointer after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-0 after:bg-secondary-color after:transition-all after:duration-300 hover:after:w-full  "
          to="/contact"
        >
          contact us
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

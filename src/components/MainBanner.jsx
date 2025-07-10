import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const MainBanner = () => {
  return (
    <div className="relative">
      <img
        src={assets.main_banner_bg}
        alt="banner"
        className="w-full hidden md:block"
      />
      <img
        src={assets.main_banner_bg_sm}
        alt="banner"
        className="w-full md:hidden"
      />
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center px-4 pb-24 md:pb-0 md:pl-20 lg:pl-32 text-gray-900">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center md:text-left max-w-[90%] md:max-w-xl lg:max-w-4xl tracking-tight">
          Your Trusted Online Farmers’ Market <br className="hidden md:block" />
          <span> Rooted in Nature, Driven by Purpose.</span>
        </h1>

        <div className="flex items-center mt-6 font-medium space-x-4">
          <Link
            to={"/products"}
            className="group flex items-center gap-2 px-2 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer"
          >
            Shop Now
            <img
              className="md:hidden transition-transform group-focus:translate-x-1"
              src={assets.white_arrow_icon}
              alt="arrow"
            />
          </Link>

          <Link
            to={"/products"}
            className="group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer"
          >
            Explore deals
            <img
              className="transition-transform group-hover:translate-x-1"
              src={assets.black_arrow_icon}
              alt="arrow"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;

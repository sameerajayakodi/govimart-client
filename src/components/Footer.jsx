import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="px-2 md:px-8 font-medium bg-primary/30 lg:px-12 xl:px-16 pt-8 w-full text-gray-500">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <div className="md:max-w-96">
          <img
            src={assets.logo}
            alt="logo"
            className="cursor-pointer"
            onClick={() => navigate("/")}
          />
          <p className="mt-6 text-sm">
            GoviMart is a trusted platform that connects local farmers directly
            with customers. Farmers can easily list their fresh produce for
            sale, while buyers enjoy convenient access to quality goods at fair
            prices — supporting local agriculture with every purchase.
          </p>
        </div>

        <div className="flex-1 flex items-start md:justify-end gap-20">
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/all-products">All Products</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+94 770309842</p>
              <p>sameerajayakodi456@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-4 text-center text-xs md:text-sm pb-5">
        Copyright 2025 © GoviMart. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;

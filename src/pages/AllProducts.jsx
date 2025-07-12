import { useState } from "react";
import { useAppContext } from "../context/AppContext";

const AllProducts = () => {
  const { product } = useAppContext();
  const [filteredProducts, setFilteredProducts] = useState();
  return (
    <div className="mt-16  flex flex-col">
      <div className="flex flex-col items-end w-max">
        <p className="text-2xl font-medium md:mx-20 mx-4 uppercase">
          All Products
        </p>
      </div>

      <div></div>
    </div>
  );
};

export default AllProducts;

import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import ProductCard from "./../components/ProductCard";

const AllProducts = () => {
  const { products, searchQuery } = useAppContext();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (searchQuery?.length > 0) {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [products, searchQuery]);

  return (
    <div className="mt-16 flex flex-col items-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl">
        <p className="text-2xl font-medium uppercase mb-6">All Products</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-7xl justify-items-center auto-rows-fr">
        {filteredProducts
          .filter((product) => product.inStock)
          .map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default AllProducts;

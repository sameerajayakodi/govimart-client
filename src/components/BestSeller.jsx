import { useAppContext } from "../context/AppContext";
import ProductCard from "./ProductCard";

const BestSeller = () => {
  const { products } = useAppContext();
  return (
    <div className="mt-16 md:mx-20 mx-4">
      <p className="text-2xl md:text-3xl font-medium">Best Sellers</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6 place-items-center">
        {products
          .filter((product) => product.inStock)
          .slice(0, 5)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default BestSeller;

import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const ProductCard = ({ product }) => {
  // eslint-disable-next-line no-unused-vars
  const { currency, addToCart, removeFromCart, cartItems, navigate } =
    useAppContext();

  return (
    product && (
      <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden min-w-56 max-w-56 w-full">
        {/* Image Container */}
        <div className="relative cursor-pointer bg-primary/5 px-4 py-6 flex items-center justify-center">
          <img
            className="group-hover:scale-105 transition-transform duration-300 max-w-26 md:max-w-36 object-contain"
            src={product.image[0]}
            alt={product.name}
          />
          {/* Hover overlay effect */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 rounded-t-xl"></div>
        </div>

        {/* Content Container */}
        <div className="p-4 space-y-3">
          {/* Category */}
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            {product.category}
          </div>

          {/* Product Name */}
          <h3 className="text-gray-900 font-semibold text-base leading-tight line-clamp-2 min-h-[2.5rem]">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-0.5">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <img
                    key={i}
                    src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                    className="w-3.5 h-3.5"
                    alt="star"
                  />
                ))}
            </div>
            <span className="text-sm text-gray-600 ml-1">(4.0)</span>
          </div>

          {/* Price and Cart Section */}
          <div className="flex items-center justify-between pt-2">
            {/* Price */}
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold text-gray-900">
                  {currency}${product.offerPrice}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  {currency}${product.price}
                </span>
              </div>
              <div className="text-xs text-green-600 font-medium">
                Save {currency}$
                {(product.price - product.offerPrice).toFixed(2)}
              </div>
            </div>

            {/* Cart Controls */}
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="flex-shrink-0"
            >
              {!cartItems[product._id] ? (
                <button
                  className="flex items-center justify-center gap-1.5 bg-primary hover:bg-primary/90 text-white font-medium px-3 py-2 rounded-lg transition-colors duration-200 text-sm shadow-sm hover:shadow-md"
                  onClick={() => addToCart(product._id)}
                >
                  <img className="w-4 h-4 " src={assets.cart_icon} alt="cart" />
                  Add
                </button>
              ) : (
                <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden">
                  <button
                    onClick={() => {
                      removeFromCart(product._id);
                    }}
                    className="flex items-center justify-center w-8 h-8 text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors duration-200 font-medium"
                  >
                    −
                  </button>
                  <span className="flex items-center justify-center w-8 h-8 text-sm font-medium text-gray-900 bg-white border-x border-gray-200">
                    {cartItems[product._id]}
                  </span>
                  <button
                    onClick={() => {
                      addToCart(product._id);
                    }}
                    className="flex items-center justify-center w-8 h-8 text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors duration-200 font-medium"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductCard;

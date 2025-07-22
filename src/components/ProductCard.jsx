import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const ProductCard = ({ product }) => {
  const { currency, addToCart, removeFromCart, cartItems, navigate } =
    useAppContext();

  return (
    product && (
      <div
        onClick={() => {
          navigate(
            `/products/${product.category.toLowerCase()}/${product._id}`
          );
          scrollTo(0, 0);
        }}
        className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden min-w-72 max-w-80 w-full min-h-[400px] flex flex-col cursor-pointer"
      >
        {/* Image Container - Improved */}
        <div className="relative bg-gradient-to-br h-48 from-primary/5 to-primary/10  flex items-center justify-center  overflow-hidden">
          <div className="relative bg-gradient-to-br h-54 from-primary/5 to-primary/10 flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                className="group-hover:scale-110 transition-transform duration-500 ease-out w-full h-full object-cover"
                src={product.image[0]}
                alt={product.name}
                loading="lazy"
                onError={(e) => {
                  e.target.src =
                    assets.placeholder_image || "/placeholder-image.png";
                }}
              />
            </div>
          </div>

          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Optional: Add a subtle shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
        </div>

        {/* Content Container */}
        <div className="p-4 space-y-3 flex flex-col flex-grow">
          {/* Category */}
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            {product.category}
          </div>

          {/* Product Name */}
          <h3 className="text-gray-900 font-semibold text-base leading-tight line-clamp-2 min-h-[2.5rem] flex-grow-0">
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
          <div className="flex items-center justify-between pt-2 mt-auto">
            {/* Price */}
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold text-gray-900">
                  {currency}
                  {product.offerPrice}
                </span>
                {product.price > product.offerPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    {currency}
                    {product.price}
                  </span>
                )}
              </div>
              {product.price > product.offerPrice && (
                <div className="text-xs text-green-600 font-medium">
                  Save {currency}
                  {(product.price - product.offerPrice).toFixed(2)}
                </div>
              )}
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
                  className="flex items-center justify-center gap-1.5 bg-primary hover:bg-primary/90 text-white font-medium px-3 py-2 rounded-lg transition-all duration-200 text-sm shadow-sm hover:shadow-md hover:scale-105 active:scale-95"
                  onClick={() => addToCart(product._id)}
                  aria-label={`Add ${product.name} to cart`}
                >
                  <img className="w-4 h-4" src={assets.cart_icon} alt="" />
                  Add
                </button>
              ) : (
                <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden shadow-sm">
                  <button
                    onClick={() => {
                      removeFromCart(product._id);
                    }}
                    className="flex items-center justify-center w-8 h-8 text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors duration-200 font-medium"
                    aria-label="Remove one item"
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
                    aria-label="Add one item"
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

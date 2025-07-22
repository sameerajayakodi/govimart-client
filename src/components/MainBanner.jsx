import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const MainBanner = () => {
  const { currency } = useAppContext();
  return (
    <div className="relative min-h-[85vh] bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50 overflow-hidden ">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-lime-400 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-a z-10 container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[70vh]">
          {/* Content Section */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200 shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-700">
                Fresh • Organic • Local
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Fresh Groceries
                <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Delivered Daily
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
                Farm-fresh produce, pantry essentials, and organic goods
                delivered to your doorstep. Supporting local farmers while
                feeding your family.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>Same-day delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>100% Organic certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>Local farmers network</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link
                to="/products"
                className="group relative bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Shopping
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link
                to="/products"
                className="group flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold text-lg hover:border-green-500 hover:text-green-600 transition-all duration-300"
              >
                View Deals
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Visual Section */}
          <div className="relative order-1 lg:order-2">
            <div className="relative z-10">
              {/* Main product showcase */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  {/* Mock product cards */}
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-4 text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl">
                      🍎
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm">
                      Fresh Apples
                    </h3>
                    <p className="text-green-600 font-bold text-sm">
                      {currency}1600/1kg
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl">
                      🥬
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm">
                      Organic Lettuce
                    </h3>
                    <p className="text-green-600 font-bold text-sm">
                      {currency}1290/1kg
                    </p>
                  </div>
                </div>

                <div className="mt-4 bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Delivery time:</span>
                    <span className="font-semibold text-green-600">
                      30 mins
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-semibold text-sm shadow-lg animate-bounce">
                10% OFF
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white shadow-lg rounded-2xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">
                      Free Delivery
                    </p>
                    <p className="text-gray-500 text-xs">
                      On orders {currency}1500+
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-20 right-20 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-32 left-16 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 right-8 w-4 h-4 bg-lime-400 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16 text-white"
          fill="currentColor"
          viewBox="0 0 1440 54"
        >
          <path d="M0 54h1440V22.59C1440 10.082 1429.918 0 1417.41 0c-3.618 0-7.162.863-10.273 2.507L1175.83 118.96c-9.335 4.94-20.326 4.94-29.661 0L915.863 2.507C912.752.863 909.208 0 905.59 0c-12.508 0-22.59 10.082-22.59 22.59V54H0z" />
        </svg>
      </div>
    </div>
  );
};

export default MainBanner;

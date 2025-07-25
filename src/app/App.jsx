import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Loading from "../components/Loading";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import AddProduct from "../components/seller/AddProduct";
import Orders from "../components/seller/Orders";
import ProductList from "../components/seller/ProductList";
import SellerLogin from "../components/seller/SellerLogin";
import { useAppContext } from "../context/AppContext";
import AddAddress from "../pages/AddAddress";
import AllProducts from "../pages/AllProducts";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import MyOrders from "../pages/MyOrders";
import ProductCategory from "../pages/ProductCategory";
import ProductDetails from "../pages/ProductDetails";
import SellerLayout from "../pages/seller/SellerLayout";
import "./App.css";

function App() {
  const isSellerPath = useLocation().pathname.includes("seller");
  const { showUserLogin, isSeller } = useAppContext();
  return (
    <div className="text-default min-h-screen bg-white text-gray-700">
      {isSellerPath ? null : <Navbar />}
      {showUserLogin && <Login />}

      <ToastContainer
        closeButton="false"
        theme="colored"
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className={`${isSellerPath} ? "": ""`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add-address" element={<AddAddress />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/loader" element={<Loading />} />
          <Route
            path="/seller"
            element={isSeller ? <SellerLayout /> : <SellerLogin />}
          >
            {/* Nested inside SellerLayout */}
            <Route index element={<AddProduct />} />
            <Route path="product-list" element={<ProductList />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

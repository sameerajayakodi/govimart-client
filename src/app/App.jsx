import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import { useAppContext } from "../context/AppContext";
import AddAddress from "../pages/AddAddress";
import AllProducts from "../pages/AllProducts";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import MyOrders from "../pages/MyOrders";
import ProductCategory from "../pages/ProductCategory";
import ProductDetails from "../pages/ProductDetails";
import "./App.css";

function App() {
  const isSellerPath = useLocation().pathname.includes("seller");
  const { showUserLogin } = useAppContext();
  return (
    <div>
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
        </Routes>
      </div>
    </div>
  );
}

export default App;

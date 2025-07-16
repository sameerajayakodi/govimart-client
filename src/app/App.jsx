import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import { useAppContext } from "../context/AppContext";
import AllProducts from "../pages/AllProducts";
import Home from "../pages/Home";
import ProductCategory from "../pages/ProductCategory";
import "./App.css";

function App() {
  const isSellerPath = useLocation().pathname.includes("seller");
  const { showUserLogin } = useAppContext();
  return (
    <div>
      {isSellerPath ? null : <Navbar />}
      {showUserLogin && <Login />}

      <ToastContainer />

      <div className={`${isSellerPath} ? "": ""`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:category" element={<ProductCategory />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

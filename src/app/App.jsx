import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import "./App.css";

function App() {
  const isSellerPath = useLocation().pathname.includes("seller");
  return (
    <div>
      {isSellerPath ? null : <Navbar />}

      <div className={`${isSellerPath} ? "": ""`}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

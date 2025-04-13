import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Products  from "../pages/Products";
import KnowUs from "../pages/KnowUs";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/knowUs" element={<KnowUs/>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;

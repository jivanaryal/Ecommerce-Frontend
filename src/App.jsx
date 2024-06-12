import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Homepage from "./components/pages/homepage";
import SingleItem from "./components/pages/homepage/singleItem/SingleItem";
import Contact from "./components/pages/contact";
import Cart from "./components/pages/Cart/Cart";
import Signup from "./components/pages/signup/Signup";
import Login from "./components/pages/login/Login";
import About from "./components/pages/about";
import Products from "./components/pages/product/Products";
import ScrollToTop from "./hoc/Layout/ScrollToTop";

const App = () => {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="singleItem" element={<SingleItem />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/category" element={<Products />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;

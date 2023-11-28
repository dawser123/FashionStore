import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { CartContextProvider } from "./store/cart-context";
import Home from "./pages/Home";
import Cart from "./components/Cart/Cart";
import Clothes from "./components/Category/Clothes";
import Shoes from "./components/Category/Shoes";
import Watches from "./components/Category/Watches";
import Aboutus from "./pages/AboutUs";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
function App() {
  return (
    <CartContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/clothes" element={<Clothes />}></Route>
        <Route path="/shoes" element={<Shoes />}></Route>
        <Route path="/watches" element={<Watches />}></Route>
        <Route path="/aboutus" element={<Aboutus />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>

      <Footer />
    </CartContextProvider>
  );
}

export default App;

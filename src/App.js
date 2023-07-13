import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import MainPage from "./components/mainPage/MainPage";
import MainPage1 from "./components/mainPage1/MainPage1";
import Cart from "./components/cart/Cart";
import Cart1 from "./components/cart1/Cart1";
import Cart2 from "./components/cart2/Cart2";
import Address from "./components/cart/Address";
import Payment from "./components/cart/Payment";
import SussOder from "./components/cart/SussOder";


function App() {
  return (
    <div className="App">
      <Routes >
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/mainPage1" element={<MainPage1 />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/cart1" element={<Cart1 />}></Route>
        <Route path="/cart2" element={<Cart2 />}></Route>

        <Route path="/address" element={<Address />}></Route>
        <Route path="payment" element={<Payment />}></Route>
        <Route path="/sussOder" element={<SussOder />}></Route>
      </Routes>
      

      <Footer />
    </div>
  );
}

export default App;

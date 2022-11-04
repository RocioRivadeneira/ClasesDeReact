import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./context/cartContext";
import CartView from "./components/CartView/CartView";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailConteiner from "./components/ItemDetailContainer";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <NavBar title="Muebles Smith´s" />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route
                        path="/categoria/:category"
                        element={<ItemListContainer />}
                    />
                    <Route
                        path="/detail/:id"
                        element={<ItemDetailConteiner />}
                    />
                    <Route path="/cart" element={<CartView />} />
                    <Route path="/checkout/:orderId" element={<Checkout />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </CartContextProvider>
    );
}
export default App;

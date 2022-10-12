import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./context/cartContext";
import CartView from "./components/CartView/CartView.jsx";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailConteiner from "./components/ItemDetailContainer";
import Footer from "./components/Footer/Footer";


function App() {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <NavBar title="Muebles Smiths" />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ItemListContainer greeting="Nuestros productos" />
                        }
                    />
                    <Route
                        path="/categoria/:category"
                        element={<ItemListContainer />}
                    />
                    <Route
                        path="/detail/:id"
                        element={<ItemDetailConteiner />}
                    />
                    <Route
                        path="/cart"
                        element={<CartView />}
                    />

                </Routes>
                <Footer />
            </BrowserRouter>
        </CartContextProvider>
    );
}
export default App;

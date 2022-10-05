import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailConteiner from "./components/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";

function App() {
    return (
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
                <Route path="/detail/:id" element={<ItemDetailConteiner />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
export default App;

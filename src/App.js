import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailConteiner from "./components/ItemDetailContainer";
//import Footer from "./components/Footer/Footer";

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
            </Routes>
        </BrowserRouter>
    );
}

export default App;

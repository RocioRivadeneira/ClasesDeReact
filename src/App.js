import "./App.css";

import NavBar from "./components/NavBar/NavBar";
// import ItemListContainer from "./components/ItemListContainer";
import ItemDetailConteiner from "./components/ItemDetailContainer";

function App() {
    return (
        <div className="App">
            <NavBar title="Muebles Smiths" />
            {/* <ItemListContainer greeting="Nuestros productos" /> */}
            <ItemDetailConteiner />
        </div>
    );
}

export default App;

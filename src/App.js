import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
    return (
        <div className="App">
            <NavBar title="Muebles Smiths" />
            <ItemListContainer greeting="Nuestros productos" />
        </div>
    );
}

export default App;

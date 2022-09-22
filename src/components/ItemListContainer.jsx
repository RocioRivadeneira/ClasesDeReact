import React, { useState, useEffect } from "react";
import "./NavBar/navbar.css";
import "./Card/card.css";
import ItemList from "./Card/ItemList";
import getItems from "./services/mockAPI";

function ItemListContainer() {
    let [data, setData] = useState([]);

    useEffect(() => {
        getItems().then((respuestaDatos) => setData(respuestaDatos));
    }, []);

    return (
        <>
            <div className="container">
                <h2>Nuestros productos</h2>
                <ItemList data={data} />
            </div>
        </>
    );
}

export default ItemListContainer;

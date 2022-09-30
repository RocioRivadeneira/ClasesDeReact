import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemList from "./Card/ItemList";
import { getItems, getItemsByCategory } from "../services/mockAPI";

import "./NavBar/navbar.css";
import "./Card/card.css";

function ItemListContainer() {
    const { category } = useParams();

    let [data, setData] = useState([]);

    useEffect(() => {
        if (category === undefined) {
            getItems().then(setData);
        } else {
            getItemsByCategory(category).then(setData);
        }
    }, [category]);

    return (
        <div className="container">
            <h2>Nuestros productos</h2>
            <ItemList data={data} />
        </div>
    );
}

export default ItemListContainer;

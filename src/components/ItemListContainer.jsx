import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { DotSpinner } from "@uiball/loaders";
import Banner from "./Banner/Banner";

import { getItems, getItemsByCategory } from "../data/firestore";
import ItemList from "./Card/ItemList";

import "./NavBar/navbar.css";
import "./Card/card.css";

function ItemListContainer() {
    let [data, setData] = useState([]);

    const [isLoading, setIsLoading] = useState();
    const { category } = useParams();
    const { pathname } = useLocation();

    useEffect(() => {
        setIsLoading(true);

        let itemsPromise =
            category === undefined ? getItems() : getItemsByCategory(category);

        itemsPromise.then(setData).finally(() => setIsLoading(false));
    }, [category]);

    return (
        <>
            { pathname === "/" && <Banner /> }
            <div className="container">
                {isLoading ? (
                    <DotSpinner size={50} speed={0.9} color="black" />
                ) : (
                    <ItemList data={data} />
                )}
            </div>
        </>
    );
}

export default ItemListContainer;

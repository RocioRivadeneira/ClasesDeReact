import React from "react";
import { useNavigate } from "react-router-dom";

import Item from "./Item";

function ItemList(props) {
    const navigate = useNavigate();

    return (
        <div className="row justify-content-evenly">
            {props.data.map((item) => {
                return (
                    <Item
                        onClickImagen={() => navigate(`/detail/${item.id}`)}
                        key={item.id}
                        id={item.id}
                        img={item.img}
                        title={item.title}
                        detail={item.detail}
                        price={item.price}
                        stock={item.stock}
                    />
                );
            })}
        </div>
    );
}

export default ItemList;

import React from "react";

import Item from "./Item";

function ItemList(props) {
    return (
        <div className="row justify-content-around">
            {props.data.map((item) => {
                return (
                    <Item
                        className="col-4"
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

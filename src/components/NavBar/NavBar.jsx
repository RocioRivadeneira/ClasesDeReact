import React, { useContext } from "react";

import { Link } from "react-router-dom";

import CartWidget from "./CartWidget";
import UserWidget from "./UserWidget";
import { cartCtx } from "../../context/cartContext";

import "./navbar.css";

function NavBar({ title }) {
    const { getTotalItemsInCart } = useContext(cartCtx);
    const itemsCount = getTotalItemsInCart();

    return (
        <>
            <nav className="Navbar">
                <Link to="/">
                    <img
                        src="/assets/images/logo.png"
                        alt="logo"
                        className="logo"
                    />
                </Link>
                <h1>{title}</h1>

                <div className="NavSec Menu">
                    <Link to="/" className="link">
                        Home
                    </Link>
                    <Link to="/categoria/Exterior" className="link">
                        Muebles de Exterior
                    </Link>
                    <Link to="/categoria/Habitacion" className="link">
                        Habitacion
                    </Link>
                    <Link to="/categoria/Living" className="link">
                        Living
                    </Link>
                </div>

                <div className="NavSec user">
                    {itemsCount ? (
                        <Link to="/cart" className="User">
                            <CartWidget itemsCount={itemsCount} />
                        </Link>
                    ) : (
                        ""
                    )}

                    <Link to="/" className="User">
                        <UserWidget />
                        Usuario
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default NavBar;

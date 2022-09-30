import React from "react";

import { Link } from "react-router-dom";

import CartWidget from "./CartWidget";
import UserWidget from "./UserWidget";

import "./navbar.css";

function NavBar({ title }) {
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
                    <Link to="/categoria/Interior" className="link">
                        Muebles de Interior
                    </Link>
                    <Link to="/categoria/Cocina" className="link">
                        Cocina
                    </Link>
                    <Link to="/categoria/Living" className="link">
                        Living
                    </Link>
                </div>

                <div className="NavSec user">
                    <Link to="/" className="">
                        <CartWidget />
                        Carrito
                    </Link>

                    <Link to="/" className="">
                        <UserWidget />
                        Usuario
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default NavBar;

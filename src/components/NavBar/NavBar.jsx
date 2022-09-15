import "./navbar.css";
import CartWidget from "./CartWidget";
import UserWidget from "./UserWidget";

function NavBar({ title }) {
    return (
        <>
        <nav className="Navbar">
            <img src="/assets/images/logo.png" alt="logo" className="logo" />
            <h1>{title}</h1>

            <ul className="NavSec Menu">
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="#">Galeria</a>
                </li>
                <li>
                    <a href="#">Contacto</a>
                </li>
            </ul>

            <ul className="NavSec User">
                <li>
                    <a href="#">  
                    <CartWidget /> Carrito
                    </a>
                </li>
                <li>
                    <a href="#">
                    <UserWidget />Usuario</a>
                </li>
            </ul>
        </nav>
        
        </>
    );
}

export default NavBar;

import "./styles.css";

function NavBar({ title }) {
    return (
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
                    <a href="#">Entrar</a>
                </li>
                <li>
                    <a href="#">Carrito</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;

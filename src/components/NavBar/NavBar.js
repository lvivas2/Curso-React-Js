import CartWidget from "./CartWidget/CartWidget"
import { Link } from "react-router-dom"
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AccountMenu from "./CartWidget/CartWidget";
import SwipeableTemporaryDrawer from "./CartWidget/CartWidget";



function NavBar() {



    return (

        <>


            <header className="mail-header">
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <Link to="/" className="navbar-brand">
                                <img className="img-logo" src="/img/GYO.png" alt="..." />
                            </Link>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {/* Lista desplegable */}
                                <div className="dropdown">
                                    <a className="btn btn-dark dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        Productos
                                    </a>

                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li><Link to="/" className="dropdown-item" href="#">Todos los producos</Link></li>
                                        <li><Link to="category/women" className="dropdown-item" href="#">Mujer</Link></li>
                                        <li><Link to="category/men" className="dropdown-item" href="#">Hombre</Link></li>
                                        <li><Link to="category/boy" className="dropdown-item" href="#">Niño</Link></li>
                                    </ul>
                                </div>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active text-light" aria-current="page">Inicio</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">Nosotros</a>
                                </li>
                                <li className="nav-item Light">
                                    <a className="nav-link text-light" href="#">Contactos</a>
                                </li>
                                <li className="nav-item Light">
                                    <Link to="/cart" className="nav-link active text-light" aria-current="page">Carrito</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <SwipeableTemporaryDrawer />
                </nav>
            </header>
        </>
    )
}

export default NavBar 
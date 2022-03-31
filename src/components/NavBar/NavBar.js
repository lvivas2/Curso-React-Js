import React from "react"
import CartWidget from "./CartWidget/CartWidget"


function NavBar() {

    return (
        <header className="mail-header">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="#"><img className="img-logo" src="GYO.png" /></a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* Lista desplegable */}
                            <div className="dropdown">
                                <a className="btn btn-dark dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    Product
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">T-shirts</a></li>
                                    <li><a className="dropdown-item" href="#">Trousers</a></li>
                                    <li><a className="dropdown-item" href="#">Sweater</a></li>
                                </ul>
                            </div>
                            <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">About</a>
                            </li>
                            <li className="nav-item Light">
                                <a className="nav-link text-light" href="#">Contact</a>
                            </li>
                        </ul>

                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
                <CartWidget />
            </nav>
        </header>
    )
}

export default NavBar 
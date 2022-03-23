import React from "react"
import CartWidget from "./CartWidget/CartWidget"


function NavBar() {

    return (
        <header className="mail-header">
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a class="navbar-brand" href="#"><img className="img-logo" src="GYO-Vec.png" /></a>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">About</a>
                            </li>
                            <li class="nav-item Light">
                                <a class="nav-link text-light" href="#">Contact</a>
                            </li>
                        </ul>
                        <select className="Select-Nav">
                            <option value="Pantalon" selected>Products</option>
                            <option value="Remeras">Remeras</option>
                            <option value="Musculosas">Musculosas</option>
                            <option value="Buzos">Buzos</option>
                        </select>

                        


                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
                <CartWidget />
            </nav>
        </header>
    )
}

export default NavBar 
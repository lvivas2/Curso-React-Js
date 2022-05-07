import CartWidget from "./CartWidget/CartWidget"
import { Link } from "react-router-dom"
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AccountMenu from "./CartWidget/CartWidget";

import SwipeableTemporaryDrawer from "./dropdown/dropdown";


// MUI

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Divider from '@mui/material/Divider';

import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";




function NavBar() {

    useEffect(() => {
        window.addEventListener("scroll", onScrollWindow)
    })

    const [dropdown, setDropdown] = useState(false)
    const [classNav, setClassNav] = useState()
    const [addClass, setAddClass] = useState()
    const [addClassSubMenu, setAddClassSubMenu] = useState()

    const openDropdown = () => {
        setDropdown(!dropdown)
    }


    const onScrollWindow = () => {
        if (window.scrollY > 68) {
            setClassNav("ClaseAgregada")
        } else {
            setClassNav()
        }
    }


    const openClose = () => {
        if (addClass == "openPageMenu") {
            setAddClass()

        } else {
            setAddClass("openPageMenu")
        }
    }

    const openCloseSubMenu = () => {
        if (addClassSubMenu == "openSubMenu") {
            setAddClassSubMenu()
        } else {
            setAddClassSubMenu("openSubMenu")
        }
    }

    const removeEvent = (e) => {
        e.preventDefault()
    }


    return (

        <>
            <div className="container-navBar">
                <div className="container-info-nav">
                    <div className="info-nav">
                        <a href="#" className="info-nav-mail">
                            <span><MailIcon fontSize="mediun" /> info@domain.com</span>
                        </a>

                        <a href="#" className="info-nav-phone">
                            <span><PhoneIcon fontSize="mediun" />+1 234 4567 8910</span>
                        </a>

                    </div>
                    <div className="networks">

                        <a href="#"><InstagramIcon fontSize="mediun" /></a>
                        <a href="#"><FacebookIcon fontSize="mediun" /></a>
                        <a href="#"><TwitterIcon fontSize="mediun" /></a>
                    </div>
                </div>


                <header className={`container-header ${classNav}`}>
                    <Link to="/" className="nav-brand"><div >
                        <img className="img-logo" src="/img/GYO.png" alt="..." />
                    </div>
                    </Link>
                    <nav className="container-nav">
                        <ul className="container-ul">
                            <li><Link to="/" aria-current="page">Inicio</Link></li>
                            <li className="sub-menu">
                            
                                <Dropdown className="dropdown-nav" isOpen={dropdown} toggle={openDropdown} onClick={removeEvent}>
                                    <DropdownToggle caret className="DropdownToggle">
                                        Categorias
                                    </DropdownToggle>

                                    <DropdownMenu className="DropdownMenu">
                                    <Link to="category/boy"><DropdownItem>Niños </DropdownItem></Link>
                                    <Link to="category/women"><DropdownItem>Mujeres</DropdownItem></Link>
                                    <Link to="category/men"><DropdownItem>Hombres</DropdownItem></Link>
                                    </DropdownMenu>

                                </Dropdown>
                            
                            </li>
                            <li><a href="#events-section">Eventos</a></li>
                            <li><a href="#gallery-section">Nosotros</a></li>
                            <li><Link to="/error">Contactos</Link></li>
                            <li><Link to="/cart" aria-current="page">Carrito</Link></li>
                        </ul>
                        <div className="cartWidet-nav">
                            <CartWidget />
                        </div>
                    </nav>


                </header>
            </div>
            {/* <div className="paddinh-nav-page"></div> */}


        </>
    )
}

export default NavBar 
import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom"

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class CollapseNav extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };


    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }



    render() {

        return (
            <div>
                <Navbar color="faded" dark className='container-navbar-collapse' >

                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2 nav-toggler" />
                    {
                        this.state.collapsed ? <></> : <button className='btn-close-collapse' onClick={this.toggleNavbar}> <CloseIcon /> </button>

                    }




                    <Collapse  isOpen={!this.state.collapsed} navbar>
                        <div className='container-list'>
                            <div>
                                <img className="img-logo" src="/img/GYO.png" alt="..." />
                            </div>
                            <ul>
                                <li>
                                    <Link to='/'>Inicio</Link>
                                </li>
                                <li>
                                    <Dropdown className='container-collapse-category' direction="right" isOpen={this.state.btnDropright} toggle={() => { this.setState({ btnDropright: !this.state.btnDropright }); }}>
                                        <DropdownToggle caret className='collapse-category'>
                                            Categorias
                                        </DropdownToggle>
                                        <DropdownMenu className="DropdownMenu">
                                        <Link to="category/boy"><DropdownItem>Niños</DropdownItem></Link>
                                        <Link to="category/women"><DropdownItem>Mujer</DropdownItem></Link>
                                            <Link to="category/men"><DropdownItem>Hombre</DropdownItem></Link>
                                        </DropdownMenu>
                                    </Dropdown>
                                </li>
                                <li>
                                    <Link to='/'>Eventos</Link>
                                </li>
                                <li>
                                    <Link to='/'>Nosotros</Link>
                                </li>
                                <li>
                                    <Link to='/'>Contactos</Link>
                                </li>
                                <li>
                                    <Link to='/'>Carrito</Link>
                                </li>
                            </ul>
                            </div>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
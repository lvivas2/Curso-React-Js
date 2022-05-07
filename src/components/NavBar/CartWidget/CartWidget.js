import React, { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom";

import Count from "../../ItemListContainer/Count/Count";

// MUI


import MenuItem from '@mui/material/MenuItem';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



// New Cart


import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

// useContext
import CartContext from "../../../Contex/CartContex";


export default function SwipeableTemporaryDrawer() {

    const { quantity, cartProducts, deleteOne, clear, returnProduct, clearAndStock} = useContext(CartContext)


    const [state, setState] = useState(false);

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    
    const modalOff = () => {
        setState(false)
    }

   
    return (
        <>

            
            <div>
                {['right'].map((anchor) => (

                    <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)}><ShoppingCartIcon /> {cartProducts.length > 0 && quantity()}</Button>
                        <SwipeableDrawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                            onOpen={toggleDrawer(anchor, true)}
                        >
                            

                            <p className="cart-titel-card">Carrito de compras</p>
                            <Divider />

                            {cartProducts.map((cartProduct) => {
                                const { price, image, id, titel, quantity, stock } = cartProduct

                                return (

                                    <MenuItem key={id}>
                                        <div className="cart-item-modal">

                                            <div className="cart-modal-img">
                                                <img src={image} alt="..." />
                                            </div>
                                            <div className="cart-modal-info">
                                                <p> {titel} x {quantity}</p>
                                                <span>$ {price} </span>
                                            </div>
                                            <Divider />
                                            <Count stock={stock} countQuantity={quantity}/>
                                            <div className="cart-modal-action">
                                                <DeleteIcon onClick={() => deleteOne(id)} />
                                            </div>

                                        </div>
                                    </MenuItem>

                                )
                            })}
                            
                            <Divider />
                            {
                                cartProducts.length >= 1 ? (
                                    <div className="footer-modal-cart">
                                        <Link to="/cart" className="link-btn-custon"> <button onClick={() => modalOff()} className="btn-custon">Ver carrito </button></Link>
                                        <button className="btn-delateAll" onClick={() => clearAndStock()}>Vaciar el carrito</button>
                                    </div>) :
                                    (

                                        <div className="container-message-cart">

                                            <SentimentVeryDissatisfiedIcon className="face-icon-sad" />
                                            <h2 className="message-cart">No hay productos agregados en el carrito...</h2>

                                        </div>

                                    )
                            }

                        </SwipeableDrawer>
                    </React.Fragment>
                ))}
            </div>


        </>
    );
}




import React, { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import ModalCustom from "../../Modal/Modal";


// MUI

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



// New Cart

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

// useContext
import CartContext from "../../../Contex/CartContex";





// export default function AccountMenu() {

//     const { quantity, cartProducts, deleteOne } = useContext(CartContext)
//     const [anchorEl, setAnchorEl] = React.useState(null);

//     const open = Boolean(anchorEl);

//     const handleClick = (event) => {
//         setAnchorEl(event.currentTarget);
//     };
//     const handleClose = () => {
//         setAnchorEl(null);
//     };




//     return (
//         <>
//             {/* <div classNameName="container-cart-item"></div> */}
//             {/* 
//             <ShoppingCartIcon 
//                 onClick={handleClick}
//                 size="small"
//                 classNameName="icon-cart-widget"
//                 sx={{ ml: 2 }}
//                 aria-controls={open ? 'account-menu' : undefined}
//                 aria-haspopup="true"
//                 aria-expanded={open ? 'true' : undefined}/>

//           <p classNameName="quantityCart">{cartProducts.length > 0 && quantity()}</p>
//                 <Menu
//                     anchorEl={anchorEl}
//                     // id="account-menu"
//                     classNameName='cart-modal'
//                     open={open}
//                     onClose={handleClose}

//                     PaperProps={{
//                         elevation: 0,
//                         sx: {
//                             overflow: 'visible',
//                             filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
//                             mt: 1.5,

//                             '&:before': {
//                                 content: '""',
//                                 display: 'block',
//                                 position: 'absolute',
//                                 top: 0,
//                                 right: 8,
//                                 width: 10,
//                                 height: 10,
//                                 bgcolor: 'background.paper',
//                                 transform: 'translateY(-50%) rotate(45deg)',
//                                 zIndex: 0,
//                             },
//                         },
//                     }}
//                     transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//                     anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//                     >
//                         <p classNameName="cart-titel-card">Carrito de compras</p>
//                     <Divider />
//                     {cartProducts.map((cartProduct) => {
//                         const { price, image, id, titel, stock } = cartProduct

//                         return (
//                             <MenuItem classNameName="cart-item-modal" key={id}>
//                                 <div classNameName="cart-modal-img">
//                                     <img src={`./${image}`} alt="..." />
//                                 </div>
//                                 <div classNameName="cart-modal-info">
//                                     <p> {titel} </p>
//                                     <span>$ {price} </span>
//                                 </div>
//                                 <div classNameName="cart-modal-action">
//                                     <DeleteIcon onClick={() => deleteOne (id)}/>
//                                 </div>
//                             </MenuItem>
//                         )
//                     })}

//                     <Divider />
//                     <div classNameName="footer-modal-cart">
//                         <button classNameName="btn-custon"><Link to="/cart" classNameName="link-btn-custon">Ver carrito</Link> </button>
//                     </div>
//                 </Menu> */}


//         </>

//     );


export default function SwipeableTemporaryDrawer() {

    const { quantity, cartProducts, deleteOne, clear } = useContext(CartContext)


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

    console.log("State", state)
    const modalOff = () => {
        setState(false)
    }


    return (
        <>

            <p classNameName="quantityCart">{cartProducts.length > 0 && quantity()}</p>
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
                            {console.log("anchor", anchor)}

                            <p className="cart-titel-card">Carrito de compras</p>
                            <Divider />

                            {cartProducts.map((cartProduct) => {
                                const { price, image, id, titel, quantity } = cartProduct

                                return (

                                    <MenuItem key={id}>
                                        <div className="cart-item-modal">

                                            <div className="cart-modal-img">
                                                <img src={`./${image}`} alt="..." />
                                            </div>
                                            <div className="cart-modal-info">
                                                <p> {titel} x {quantity}</p>
                                                <span>$ {price} </span>
                                            </div>
                                            <div className="cart-modal-action">
                                                <DeleteIcon onClick={() => deleteOne(cartProducts)} />
                                            </div>

                                        </div>
                                    </MenuItem>

                                )
                            })}
                            {console.log("Cart Productos: ", cartProducts)}
                            <Divider />
                            {
                                cartProducts.length >= 1 ? (
                                    <div className="footer-modal-cart">
                                        <Link to="/cart" className="link-btn-custon"> <button onClick={() => modalOff()} className="btn-custon">Ver carrito </button></Link>
                                        <button className="btn-delateAll" onClick={() => clear()}>Vaciar el carrito</button>
                                    </div>) :
                                    (

                                        <div className="container-message-cart">

                                            <SentimentVeryDissatisfiedIcon className="face-icon-sad"/>
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




import React, { useContext } from "react"
import ItemCard from "../../ItemListContainer/ItemCard/ItemCard";
import { Link, useNavigate } from "react-router-dom";

// MUI

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


// useContext
import CartContext from "../../../Contex/CartContex";





export default function AccountMenu() {
    
    const { quantity, cartProducts, deleteOne } = useContext(CartContext)
    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    console.log("cartProducts: ", cartProducts)



    return (
        <div className="container-cart-item">

            <ShoppingCartIcon 
                onClick={handleClick}
                size="small"
                className="icon-cart-widget"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}/>
                
          <p className="quantityCart">{cartProducts.length > 0 && quantity()}</p>
                <Menu
                    anchorEl={anchorEl}
                    // id="account-menu"
                    className='cart-modal'
                    open={open}
                    onClose={handleClose}
                    
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                             
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 8,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <p className="cart-titel-card">Carrito de compras</p>
                    <Divider />
                    {cartProducts.map((cartProduct) => {
                        const { price, image, id, titel, stock } = cartProduct

                        return (
                            <MenuItem className="cart-item-modal" key={id}>
                                <div className="cart-modal-img">
                                    <img src={`./${image}`} alt="..." />
                                </div>
                                <div className="cart-modal-info">
                                    <p> {titel} </p>
                                    <span>$ {price} </span>
                                </div>
                                <div className="cart-modal-action">
                                    <DeleteIcon onClick={() => deleteOne (id)}/>
                                </div>
                            </MenuItem>
                        )
                    })}

                    <Divider />
                    <div className="footer-modal-cart">
                        <button className="btn-custon"><Link to="/cart" className="link-btn-custon">Ver carrito</Link> </button>
                    </div>
                </Menu>
            
            {/* <div className="quantityCart">
                {cartProducts.length > 0 && quantity()}
            </div> */}
        </div>
    );
}



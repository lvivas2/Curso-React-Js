import React, {useContext} from "react"
import ItemCard from "../../ItemListContainer/ItemCard/ItemCard";
import { Link, useNavigate } from "react-router-dom";

// MUI

// import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// useContext
import CartContext from "../../../Contex/CartContex";





export default function AccountMenu() {
    const { quantity , cartProducts } = useContext(CartContext)
    
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

        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

                <Tooltip title="Ver carrito">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 32, height: 32 }}>
                            <ShoppingCartIcon  className="cart-widget"/>
                            </Avatar>
                            
                    </IconButton>
                </Tooltip>
            </Box>
            
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                className='cart-modal'
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
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
                    <Divider/>
                    {cartProducts.map ( (cartProduct) => {
                        const {price, image, id, titel, stock} = cartProduct


                      
                        return (

                <MenuItem className="cart-item-modal" key={id}>
                    <div className="cart-modal-img">

                        <img src={`./${image}`}  alt="..."/>

                    </div>
                    <div className="cart-modal-info">
                        <p> {titel} </p>
                        <span>$ {price} </span>
                    </div>
                    <div className="cart-modal-action">
                        <DeleteIcon />
                    </div>
                </MenuItem>
                        )
            
                    })}
                        <Divider/>
                        <div className="footer-modal-cart">
                            <button className="btn-custon"><Link  to="/cart" className="link-btn-custon">Ver carrito</Link> </button>
                            

                        </div>
            </Menu>
        </React.Fragment>
      <div className="quantityCart">
      {cartProducts.length > 0 && quantity()}
          </div> 
</div>
    );
}
// const CartWidget = () => {
//     return (
    

//         <div className="cart-header">
//             {/* <button type="button" className="btn btn-outline-light">0
//                 <i className="bi bi-cart-check"></i>
//             </button> */}
//         </div>
//     )
// }

// export default CartWidget



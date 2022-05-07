import React, {useState} from "react";

// MUI
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';


import MenuIcon from '@mui/icons-material/Menu';




export default function SwipeableTemporaryDrawer({children, menuOne, menuTwe}) {

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

        console.log("state", state)

        
    };

    console.log("menuOne", menuOne)
    

    // console.log("state", state)
    
  

    return (

        <>

            {['left'].map((anchor) => (

                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}><MenuIcon /></Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        
                        <Divider />

                        
                        {children}

                    </SwipeableDrawer>
                </React.Fragment>
            ))}

        </>
    )

}
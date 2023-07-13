import "./Menu.css";
//import SignIn from "../../signUP_signIn/SignIn";

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import { Link} from "react-router-dom";
import { useState } from "react";



export default function Menu() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleCloseMenu = () => {
        setOpen(false);
    };




    return (
        <div>
            <IconButton
                size="large"
                edge="start"
                color="black"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                onClick={handleOpen}
            >
                <MoreVertIcon style={{ fontSize: 50 }} />
            </IconButton>

            <Modal
                open={open}
                onClose={handleCloseMenu}
            >
                <Box className='menu-modal' >

                    <Link to="/" style={{ textDecoration: 'none' }}  onClick={handleCloseMenu}>
                        <div >Home</div>
                    </Link>
                    <Link to="/mainPage1" style={{ textDecoration: 'none' }}  onClick={handleCloseMenu}>
                        <div >Nino Main Page – 1</div>
                    </Link>
                    <Link to="/cart1" style={{ textDecoration: 'none' }}  onClick={handleCloseMenu}>
                        <div >Cart – 1</div>
                    </Link>
                    <Link to="/cart2" style={{ textDecoration: 'none' }}  onClick={handleCloseMenu}>
                        <div >Cart – 2</div>
                    </Link>
                    
                    <div>User</div>
                </Box>
            </Modal>
        </div >
    );
}

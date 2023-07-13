
// import { Box, IconButton, Typography } from "@mui/material";
// import Avatar from '@mui/material/Avatar';
import "./Navbar.css"

import { IconButton } from "@mui/material"

import ninologo from "../../image/header/ninologo/ninologo.png"
import avtar from "../../image/header/Group 637/Group 637.png"
import cart from "../../image/header/Group 638/Group638.png"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from "react-router-dom"
import Menu from "./model/Menu"






function Navbar() {

    return (<div style={{ width: "100%", marginTop: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <header >
            <div className="left">
                <Link to="/">
                    <img style={{ width: "5em" }} src={ninologo} alt="niniLogo" />
                </Link>
            </div>

            <div className="right">
                <div className="right-left">
                    <Link style={{ textDecoration: 'none', color: "#707070" }} to="/mainPage1">
                        <p1>Section 1</p1>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: "#707070" }} to="/cart1">
                        <p1>Section 2</p1>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: "#707070" }} to="/cart2">
                        <p1>Section 3</p1>
                    </Link>

                    <div style={{ backgroundColor: "red", padding: "5px", textAlign: "center", width: "40px", borderRadius: "5px" }}>
                        <Link style={{ textDecoration: 'none', color: "white" }} to="/cart2">
                            <p style={{ margin: "0px" }}>Shop</p>
                        </Link>
                    </div>
                </div>

                <div className="right-middle">
                    <Link style={{ textDecoration: 'none', color: "#707070" }} to="/cart1">
                        <p>Blog</p>
                    </Link>
                </div>

                <div className="right-right">
                    <div ><p>SignUp</p></div>
                    <div><p>LogIn</p></div>
                    <IconButton>
                        <img src={avtar} />
                    </IconButton>
                    <Link to="/cart">
                        <IconButton>
                            <img src={cart} alt="cart" />
                        </IconButton>
                    </Link>
                    <div className="threeDot-menue">
                        {/* <IconButton >
                            <MoreVertIcon />
                        </IconButton> */}
                        <Menu />
                    </div>
                </div>
            </div>


        </header>
    </div>)
}

export default Navbar;
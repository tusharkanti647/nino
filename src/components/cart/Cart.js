
import Navbar from "../header/Navbar";
import "./Cart.css";

import layerImage from "../../image/cart/photo/LayerImg/LayerImage.png";


import { IconButton } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import { CheckBox } from "@mui/icons-material";
import SussOder from "./SussOder";
import { Link } from "react-router-dom";


function Cart() {

    return (<div className="cart-container" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Navbar />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "85%" }}>
            <div className="product-summary-container">
                <div className="product-container">
                    <div className="product">
                        <img src={layerImage} alt="product photo" />
                        <div style={{ color: "#707070", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                            <h4 style={{ margin: "3px" }}>Lorem Ipsum</h4>
                            <p style={{ fontSize: ".8em", margin: "3px" }}>Lorem Ipsum is simply dummy</p>
                        </div>
                        <div className="price" >XXXX</div>
                        <div className="close">
                            <IconButton style={{ backgroundColor: "#F1F9FF", color: "#0055FF" }}>
                                <ClearIcon />
                            </IconButton>
                        </div>
                    </div>
                    <div className="product">
                        <img src={layerImage} alt="product photo" />
                        <div style={{ color: "#707070", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                            <h4 style={{ margin: "3px" }}>Lorem Ipsum</h4>
                            <p style={{ fontSize: ".8em", margin: "3px" }}>Lorem Ipsum is simply dummy</p>
                        </div>
                        <div className="price" >XXXX</div>
                        <div className="close">
                            <IconButton style={{ backgroundColor: "#F1F9FF", color: "#0055FF" }}>
                                <ClearIcon />
                            </IconButton>
                        </div>
                    </div>
                    <div className="product">
                        <img src={layerImage} alt="product photo" />
                        <div style={{ color: "#707070", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                            <h4 style={{ margin: "3px" }}>Lorem Ipsum</h4>
                            <p style={{ fontSize: ".8em", margin: "3px" }}>Lorem Ipsum is simply dummy</p>
                        </div>
                        <div className="price" >XXXX</div>
                        <div className="close">
                            <IconButton style={{ backgroundColor: "#F1F9FF", color: "#0055FF" }}>
                                <ClearIcon />
                            </IconButton>
                        </div>
                    </div>
                    <div className="product">
                        <img src={layerImage} alt="product photo" />
                        <div style={{ color: "#707070", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                            <h4 style={{ margin: "3px" }}>Lorem Ipsum</h4>
                            <p style={{ fontSize: ".8em", margin: "3px" }}>Lorem Ipsum is simply dummy</p>
                        </div>
                        <div className="price" >XXXX</div>
                        <div className="close">
                            <IconButton style={{ backgroundColor: "#F1F9FF", color: "#0055FF" }}>
                                <ClearIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>

                <div className="oder-summary">
                    <p>Oder Summary</p>
                </div>
            </div>

            <Link style={{ textDecoration: 'none', backgroundColor: "#3979F8", color: "white", textAlign: "center", width: "300px", marginTop: "50px", borderRadius: "8px" }} to="/address">
                <div >
                    <p >Checkout</p>
                </div>
            </Link>
        </div>

    </div>)
}

export default Cart;
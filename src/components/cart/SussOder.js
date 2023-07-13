import { Link } from "react-router-dom";
import Navbar from "../header/Navbar";

function SussOder() {

    return (<div className="cart-container" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Navbar />

        <div className="suss-container" >
            <div style={{ textAlign: "center", color: "#94C83D", fontSize: "2em", fontWeight: "300" }}><p >Congratulations Your order has been succesfully placed</p></div>

            <div style={{ textAlign: "center", color: "#0C0C0C", fontSize: "1.4em", fontWeight: "300", marginTop: "60px", border: "1px solid #A9A9A9", height: "300px", width: "40%", borderRadius: "20px" }}><p>Order Summary</p></div>
            <Link style={{ textDecoration: 'none', color: "#3979F8", textAlign: "center", marginTop: "50px"  }} to="/">
            <div >
                <p >Back To Home</p>
            </div>
            </Link>
            <div style={{ backgroundColor: "#3979F8", color: "white", width: "300px", textAlign: "center", marginTop: "50px", borderRadius: "8px" }}>
                <p >Track Order</p>
            </div>
        </div>
    </div>)
}

export default SussOder;
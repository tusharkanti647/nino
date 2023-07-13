

import { Link } from "react-router-dom";
import payment1 from "../../image/cart/photo/Payment 1.svg";
import payment2 from "../../image/cart/photo/Payment2.svg";
import payment3 from "../../image/cart/photo/Payment3.svg";
import payment4 from "../../image/cart/photo/payment4.svg";
import Navbar from "../header/Navbar";

function Payment() {


    return (<div className="cart-container" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Navbar />

        <div className="payment">
            <div style={{ textAlign: "center" }}><h2 style={{ margin: "5px" }}>Payment</h2></div>
            <div style={{ textAlign: "center", fontSize: ".9em" }}><p style={{ margin: "0px" }}>Choose payment method below</p></div>

            <div className="payment-method">
                <img src={payment1} />
                <img src={payment2} />
                <img src={payment3} />
            </div>

            <div className="card-details">
                <form className="card-form">
                    <div className="inputFill">
                        <label for="cardNum">CARD NUMBER</label> <br />
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <input className="carDe" type="number" id="cardNum" name="cardNum" />
                            <img className="payment4" style={{}} src={payment4} />
                        </div>
                    </div>

                    <div className="inputFill">
                        <label for="cardName">CARDHOLDER NAME</label> <br />
                        <input className="carDe" type="text" id="cardName" name="cardName" />
                    </div>

                    <div className="inputFill">
                        <label for="expDate">EXPIRE DATE</label> <br />
                        <input className="carDe" type="date" id="expDate" name="expDate" />
                    </div>

                    <div className="inputFill">
                        <label for="cvv">CVV</label> <br />
                        <input className="cvv" type="number" id="cvv" name="cvv" />
                    </div>
                </form>
            </div>

            <Link style={{ textDecoration: 'none', backgroundColor: "#3979F8", color: "white", textAlign: "center", width: "300px", marginTop: "50px", borderRadius: "8px" }} to="/sussOder">
                <div >
                    <p >Place Order</p>
                </div>
            </Link>
        </div>
    </div>)
}

export default Payment;
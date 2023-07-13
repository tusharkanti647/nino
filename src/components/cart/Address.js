import { Link } from "react-router-dom";
import Navbar from "../header/Navbar";


function Address() {

    return (<div className="cart-container" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Navbar />
        {/* ------------------------------------------------------------------------------------------------------- */}
        <div className="addresses">
            <div className="shipping-address ">
                <div style={{ textAlign: "center", color: "#000000" }}>Shipping Address</div>
                <form className="address-form">
                    <div className="inputFill">
                        <label for="fullName">Full Name</label> <br />
                        <input className="ad" type="text" id="fullName" name="fullName" />
                    </div>

                    <div className="inputFill">
                        <label for="ad-li-1">Address Line 1</label> <br />
                        <input className="ad" type="text" id="ad-li-1" name="ad-li-1" />
                    </div>

                    <div className="inputFill">
                        <label for="ad-li-2">Address Line 2</label> <br />
                        <input className="ad" type="text" id="ad-li-2" name="ad-li-2" />
                    </div>

                    <div className="inputFill">
                        <label for="mNo">Mobile No.</label> <br />
                        <input className="ad" type="tel" id="mNo" name="mNo" />
                    </div>

                    <div style={{ display: "flex" }}>
                        <div className="inputFill">
                            <label for="city">City</label> <br />
                            <input className="ciZc" type="text" id="city" name="city" />
                        </div>
                        <div style={{ marginLeft: "20px" }} className="inputFill">
                            <label for="zCode">Zip Code</label> <br />
                            <input className="ciZc" type="text" id="zCode" name="zCode" />
                        </div>
                    </div>
                </form>
            </div>

            <div className="billing-address">
                <div style={{ textAlign: "center", color: "#000000" }}>Billing Address</div>
                <form className="address-form">
                    <div className="inputFill">
                        <label for="fullName">Full Name</label> <br />
                        <input className="ad" type="text" id="fullName" name="fullName" />
                    </div>

                    <div className="inputFill">
                        <label for="ad-li-1">Address Line 1</label> <br />
                        <input className="ad" type="text" id="ad-li-1" name="ad-li-1" />
                    </div>

                    <div className="inputFill">
                        <label for="ad-li-2">Address Line 2</label> <br />
                        <input className="ad" type="text" id="ad-li-2" name="ad-li-2" />
                    </div>

                    <div className="inputFill">
                        <label for="mNo">Mobile No.</label> <br />
                        <input className="ad" type="tel" id="mNo" name="mNo" />
                    </div>

                    <div style={{ display: "flex" }}>
                        <div style={{ marginLeft: "20px" }} className="inputFill">
                            <label for="city">City</label> <br />
                            <input className="ciZc" type="text" id="city" name="city" />
                        </div>
                        <div style={{ marginLeft: "20px" }}  className="inputFill">
                            <label for="zCode">Zip Code</label> <br />
                            <input className="ciZc" type="text" id="zCode" name="zCode" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div className="checkBox-checkout">
            <div>
                <input id="check" name="check" type="checkbox" />
                <label for="check">Billing Address Same As Shipping Address</label>
            </div>

            <Link style={{ textDecoration: 'none', backgroundColor: "#3979F8", color: "white", textAlign: "center", width: "300px", marginTop: "50px", borderRadius: "8px" }} to="/payment">
                <div >
                    <p >Proceed For Payment</p>
                </div>
            </Link>
        </div>
    </div>)
}

export default Address;
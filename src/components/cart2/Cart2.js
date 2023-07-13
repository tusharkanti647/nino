
import Navbar from "../header/Navbar";
import "./Cart2.css";

import stockPhotoHalloween from "../../image/cart2/stock-photo-halloween/stock-photo-halloween.png";
import vectorNotepad from "../../image/cart2/vector-notepad/vector-notepad.png";
import group715 from "../../image/cart2/Group715.svg";
import stockPhotoZhongshan from "../../image/cart2/stock-photo-zhongshan/stock-photo-zhongshan.png";
import group716 from "../../image/cart2/Group716.svg";
import stockVectorSteam from "../../image/cart2/stock-vector-steam/stock-vector-steam.png";
import vectorNotepad2 from "../../image/cart2/vector-notepad-2/vector-notepad-2111645_1280.png"
import group720 from "../../image/cart2/Group720.svg";
import stockPhotoToddler from "../../image/cart2/stock-photo-toddler/stock-photo-toddler.png";
import group721 from "../../image/cart2/Group721.svg";
import stockPhotoPreschooler from "../../image/cart2/stock-photo-preschooler/stock-photo-preschooler.png";
import vectorNotepad3 from "../../image/cart2/vector-notepad-3/vector-notepad-3.png"
import group722 from "../../image/cart2/Group722.svg";
import photoCuteLittleIndian from "../../image/cart2/stock-photo-cute-little-indian/stock-photo-cute-little-indian.png";




function Cart2() {
    return (<div className="cart2" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Navbar />
        <img className="cart1-banner-photo" src={stockPhotoHalloween} alt="stock-photo-halloween" />

        <div style={{ marginTop: "0px" }} className="banner-img-container">
            <img className="back-ground-img" src={vectorNotepad} />

            <div className="group715-img-description">
                <img className="group715" src={group715} />

                <div className="group715-description">
                    <p style={{ fontWeight: "300" }}>Designed for Re-Use</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                </div>
            </div>
            <img className="stockPhotoZhongshan" src={stockPhotoZhongshan} />

            <div className="group716-img-description">
                <img className="group716" src={group716} />

                <div className="group715-description">
                    <p style={{ fontWeight: "300" }}>Designed for Re-Use</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                </div>
            </div>
            <img className="stockVectorSteam" src={stockVectorSteam} />
        </div>

        <div style={{ marginTop: "0px" }} className="banner-img-container">
            <img className="back-ground-img" src={vectorNotepad2} />

            <div className="group720-img-description">
                <img className="group720" src={group720} />

                <div className="group715-description">
                    <p style={{ fontWeight: "300" }}>Designed for Re-Use</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                </div>
            </div>
            <img className="stockPhotoToddler" src={stockPhotoToddler} />

            <div className="group721-img-description">
                <img className="group721" src={group721} />

                <div className="group715-description">
                    <p style={{ fontWeight: "300" }}>Designed for Re-Use</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                </div>
            </div>
            <img className="stockPhotoPreschooler" src={stockPhotoPreschooler} />
        </div>

        <div style={{ marginTop: "0px" }} className="banner-img-container">
            <img className="back-ground-img" src={vectorNotepad3} />

            <div className="group722-img-description">
                <img className="group722" src={group722} />

                <div className="group715-description">
                    <p style={{ fontWeight: "300" }}>Designed for Re-Use</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                </div>
            </div>
            <img className="photoCuteLittleIndian" src={photoCuteLittleIndian} />

            <div style={{ position: "absolute",  backgroundColor: "#3979F8", color: "white", width: "300px", textAlign: "center", marginTop: "600px", borderRadius: "8px" }}>
                <p >Checkout</p>
            </div>
        </div>

    </div>)
}

export default Cart2;
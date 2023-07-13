import Navbar from "../header/Navbar";
import "./MainPage1.css";


import tan1 from "../../image/main_page1/photo/tan/tan1.png";
import vectorNotepad from "../../image/main_page1/photo/vector-notepad/vector-notepad.png";
import benWhite from "../../image/main_page1/photo/ben-white/ben-white.png";
import icon360Degree from "../../image/main_page1/photo/360-degree-icon/360-degree-icon-png-5.png";
import group620 from "../../image/main_page1/photo/Group620/Group 620.png";
import background from "../../image/main_page1/photo/background/background-1815001_1920.png";

function MainPage1() {

    return (<div className="main-page1">
        <Navbar />
        <div className="banner-img-container">
            <img className="back-ground-img" src={tan1} />
            <div className="button-description-top" >
                <p >Ignite your ideas with Lumino Lamp</p>
                <div ><p style={{ margin: "5px" }}>GET IT</p></div>

            </div>
        </div>

        <div style={{ marginTop: "0px" }} className="banner-img-container">
            <img className="back-ground-img" src={vectorNotepad} />
            <img className="ben-white-img" src={benWhite} />
            <div className="ben-white-description">
                <p><span style={{ fontSize: "1.3em" }}>Your child will learn</span> the basic concepts of electronics and mechanical joints by creating their own table lamp. using a few electronic components like battery, switches, LEDs</p>
            </div>
        </div>

        <div className="circle-container">
            <div className="circle-card">
                <div className="circle"></div>
                <p>Lorem Ipsum</p>
            </div>
            <div className="circle-card">
                <div className="circle"></div>
                <p>Lorem Ipsum</p>
            </div>
            <div className="circle-card">
                <div className="circle"></div>
                <p>Lorem Ipsum</p>
            </div>
        </div>

        <div className="product-details-container">
            <div className="img-container">
                <img id="icon360Degree" src={icon360Degree} alt="icon360Degree" />
                <img id="productImage" src={group620} alt="product image" />
            </div>
            <div className="product-description">
                <header style={{ fontSize: "1.2em", fontWeight: "500" }}>Lorem Ipsum is simply dummy text of the</header>
                <p>printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>

        <div style={{ marginTop: "0px" }} className="banner-img-container">
            <img className="back-ground-img" src={background} />
            <div style={{ position: "absolute", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <div style={{ textAlign: "center", borderRadius: "10px", backgroundColor: "#258464", color: "white", fontSize: "1.5em", width: "300px" }}><p style={{ margin: "10px" }}>BUY TODAY</p></div>
                <p>Get a flat 20% launch discount</p>
            </div>
        </div>
    </div>)
}

export default MainPage1;
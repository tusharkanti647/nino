import "./MainPage.css";

import Navbar from "../header/Navbar";
import svg68 from "../../image/main page/svg/Path 68.svg"
import svg69 from "../../image/main page/svg/Path 69.svg"
import svg70 from "../../image/main page/svg/Path 70.svg"
import maskGroup1 from "../../image/main page/photo/Mask Group 1/Mask Group 1.png"
import group639 from "../../image/main page/svg/Group 639.svg"
import video from "../../image/main page/photo/child-865116_1920 (1)/child-865116_1920.png"
import svg71 from "../../image/main page/svg/Path 71.svg"
import svg1346 from "../../image/main page/svg/Path 1346.svg"
import svg702 from "../../image/main page/svg/Group 702/Group 702.jpg"
import polygon5 from "../../image/main page/svg/Polygon 5.svg"
import background1 from "../../image/main page/photo/background-1815001_1920/background-1815001_1920.png"
import layer from "../../image/main page/photo/Layer 5 Image/Layer 5 Image.png"
import svg707 from "../../image/main page/photo/Group 707/Group 707.png"
import svg711 from "../../image/main page/photo/Group 711/Group711.png"

function MainPage() {

    return (<div className="main-page">
        <Navbar />
        <img src={svg70} alt="" style={{ zIndex: "1", position: "absolute", right: "0", top: "0", width: "10%" }} />

        <div className="top" style={{ width: "100%", marginTop: "50px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <div className="img-header-container">
                <div className="heder-container" >
                    <p style={{ fontSize: "2em", fontWeight: "200", margin: "0px", color: "#258464" }}>Play And Learn</p>
                    <p style={{ color: "#591495" }}><span style={{ fontSize: "1.3em", fontWeight: "600" }}>World's First Augmented Reality</span><br /> powered <span style={{ fontSize: "2em", fontWeight: "600" }}>TECH - ART KIT</span> <br /> for young innovators</p>
                </div>
                <div style={{ width: "60%", position: "relative", marginLeft: "3%" }} className="img-container">
                    <img style={{ width: "97%" }} src={maskGroup1} alt="" />
                    <img style={{ zIndex: "-1", position: "absolute", right: "12.5%", width: "100%" }} src={svg68} />
                    <img style={{ zIndex: "-2", position: "absolute", right: "15%", top: "-3%", width: "60%" }} src={svg69} />
                </div>
            </div>

            <div className="top-bottom" style={{ position: "relative", display: "flex" }}>
                <img src={group639} />

                <div>
                    <p style={{ textAlign: "center", fontSize: "10px" }}>Let your kids experience <br /> the virtual magic of Augmented Reality</p>
                    <div style={{ backgroundColor: "#258464", color: "white", textAlign: "center", padding: "5px", borderRadius: "6px" }}>GET YOUR FREE SAMPLE</div>
                </div>
            </div>
        </div>
        <div>
            <div className="video-description-container" style={{ position: "relative", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "200px" }}>
                <div className="video-container" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "75%" }} >
                    <img src={video} />
                    <div className="video-description-big"><p style={{ color: "#258464", fontSize: ".9em", textAlign: "center" }}>Specially crafted <spam style={{ fontSize: "1.4em" }}>STEAM (<spam style={{ color: "#DA5113" }}>Science, Technology, Engineering, Arts, Maths</spam> )</spam><br />
                        activity projects for kids to explore the concepts with a hands-on experience at home.</p></div>
                    <div className="video-description-small"><p style={{ color: "#258464", fontSize: ".9em", textAlign: "center" }}>Specially crafted <spam style={{ fontSize: "1.4em" }}>STEAM <br />(<spam style={{ color: "#DA5113" }}>Science, Technology, Engineering, Arts, Maths</spam> )</spam><br />
                        activity projects for kids to explore the concepts with a hands-on experience at home.</p></div>
                </div>
                <img style={{ zIndex: "-1", position: "absolute", right: "40%", top: "-27%", width: "50%" }} src={svg1346} />

                <div style={{ backgroundColor: "#258464", color: "white", fontSize: "1.4em", fontWeight: "200", textAlign: "center", borderRadius: "10px", marginTop: "35px", padding: "3px", width: "20%" }}>
                    BUY A KIT
                </div>
            </div>
        </div>

        <div className="today-offer" style={{ marginTop: "50px", border: "2px blue" }}>
            <div className="offer-container" style={{marginBottom:"100px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "75%" }} >

                {/* <img className="offers" src={svg702} /> */}
                <div className="offers">
                    <img className="steam" src={svg711} />
                    <img className="re-use" src={svg707} />
                </div>
                <div className="offers-small">
                    <img src={svg707} />
                    <img src={svg711} />
                </div>
                <img style={{ zIndex: "-1", position: "absolute", right: "-30%", width: "50%" }} src={polygon5} />

                <div className="buy-button" style={{}}>
                    BUY TOYDAY
                </div>
                <p>Get 20% lunch discount</p>
            </div>

            <div class="offers-product-container" style={{}}>

                <div className="products-cards-container" style={{}}>
                    <div className="products-cards-background"  >
                        <div className="products-cards" >
                            <img src={layer} style={{ marginTop: "20px" }} />
                            <p style={{ color: "#94C83D" }}>Nino Kit - 1</p>
                            <p >Lorem Ipsum <br /> dummy text of</p>

                            <div style={{ color: "#0055FF" }}>Vew More</div>

                            <div style={{ backgroundColor: "#FF860C", color: "white" }} >Add To Cart</div>
                        </div>
                    </div>

                    <div className="products-cards-background"  >
                        <div className="products-cards"  >
                            <img src={layer} style={{ marginTop: "20px" }} />
                            <p style={{ color: "#94C83D" }}>Nino Kit - 1</p>
                            <p >Lorem Ipsum <br /> dummy text of</p>

                            <div style={{ color: "#0055FF" }}>Vew More</div>

                            <div style={{ backgroundColor: "#FF860C", color: "white" }} >Add To Cart</div>
                        </div>
                    </div>

                    <div className="products-cards-background"  >
                        <div className="products-cards"  >
                            <img src={layer} style={{ marginTop: "20px" }} />
                            <p style={{ color: "#94C83D" }}>Nino Kit - 1</p>
                            <p >Lorem Ipsum <br /> dummy text of</p>

                            <div style={{ color: "#0055FF" }}>Vew More</div>

                            <div style={{ backgroundColor: "#FF860C", color: "white" }} >Add To Cart</div>
                        </div>
                    </div>

                    <div className="products-cards-background" >
                        <div className="products-cards" >
                            <img src={layer} style={{ marginTop: "20px" }} />
                            <p style={{ color: "#94C83D" }}>Nino Kit - 1</p>
                            <p >Lorem Ipsum <br /> dummy text of</p>

                            <div style={{ color: "#0055FF" }}>Vew More</div>

                            <div style={{ backgroundColor: "#FF860C", color: "white" }} >Add To Cart</div>
                        </div>
                    </div>
                </div>

                <div style={{ width: "75%", display: "flex", justifyContent: "space-around", marginTop: "60px" }}>
                    <div style={{ backgroundColor: "#FF250C", width: "30%", textAlign: "center", borderRadius: "5px", color: "white", padding: "5px" }}>Go to Cart</div>
                    <div style={{ backgroundColor: "#03A734", width: "30%", textAlign: "center", borderRadius: "5px", color: "white", padding: "5px" }}>Go to Cart</div>
                </div>

                <img className="backgroundImg" style={{ position: "absolute", width: "100%", zIndex: "-1" }} src={background1} />

            </div>

        </div>
    </div>)
}

export default MainPage;
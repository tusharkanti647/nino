import "./footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { blue } from "@mui/material/colors";
import { border } from "@mui/system";

const Footer = () => {

    // const year = new Date().getFullYear();
    // console.log(year);

    return (
        <footer>
            <div className="footer_container">
                <div className="footr_details">
                    <div className="footr_details_one">
                        <h3>CONTACT US</h3>
                        <p>Find a Store</p>
                    </div>
                    <div className="footr_details_one">
                        <h3>CUSTOMER RERVICE</h3>
                        <p>Odering & Payment</p>
                        <p>Contact Us</p>
                        <p>Shipping</p>
                        <p>Returns</p>
                        <p>FAQ</p>
                    </div>
                    <div className="footr_details_one forres">
                        <h3>INFORMATION</h3>
                        <p>About</p>
                        <p>Work With US</p>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                        <p>Press Enquiries</p>
                    </div>
                    <div className="footr_details_one forres">
                        <h3>Subscribe</h3>
                        <p>About Work With US Privacy Policy Terms & Conditions Press Enquiries</p>
                        <input type="email" id="email" name="email" />
                        <label for="email">Subscribe</label>
                    </div>
                </div>
                <div className="footr_details_one forres">
                    <h3>Get Social With Us</h3>
                    <div className="icon-wrapper">

                        <div id="facbook">
                            <FacebookIcon className="icon" />
                        </div>
                        <div id="twitter">
                            <TwitterIcon className="icon" />
                        </div>
                        <div id="instagram">
                            <InstagramIcon className="icon" />
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer

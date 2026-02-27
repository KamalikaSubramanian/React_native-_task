import React from "react";
import "./Footer.css";
import junip from "../Footer/assets/junip.jpg";
import footerStar from "../Footer/assets/footerStar.jpg";
import footerCal from "../Footer/assets/footerCal.jpg";
import footerLogo from "../Footer/assets/footerLogo.jpg";
import insta from "../Footer/assets/insta.jpg";
import fb from "../Footer/assets/fb.jpg";
import youtube from "../Footer/assets/youtube.jpg";
import twitter from "../Footer/assets/twitter.jpg";

function Footer() {
    return (
        <div className="footer">

            <div className="reviewed">
                Reviewed on <img src={junip} className="junip" />
            </div>

            <div className="footer-section">
                <h3>COFFEE</h3>
                <div className="footer-grid">
                    <div className="footer-column">
                        <div className="footer-item"><img src={footerCal} className="footerIcon" /> Incredible DEALS</div>
                        <div className="footer-item"><img src={footerStar} className="footerIcon" />  Premium Instant</div>
                        <div className="footer-item">Cold Brew</div>
                    </div>
                    <div className="footer-column">
                        <div className="footer-item">5-Minute Bags</div>
                        <div className="footer-item">Arabica Beans</div>
                        <div className="footer-item">Ready to Drink</div>
                    </div>
                </div>
            </div>

            <div className="footer-section">
                <h3>CURATED</h3>
                <div className="footer-grid">
                    <div className="footer-column">
                        <div className="footer-item"><img src={footerCal} className="footerIcon" />  Best Sellers</div>
                        <div className="footer-item">Deal of the Week</div>
                    </div>
                    <div className="footer-column">
                        <div className="footer-item">Merchandise</div>
                    </div>
                </div>
            </div>

            <div className="footer-section">
                <h3>SLEEPY OWL</h3>
                <div className="footer-grid">
                    <div className="footer-column">
                        <div className="footer-item reviews">
                            Reviews <span className="badge">1,056</span>
                        </div>
                        <div className="footer-item">About Us</div>
                        <div className="footer-item">Sustain Packs</div>
                        <div className="footer-item">Returns</div>
                        <div className="footer-item">Contact Us</div>
                    </div>
                    <div className="footer-column">
                        <div className="footer-item">Terms of Use</div>
                        <div className="footer-item">Compliance</div>
                        <div className="footer-item">Sitemap</div>
                        <div className="footer-item">Blog</div>
                    </div>
                </div>
            </div>

            <div className="story-section">
                <div className="owl-icons"><img src={footerLogo} className="footerLogo" /> </div>

                <p className="story-text">
                    Our journey started with three friends with a shared vision.
                    It was simple- introduce people to <i>real good coffee.</i>
                    Today, we’re making high-quality, freshly roasted coffee
                    accessible to everyone with our exclusive products.
                </p>


                <div className="newsletter">
                    <input type="text" placeholder="Email Newsletter" />
                    <button>→</button>
                </div>

                <div className="social-icons">
                    <span><img src={insta} /></span>
                    <span><img src={twitter} /></span>
                    <span className="mail"><b>@</b></span>
                    <span><img src={fb} /></span>
                    <span><img src={youtube} /></span>
                </div>

            </div>

        </div>
    );
}

export default Footer;
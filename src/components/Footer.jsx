import LogoImg from "../assets/LOGO.png"; // Updated asset reference name
import { Icon } from "./Icons";

function Footer() {
  return (
    <footer className="big-as-footer">
      <div className="footer-columns-grid">
        
        <div className="footer-brand-info">
          <div className="footer-logo">
            <img src={LogoImg} alt="DineSync Brand Logo" />
            <h3 className="logo-text">Dine<span>Sync</span></h3>
          </div>
          <p className="logo-subtext">
            Connecting restaurants and people for better dining experiences worldwide.
          </p>
        </div>

        <div className="footer-links-col">
          <h4>Product</h4>
          <a href="#works">How it works</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
        </div>

        <div className="footer-links-col">
          <h4>Company</h4>
          <a href="#about">About Us</a>
          <a href="#blog">Blog</a>
          <a href="#contacts">Contacts</a>
        </div>

        <div className="footer-links-col">
          <h4>Legal</h4>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>

        <div className="footer-links-col">
          <h4>Follow Us</h4>
          <div className="footer-socials-row">
            <a href="#fb" aria-label="Facebook"><Icon name="facebook" size={18} /></a>
            <a href="#ig" aria-label="Instagram"><Icon name="instagram" size={18} /></a>
            <a href="#tw" aria-label="X"><Icon name="x" size={18} /></a>
            <a href="#li" aria-label="LinkedIn"><Icon name="linkedin" size={18} /></a>
          </div>
        </div>

      </div>

      <div className="footer-copyright-bottom-strip">
        <p>© 2026 DineSync. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
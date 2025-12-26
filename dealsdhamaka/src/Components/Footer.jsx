import "./st/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <h3 className="footer-logo">DealDhamaka</h3>

        <p className="footer-text">
          Best deals. Best prices. Updated daily.
        </p>

        <div className="footer-socials">
          <a
            href="https://www.instagram.com/_nir_x?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://github.com/Technirbhay"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a href="nirbhaykeeda@gmail.com">
            Email
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} DealDhamaka. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;

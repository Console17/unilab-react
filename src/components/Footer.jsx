function Footer() {
  return (
    <footer>
      <div className="footer-registration">
        <h2>Register now so you don't miss our programs</h2>
        <div className="footer-email-input">
          <input type="text" placeholder="Enter your Email" />
          <button>Subscribe Now</button>
        </div>
      </div>
      <div className="footer-contacts">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Category</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="footer-socials">
          <img src="../../public/socials/facebook.svg" alt="facebook" />
          <img src="../../public/socials/instagram.svg" alt="instagram" />
          <img src="../../public/socials/twitter.svg" alt="twitter" />
          <img src="../../public/socials/youtube.svg" alt="youtube" />
        </div>
      </div>
      <div className="footer-additional-info">
        <p className="copyright">© 2022 Monito. All rights reserved.</p>
        <img src="../../public/logo.svg" alt="logo" />
        <div className="footer-privacy">
          <p>Terms of Service </p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

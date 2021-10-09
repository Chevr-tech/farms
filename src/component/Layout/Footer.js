import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-item">
          <div
            className="footer-item__title"
            style={{
              fontSize: "1.4rem",
              color: "",
            }}
          >
            Farm Name
          </div>
          <div className="footer-brand__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum magni
            saepe esse iure suscipit fuga optio quo facere vero amet?
          </div>
          <div className="footer-social__link">
            <div className="social-link__item">
              <ion-icon name="logo-facebook"></ion-icon>
            </div>
            <div className="social-link__item">
              <ion-icon name="logo-youtube"></ion-icon>
            </div>
            <div className="social-link__item">
              <ion-icon name="logo-whatsapp"></ion-icon>
            </div>
            <div className="social-link__item">
              <ion-icon name="logo-instagram"></ion-icon>
            </div>
          </div>
        </div>
        <div className="footer-item">
          <div className="footer-item__title"> Quick Links</div>
          <div className="footer-link__cover">
            <Link to="#" className="footer-links">
              Home
            </Link>
            <Link to="#" className="footer-links">
              About
            </Link>
            <Link to="#" className="footer-links">
              Service
            </Link>
            <Link to="#" className="footer-links">
              Blog
            </Link>
          </div>
        </div>

        <div className="footer-item">
          <div className="footer-item__title">Contact Info</div>
          <div className="footer-contact__cover">
            <div className="contact-label__cover">
              <div className="contact-label_image">
                <ion-icon name="mail-unread"></ion-icon>
              </div>
              <div className="contact-label__text">farms@gmail.com</div>
            </div>
            <div className="contact-label__cover">
              <div className="contact-label_image">
                <ion-icon name="home"></ion-icon>
              </div>
              <div className="contact-label__text">
                Lorem ipsum dolor sit, amet consectetur adipis
              </div>
            </div>
            <div className="contact-label__cover">
              <div className="contact-label_image">
                <ion-icon name="call"></ion-icon>
              </div>
              <div className="contact-label__text">+2348102851218</div>
            </div>
          </div>
        </div>
        <div
          className="footer-item"
          style={{
            width: "300px",
            height: "auto",
          }}
        >
          <div className="footer-item__title">Newsletter</div>
          <div className="footer-brand__text">Lorem ipsum dolor sit amet.</div>
          <form action="" className="newsletter-form">
            <div className="form-group">
              <input
                type="email"
                name=""
                id=""
                className="form-input"
                placeholder="your email"
              />
              <button type="submit" className="btn btn-submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="build">
        <div className="build-text">Chevrtech &copy; 2021</div>
      </div>
    </>
  );
};

export default Footer;

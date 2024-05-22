/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable jsx-quotes */
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-gray text-white grid font-sm">
      <div className="footer__section flex">
        <p className="address">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit, consectetur
          adipisicing elit
        </p>
        <p>
          <a className="footer-link" href="tel:123-456-7890">
            123-456-7890
          </a>
          <br />
          <a className="footer-link" href="mailto:hello@homelyhave.com">
            hello@homelyhave.com
          </a>
        </p>
      </div>
      <div className="footer__section flex">
        <p>
          <a href="#">Sobre nosotros</a>
        </p>
        <p>
          <a href="#">Términos y condiciones</a>
        </p>
        <p>
          <a href="#">Política de privacidad</a>
        </p>
        <p>
          <a href="#">FAQ</a>
        </p>
      </div>
      <div className="footer__section flex">
        <h4>Redes Sociales</h4>
        <div className="footer__social-icons flex font-lg">
          <a href="#" aria-label="Facebook">
            <i className="fa-brands fa-facebook" />
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fa-brands fa-twitter" />
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fa-brands fa-instagram" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin" />
          </a>
        </div>
      </div>
      <div className="footer__section flex">
        <h4>Suscríbete a nuestro newsletter</h4>
        <form className="footer__form">
          <input
            type="email"
            placeholder="Tu email"
            className="footer__input"
          />
          <button type="submit" className="footer__button">
            Suscribirse
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;

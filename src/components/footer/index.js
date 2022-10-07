import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="d-between-center-row footer-container">
      <Link to="/login">
        <img src="img/logo.jpg" alt="JornalYa" className="logo-footer" />
      </Link>

      <div className="copyrigth-footer">
        <p className="text-center">
          © 2022 Todos los derechos Reservados, Box Custodia de Archivos S.A.
        </p>
      </div>

      <ul className="d-center-center-column list-links-footer">
        <li className="link-footer">
          <Link to="/documents">Descargas</Link>
        </li>

        <li className="link-footer">
          <Link to="/documents">Ayuda</Link>
        </li>

        <li className="link-footer">
          <Link to="/login">Políticas</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;

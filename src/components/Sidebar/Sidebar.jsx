import "./sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFolderOpen,
  faUser,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../e-logo.png";

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <div className="logo">
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
      </div>
      <div className="sidebar-content">
        <nav>
          <a href="/" className="home-link">
            <FontAwesomeIcon icon={faHome} color="fff" />
          </a>
        </nav>
        <nav>
          <a href="/about" className="about-link">
            <FontAwesomeIcon icon={faUser} color="fff" />
          </a>
        </nav>
        <nav>
          <a href="/works" className="works-link">
            <FontAwesomeIcon icon={faFolderOpen} color="fff" />
          </a>
        </nav>
        <nav>
          <a href="/contact" className="contact-link">
            <FontAwesomeIcon icon={faEnvelope} color="fff" />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

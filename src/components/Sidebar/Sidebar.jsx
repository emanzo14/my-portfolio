import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFolderOpen,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <div className="logo">
        <a href="/">Portfolio Logo</a>
      </div>
      <div className="Sidebar-content">
        <ul>
          <li>
            <a href="/about" className="about-link">
              <FontAwesomeIcon icon={faUser} color="fff" />
            </a>
          </li>
          <li>
            <a href="/projects" className="projects-link">
              <FontAwesomeIcon icon={faFolderOpen} color="fff" />
            </a>
          </li>
          <li>
            <a href="/contacts" className="contact-link">
              <FontAwesomeIcon icon={faEnvelope} color="fff" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

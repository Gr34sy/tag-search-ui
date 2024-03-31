import "../../styles/components/navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

export function Navbar() {
  return (
    <nav className="navbar">
      <header className="navbar__header">
        <FontAwesomeIcon icon={faUserTie} className="navbar__icon" />
        User Dashboard
      </header>
    </nav>
  );
}

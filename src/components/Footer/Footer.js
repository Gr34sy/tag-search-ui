import "../../styles/components/footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  return (
    <footer className="footer">
      <a className="footer__description" href="https://github.com/Gr34sy" target="_blank" rel="noreferrer">
        &copy; Page created by Greasy17
        <FontAwesomeIcon icon={faAddressBook} className="footer__icon"/>
      </a>
    </footer>
  );
}

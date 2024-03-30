import "../styles/components/error-alert.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

export function ErrorAlert({ message }) {
  return (
    <div className="error-alert">
      <FontAwesomeIcon icon={faXmarkCircle} className="error-alert__x-icon" />

      <p className="error-alert__description">
        <span>Error:</span>
        {message || "Something went wrong"}
      </p>

      <button
        className="custom-button"
        onClick={() => window.location.reload(false)}
      >
        Reload Page
      </button>
    </div>
  );
}

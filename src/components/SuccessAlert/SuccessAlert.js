import "../../styles/components/success-alert.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export function SuccessAlert({ message }) {
  return (
    <div className="success-alert">
      <FontAwesomeIcon className="success-alert__icon" icon={faCircleInfo}/>

      <p className="success-alert__description">
        {message || "Operation Successful!"}
      </p>
    </div>
  );
}

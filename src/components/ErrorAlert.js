import "../styles/components/error-alert.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

import { useContext } from "react";
import DataStatusContext from "../utils/dataStatus-context";

export function ErrorAlert({ message }) {
  const context = useContext(DataStatusContext);

  function changeStatus(){
    if(context.status === 'loading'){
      context.change('loaded');
    }
    else{
      context.change('loading');
    }
  }

  return (
    <div className="error-alert">
      <FontAwesomeIcon icon={faXmarkCircle} className="error-alert__x-icon" />

      <p className="error-alert__description">
        <span>Error:</span>
        {message || "Something went wrong"}
      </p>

      <button
        className="custom-button"
        // onClick={() => window.location.reload(false)}
        onClick={changeStatus}
      >
        Reload Page
      </button>
    </div>
  );
}

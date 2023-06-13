import React from "react";
import "./Loader.scss";
function Loader() {
  return (
    <div className="loader">
      <div className="wrapper">
        <button>
          Loading ...
          <svg>
            <rect x="1" y="1"></rect>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Loader;
